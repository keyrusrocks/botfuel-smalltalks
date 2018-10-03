const { View, BotTextMessage } = require('botfuel-dialog')

/**
 * View associated to campus dialog
 */
class OffenseView extends View {
  render(userMessage, { offenseLevel }) {
    return [
      new BotTextMessage('Oh, ne soyez pas si grossier 😉'),
    ]
  }
}

module.exports = OffenseView
