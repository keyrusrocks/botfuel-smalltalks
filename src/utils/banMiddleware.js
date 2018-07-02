module.exports = async (context, next, done) => {
  const offenseLevel = await context.brain.conversationGet(context.user, 'offenseLevel') || 0
  console.log(`offenseLevel: ${offenseLevel}`)
  console.log('==============================================>', JSON.stringify(context, null, 2))
  if (offenseLevel >= context.config.offenseLimit) {
    console.log(`Bot muted for user ${context.userMessage.user}`)

    await done()
  } else {
    await next()
  }
}
