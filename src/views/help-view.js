const { PromptView, BotTextMessage, QuickrepliesMessage } = require('botfuel-dialog')

/**
 * View associated to campus dialog
 */
class HelpView extends PromptView {
  render() {
    return [
      new BotTextMessage('Mon rôle est de répondre à tes questions'),
      new BotTextMessage('Par exemple, je peux te répondre sur ces sujets'),
      new QuickrepliesMessage([
        'Sujet 1',
        'Sujet 2',
        'Sujet 3',
      ], 'Par exemple, je peux te répondre sur ces sujets'),
    ]
  }
}

module.exports = HelpView
