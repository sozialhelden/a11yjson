# Describing elevators

## Example 1

An `EquipmentInfo` record for an elevator in Berlin that is in service, including real-time
operational status information:

```json
{
  "geometry": { "type": "Point", "coordinates": [13.343837, 52.536183] },
  "properties": {
    "category": "elevator",
    "isWorking": true,
    "originalId": "283",
    "originalPlaceInfoId": "900001201",
    "placeInfoId": "HKewiFCNgCCQS3ErP",
    "shortDescription": "Fußgängertunnel U-/S-Bahnsteig ⟷ U-Bahnsteig",
    "description": "Fußgängertunnel, U- und S-Bahnsteig, und U-Bahnsteig",
    "longDescription": "zwischen dem Fußgängertunnel, dem U- und S-Bahnsteig, und dem U-Bahnsteig",
  }
}
```

## Example 2

An elevator in Hamburg (with `accessibility` features) that is out of service:

```json
{
  "geometry": { "type": "Point", "coordinates": [10.067907, 53.581786] },
  "properties": {
    "category": "elevator",
    "isWorking": false,
    "shortDescription": "Straßenebene ⟷ Schalterhalle",
    "description": "zwischen Straßenebene und Schalterhalle",
    "longDescription": "zwischen der Straßenebene und der Schalterhalle",
    "placeInfoId": "4xaRom9QqMAxgxQnx",
    "accessibility": {
      "hasBrailleText": true,
      "hasSpeech": true,
      "hasDoorsInBothDirections": false
    },
  }
}
```
