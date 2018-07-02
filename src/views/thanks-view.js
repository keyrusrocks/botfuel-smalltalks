const { PromptView, BotTextMessage } = require('botfuel-dialog')

/**
 * View associated to campus dialog
 */
class ThanksView extends PromptView {
  render() {
    return [
      new BotTextMessage('De rien, n\'hésite pas à me demander autre chose :)'),
    ]
  }
}

module.exports = ThanksView
