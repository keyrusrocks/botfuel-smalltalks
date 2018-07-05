const { View, BotTextMessage } = require('botfuel-dialog')

/**
 * View associated to campus dialog
 */
class RestartView extends View {
  render() {
    return [
      new BotTextMessage('We restarting this conversation')
    ]
  }
}

module.exports = RestartView
