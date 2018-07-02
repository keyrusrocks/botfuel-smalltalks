const { BaseDialog } = require('botfuel-dialog')

/**
 * Compliment dialog
 * @param  {Object}  userMessage Raw user message
 * @param  {Object}  extractedData Extracted data from user's raw message, based on Extractor
 * @return {Promise}
 * @author Simon Tannai <simon.tannai@keyrus.com>
 */
class ComplimentSmallTalksDialog extends BaseDialog {}

module.exports = ComplimentSmallTalksDialog
