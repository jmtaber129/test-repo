function onTrack(event, settings) {
  console.log(event);
  console.log(settings);
  console.log("Using API key", settings.apiKey);
}

function onRequest(request) {
  const body = request.json()
  console.log('Hello', body.name)
  Freshpaint.track({
    event: 'Request received',
    userId: body.name,
    properties: {
      foo: 'bar'
    }
  })
}
