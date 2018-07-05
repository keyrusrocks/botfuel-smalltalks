const { View, BotTextMessage } = require('botfuel-dialog')

/**
 * View associated to campus dialog
 */
class GoodbyeView extends View {
  render(userMessage, { alreadyGoodbyed }) {
    if (!alreadyGoodbyed) {
      return [
        new BotTextMessage('Até logo !'),
      ]
    }

    return []
  }
}

module.exports = GoodbyeView
