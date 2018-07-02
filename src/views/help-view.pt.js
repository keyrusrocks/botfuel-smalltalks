const { PromptView, BotTextMessage, QuickrepliesMessage } = require('botfuel-dialog')

/**
 * View associated to campus dialog
 */
class HelpView extends PromptView {
  render() {
    return [
      new BotTextMessage('Meu papel é responder às suas respostas'),
      new BotTextMessage('Por exemplo, eu posso responder sobre esses assuntos'),
      new QuickrepliesMessage([
        'Sujeito 1',
        'Sujeito 2',
        'Sujeito 3',
      ], 'Por exemplo, eu posso responder sobre esses assuntos'),
    ]
  }
}

module.exports = HelpView
