const { BotTextMessage, View } = require('botfuel-dialog')

/**
 * View used when the bot don't understand user intent
 */
class DefaultView extends View {
  render() {
    return [
      new BotTextMessage('Désolé, je n\'ai pas encore la réponse à votre question :S'),
    ]
  }
}

module.exports = DefaultView
