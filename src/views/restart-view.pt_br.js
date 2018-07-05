const { View, BotTextMessage } = require('botfuel-dialog')

/**
 * View associated to campus dialog
 */
class RestartView extends View {
  render() {
    return [
      new BotTextMessage('Estamos reiniciando esta conversa')
    ]
  }
}

module.exports = RestartView
