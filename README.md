cheerlights-javascript
=====================

JavaScript client library for connecting to ThingSpeak ( https://thingspeak.com/ ) to get the latest color values for CheerLights ( https://cheerlights.com/ ).

## Usage

Add library to webpage:

* Local

```
<script src="cheerlights.js"></script>
```

* CDN for v1.0.0

```
<script src="https://cdn.jsdelivr.net/gh/cheerlights/cheerlights-javascript@1.0.0/cheerlights.js"></script>
```

Use getColor and set a callback:

```
CheerLights.getColor(callbackFunctionName);
```

## Property Values: color

* color.htmlName
* color.hexValue

## Color Values

| htmlName | hexValue |
| --- | ----------- |
| red | #FF0000 |
| green | #008000 |
| blue | #0000FF |
| cyan | #00FFFF |
| white | #FFFFFF |
| oldlace | #FDF5E6 |
| purple | #800080 |
| magenta | #FF00FF |
| yellow | #FFFF00 |
| orange | #FFA500 |
| pink | #FFC0CB |

## Examples

See the [examples folder](https://github.com/cheerlights/cheerlights-javascript/tree/master/examples) for fully-working examples using this library.
