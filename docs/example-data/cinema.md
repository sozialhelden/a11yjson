# A dog-friendly, wheelchair accessible cinema that offers audio descriptions (sometimes)

```json
{
  "geometry": { "type": "Point", "coordinates": [2.376757, 48.898991] },
  "properties": {
    "category": "cinema",
    "name": "Ciné XY",
    "accessibility": {
      "accessibleWith": {
        "guideDog": true,
        "wheelchair": true,
      },
      "offersActivitiesForPeopleWith": {
        "visuallyImpairment": true,
      },
      "interactions": {
        "watch": {
          "required": true,
          "perception": {
            "languages": ["fr", "zh"],
            "subtitles": "always",
            "audioDescription": "sometimes",
            "byod": "optional",
            "educationLevel": 3,
            "visual": "optional",
          }
        }
      }
    }
  }
}
```
