const { View, BotTextMessage } = require('botfuel-dialog')

/**
 * View associated to campus dialog
 */
class GreetingView extends View {
  render(userMessage, { alreadyGreeted, makeNewGreet, userData }) {
    const now = new Date()
    const currentHours = now.getHours()

    let greet = 'Olá'

    if (currentHours <= 3 || currentHours >= 18) {
      greet = 'Boa noite'
    }

    let userName = ''

    if (userData && userData.prenom) {
      userName = userData.prenom.toLowerCase()
    }

    if (!alreadyGreeted) {
      return [
        new BotTextMessage(`${greet} ${userName} 😀`),
        new BotTextMessage('Eu sou um chatbot. Como posso ajudá-lo ?'),
      ]
    }

    if (alreadyGreeted && makeNewGreet) {
      return [
        new BotTextMessage(`${greet} de novo ${userName} !`),
        new BotTextMessage('Como posso ajudá-lo ?'),
      ]
    }

    return []
  }
}

module.exports = GreetingView
