const { View, BotTextMessage } = require('botfuel-dialog')

/**
 * View associated to campus dialog
 */
class ThanksView extends View {
  render() {
    return [
      new BotTextMessage('Oh, je suis flatté :)'),
    ]
  }
}

module.exports = ThanksView
