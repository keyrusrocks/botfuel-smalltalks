module.exports = async (context, next, done) => {
  const offenseLevel = await context.brain.conversationGet(context.user, 'offenseLevel')

  if (offenseLevel >= context.config.offenseLimit) {
    console.log(`offenseLevel: ${offenseLevel}`)
    console.log(`Bot muted for user ${context.userMessage.user}`)

    await done()
  } else {
    await next()
  }
}
