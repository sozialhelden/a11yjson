# A canteen with a braille menu, but you need a buzzer to pick up your order

!!! warning "Experimental"

    Describing detailed interactions is still experimental - there are no final production/real
    world example usages for this yet.

    The type definitions for this could still change frequently.

    We think this is a cool idea though, so keep on reading and give us feedback 🙋‍♀️

This example demonstrates the [Interactable](../../describing-objects/0-model/#interactable)
interface. You can use it to describe each step required to engage in the key purpose of a place,
and to describe optional ways of engagement.

The descriptions can contain barriers, means of interaction, and required abilities and senses.

For a blind person who can read braille (like [90% of employed blind adults in the US](https://www.perkins.org/resource/braille-relevant-2017/)),
it might be interesting to know that the menu of this canteen features braille print, but they might
ask for help to pick up an order.

## Describing the ordering process

To describe interactions, first add the `interactions` property to `properties.accessibility`:

```json
{
  "accessibility": {
    "interactions": {
      …
    },
  }
}
```

For each interaction, add a property to `interactions`:

```json
{
  "accessibility": {
    "interactions": {
      "order": { … },
      "pickUpOrder": { … },
    },
  }
}
```

In this case, we describe ordering food (`order`) and picking up your order (`pickUpOrder`). You can
find all allowed property names in the [GenericInteraction](../../describing-objects/type-aliases/#genericinteraction)
documentation, and that they vary between types – a vending machine's interaction set differs from
a place's interaction set. A11yJSON does not allow arbitrary strings here for consistency reasons –
this might enable you to gather accessibility statistics later, and results in a standardized set of
common use cases. If you use case is missing but very common, feel free to create a pull request –
or simply use `main`, which is the default interaction that happens at a location.

### Interaction = action, feedback, and perception

In our model, an interaction consists of something you need to **do** (described in the `action`
property and [ActionMode](../../describing-objects/0-model/#actionmode) type), **feedback** to what you do (described in `action.feedback` and the [PerceptionMode](../../describing-objects/0-model/#perceptionmode) type), and something you
**perceive** (described in `perception`).

### Necessities for an interaction to happen

For an interaction to happen, you need an `InteractionMode`, and specific, varying abilities.
Some of these abilities are required to engage in the key purpose of a place, some can be optional,
and some happen always, no matter if needed or not. The [Necessity](../../describing-objects/type-aliases/#necessity)
type has a list of these *necessities* we ascribe to an interaction mode or ability.

### Ordering food

To order something, guests can use English language (`en`) or American Sign Language (`ase`). The
staff responds in the same languages, and hands over a buzzer. In our example canteen, using a
`buzzer` is `required`. It has no other means of announcing that your order is ready to pick up.

```json
{
  "order": {
    "action": {
      "languages": ["en", "ase"],
      "signLanguage": "optional",
      "feedback": {
        "languages": ["en", "sgn-ase"],
        "signLanguage": "optional",
        "buzzer": "required",
      },
    },
    "perception": {
      "braille": "optional",
      "signLanguage": "optional",
    },
  }
}
```

### Pick-up announcements

What abilities do you need to pick up food in this canteen? First, visitors need to find out that
their orders are ready somehow. Our example canteen uses buzzers. Like most buzzer devices in
gastronomy, our buzzers have multi-sensory output. The pickup process provides several sensory
options (`visual`, `tactile`, `sound`) and always-happening outputs of various kinds (`beep`,
`flash`, `tactile`, `vibration`).

```json
{
  "perception": {
    "visual": "optional",
    "sound": "optional",
    "tactile": "optional",
    "beep": "always",
    "flash": "always",
    "vibration": "always",
  }
}
```

### Picking up food

An order is ready for pick-up. In a self-service canteen, the staff doesn't help you with carrying,
which might be a barrier if you have a mobility impairment. So to move your order to your table,
you need to be able to carry a specific weight:

```json
{
  "pickUpOrder": {
    "description": {
      "en": "You need carry the tray to your table yourself or ask for help.",
    },
    "action": {
      "carryWeight": "required",
      "weight": {
        "min": 0.5,
        "max": 2,
        "unit": "kg",
      },
    },
  }
}
```

Finally, we add helpful textual `description` attributes to the process steps. Here is the full
example (in TypeScript):

```typescript title="canteen.ts"
--8<-- "src/examples/canteen.ts"
```
