const { BaseDialog } = require('botfuel-dialog')

/**
 * RealOrNot dialog
 * @param  {Object}  userMessage Raw user message
 * @param  {Object}  extractedData Extracted data from user's raw message, based on Extractor
 * @return {Promise}
 * @author Simon Tannai <simon.tannai@keyrus.com>
 */
class RealOrNotSmallTalksDialog extends BaseDialog {}

module.exports = RealOrNotSmallTalksDialog
