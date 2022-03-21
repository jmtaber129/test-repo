async function onTrack(event, settings) {
  console.log(event);
  console.log(settings);
  console.log("Using API key", settings.apiKey);  
  await fetch('https://eonxyz3ivydsdlh.m.pipedream.net', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': settings.apiKey
    },
    body: JSON.stringify({
      event_name: event.event,
      event_properties: event.properties,
      timestamp: event.timestamp
    })
  })
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
