const { View, BotTextMessage } = require('botfuel-dialog')

/**
 * View associated to campus dialog
 */
class ThanksView extends View {
  render() {
    return [
      new BotTextMessage('Your welcome, feel free to ask me something else :)'),
    ]
  }
}

module.exports = ThanksView
