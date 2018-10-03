const { View, BotTextMessage } = require('botfuel-dialog')

/**
 * View associated to campus dialog
 */
class GreetingView extends View {
  render(userMessage, { alreadyGreeted, makeNewGreet, userData }) {
    const now = new Date()
    const currentHours = now.getHours()

    let greet = 'Bonjour'

    if (currentHours <= 3 || currentHours >= 18) {
      greet = 'Bonsoir'
    }

    let userName = ''

    if (userData && userData.prenom) {
      userName = userData.prenom.toLowerCase()
    }

    if (!alreadyGreeted) {
      return [
        new BotTextMessage(`${greet} ${userName} 😀`),
        new BotTextMessage('Je suis un chatbot. Comment puis je vous aider ?'),
      ]
    }

    if (alreadyGreeted && makeNewGreet) {
      return [
        new BotTextMessage(`Re-${greet.toLowerCase()} ${userName} !`),
        new BotTextMessage('Comment puis-je vous être utile ?'),
      ]
    }

    return []
  }
}

module.exports = GreetingView
