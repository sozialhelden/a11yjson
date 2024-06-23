# Accessible museums

## … with a guided tour in German Sign Language

See also ([language code `"gsg"` or `"sgn-gsg"`](https://iso639-3.sil.org/code/gsg)).

```json
{
  "properties": {
    "category": "museum",
    "accessibility": {
      "media": [
        { "type": "tour", "languages": ["sgn-gsg"] }
      ]
    }
  }
}
```

## …with tactile artworks

### Variant 1

```json
{
  "properties": {
    "category": "museum",
    "accessibility": {
      "media": [
        {
          "type": "exhibit",
          "accessMode": ["tactile"],
          "accessModeSufficient": ["tactile"],
          "name": { "en": "Collection of tactile models" }
        }
      ]
    }
  }
}
```

### Variant 2

```json
{
  "properties": {
    "category": "museum",
    "accessibility": {
      "media": [
        {
          "type": "exhibit",
          "isTactile": true,
          "name": { "en": "Collection of tactile models" }
        }
      ]
    }
  }
}
```
