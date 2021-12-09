// CheerLights client library for connecting to thingspeak.com

// namespace for cheerlights
var CheerLights = {
  // base domain of thingspeak
  domainThingSpeak: 'https://api.thingspeak.com/',
  // thingspeak channel for cheerlights
  channelThingSpeak: 1417
};

// get the latest color value
CheerLights.getColor = function(callback) {

  // contruct URL for thingspeak
  var url = CheerLights.domainThingSpeak + 'channels/' + CheerLights.channelThingSpeak + '/feeds/last.json';

  // send color request to thingspeak
  CheerLights.ajaxColorFromThingSpeak(url, callback);

}

// get channel data from thingspeak
CheerLights.ajaxColorFromThingSpeak = function(url, callback) {

  // set up new request
  const request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.send();

  // callback when the response is received
  request.onload = function() {
    // successful response
    if (request.status >= 200 && request.status < 400) {
      // get response text
      response = request.responseText;

      // parse response
      response = JSON.parse(response);

      // set color values
      const color = {
        htmlName: response.field1,
        hexValue: response.field2
      };

      // execute the callback if it is a function
      if (typeof callback === 'function') { callback(color); }
    }
  };

}
