const { BaseDialog } = require('botfuel-dialog')

/**
 * Help dialog
 * @param  {Object}  userMessage Raw user message
 * @param  {Object}  extractedData Extracted data from user's raw message, based on Extractor
 * @return {Promise}
 * @author Simon Tannai <simon.tannai@keyrus.com>
 */
class HelpDialog extends BaseDialog {}

module.exports = HelpDialog
