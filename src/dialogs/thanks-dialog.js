const { BaseDialog } = require('botfuel-dialog')

/**
 * Thanks dialog
 * @param  {Object}  userMessage Raw user message
 * @param  {Object}  extractedData Extracted data from user's raw message, based on Extractor
 * @return {Promise}
 * @author Simon Tannai <simon.tannai@keyrus.com>
 */
class ThanksSmallTalksDialog extends BaseDialog {}

module.exports = ThanksSmallTalksDialog
