const { PromptView, BotTextMessage } = require('botfuel-dialog')

/**
 * View associated to campus dialog
 */
class ThanksView extends PromptView {
  render() {
    return [
      new BotTextMessage('Oh, eu estou lisonjeado :)'),
    ]
  }
}

module.exports = ThanksView
