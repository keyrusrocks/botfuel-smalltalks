const { PromptView, BotTextMessage, QuickrepliesMessage } = require('botfuel-dialog')

/**
 * View associated to campus dialog
 */
class HelpView extends PromptView {
  render() {
    return [
      new BotTextMessage('My role is to reply to your answers'),
      new BotTextMessage('For example, I can reply on these subjects'),
      new QuickrepliesMessage([
        'Subject 1',
        'Subject 2',
        'Subject 3',
      ], 'For example, I can reply on these subjects'),
    ]
  }
}

module.exports = HelpView
