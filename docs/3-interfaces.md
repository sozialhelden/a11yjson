# Interfaces - things you can describe with A11yJSON

This is a list of data structures that A11yJSON specifies.

They are meant to be interfaces in the software development sense: This means you can either use
them as they are, or mix them into your own entity definitions.

  ### <a id="Accessibility">Accessibility</a>

  Describes the physical (and sometimes human rated) accessibility of a place.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>accessibleWith</td><td><a href="#PersonalProfile">PersonalProfile</a></td><td></td></tr><tr><td>ambientNoiseLevel</td><td><a href="#Volume">Volume</a></td><td><p>Ambient noise level in dB(A) relative to a reference pressure of 0.00002 Pa. Median over a
10-second period at least.</p>
</td></tr><tr><td>animalPolicy</td><td><a href="#AnimalPolicy">AnimalPolicy</a></td><td><p>Object describing the owner&#39;s policy regarding visitors bringing animals with them.</p>
</td></tr><tr><td>entrances</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#Entrance">Entrance</a>[]</td><td><p>Describes the accessibility of entrances to the place.</p>
</td></tr><tr><td>hasBrailleSignage</td><td><code>boolean</code></td><td><p><code>true</code> if there is braille navigation for/to this place, <code>false</code> if not.</p>
</td></tr><tr><td>hasInductionLoop</td><td><code>boolean</code></td><td><p><code>true</code> if the venue has induction loops installed in its functional units where this is
relevant.</p>
</td></tr><tr><td>hasTactileGuideStrips</td><td><code>boolean</code></td><td><p><code>true</code> if the venue has tactile guide strips on the floor or at the walls, <code>false</code> if not.
<code>undefined</code> or missing property indicates unknown.</p>
</td></tr><tr><td>hasTactileSignage</td><td><code>boolean</code></td><td><p><code>true</code> if there is tactile navigation for/to this place, <code>false</code> if not.</p>
</td></tr><tr><td>isQuiet</td><td><code>boolean</code></td><td><p>Determines if the venue is quiet (subjectively, by the assessor). Will be replaced by a
measurable ambient noise level in the future.</p>
</td></tr><tr><td>isWellLit</td><td><code>boolean</code></td><td><p>Determines if the venue is well lit (subjectively, by the assessor).  Will be replaced by a
measurable lumen value in the future.</p>
</td></tr><tr><td>media</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#Media">Media</a>[]</td><td><p>Information about media.
<code>null</code> indicates there is no media, <code>undefined</code> or missing property indicates unknown.</p>
</td></tr><tr><td>offersActivitiesForPeopleWith</td><td><a href="#PersonalProfile">PersonalProfile</a></td><td></td></tr><tr><td>parking</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#Parking">Parking</a></td><td><p>Information about parking facilities at/around the venue.
<code>null</code> indicates there is no parking, <code>undefined</code> or missing property indicates unknown.</p>
</td></tr><tr><td>partiallyAccessibleWith</td><td><a href="#PersonalProfile">PersonalProfile</a></td><td></td></tr><tr><td>pathways</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#Pathways">Pathways</a></td><td><p>Describes the accessibility of pathways to the place or inside the place’s boundaries.</p>
</td></tr><tr><td>payment</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#Payment">Payment</a></td><td><p>Information about payment at the place.
<code>null</code> indicates there is no payment possible/required,
<code>undefined</code> or missing property indicates unknown.</p>
</td></tr><tr><td>restrooms</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#Restroom">Restroom</a>[]</td><td><p>Describes the accessibility of restrooms in the place.</p>
</td></tr><tr><td>serviceContact</td><td><pre>{
  "id": 41,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 42,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 43,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre></td><td></td></tr><tr><td>smokingPolicy</td><td><a href="#SmokingPolicy">SmokingPolicy</a></td><td><p>Object describing the owner&#39;s smoking policy.</p>
</td></tr><tr><td>staff</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#Staff">Staff</a></td><td><p>Information about the service staff.
<code>null</code> indicates there is no staff, <code>undefined</code> or missing property indicates unknown.</p>
</td></tr><tr><td>surface</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#Surface">Surface</a></td><td><p>Object describing the place&#39;s ground condition. If there are very different ground conditions,
you can create multiple places and nest them.</p>
</td></tr><tr><td>tables</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#Tables">Tables</a></td><td><p>Information about tables.
<code>null</code> indicates there are no tables, <code>undefined</code> or missing property indicates unknown.</p>
</td></tr><tr><td>wheelchairAccessibilityGrade</td><td><a href="#WheelchairAccessibilityGrade">WheelchairAccessibilityGrade</a></td><td><p>Describes the general wheelchair accessibility of the place. This is a human-rated value.
It SHOULD conform to the traffic light system found in OpenStreetMap and Wheelmap.org:</p>
</td></tr><tr><td>wheelchairPlaces</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#WheelchairPlaces">WheelchairPlaces</a></td><td><p>Information about wheelchair places.
<code>null</code> indicates there are no places, <code>undefined</code> or missing property indicates unknown.</p>
</td></tr><tr><td>wifi</td><td><a href="#WifiAccessibility">WifiAccessibility</a></td><td><p>Describes the Wifi availability and accessibility at the place.</p>
</td></tr></table>
  

### <a id="AnimalPolicy">AnimalPolicy</a>

  

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>allowsDogs</td><td><code>boolean</code></td><td><p><code>true</code> if the place allows visitors to bring dogs in general, <code>false</code> if bringing them is
explicitly prohibited (with exception of dogs specified by <code>allowsGuideDogs</code> and
<code>allowsTherapyAnimals</code>), <code>undefined</code> if the policy is unknown.</p>
</td></tr><tr><td>allowsGuideDogs</td><td><code>boolean</code></td><td><p><code>true</code> if the place allows visitors to bring guide dogs, <code>false</code> if bringing them is
explicitly prohibited, <code>undefined</code> if the policy is unknown.</p>
</td></tr><tr><td>allowsServiceAnimals</td><td><code>boolean</code></td><td><p><code>true</code> if the place allows bringing any kind of animal, <code>false</code> or <code>undefined</code> if not or if
there are exceptions.</p>
</td></tr><tr><td>dogsNeedMuzzle</td><td><code>boolean</code></td><td><p><code>true</code> if the place denies entry to visitors bringing a dogs without muzzles, <code>false</code> if
dogs without muzzles are explicitly allowed.</p>
</td></tr><tr><td>suppliesWaterForPets</td><td><code>boolean</code></td><td><p><code>true</code> if the place supplies water for accompanying animals, <code>false</code> if explicitly not, or
<code>undefined</code> if unknown.</p>
</td></tr></table>
  

### <a id="Door">Door</a>

  Describes the door of a place's entrance or to one of its facilities (e.g. to a shower, or to
an elevator)

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>access</td><td><code>"private"</code>&nbsp;|&nbsp;<code>"public"</code>&nbsp;|&nbsp;<code>"customers"</code>&nbsp;|&nbsp;<code>"permissive"</code>&nbsp;|&nbsp;<code>"yes"</code>&nbsp;|&nbsp;<code>"no"</code>&nbsp;|&nbsp;<code>"permit"</code>&nbsp;|&nbsp;<code>"designated"</code>&nbsp;|&nbsp;<code>"delivery"</code>&nbsp;|&nbsp;<code>"emergency"</code>&nbsp;|&nbsp;<code>"residents"</code>&nbsp;|&nbsp;<code>"employees"</code>&nbsp;|&nbsp;<code>"disabled"</code>[]</td><td><p>Defines who this door is for. See <a href="https://wiki.openstreetmap.org/wiki/Key:access">https://wiki.openstreetmap.org/wiki/Key:access</a> for more
information.</p>
</td></tr><tr><td>doorOpensToOutside</td><td><code>boolean</code></td><td><p><code>true</code> if the door opens to the outside, <code>false</code> if it opens to the inside.</p>
</td></tr><tr><td>doorbellTopButtonHeight</td><td><a href="#Length">Length</a></td><td><p>Height of the door bell&#39;s top button. If there is a lowered extra door bell (often marked with
a wheelchair user symbol), use the height of this one&#39;s top button.</p>
</td></tr><tr><td>hasClearMarkingOnGlassDoor</td><td><code>boolean</code></td><td><p><code>true</code> if the door is a glass door, but is marked, <code>false</code> if the door is an unmarked glass
door, <code>undefined</code> if it is no glass door or the condition is unknown.</p>
</td></tr><tr><td>hasErgonomicDoorHandle</td><td><code>boolean</code></td><td><p><code>true</code> if the door&#39;s handle is easy to use (subjectively by the assessor), <code>false</code> if not.</p>
</td></tr><tr><td>hasIntercom</td><td><code>boolean</code></td><td><p><code>true</code> if the door has an intercom system, <code>false</code> if not.</p>
</td></tr><tr><td>hasProximitySensor</td><td><code>boolean</code></td><td><p><code>true</code> if the door has a proximity sensor that triggers the opening mechanism, <code>false</code> if not.</p>
</td></tr><tr><td>hasSwitch</td><td><code>boolean</code></td><td><p><code>true</code> if the door has a switch that triggers the opening mechanism, <code>false</code> if not.</p>
</td></tr><tr><td>isAutomatic</td><td><code>boolean</code></td><td><p><code>true</code> if the door opens automatically, <code>false</code> if not. The mechanism for opening the door is
defined in other attributes.</p>
</td></tr><tr><td>isAutomaticOrAlwaysOpen</td><td><code>boolean</code></td><td><p><code>true</code> if the door is always open or automatic, <code>false</code> if it has to be opened manually.</p>
</td></tr><tr><td>isEasyToHoldOpen</td><td><code>boolean</code></td><td><p><code>true</code> if the door is easy to hold open (subjectively by the assessor), <code>false</code> if not.</p>
</td></tr><tr><td>isGlassDoor</td><td><code>boolean</code></td><td><p><code>true</code> if the door is a glass door, <code>false</code> if not.</p>
</td></tr><tr><td>isRevolving</td><td><code>boolean</code></td><td><p><code>true</code> if the door is revolving (like a carousel), <code>false</code> if not.</p>
</td></tr><tr><td>isSliding</td><td><code>boolean</code></td><td><p><code>true</code> if the door is a sliding door, <code>false</code> if not.</p>
</td></tr><tr><td>isTurnstile</td><td><code>boolean</code></td><td><p><code>true</code> if the door is a turnstile, <code>false</code> if not.</p>
</td></tr><tr><td>needsDoorbell</td><td><code>boolean</code></td><td><p><code>true</code> if you need to ring a doorbell to pass the entrance, <code>false</code> if not.</p>
</td></tr><tr><td>needsEuroKey</td><td><code>boolean</code></td><td><p><code>true</code> if you need a <a href="https://en.wikipedia.org/wiki/Euro_key">Euro key</a> to open the door,
<code>false</code> if it&#39;s in Europe outside UK and works without a key, <code>undefined</code> if it is unknown or
needs a different key.</p>
</td></tr><tr><td>needsIntercom</td><td><code>boolean</code></td><td><p><code>true</code> if you need to use the intercom to pass this door, <code>false</code> if not.</p>
</td></tr><tr><td>needsKeyCard</td><td><code>boolean</code></td><td><p><code>true</code> if you need to use a keycard to pass the entrance, <code>false</code> if not.</p>
</td></tr><tr><td>needsKeyPad</td><td><code>boolean</code></td><td><p><code>true</code> if you need to use a key pad to pass this door, <code>false</code> if not.</p>
</td></tr><tr><td>needsRadarKey</td><td><code>boolean</code></td><td><p><code>true</code> if you need a <a href="https://en.wikipedia.org/wiki/Disability_Rights_UK#National_Key_Scheme">RADAR key</a>
to open the door, <code>false</code> if it&#39;s in the UK but you need no key
or needs a different key.</p>
</td></tr><tr><td>needsSwitchToOpen</td><td><code>boolean</code></td><td><p><code>true</code> if the door needs pressing a switch to open, <code>false</code> if not.</p>
</td></tr><tr><td>turningSpaceInFront</td><td><a href="#Length">Length</a></td><td><p>Turning space in front of the door.</p>
</td></tr><tr><td>width</td><td><a href="#Length">Length</a></td><td><p>Width of the door.</p>
</td></tr></table>
  

