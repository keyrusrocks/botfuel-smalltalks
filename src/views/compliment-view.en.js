const { PromptView, BotTextMessage } = require('botfuel-dialog')

/**
 * View associated to campus dialog
 */
class ThanksView extends PromptView {
  render() {
    return [
      new BotTextMessage('Oh, I\'m flattered :)'),
    ]
  }
}

module.exports = ThanksView
