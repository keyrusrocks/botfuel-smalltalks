const { View, BotTextMessage } = require('botfuel-dialog')

/**
 * View associated to campus dialog
 */
class GreetingView extends View {
  render(userMessage, { alreadyGreeted, makeNewGreet, userData }) {
    const now = new Date()
    const currentHours = now.getHours()

    let greet = 'Hello'

    if (currentHours <= 3 || currentHours >= 18) {
      greet = 'Good evening'
    }

    let userName = ''

    if (userData && userData.prenom) {
      userName = userData.prenom.toLowerCase()
    }

    if (!alreadyGreeted) {
      return [
        new BotTextMessage(`${greet} ${userName} :)`),
        new BotTextMessage('I\'m a chatbot. How I can help you ?'),
      ]
    }

    if (alreadyGreeted && makeNewGreet) {
      return [
        new BotTextMessage(`${greet} again ${userName} !`),
        new BotTextMessage('How I can help you ?'),
      ]
    }

    return []
  }
}

module.exports = GreetingView
