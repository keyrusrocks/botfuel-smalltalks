const { View, BotTextMessage } = require('botfuel-dialog')

/**
 * View associated to campus dialog
 */
class ThanksView extends View {
  render() {
    return [
      new BotTextMessage('De rien, n\'hésite pas à me demander autre chose :)'),
    ]
  }
}

module.exports = ThanksView
