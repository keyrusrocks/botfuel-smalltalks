const { PromptView, BotTextMessage } = require('botfuel-dialog')

/**
 * View associated to campus dialog
 */
class RealOrNotView extends PromptView {
  render() {
    return [
      new BotTextMessage('Very good question ;)'),
    ]
  }
}

module.exports = RealOrNotView
