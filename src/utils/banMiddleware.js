module.exports = async (context, next, done) => {
  const offenseLevel = await context.brain.conversationGet(context.user, 'offenseLevel') || 0

  if (offenseLevel >= context.config.brain.offenseLimit) {
    console.log(`Bot muted for user ${context.userMessage.user}`)

    await done()
  } else {
    await next()
  }
}