### <a id="Entrance">Entrance</a>

  Describes an entrance to a `PlaceInfo`.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>geometry</td><td><a href="#PointGeometry">PointGeometry</a></td><td><p>The physical location of the entrance in WGS84 coordinates. Currently only a GeoJSON
<code>PointGeometry</code> is supported.</p>
</td></tr><tr><td>properties</td><td><a href="#EntranceProperties">EntranceProperties</a></td><td></td></tr></table>
  

### <a id="EntranceProperties">EntranceProperties</a>

  Describes an entrance to a place.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>door</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#Door">Door</a></td><td><p> Object that describes the entrance’s door. <code>null</code> if there is no door.</p>
</td></tr><tr><td>elevatorEquipmentId</td><td><code>string</code></td><td><p> reference to the equipment id if this entrance is an elevator (on accessibility.cloud)</p>
</td></tr><tr><td>hasFixedRamp</td><td><code>boolean</code></td><td><p><code>true</code> if this entrance has a fixed ramp, <code>false</code> if not.</p>
</td></tr><tr><td>hasHoist</td><td><code>boolean</code></td><td><p><code>true</code> if there is a hoist / wheelchair lift, <code>false</code> if not.</p>
</td></tr><tr><td>hasRemovableRamp</td><td><code>boolean</code></td><td><p> <code>true</code> if there is a removable ramp, <code>false</code> if not. If there is a fixed ramp,
this property MUST be <code>undefined</code>.</p>
</td></tr><tr><td>hasSignage</td><td><code>boolean</code></td><td><p>If this entrance is NOT the main entrance: Is this entrance connected to the main entrance, and
is there signage that points to this entrance?</p>
</td></tr><tr><td>intercomEquipmentId</td><td><code>string</code></td><td><p>reference to the equipment id of the intercom of this entrance (on accessibility.cloud)</p>
</td></tr><tr><td>isLevel</td><td><code>boolean</code></td><td><p><code>true</code> if this entrance has no steps and needs no ramp, <code>false</code> if there are steps or a ramp.</p>
</td></tr><tr><td>isMainEntrance</td><td><code>boolean</code></td><td><p><code>true</code> if this is the main entrance, <code>false</code> if not.</p>
</td></tr><tr><td>name</td><td><pre>{
  "id": 151,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 152,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 153,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre></td><td><p>Name of the entrance (helpful if there are multiple entrances).</p>
</td></tr><tr><td>needsAppointment</td><td><code>boolean</code></td><td><p><code>true</code> if you need an appointment to enter, <code>false</code> if not.</p>
</td></tr><tr><td>placeInfoId</td><td><code>string</code></td><td><p>reference to the place that this entrance is connected to (on accessibility.cloud)</p>
</td></tr><tr><td>slopeAngle</td><td><a href="#Slope">Slope</a></td><td><p>How steep is the ground at the entrance?</p>
</td></tr><tr><td>stairs</td><td><a href="#Stairs">Stairs</a></td><td><p> Object that describes stairs that you have to take to use the entrance.</p>
</td></tr></table>
  

### <a id="EquipmentInfo">EquipmentInfo</a>

  Describes a facility equipment that is part of a place, like an elevator, an escalator, or a
sitemap. Can contain attributes that are realtime updated to indicate operational status.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>geometry</td><td><a href="#PointGeometry">PointGeometry</a></td><td><p>The physical location of the place in WGS84 coordinates. Currently only a GeoJSON
<code>PointGeometry</code> is supported.</p>
</td></tr><tr><td>properties</td><td><a href="#EquipmentProperties">EquipmentProperties</a></td><td></td></tr></table>
  

### <a id="EquipmentProperties">EquipmentProperties</a>

  

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>accessMode</td><td><code>string</code>[]</td><td><p>Access modes supported by this equipment.</p>
</td></tr><tr><td>accessModeSufficient</td><td><code>string</code>[]</td><td><p>Access mode combinations that allow understanding and using the equipment.</p>
</td></tr><tr><td>accessibilityControl</td><td><code>string</code>[]</td><td><p>The accessibility controls that allow controlling this equipment.</p>
</td></tr><tr><td>accessibilityFeature</td><td><code>string</code>[]</td><td><p>Indicates the access mode combinations that allow understanding and using the equipment.</p>
</td></tr><tr><td>accessibilityHazard</td><td><code>string</code>[]</td><td><p>Indicates the access mode combinations that allow understanding and using the equipment.</p>
</td></tr><tr><td>alternativeRouteInstructions</td><td><pre>{
  "id": 234,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 235,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 236,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre></td><td><p>Short alternative routing instructions for travelers when they cannot use this facility.</p>
</td></tr><tr><td>cabinLength</td><td><a href="#Length">Length</a></td><td><p>Length / depth of the cabin when facing the equipment’s entrance, or <code>undefined</code> if the
equipment has no cabin. For a hoist, this refers to the hoist platform itself.</p>
</td></tr><tr><td>cabinWidth</td><td><a href="#Length">Length</a></td><td><p>Width of the cabin when facing the equipment’s entrance, or <code>undefined</code> if the equipment has no
cabin. For a hoist, this refers to the hoist platform itself.</p>
</td></tr><tr><td>category</td><td><a href="#EquipmentTypes">EquipmentTypes</a></td><td><p>Type of the equipment or facility.</p>
</td></tr><tr><td>description</td><td><pre>{
  "id": 178,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 179,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 180,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre></td><td><p>Describes where the equipment is located. If only one description string is technically
possible to maintain, it MUST not contain any abbreviations to allow being readable aloud by
screen readers or voice assistants.</p>
</td></tr><tr><td>disruptionSourceImportId</td><td><code>string</code></td><td><p>Data source ID of a secondary source used for realtime status info on accessibility.cloud</p>
</td></tr><tr><td>door</td><td><a href="#Door">Door</a></td><td><p>Object describing the door to the equipment, or <code>undefined</code> if there is no door.</p>
</td></tr><tr><td>hasBrailleText</td><td><code>boolean</code></td><td><p><code>true</code> if the equipment’s controls or signs are printed in braille letters, <code>false</code> if not.</p>
</td></tr><tr><td>hasDoorsInBothDirections</td><td><code>boolean</code></td><td><p><code>true</code> if the equipment has doors in two directions, so wheelchair, rollator, bike or pushchair
users do not have to move backwards to exit.</p>
</td></tr><tr><td>hasExternalFloorSelection</td><td><code>boolean</code></td><td><p>For elevators. <code>true</code> if the elevator needs a command to be entered outside the elevator,
<code>false</code> if not.</p>
</td></tr><tr><td>hasHapticInput</td><td><code>boolean</code></td><td><p><code>true</code> if the equipment&#39;s user interface has haptic input elements, <code>false</code> if not.</p>
</td></tr><tr><td>hasHeadPhoneJack</td><td><code>boolean</code></td><td><p><code>true</code> if the equipment has a headphone jack for speech output (common for ATMs), <code>false</code> if
not.</p>
</td></tr><tr><td>hasLargePrint</td><td><code>boolean</code></td><td><p><code>true</code> if the equipment’s controls or signs do not use small fonts, <code>false</code> if they do.</p>
</td></tr><tr><td>hasMirror</td><td><code>boolean</code></td><td><p>For elevators. <code>true</code> if the elevator has a mirror, <code>false</code> if not.</p>
</td></tr><tr><td>hasQRCode</td><td><code>boolean</code></td><td><p><code>true</code> if the equipment offers users to use a QR code to use the equipment&#39;s main function,
<code>false</code> if not.</p>
</td></tr><tr><td>hasRaisedText</td><td><code>boolean</code></td><td><p><code>true</code> if the equipment’s controls or signs have raised letters, <code>false</code> if not.</p>
</td></tr><tr><td>hasSpeech</td><td><code>boolean</code></td><td><p><code>true</code> if the equipment has speech output, <code>false</code> if not.</p>
</td></tr><tr><td>hasTouchScreenInput</td><td><code>boolean</code></td><td><p><code>true</code> if the equipment has a touch screen, <code>false</code> if not.</p>
</td></tr><tr><td>heightOfControls</td><td><a href="#Length">Length</a></td><td><p>Height of the lowest working controls that are needed to operate this equipment. <code>undefined</code> if
the equipment needs no controls.</p>
</td></tr><tr><td>ids</td><td><a href="#Record">Record</a></td><td><p>IDs in other data sources that are linked to this equipment, indexed by schema/context.</p>
</td></tr><tr><td>isEasyToUnderstand</td><td><code>boolean</code></td><td><p><code>true</code> if the equipment is easy to operate, <code>false</code> if people might face difficulties trying to
understand how the equipment works, or <code>undefined</code> if this is unknown or irrelevant.</p>
</td></tr><tr><td>isHighContrast</td><td><code>boolean</code></td><td><p><code>true</code> if the equipment’s controls or signs have high contrast, <code>false</code> if not.</p>
</td></tr><tr><td>isIndoors</td><td><code>boolean</code></td><td><p><code>true</code> if the equipment is indoors, <code>false</code> if it’s fully or partially outdoors.</p>
</td></tr><tr><td>isSuitableForBicycles</td><td><code>boolean</code></td><td><p>For elevators. <code>true</code> if the elevator can carry a bicycle, <code>false</code> if not.</p>
</td></tr><tr><td>isVoiceActivated</td><td><code>boolean</code></td><td><p><code>true</code> if the equipment needs to be activated by voice, <code>false</code> if not.</p>
</td></tr><tr><td>isWorking</td><td><code>boolean</code></td><td><p>Live status update.</p>
</td></tr><tr><td>languages</td><td><a href="#IetfLanguageTagOrSignLanguageCode">IetfLanguageTagOrSignLanguageCode</a>[]</td><td><p>Languages of the equipment’s visible controls and/or voice output.</p>
</td></tr><tr><td>longDescription</td><td><pre>{
  "id": 182,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 183,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 184,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre></td><td><p>Contains the same information as description, but in a longer form which can be read out by a
screen reader or voice assistant.</p>
</td></tr><tr><td>manufacturerName</td><td><pre>{
  "id": 222,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 223,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 224,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre></td><td><p>Official name of the company that manufactured the equipment.</p>
</td></tr><tr><td>manufacturerSerialNumber</td><td><code>string</code></td><td><p>Manufacturer serial number of the equipment / facility.</p>
</td></tr><tr><td>needsHapticInput</td><td><code>boolean</code></td><td><p><code>true</code> if the equipment needs users to input something using buttons or other haptic means to
use the equipment&#39;s main function, <code>false</code> if not.</p>
</td></tr><tr><td>needsHeadPhone</td><td><code>boolean</code></td><td><p><code>true</code> if the equipment needs users to use headphones, <code>false</code> if not. If headphones are
optional, use <code>hasHeadPhoneJack</code>.</p>
</td></tr><tr><td>needsQRCodeScan</td><td><code>boolean</code></td><td><p><code>true</code> if the equipment needs users to use a QR code to use the equipment&#39;s main function,
<code>false</code> if not.</p>
</td></tr><tr><td>needsTouchScreenInput</td><td><code>boolean</code></td><td><p><code>true</code> if the equipment needs users to touch a screen for the equipment&#39;s main function. If the
touch screen is optional, use <code>hasTouchScreenInput</code>.</p>
</td></tr><tr><td>needsVisualRecognition</td><td><code>boolean</code></td><td><p><code>true</code> if the equipment&#39;s user interface forces users to recognize elements visually, <code>false</code>
if not.</p>
</td></tr><tr><td>originalData</td><td><code>string</code></td><td><p>Original source data for this equipment (for easier debugging)</p>
</td></tr><tr><td>originalId</td><td><code>string</code></td><td><p>ID of this equipment in the original data source. To simplify communication with the operator,
it’s a good idea to use the operator facility management system ID here.</p>
</td></tr><tr><td>originalPlaceInfoId</td><td><code>string</code></td><td><p>ID of the place that this equipment belongs to (unique in the original data source)</p>
</td></tr><tr><td>outOfOrderReason</td><td><pre>{
  "id": 230,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 231,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 232,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre></td><td><p>Live status update.</p>
</td></tr><tr><td>placeInfoId</td><td><code>string</code></td><td><p>Place info ID that this equipment belongs to (accessibility.cloud ID)</p>
</td></tr><tr><td>placeSourceId</td><td><code>string</code></td><td><p>ID of the place data source that this equipment belongs to (accessibility.cloud ID)</p>
</td></tr><tr><td>plannedCompletionDate</td><td><a href="#Date">Date</a></td><td><p>Live status update.</p>
</td></tr><tr><td>sameAs</td><td><code>string</code>[]</td><td><p>URLs of this equipment in external data sources, for example in GTFS, IMDF or other sources.</p>
</td></tr><tr><td>servicePhoneNumber</td><td><code>string</code></td><td><p>Phone number where a service operator can be reached for help using this facility.</p>
</td></tr><tr><td>serviceWebsiteUrl</td><td><code>string</code></td><td><p>URL pointing to a website that describes the equipnent or it&#39;s current operational status.</p>
</td></tr><tr><td>shortDescription</td><td><pre>{
  "id": 186,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 187,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 188,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre></td><td><p>Contains the same information as description, but in a shorter form, to save space on the
screen. This CAN contain Unicode characters such as ⟷ or ↘︎ as well as abbreviations (e.g.
‘pl.’ instead of ‘platform’, ‘dir.’ instead of ‘direction’).</p>
</td></tr><tr><td>sourceId</td><td><code>string</code></td><td><p>Data source ID on accessibility.cloud</p>
</td></tr><tr><td>sourceImportId</td><td><code>string</code></td><td><p>Data import ID on accessibility.cloud</p>
</td></tr><tr><td>stateExplanation</td><td><pre>{
  "id": 238,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 239,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 240,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre></td><td><p>Live status update.</p>
</td></tr><tr><td>stateLastUpdate</td><td><a href="#Date">Date</a></td><td><p>Live status update.</p>
</td></tr></table>
  

### <a id="GrabBars">GrabBars</a>

  

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>distanceBetweenBars</td><td><a href="#Length">Length</a></td><td><p>Indicates how far the bars are apart.</p>
</td></tr><tr><td>foldable</td><td><code>boolean</code></td><td><p><code>true</code> if the grab bars can be folded, <code>false</code> if not, <code>undefined</code> if condition is unknown.</p>
</td></tr><tr><td>onUsersLeftSide</td><td><code>boolean</code></td><td><p><code>true</code> if there is a folding handle on left side (from the perspective of somebody using the
toilet), <code>false</code> if not, <code>undefined</code> if condition is unknown.</p>
</td></tr><tr><td>onUsersRightSide</td><td><code>boolean</code></td><td><p><code>true</code> if there is a folding handle on right side (from the perspective of somebody using the
toilet), <code>false</code> if not, <code>undefined</code> if condition is unknown.</p>
</td></tr><tr><td>topHeightFromFloor</td><td><a href="#Length">Length</a></td><td><p>Indicates how high the grab bars are (top edge, measured from the floor).</p>
</td></tr></table>
  

### <a id="Media">Media</a>

  Describes a media unit provided at this place, for example an exhibit at a museum or a movie in
a cinema.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>accessMode</td><td><code>string</code>[]</td><td><p>Access modes supported by this equipment.</p>
</td></tr><tr><td>accessModeSufficient</td><td><code>string</code>[]</td><td><p>Access mode combinations that allow understanding and using the equipment.</p>
</td></tr><tr><td>accessibilityControl</td><td><code>string</code>[]</td><td><p>The accessibility controls that allow controlling this equipment.</p>
</td></tr><tr><td>accessibilityFeature</td><td><code>string</code>[]</td><td><p>Indicates the access mode combinations that allow understanding and using the equipment.</p>
</td></tr><tr><td>accessibilityHazard</td><td><code>string</code>[]</td><td><p>Indicates the access mode combinations that allow understanding and using the equipment.</p>
</td></tr><tr><td>hasContrastingBackground</td><td><code>boolean</code></td><td><p>If the media unit is printed or on a screen, does it have high contrast between background and
foreground?</p>
</td></tr><tr><td>hasDedicatedScreenForSubtitles</td><td><code>boolean</code></td><td><p>Relevant for movies, screens and presentations: Is there a dedicated screen where subtitles can
be read?</p>
</td></tr><tr><td>hasPlainLanguageOption</td><td><code>boolean</code></td><td><p>Is the media unit provided in a <a href="https://en.wikipedia.org/wiki/Plain_language">Plain Language</a> option?</p>
</td></tr><tr><td>hasRealTimeCaptioning</td><td><code>boolean</code></td><td><p>Does the media unit have <a href="https://www.washington.edu/doit/what-real-time-captioning">real time captioning</a>?</p>
</td></tr><tr><td>hasSubtitles</td><td><code>boolean</code></td><td><p>Is the media unit provided with subtitles?</p>
</td></tr><tr><td>isAudio</td><td><code>boolean</code></td><td><p>Is the media unit consumable as audio-only option?</p>
</td></tr><tr><td>isBraille</td><td><code>boolean</code></td><td><p>Is the media unit consumable or described for Braille readers?</p>
</td></tr><tr><td>isLargePrint</td><td><code>boolean</code></td><td><p>If the media unit is printed, is the print large?</p>
</td></tr><tr><td>languages</td><td><a href="#IetfLanguageTagOrSignLanguageCode">IetfLanguageTagOrSignLanguageCode</a>[]</td><td><p>Specifies which languages (including sign languages) in which the media unit is provided</p>
</td></tr><tr><td>name</td><td><pre>{
  "id": 294,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 295,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 296,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre></td><td><p>Name of the media unit (relevant if there are multiple units of the same kind)</p>
</td></tr><tr><td>sameAs</td><td><code>string</code>[]</td><td><p>URLs that contain the media. Use this to link data, for example with <a href="https://www.w3.org/RDF/">RDF</a>.</p>
</td></tr><tr><td>turningSpaceInFront</td><td><a href="#Length">Length</a></td><td><p>If the media is consumed while the consumer is directly in front of it, this property specifies
how much turning space there is in front of it.</p>
</td></tr><tr><td>type</td><td><code>"document"</code>&nbsp;|&nbsp;<code>"menu"</code>&nbsp;|&nbsp;<code>"guide"</code>&nbsp;|&nbsp;<code>"presentation"</code>&nbsp;|&nbsp;<code>"exhibit"</code>&nbsp;|&nbsp;<code>"movie"</code>&nbsp;|&nbsp;<code>"play"</code>&nbsp;|&nbsp;<code>"screen"</code>&nbsp;|&nbsp;<code>"website"</code></td><td><p>Type of the media unit</p>
</td></tr></table>
  

### <a id="Mirror">Mirror</a>

  

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>heightFromGround</td><td><a href="#Length">Length</a></td><td><p>How far is the mirror&#39;s bottom from the ground?</p>
</td></tr><tr><td>isAccessibleWhileSeated</td><td><code>boolean</code></td><td><p><code>true</code> if the mirror is accessible while sitting in a wheelchair, <code>false</code> if not, <code>undefined</code>
if condition is unknown.</p>
</td></tr><tr><td>isLocatedInsideRestroom</td><td><code>boolean</code></td><td><p><code>true</code> if the mirror is located inside the restroom, <code>false</code> if not, <code>undefined</code> if
condition is unknown.</p>
</td></tr></table>
  

### <a id="Parking">Parking</a>

  

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>count</td><td><code>number</code></td><td></td></tr><tr><td>forWheelchairUsers</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#WheelchairParking">WheelchairParking</a></td><td></td></tr></table>
  

### <a id="Pathways">Pathways</a>

  Describes one or multiple pathways inside a place.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>surface</td><td><a href="#Surface">Surface</a></td><td></td></tr><tr><td>width</td><td><a href="#Length">Length</a></td><td><p>Width constraints of all pathways inside a place relevant for consumers.</p>
</td></tr><tr><td>widthAtObstacles</td><td><a href="#Length">Length</a></td><td><p>Width constraints of all pathways inside a place relevant for consumers.</p>
</td></tr></table>
  

### <a id="Payment">Payment</a>

  

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>acceptsBills</td><td><code>boolean</code></td><td></td></tr><tr><td>acceptsCoins</td><td><code>boolean</code></td><td></td></tr><tr><td>acceptsCreditCards</td><td><code>boolean</code></td><td></td></tr><tr><td>acceptsDebitCards</td><td><code>boolean</code></td><td></td></tr><tr><td>acceptsPaymentByMobilePhone</td><td><code>boolean</code></td><td></td></tr><tr><td>customPaymentMetaInfo</td><td><pre>{
  "id": 358,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 359,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 360,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre>[]</td><td></td></tr><tr><td>hasPortablePaymentSystem</td><td><code>boolean</code></td><td></td></tr></table>
  

### <a id="PersonalProfile">PersonalProfile</a>

  Describes a person. This exists only to transform data from sources where no physical attributes
of places have been captured as data directly. It's better to describe physical attributes of
places and let people decide themselves which facilities they need or which place condition works
for them.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>blindness</td><td><code>boolean</code></td><td><p><code>true</code> for a person that has is blind.</p>
</td></tr><tr><td>guideDog</td><td><code>boolean</code></td><td><p><code>true</code> for a person that has a guide dog.</p>
</td></tr><tr><td>hearingImpairment</td><td><code>boolean</code></td><td><p><code>true</code> for a person that has a hearing impairment.</p>
</td></tr><tr><td>learningImpairment</td><td><code>boolean</code></td><td><p><code>true</code> for a person that has a learning impairment.</p>
</td></tr><tr><td>mobilityImpairment</td><td><code>boolean</code></td><td><p><code>true</code> for a person that has a mobility impairment.</p>
</td></tr><tr><td>muteness</td><td><code>boolean</code></td><td><p><code>true</code> for a person that is inable to speak.</p>
</td></tr><tr><td>visualImpairment</td><td><code>boolean</code></td><td><p><code>true</code> for a person that has a visual impairment.</p>
</td></tr><tr><td>wheelchair</td><td><code>boolean</code></td><td><p><code>true</code> for a person that uses a wheelchair.</p>
</td></tr></table>
  

### <a id="PlaceInfo">PlaceInfo</a>

  The PlaceInfo interface describes a physical location with added accessibility properties.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>formatVersion</td><td><code>string</code></td><td><p>The format version this place info document was created with
(Uses the npm module version from <code>package.json</code>)
Not used right now, but added for future compatibility.</p>
</td></tr><tr><td>geometry</td><td><a href="#PointGeometry">PointGeometry</a></td><td><p>The physical location of the place in WGS84 coordinates. Currently only a GeoJSON
<code>PointGeometry</code> is supported.</p>
</td></tr><tr><td>properties</td><td><a href="#PlaceProperties">PlaceProperties</a></td><td><p>Holds additional place properties such as name and category and accessibility information</p>
</td></tr></table>
  

### <a id="PlaceProperties">PlaceProperties</a>

  

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>access</td><td><code>"private"</code>&nbsp;|&nbsp;<code>"public"</code>&nbsp;|&nbsp;<code>"customers"</code>&nbsp;|&nbsp;<code>"permissive"</code>&nbsp;|&nbsp;<code>"yes"</code>&nbsp;|&nbsp;<code>"no"</code>&nbsp;|&nbsp;<code>"permit"</code>&nbsp;|&nbsp;<code>"designated"</code>&nbsp;|&nbsp;<code>"delivery"</code>&nbsp;|&nbsp;<code>"emergency"</code>&nbsp;|&nbsp;<code>"residents"</code>&nbsp;|&nbsp;<code>"employees"</code>&nbsp;|&nbsp;<code>"disabled"</code>[]</td><td><p>Defines who this restroom is for. See <a href="https://wiki.openstreetmap.org/wiki/Key:access">https://wiki.openstreetmap.org/wiki/Key:access</a> for more
information.</p>
</td></tr><tr><td>accessibility</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#Accessibility">Accessibility</a></td><td><p>The accessibility of this place. <code>null</code> indicates that this place has no data, <code>undefined</code> or
missing property indicates unknown.</p>
</td></tr><tr><td>address</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#StructuredAddress">StructuredAddress</a></td><td><p>The address of this place. <code>null</code> indicates that this place has no address, <code>undefined</code> or
missing property indicates unknown.</p>
</td></tr><tr><td>category</td><td><code>string</code></td><td><p>Category name of the place</p>
</td></tr><tr><td>description</td><td><pre>{
  "id": 387,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 388,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 389,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre></td><td><p>Text description containing helpful information for people with disabilities.</p>
</td></tr><tr><td>editPageUrl</td><td><code>string</code></td><td><p>URL of the original data source’s website on a subpage that allows to edit the original data.</p>
</td></tr><tr><td>emailAddress</td><td><code>string</code></td><td><p>Email address of the place&#39;s operator where you can get accessibility relevant information.</p>
</td></tr><tr><td>ids</td><td><a href="#Record">Record</a></td><td><p>IDs in other data sources that are linked to this equipment, indexed by schema/context.</p>
</td></tr><tr><td>infoPageUrl</td><td><code>string</code></td><td><p>URL of the original data source’s website describing this place.</p>
</td></tr><tr><td>name</td><td><pre>{
  "id": 382,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 383,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 384,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre></td><td><p>The official name of this place.</p>
</td></tr><tr><td>originalData</td><td><code>any</code></td><td><p>Original source data for this equipment (for easier debugging)</p>
</td></tr><tr><td>originalId</td><td><code>string</code></td><td><p>ID of this place of interest in the original data source. To simplify communication with the
data provider, it’s a good idea to use the provider&#39;s internal ID here.</p>
</td></tr><tr><td>originalParentPlaceInfoId</td><td><code>string</code></td><td><p>The parent&#39;s place ID in the original dataset from the data provider.</p>
</td></tr><tr><td>parentPlaceInfoId</td><td><code>string</code></td><td><p>ID of the parent place that this place belongs to.</p>
</td></tr><tr><td>parentPlaceSourceId</td><td><code>string</code></td><td><p>Source ID of the parent place that this place belongs to. This is usually the same ID as
<code>sourceId</code>, but the parent place can be from another data provider.</p>
</td></tr><tr><td>phoneNumber</td><td><code>string</code></td><td><p>Phone number to call a representant of the place&#39;s operator.</p>
</td></tr><tr><td>placeWebsiteUrl</td><td><code>string</code></td><td><p>URL of the place’s own website.</p>
</td></tr><tr><td>sameAs</td><td><code>string</code>[]</td><td><p>URLs of this equipment in external data sources, for example in GTFS, IMDF or other sources.</p>
</td></tr><tr><td>sourceId</td><td><code>string</code></td><td><p>ID of the data source that provided the place (accessibility.cloud ID)</p>
</td></tr><tr><td>sourceImportId</td><td><code>string</code></td><td><p>ID of the import that created this place (accessibility.cloud ID)</p>
</td></tr></table>
  

### <a id="PointGeometry">PointGeometry</a>

  [GeoJSON](https://tools.ietf.org/html/rfc7946) `Point` object.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>coordinates</td><td><code>number</code>,&nbsp;<code>number</code></td><td></td></tr><tr><td>type</td><td><code>"Point"</code></td><td></td></tr></table>
  

### <a id="Quantity">Quantity</a>

  Describes a quantity of a unit type.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>accuracy</td><td><code>number</code></td><td><p>± in given units, uniform error</p>
</td></tr><tr><td>operator</td><td><a href="#Operator">Operator</a></td><td><p>the operator, indicating the value is not an absolute value</p>
</td></tr><tr><td>rawValue</td><td><code>string</code></td><td><p>raw, imported value, eg. &#39;90 .. 120cm&#39; - only required when importing</p>
</td></tr><tr><td>unit</td><td><code>string</code></td><td><p>one of the length units in js-quantities</p>
</td></tr><tr><td>value</td><td><code>number</code></td><td><p>the value in the specified unit</p>
</td></tr></table>
  

### <a id="QueueSystem">QueueSystem</a>

  

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>canSkipQueueWithDisability</td><td><code>boolean</code></td><td><p><code>true</code> if you can skip the queue with a disability, <code>false</code> if not.</p>
</td></tr><tr><td>needsTickets</td><td><code>boolean</code></td><td><p><code>true</code> if the queueing uses tickets (usually numbered), <code>false</code> if not.</p>
</td></tr><tr><td>numberOfQueueServerPoints</td><td><code>number</code></td><td><p>Number of queue server points.</p>
</td></tr><tr><td>numberOfSeats</td><td><code>number</code></td><td><p>Number of seats that can be used by people while waiting in the queue.</p>
</td></tr><tr><td>ticketEquipment</td><td><a href="#EquipmentInfo">EquipmentInfo</a></td><td><p>The ticket printer, if existing.</p>
</td></tr><tr><td>ticketEquipmentId</td><td><code>string</code></td><td><p>The ticket printer&#39;s ID on accessibility.cloud, if existing.</p>
</td></tr><tr><td>usesCattleBars</td><td><code>boolean</code></td><td><p><code>true</code> if the queueing uses rails / cattle bars, <code>false</code> if not.</p>
</td></tr></table>
  

### <a id="Restroom">Restroom</a>

  

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>access</td><td><code>"private"</code>&nbsp;|&nbsp;<code>"public"</code>&nbsp;|&nbsp;<code>"customers"</code>&nbsp;|&nbsp;<code>"permissive"</code>&nbsp;|&nbsp;<code>"yes"</code>&nbsp;|&nbsp;<code>"no"</code>&nbsp;|&nbsp;<code>"permit"</code>&nbsp;|&nbsp;<code>"designated"</code>&nbsp;|&nbsp;<code>"delivery"</code>&nbsp;|&nbsp;<code>"emergency"</code>&nbsp;|&nbsp;<code>"residents"</code>&nbsp;|&nbsp;<code>"employees"</code>&nbsp;|&nbsp;<code>"disabled"</code>[]</td><td><p>Defines who this restroom is for. See <a href="https://wiki.openstreetmap.org/wiki/Key:access">https://wiki.openstreetmap.org/wiki/Key:access</a> for more information.</p>
</td></tr><tr><td>entrance</td><td><a href="#Entrance">Entrance</a></td><td><p>Object describing the entrance to this restroom.</p>
</td></tr><tr><td>hasBathTub</td><td><code>boolean</code></td><td><p><code>true</code> if there is a bath tub in this room, <code>false</code> if not, <code>undefined</code> if condition is
unknown.</p>
</td></tr><tr><td>hasCeilingHoist</td><td><code>boolean</code></td><td><p><code>true</code> if the restroom has a ceiling hoist, <code>false</code> if not.</p>
</td></tr><tr><td>hasChangingTableForAdults</td><td><code>boolean</code></td><td><p><code>true</code> if the restroom has a changing table for adults, <code>false</code> if not.</p>
</td></tr><tr><td>hasChangingTableForBabies</td><td><code>boolean</code></td><td><p><code>true</code> if the restroom has a changing table for babies, <code>false</code> if not.</p>
</td></tr><tr><td>hasEmergencyPullstring</td><td><code>boolean</code></td><td><p><code>true</code> if the restroom has an emergency pull string, <code>false</code> if not.</p>
</td></tr><tr><td>hasMirror</td><td><code>boolean</code></td><td><p><code>true</code> if the restroom has a mirror, <code>false</code> if not, <code>undefined</code> if condition is unknown.</p>
</td></tr><tr><td>hasShower</td><td><code>boolean</code></td><td><p><code>true</code> if the restroom has a shower, <code>false</code> if not, <code>undefined</code> if condition is unknown.</p>
</td></tr><tr><td>hasSupportRails</td><td><code>boolean</code></td><td><p><code>true</code> if there support rails on the walls</p>
</td></tr><tr><td>heightOfDrier</td><td><a href="#Length">Length</a></td><td><p>At which height from the floor is the drier or towel?</p>
</td></tr><tr><td>heightOfSoap</td><td><a href="#Length">Length</a></td><td><p>At which height from the floor is the soap?</p>
</td></tr><tr><td>isAccessibleWithWheelchair</td><td><code>boolean</code></td><td><p><code>true</code> if the room&#39;s relevant facilities are completely accessible while using a wheelchair,
<code>false</code> if not, <code>undefined</code> if the condition is unknown or difficult to assess.</p>
</td></tr><tr><td>mirror</td><td><a href="#Mirror">Mirror</a></td><td><p>Describes a mirror, if existing.</p>
</td></tr><tr><td>sameAs</td><td><code>string</code>[]</td><td></td></tr><tr><td>shower</td><td><a href="#Shower">Shower</a></td><td><p>Object describing a shower inside this restroom, if existing.</p>
</td></tr><tr><td>signIcons</td><td><code>"allGender"</code>&nbsp;|&nbsp;<code>"female"</code>&nbsp;|&nbsp;<code>"male"</code>&nbsp;|&nbsp;<code>"personInWheelchair"</code>&nbsp;|&nbsp;<code>"changingTable"</code>&nbsp;|&nbsp;<code>"baby"</code>&nbsp;|&nbsp;<code>"family"</code>&nbsp;|&nbsp;<code>"urinal"</code>&nbsp;|&nbsp;<code>"washBasin"</code>&nbsp;|&nbsp;<code>"toiletBowl"</code>[]</td><td><p>Visible icons on the restroom’s sign</p>
</td></tr><tr><td>toilet</td><td><a href="#Toilet">Toilet</a></td><td><p>Object describing a toilet inside the restroom, if existing.</p>
</td></tr><tr><td>turningSpaceInside</td><td><a href="#Length">Length</a></td><td><p>How wide is the space inside that is usable for turning?</p>
</td></tr><tr><td>usageFee</td><td><pre>{
  "id": 431,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "children": [
    {
      "id": 432,
      "name": "amount",
      "kind": 1024,
      "kindString": "Property",
      "flags": {},
      "sources": [
        {
          "fileName": "Restroom.ts",
          "line": 111,
          "character": 15
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "number"
      }
    },
    {
      "id": 433,
      "name": "currency",
      "kind": 1024,
      "kindString": "Property",
      "flags": {},
      "sources": [
        {
          "fileName": "Restroom.ts",
          "line": 111,
          "character": 31
        }
      ],
      "type": {
        "type": "intrinsic",
        "name": "string"
      }
    }
  ],
  "groups": [
    {
      "title": "Properties",
      "kind": 1024,
      "children": [
        432,
        433
      ]
    }
  ]
}</pre></td><td></td></tr><tr><td>washBasin</td><td><a href="#WashBasin">WashBasin</a></td><td><p>Object describing a wash basin belonging to this restroom. It can be outside of the restroom.</p>
</td></tr></table>
  

### <a id="Room">Room</a>

  

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>isAccessibleWithWheelchair</td><td><code>boolean</code></td><td><p><code>true</code> if the room&#39;s relevant facilities are completely accessible while using a wheelchair,
<code>false</code> if not, <code>undefined</code> if the condition is unknown or difficult to assess.</p>
</td></tr><tr><td>sameAs</td><td><code>string</code>[]</td><td></td></tr></table>
  

### <a id="Shower">Shower</a>

  

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>door</td><td><a href="#Door">Door</a></td><td></td></tr><tr><td>hasErgonomicHandle</td><td><code>boolean</code></td><td><p><code>true</code> if the shower has an ergonomic handle, <code>false</code> if not, <code>undefined</code> if condition is
unknown.</p>
</td></tr><tr><td>hasShowerSeat</td><td><code>boolean</code></td><td><p><code>true</code> if the shower has a seat, <code>false</code> if not, <code>undefined</code> if condition is unknown..</p>
</td></tr><tr><td>hasSupportRails</td><td><code>boolean</code></td><td><p><code>true</code> if the shower has support rails, <code>false</code> if not, <code>undefined</code> if condition is unknown.</p>
</td></tr><tr><td>showerSeatIsFolding</td><td><code>boolean</code></td><td><p><code>true</code> if the shower seat can be folded, <code>false</code> if not, <code>undefined</code> if condition is unknown.</p>
</td></tr><tr><td>showerSeatIsRemovable</td><td><code>boolean</code></td><td><p><code>true</code> if the shower seat can be removed from the shower easily, <code>false</code> if not, <code>undefined</code>
if condition is unknown.</p>
</td></tr><tr><td>stairs</td><td><a href="#Stairs">Stairs</a></td><td></td></tr><tr><td>supportRailsHeight</td><td><a href="#Length">Length</a></td><td><p>At which height are the support rails? Measured from the top.</p>
</td></tr></table>
  

### <a id="Staff">Staff</a>

  Describes the presence of staff and their qualifications and/or provided services.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>canSeeVisitorsFromInside</td><td><code>boolean</code></td><td><p><code>true</code> if the staff has means to see visitors from the inside at all times when the place is
open (for example a window or CCTV system), <code>false</code> if not.</p>
</td></tr><tr><td>hasFreeAssistantForVisitors</td><td><code>boolean</code></td><td><p><code>true</code> if there is an assistant for the duration of the visit that is free of charge, <code>false</code>
if not.</p>
</td></tr><tr><td>spokenLanguages</td><td><a href="#IetfLanguageTagOrSignLanguageCode">IetfLanguageTagOrSignLanguageCode</a>[]</td><td><p>Languages that the staff speaks, including sign language variants.</p>
</td></tr></table>
  

### <a id="Stairs">Stairs</a>

  The `Stairs` interface describes one or more walkable stairs.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>alternativeMobileEquipmentIds</td><td><code>string</code>[]</td><td><p>You SHOULD reference alternative equipment IDs with this field, for example elevators,
escalators, or hoists.</p>
</td></tr><tr><td>count</td><td><code>number</code></td><td><p>Number of steps.</p>
</td></tr><tr><td>hasAntiSlipNosing</td><td><code>boolean</code></td><td><p><code>true</code> if all relevant steps are made with anti-slip material.</p>
</td></tr><tr><td>hasBrailleSignage</td><td><code>boolean</code></td><td><p><code>true</code> if there is braille navigation in this staircase, <code>false</code> if not.</p>
</td></tr><tr><td>hasHandRail</td><td><code>boolean</code></td><td><p><code>true</code> if there is a handrail covering all relevant steps, <code>false</code> if not.</p>
</td></tr><tr><td>hasHighContrastNosing</td><td><code>boolean</code></td><td><p><code>true</code> if all relevant steps have a high contrast nosing.</p>
</td></tr><tr><td>hasMetalGrating</td><td><code>boolean</code></td><td><p>Do the stairs have metal grating? This is difficult to navigate for people with assistance
dogs.</p>
</td></tr><tr><td>hasTactileSafetyStrips</td><td><code>boolean</code></td><td><p><code>true</code> if all relevant steps have tactile safety surfaces, used as warnings, implying textures
detectable with the touch of a foot or sweep of a cane.</p>
</td></tr><tr><td>hasTactileSignage</td><td><code>boolean</code></td><td><p><code>true</code> if there is tactile navigation in this staircase, <code>false</code> if not.</p>
</td></tr><tr><td>isWellLit</td><td><code>boolean</code></td><td><p>Are the stairs and podests well lit?</p>
</td></tr><tr><td>name</td><td><pre>{
  "id": 488,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 489,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 490,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre></td><td><p>If there are multiple staircase, you SHOULD indicate a name for this staircase here.</p>
</td></tr><tr><td>stepHeight</td><td><a href="#Length">Length</a></td><td><p>Indicates how high the steps if these stairs are (can be a range).</p>
</td></tr></table>
  

### <a id="StructuredAddress">StructuredAddress</a>

  The address of a places as Address as a series of structured attributes.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>areas</td><td><pre>{
  "id": 82,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 83,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 84,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre>[]</td><td><p>An array of named areas below the district and above street.
In some regions such areas might also contain street names,
when individual street segments have names separate from the name of the whole road.</p>
</td></tr><tr><td>building</td><td><pre>{
  "id": 66,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 67,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 68,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre></td><td><p>Building name</p>
</td></tr><tr><td>city</td><td><pre>{
  "id": 90,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 91,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 92,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre></td><td><p>The name of the primary locality of the place.</p>
</td></tr><tr><td>countryCode</td><td><code>string</code></td><td><p>A three-letter country code in ISO 3166-1 alpha-3, see <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3">https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3</a></p>
</td></tr><tr><td>county</td><td><pre>{
  "id": 98,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 99,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 100,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre></td><td><p>A division of a state; typically a secondary-level administrative division of a country or
equivalent.</p>
</td></tr><tr><td>district</td><td><pre>{
  "id": 86,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 87,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 88,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre></td><td><p>A division of city; typically an administrative unit within a larger
city or a customary name of a city&#39;s neighborhood.</p>
</td></tr><tr><td>house</td><td><pre>{
  "id": 70,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 71,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 72,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre></td><td><p>House or street number.</p>
</td></tr><tr><td>levelIndex</td><td><code>number</code></td><td><p>Relative in relation to other levels. <code>0</code> for ground level must have index 0, <code>1</code> for first
level, etc. You can use half numbers for levels like &quot;1.5&quot;.</p>
</td></tr><tr><td>levelName</td><td><pre>{
  "id": 61,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 62,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 63,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre></td><td><p>Name of the level. Example: &quot;Floor 1&quot;, &quot;Ground level&quot;.</p>
</td></tr><tr><td>postalCode</td><td><pre>{
  "id": 78,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 79,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 80,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre></td><td><p>An alphanumeric string included in a postal address to
facilitate mail sorting (a.k.a. post code, postcode, or ZIP code).</p>
</td></tr><tr><td>regions</td><td><pre>{
  "id": 94,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 95,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 96,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre>[]</td><td><p>For address conventions where more than to levels of named areas above the city level are in
use, the regions attribute provides an array with all additional area names, ordered by
decreasing size (starting with the highest subdivision below state)</p>
</td></tr><tr><td>room</td><td><pre>{
  "id": 53,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 54,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 55,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre></td><td><p>Room name. Example: &quot;Meeting room &#39;Rome&#39;&quot;.</p>
</td></tr><tr><td>roomNumber</td><td><pre>{
  "id": 57,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 58,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 59,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre></td><td><p>Room number. Example: &quot;B-101&quot;.</p>
</td></tr><tr><td>state</td><td><pre>{
  "id": 102,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 103,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 104,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre></td><td><p>A division of a country; typically a first-level administrative division of a country and/or a
geographical region.</p>
</td></tr><tr><td>stateCode</td><td><code>string</code></td><td><p>A code/abbreviation for the state division of a country.</p>
</td></tr><tr><td>street</td><td><pre>{
  "id": 74,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 75,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 76,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre></td><td><p>Street name (in practice may also contain street number).</p>
</td></tr><tr><td>text</td><td><pre>{
  "id": 49,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 50,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 51,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre></td><td><p>A displayable, formatted address as rich text.</p>
</td></tr></table>
  

### <a id="Surface">Surface</a>

  

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>lateralSlope</td><td><a href="#Slope">Slope</a></td><td></td></tr><tr><td>longitudinalSlope</td><td><a href="#Slope">Slope</a></td><td></td></tr><tr><td>smoothness</td><td><code>"excellent"</code>&nbsp;|&nbsp;<code>"good"</code>&nbsp;|&nbsp;<code>"intermediate"</code>&nbsp;|&nbsp;<code>"bad"</code>&nbsp;|&nbsp;<code>"horrible"</code>&nbsp;|&nbsp;<code>"impassable"</code>&nbsp;|&nbsp;<code>"very_bad"</code>&nbsp;|&nbsp;<code>"very_horrible"</code>&nbsp;|&nbsp;<code>"very_good"</code></td><td><p>According to <a href="https://wiki.openstreetmap.org/wiki/Key:smoothness">https://wiki.openstreetmap.org/wiki/Key:smoothness</a></p>
</td></tr><tr><td>turningSpace</td><td><a href="#Length">Length</a></td><td><p>Turning space that this ground provides to people.</p>
</td></tr><tr><td>types</td><td><code>"undefined"</code>&nbsp;|&nbsp;<code>"none"</code>&nbsp;|&nbsp;<code>"acrylic"</code>&nbsp;|&nbsp;<code>"aluminium"</code>&nbsp;|&nbsp;<code>"anti-slip"</code>&nbsp;|&nbsp;<code>"artificial"</code>&nbsp;|&nbsp;<code>"artificial_grass"</code>&nbsp;|&nbsp;<code>"artificial_turf"</code>&nbsp;|&nbsp;<code>"asfalto"</code>&nbsp;|&nbsp;<code>"ash"</code>&nbsp;|&nbsp;<code>"asphalt"</code>&nbsp;|&nbsp;<code>"astroturf"</code>&nbsp;|&nbsp;<code>"bamboo"</code>&nbsp;|&nbsp;<code>"bare_rock"</code>&nbsp;|&nbsp;<code>"bark"</code>&nbsp;|&nbsp;<code>"barkchips"</code>&nbsp;|&nbsp;<code>"bedrock"</code>&nbsp;|&nbsp;<code>"bitumen"</code>&nbsp;|&nbsp;<code>"bituminous"</code>&nbsp;|&nbsp;<code>"block"</code>&nbsp;|&nbsp;<code>"boardwalk"</code>&nbsp;|&nbsp;<code>"boulders"</code>&nbsp;|&nbsp;<code>"brick"</code>&nbsp;|&nbsp;<code>"brick_weave"</code>&nbsp;|&nbsp;<code>"bricks"</code>&nbsp;|&nbsp;<code>"bushes"</code>&nbsp;|&nbsp;<code>"carpet"</code>&nbsp;|&nbsp;<code>"cement"</code>&nbsp;|&nbsp;<code>"chalk"</code>&nbsp;|&nbsp;<code>"chipseal"</code>&nbsp;|&nbsp;<code>"cinder"</code>&nbsp;|&nbsp;<code>"clay"</code>&nbsp;|&nbsp;<code>"cobblestone"</code>&nbsp;|&nbsp;<code>"compacted"</code>&nbsp;|&nbsp;<code>"compacted_gravel"</code>&nbsp;|&nbsp;<code>"composite"</code>&nbsp;|&nbsp;<code>"con"</code>&nbsp;|&nbsp;<code>"concrete"</code>&nbsp;|&nbsp;<code>"concrete_slab"</code>&nbsp;|&nbsp;<code>"concrete_slabs"</code>&nbsp;|&nbsp;<code>"construction"</code>&nbsp;|&nbsp;<code>"coral"</code>&nbsp;|&nbsp;<code>"coral_sand"</code>&nbsp;|&nbsp;<code>"crushed_limestone"</code>&nbsp;|&nbsp;<code>"crushed_shells"</code>&nbsp;|&nbsp;<code>"debris"</code>&nbsp;|&nbsp;<code>"decoturf"</code>&nbsp;|&nbsp;<code>"dirt"</code>&nbsp;|&nbsp;<code>"earth"</code>&nbsp;|&nbsp;<code>"enrobé"</code>&nbsp;|&nbsp;<code>"fine_gravel"</code>&nbsp;|&nbsp;<code>"fine_sand"</code>&nbsp;|&nbsp;<code>"flagstone"</code>&nbsp;|&nbsp;<code>"footway"</code>&nbsp;|&nbsp;<code>"glass"</code>&nbsp;|&nbsp;<code>"goudron"</code>&nbsp;|&nbsp;<code>"granite"</code>&nbsp;|&nbsp;<code>"grass"</code>&nbsp;|&nbsp;<code>"grass_paver"</code>&nbsp;|&nbsp;<code>"grass_scrub"</code>&nbsp;|&nbsp;<code>"grassland"</code>&nbsp;|&nbsp;<code>"grating"</code>&nbsp;|&nbsp;<code>"gravel"</code>&nbsp;|&nbsp;<code>"green"</code>&nbsp;|&nbsp;<code>"grit"</code>&nbsp;|&nbsp;<code>"ground"</code>&nbsp;|&nbsp;<code>"hardcore"</code>&nbsp;|&nbsp;<code>"ice"</code>&nbsp;|&nbsp;<code>"ice_road"</code>&nbsp;|&nbsp;<code>"interlock"</code>&nbsp;|&nbsp;<code>"iron"</code>&nbsp;|&nbsp;<code>"laterite"</code>&nbsp;|&nbsp;<code>"lawn"</code>&nbsp;|&nbsp;<code>"leaves"</code>&nbsp;|&nbsp;<code>"limerock"</code>&nbsp;|&nbsp;<code>"limestone"</code>&nbsp;|&nbsp;<code>"linoleum"</code>&nbsp;|&nbsp;<code>"loose_gravel"</code>&nbsp;|&nbsp;<code>"marble"</code>&nbsp;|&nbsp;<code>"marble_plate"</code>&nbsp;|&nbsp;<code>"meadow"</code>&nbsp;|&nbsp;<code>"metal"</code>&nbsp;|&nbsp;<code>"metal_grid"</code>&nbsp;|&nbsp;<code>"mixed"</code>&nbsp;|&nbsp;<code>"moss"</code>&nbsp;|&nbsp;<code>"mud"</code>&nbsp;|&nbsp;<code>"mulch"</code>&nbsp;|&nbsp;<code>"native"</code>&nbsp;|&nbsp;<code>"natural"</code>&nbsp;|&nbsp;<code>"oil"</code>&nbsp;|&nbsp;<code>"overgrown"</code>&nbsp;|&nbsp;<code>"path"</code>&nbsp;|&nbsp;<code>"paved"</code>&nbsp;|&nbsp;<code>"pavement"</code>&nbsp;|&nbsp;<code>"paving"</code>&nbsp;|&nbsp;<code>"paving_stone"</code>&nbsp;|&nbsp;<code>"paving_stones"</code>&nbsp;|&nbsp;<code>"peat"</code>&nbsp;|&nbsp;<code>"pebbles"</code>&nbsp;|&nbsp;<code>"pebblestone"</code>&nbsp;|&nbsp;<code>"plank"</code>&nbsp;|&nbsp;<code>"plastic"</code>&nbsp;|&nbsp;<code>"plates"</code>&nbsp;|&nbsp;<code>"rasin"</code>&nbsp;|&nbsp;<code>"residential"</code>&nbsp;|&nbsp;<code>"rock"</code>&nbsp;|&nbsp;<code>"rocks"</code>&nbsp;|&nbsp;<code>"rocky"</code>&nbsp;|&nbsp;<code>"roman_paving"</code>&nbsp;|&nbsp;<code>"rubber"</code>&nbsp;|&nbsp;<code>"rubbercrumb"</code>&nbsp;|&nbsp;<code>"rubble"</code>&nbsp;|&nbsp;<code>"salt"</code>&nbsp;|&nbsp;<code>"sand"</code>&nbsp;|&nbsp;<code>"sandstone"</code>&nbsp;|&nbsp;<code>"sawdust"</code>&nbsp;|&nbsp;<code>"scree"</code>&nbsp;|&nbsp;<code>"scrub"</code>&nbsp;|&nbsp;<code>"sealed"</code>&nbsp;|&nbsp;<code>"sett"</code>&nbsp;|&nbsp;<code>"shell"</code>&nbsp;|&nbsp;<code>"shells"</code>&nbsp;|&nbsp;<code>"shingle"</code>&nbsp;|&nbsp;<code>"slabs"</code>&nbsp;|&nbsp;<code>"snow"</code>&nbsp;|&nbsp;<code>"soil"</code>&nbsp;|&nbsp;<code>"spur"</code>&nbsp;|&nbsp;<code>"steel"</code>&nbsp;|&nbsp;<code>"stepping_stones"</code>&nbsp;|&nbsp;<code>"stone"</code>&nbsp;|&nbsp;<code>"stones"</code>&nbsp;|&nbsp;<code>"synthetic"</code>&nbsp;|&nbsp;<code>"tactile_paving"</code>&nbsp;|&nbsp;<code>"tar"</code>&nbsp;|&nbsp;<code>"tared"</code>&nbsp;|&nbsp;<code>"tarmac"</code>&nbsp;|&nbsp;<code>"tartan"</code>&nbsp;|&nbsp;<code>"terra"</code>&nbsp;|&nbsp;<code>"terre"</code>&nbsp;|&nbsp;<code>"tile"</code>&nbsp;|&nbsp;<code>"tiles"</code>&nbsp;|&nbsp;<code>"timber"</code>&nbsp;|&nbsp;<code>"track"</code>&nbsp;|&nbsp;<code>"trail"</code>&nbsp;|&nbsp;<code>"trees"</code>&nbsp;|&nbsp;<code>"tuff"</code>&nbsp;|&nbsp;<code>"turf"</code>&nbsp;|&nbsp;<code>"unhewn_cobblestone"</code>&nbsp;|&nbsp;<code>"unpaved"</code>&nbsp;|&nbsp;<code>"unpaved2"</code>&nbsp;|&nbsp;<code>"unpaved33"</code>&nbsp;|&nbsp;<code>"unpaved_minor"</code>&nbsp;|&nbsp;<code>"unsealed"</code>&nbsp;|&nbsp;<code>"water"</code>&nbsp;|&nbsp;<code>"wood"</code>&nbsp;|&nbsp;<code>"wood_chips"</code>&nbsp;|&nbsp;<code>"woodchips"</code>&nbsp;|&nbsp;<code>"zebra"</code>[]</td><td><p>According to <a href="https://wiki.openstreetmap.org/wiki/Key:surface">https://wiki.openstreetmap.org/wiki/Key:surface</a></p>
</td></tr></table>
  

### <a id="Tables">Tables</a>

  

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>height</td><td><a href="#Length">Length</a></td><td><p>Height or heights of the tables at this place, measured from the top of the table surface.</p>
</td></tr><tr><td>spaceBelowDepth</td><td><a href="#Length">Length</a></td><td><p>Indicates how deep the space below a table is for each user.</p>
</td></tr><tr><td>spaceBelowHeight</td><td><a href="#Length">Length</a></td><td><p>Indicates how high the space below a table is.</p>
</td></tr><tr><td>spaceBelowWidth</td><td><a href="#Length">Length</a></td><td><p>Indicates how wide the space below a table is for each user.</p>
</td></tr></table>
  

### <a id="Toilet">Toilet</a>

  Describes a single toilet that can be inside a restroom or cabin.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>grabBars</td><td><a href="#GrabBars">GrabBars</a></td><td><p>Object describing the grab bars.</p>
</td></tr><tr><td>heightOfBase</td><td><a href="#Length">Length</a></td><td><p>Indicates the height of the toilet’s base.</p>
</td></tr><tr><td>spaceInFront</td><td><a href="#Length">Length</a></td><td><p>How much space is in front of the toilet?</p>
</td></tr><tr><td>spaceOnUsersLeftSide</td><td><a href="#Length">Length</a></td><td><p>How much space is on the left side of the toilet? (from the perspective of somebody using the
toilet)</p>
</td></tr><tr><td>spaceOnUsersRightSide</td><td><a href="#Length">Length</a></td><td><p>How much space is on the right side of the toilet? (from the perspective of somebody using the
toilet)</p>
</td></tr></table>
  

### <a id="WashBasin">WashBasin</a>

  

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>accessibleWithWheelchair</td><td><code>boolean</code></td><td><p><code>true</code> if the wash basin is accessible with wheelchairs, <code>false</code> if not, <code>undefined</code>
if condition is unknown.</p>
</td></tr><tr><td>height</td><td><a href="#Length">Length</a></td><td><p>Defines at which height is the wash basin&#39;s top</p>
</td></tr><tr><td>isLocatedInsideRestroom</td><td><code>boolean</code></td><td><p><code>true</code> if the restroom&#39;s wash basin is inside the cabin, <code>false</code> if not, <code>undefined</code>
if condition is unknown.</p>
</td></tr><tr><td>spaceBelowDepth</td><td><a href="#Length">Length</a></td><td><p>How deep is the space below the wash basin?</p>
</td></tr><tr><td>spaceBelowHeight</td><td><a href="#Length">Length</a></td><td><p>How high is the space below the wash basin?</p>
</td></tr></table>
  

### <a id="WheelchairParking">WheelchairParking</a>

  Describes one or more wheelchair parking lots.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>count</td><td><code>number</code></td><td><p>Defines many wheelchair accessible parking lots are provided</p>
</td></tr><tr><td>distanceToEntrance</td><td><a href="#Length">Length</a></td><td><p>How far away is the parking from the main entrance? If there is a separate wheelchair entrance,
the distance to this entrance MUST be used.</p>
</td></tr><tr><td>hasDedicatedSignage</td><td><code>boolean</code></td><td><p><code>true</code> if there is dedicated signage at all relevant turning points from the street to the
parking, <code>false</code> if not, <code>undefined</code> if this is unknown.</p>
</td></tr><tr><td>isLocatedInside</td><td><code>boolean</code></td><td><p><code>true</code> if the parking is inside a building or under a roof, <code>false</code> if not, <code>undefined</code> if
unknown.</p>
</td></tr><tr><td>length</td><td><a href="#Length">Length</a></td><td><p>Length constraint of the parking lots.</p>
</td></tr><tr><td>location</td><td><pre>{
  "id": 323,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 324,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 325,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre></td><td><p>Describes where the parking is located.</p>
</td></tr><tr><td>maxVehicleHeight</td><td><a href="#Length">Length</a></td><td><p>Maximal allowed vehicle height for users of this parking.</p>
</td></tr><tr><td>neededParkingPermits</td><td><pre>{
  "id": 334,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 335,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 336,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre>[]</td><td><p>List of permit names that allow using this parking.</p>
</td></tr><tr><td>width</td><td><a href="#Length">Length</a></td><td><p>Width constraint of the parking lots.</p>
</td></tr></table>
  

### <a id="WheelchairPlaces">WheelchairPlaces</a>

  The WheelchairPlaces interface describes the presence of reserved spots for wheelchairs.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>count</td><td><code>number</code></td><td><p>The number of designated places for wheelchairs, for example, in a cinema or theater.</p>
</td></tr><tr><td>hasSpaceForAssistant</td><td><code>boolean</code></td><td><p>Is there additional space for an assistant?</p>
</td></tr><tr><td>wheelchairUserCapacity</td><td><code>number</code></td><td><p>The number of people using a wheelchair that can be accomodated at the same time. Use this when
there is no designated space for wheelchair users, but the number is known.</p>
</td></tr></table>
  

### <a id="WifiAccessibility">WifiAccessibility</a>

  Describes the presence of staff and their qualifications and/or provided services.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>descriptionWhereToGetLoginData</td><td><pre>{
  "id": 609,
  "name": "__type",
  "kind": 65536,
  "kindString": "Type literal",
  "flags": {},
  "indexSignature": {
    "id": 610,
    "name": "__index",
    "kind": 8192,
    "kindString": "Index signature",
    "flags": {},
    "parameters": [
      {
        "id": 611,
        "name": "key",
        "kind": 32768,
        "flags": {},
        "type": {
          "type": "intrinsic",
          "name": "string"
        }
      }
    ],
    "type": {
      "type": "intrinsic",
      "name": "string"
    }
  }
}</pre></td><td><p>Describes where you get the login data / guest pass.</p>
</td></tr><tr><td>hasCaptivePortal</td><td><code>boolean</code></td><td><p><code>true</code> if the wifi has a captive portal website.</p>
</td></tr><tr><td>hasFixedPassword</td><td><code>boolean</code></td><td><p><code>true</code> if the wifi has a fixed password. Knowing this password must be enough to enter and use
the wifi.</p>
</td></tr><tr><td>isCaptivePortalAccessible</td><td><code>boolean</code></td><td><p><code>true</code> if the wifi captive portal is accessible (WAI/ARIA).</p>
</td></tr><tr><td>isOpenToEveryone</td><td><code>boolean</code></td><td><p><code>true</code> if the wifi is open to everyone, <code>false</code> if it is explicitly not.</p>
</td></tr><tr><td>isOpenToStaff</td><td><code>boolean</code></td><td><p><code>true</code> if the wifi is open to explicit place staff, <code>false</code> if explicitly not.</p>
</td></tr><tr><td>isOpenToVisitors</td><td><code>boolean</code></td><td><p><code>true</code> if the wifi is open to explicit place visitors, <code>false</code> if explicitly not.</p>
</td></tr><tr><td>needsGuestPass</td><td><code>boolean</code></td><td><p><code>true</code> if the wifi has a fixed password. Knowing this password must be enough to enter and use
the wifi.</p>
</td></tr><tr><td>password</td><td><code>string</code></td><td><p>A string with the Wifi password. Only use this attribute if security allows to publish this
info online publicly.</p>
</td></tr><tr><td>ssid</td><td><code>string</code></td><td><p>A string with the Wifi name (SSID). Only use this attribute if security allows to publish this
info online publicly.</p>
</td></tr></table>
  
