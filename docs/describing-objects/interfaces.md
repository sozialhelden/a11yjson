# Interfaces

<style>
    .source-link {
      float: right;
    }
  </style>

This is a list of data structures that A11yJSON specifies.

They are meant to be interfaces in the software development sense: This means you can either use
them as they are, or mix them into your own entity definitions.

### <a id="Accessibility">Accessibility</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Accessibility.ts#L80)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">accessibleWith</td><td class="property-type"><a href="#PersonalProfile">PersonalProfile</a></td><td class="property-docs"></td></tr><tr><td class="property-name">ambientNoiseLevel</td><td class="property-type"><a href="#Volume">Volume</a></td><td class="property-docs"></td></tr><tr><td class="property-name">animalPolicy</td><td class="property-type"><a href="#AnimalPolicy">AnimalPolicy</a></td><td class="property-docs"></td></tr><tr><td class="property-name">desks</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Desk">Desk</a>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">entrances</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Entrance">Entrance</a>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">hasAirConditioning</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasBrailleSignage</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasInductionLoop</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasSoundAbsorption</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasTactileGuideStrips</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasTactileSignage</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">interactions</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>arrive</code>

<code>book</code>

<code>buy</code>

<code>change</code>

<code>checkIn</code>

<code>checkOut</code>

<code>eat</code>

<code>explore</code>

<code>getFood</code>

<code>listen</code>

<code>pay</code>

<code>play</code>

<code>read</code>

<code>rent</code>

<code>roam</code>

<code>see</code>

<code>sell</code>

<code>use</code>

<code>useLockers</code>

<code>visit</code>

<code>watch</code>

<code>watchMovies</code>

<code>watchPlays</code>

<code>workHere</code>
</p>

Values must be of type <a href="#InteractionMode">InteractionMode</a>.
</td><td class="property-docs"></td></tr><tr><td class="property-name">isQuiet</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isWellLit</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">media</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Media">Media</a>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">offersActivitiesForPeopleWith</td><td class="property-type"><a href="#PersonalProfile">PersonalProfile</a></td><td class="property-docs"></td></tr><tr><td class="property-name">parking</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Parking">Parking</a></td><td class="property-docs"></td></tr><tr><td class="property-name">partiallyAccessibleWith</td><td class="property-type"><a href="#PersonalProfile">PersonalProfile</a></td><td class="property-docs"></td></tr><tr><td class="property-name">pathways</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Pathways">Pathways</a></td><td class="property-docs"></td></tr><tr><td class="property-name">pathwaysFromEntrance</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Pathways">Pathways</a></td><td class="property-docs"></td></tr><tr><td class="property-name">pathwaysInside</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Pathways">Pathways</a></td><td class="property-docs"></td></tr><tr><td class="property-name">payment</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Payment">Payment</a></td><td class="property-docs"></td></tr><tr><td class="property-name">restrooms</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Restroom">Restroom</a>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">serviceContact</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">signageSystems</td><td class="property-type"><a href="#Signage">Signage</a>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">smokingPolicy</td><td class="property-type"><a href="#SmokingPolicy">SmokingPolicy</a></td><td class="property-docs"></td></tr><tr><td class="property-name">staff</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Staff">Staff</a></td><td class="property-docs"></td></tr><tr><td class="property-name">surface</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Surface">Surface</a></td><td class="property-docs"></td></tr><tr><td class="property-name">tables</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Desk">Desk</a>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">wheelchairAccessibilityGrade</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>fully</code>

<code>not</code>

<code>partially</code>
</p>
</td><td class="property-docs"></td></tr><tr><td class="property-name">wheelchairPlaces</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#WheelchairPlaces">WheelchairPlaces</a></td><td class="property-docs"></td></tr><tr><td class="property-name">wifi</td><td class="property-type"><a href="#WifiAccessibility">WifiAccessibility</a></td><td class="property-docs"></td></tr></table>

  

### <a id="ActionMode">ActionMode</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/ActionMode.ts#L62)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">access</td><td class="property-type">Array of one or more of these strings:

<p class='grid'>
<code>customers</code>

<code>delivery</code>

<code>designated</code>

<code>disabled</code>

<code>emergency</code>

<code>employees</code>

<code>no</code>

<code>permissive</code>

<code>permit</code>

<code>private</code>

<code>public</code>

<code>residents</code>

<code>yes</code>
</p>
</td><td class="property-docs"></td></tr><tr><td class="property-name">activationForce</td><td class="property-type"><a href="#Force">Force</a></td><td class="property-docs"></td></tr><tr><td class="property-name">activationTimeInterval</td><td class="property-type"><a href="#TimeInterval">TimeInterval</a></td><td class="property-docs"></td></tr><tr><td class="property-name">apiDocumentationUrl</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">attentionSpan</td><td class="property-type"><a href="#TimeInterval">TimeInterval</a></td><td class="property-docs"></td></tr><tr><td class="property-name">bodyHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">bodyMass</td><td class="property-type"><a href="#Mass">Mass</a></td><td class="property-docs"></td></tr><tr><td class="property-name">brailleKeyboard</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">brailleText</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">burnHazard</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">cable</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">capacitive</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">clap</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">click</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">description</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">direction</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>backward</code>

<code>clockwise</code>

<code>counterclockwise</code>

<code>down</code>

<code>forward</code>

<code>left</code>

<code>right</code>

<code>up</code>
</p>
</td><td class="property-docs"></td></tr><tr><td class="property-name">directionAxis</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>axial</code>

<code>coronal</code>

<code>sagittal</code>
</p>
</td><td class="property-docs"></td></tr><tr><td class="property-name">doubleClick</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">drag</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">dragAndDropGesture</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">educationLevel</td><td class="property-type"><a href="#Number">Number</a></td><td class="property-docs"></td></tr><tr><td class="property-name">eyeTracker</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">faceRecognition</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">feedback</td><td class="property-type"><a href="#PerceptionMode">PerceptionMode</a></td><td class="property-docs"></td></tr><tr><td class="property-name">fingerprintScan</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">handwriting</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">haptic</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">headPointer</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">headphone</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">highContrast</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">instructionsUrl</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">irisScan</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isEasyToFind</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isEasyToUnderstand</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">joystick</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">keyboard</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">keypad</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">knob</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">knurled</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">languages</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">leftHanded</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">lick</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">morseCode</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">mouse</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">move</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">name</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">necessaryClimbHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">necessaryEyeHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">necessaryGripHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">optional</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">paper</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">pedal</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">photo</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">pinch</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">pinchFingerGesture</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">press</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">pullSwitch</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">pullstring</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">pushButton</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">pushSwitch</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">qrCode</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">raisedText</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">required</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">rhythm</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">rightHanded</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">rotate</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">rotateTwoFingersGesture</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">scratch</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">screen</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">signLanguage</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">singleHanded</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">sipAndPuff</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">smell</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">soundRecording</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">speak</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">squeeze</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">stateCount</td><td class="property-type"><code>number</code></td><td class="property-docs"></td></tr><tr><td class="property-name">swipeFingerGesture</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">swipeThreeFingersGesture</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">swipeTwoFingersGesture</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">tactile</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">tactileGuides</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">tap</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">tearApart</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">techSufficient</td><td class="property-type"><a href="#TechCombination">TechCombination</a>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">techSupported</td><td class="property-type"><a href="#TechCombination">TechCombination</a>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">tilt</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">tongue</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">touch</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">touchscreen</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">trackball</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">tripleClick</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">turn</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">turnKnob</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">twoHanded</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">url</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">video</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">visualRecognition</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">voiceActivation</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">walk</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">wave</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">weight</td><td class="property-type"><a href="#Mass">Mass</a></td><td class="property-docs"></td></tr><tr><td class="property-name">wheel</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">wireless</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr></table>

  

### <a id="AnimalPolicy">AnimalPolicy</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/AnimalPolicy.ts#L4)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">allowsAssistanceDogs</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">allowsDogs</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">allowsGuideDogs</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">allowsServiceAnimals</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">dogsNeedMuzzle</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">suppliesWaterForPets</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr></table>

  

### <a id="CurrencyValue">CurrencyValue</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/CurrencyValue.ts#L17)</span>

  

  The `amount` property is required.
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">access</td><td class="property-type">Array of one or more of these strings:

<p class='grid'>
<code>customers</code>

<code>delivery</code>

<code>designated</code>

<code>disabled</code>

<code>emergency</code>

<code>employees</code>

<code>no</code>

<code>permissive</code>

<code>permit</code>

<code>private</code>

<code>public</code>

<code>residents</code>

<code>yes</code>
</p>
</td><td class="property-docs"></td></tr><tr><td class="property-name">amount*</td><td class="property-type"><code>number</code></td><td class="property-docs"></td></tr><tr><td class="property-name">currency</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">paymentTypes</td><td class="property-type"><a href="#Payment">Payment</a>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">per</td><td class="property-type"><a href="#Quantity">Quantity</a></td><td class="property-docs"></td></tr></table>

  

### <a id="Desk">Desk</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Desk.ts#L39)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">depthBelow</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">fixedHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">fixedHeightBelow</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">interactions</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>changeHeight</code>

<code>checkIn</code>

<code>checkOut</code>

<code>close</code>

<code>enqueue</code>

<code>getFood</code>

<code>getReturn</code>

<code>getShoppingBag</code>

<code>handover</code>

<code>handoverLuggage</code>

<code>lock</code>

<code>open</code>

<code>openAndClose</code>

<code>pay</code>

<code>ringBell</code>

<code>savePreset</code>

<code>scan</code>

<code>selfCheckout</code>

<code>unlock</code>

<code>unlockAndLock</code>
</p>

Values must be of type <a href="#InteractionMode">InteractionMode</a>.
</td><td class="property-docs"></td></tr><tr><td class="property-name">intercom</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Intercom">Intercom</a></td><td class="property-docs"></td></tr><tr><td class="property-name">isRollUnder</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">maximalHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">minimalHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">name</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">payment</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Payment">Payment</a></td><td class="property-docs"></td></tr><tr><td class="property-name">queueSystem</td><td class="property-type"><a href="#QueueSystem">QueueSystem</a></td><td class="property-docs"></td></tr><tr><td class="property-name">turningSpaceInFront</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">widthBelow</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr></table>

  

### <a id="Door">Door</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Door.ts#L26)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">access</td><td class="property-type">Array of one or more of these strings:

<p class='grid'>
<code>customers</code>

<code>delivery</code>

<code>designated</code>

<code>disabled</code>

<code>emergency</code>

<code>employees</code>

<code>no</code>

<code>permissive</code>

<code>permit</code>

<code>private</code>

<code>public</code>

<code>residents</code>

<code>yes</code>
</p>
</td><td class="property-docs"></td></tr><tr><td class="property-name">colors</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">doorFrameColors</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">doorOpensToOutside</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">doorbellTopButtonHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">grabBars</td><td class="property-type"><a href="#GrabBars">GrabBars</a></td><td class="property-docs"></td></tr><tr><td class="property-name">hasClearMarkingOnGlassDoor</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasErgonomicDoorHandle</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasIntercom</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasProximitySensor</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasSwitch</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasVisuallyContrastedFrame</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">interactions</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>close</code>

<code>lock</code>

<code>open</code>

<code>openAndClose</code>

<code>ringDoorbell</code>

<code>unlock</code>

<code>unlockAndLock</code>
</p>

Values must be of type <a href="#InteractionMode">InteractionMode</a>.
</td><td class="property-docs"></td></tr><tr><td class="property-name">intercom</td><td class="property-type"><a href="#Intercom">Intercom</a></td><td class="property-docs"></td></tr><tr><td class="property-name">isAlwaysOpen</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isAutomatic</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isAutomaticOrAlwaysOpen</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isEasyToHoldOpen</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isGlassDoor</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isRevolving</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isSliding</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isTurnstile</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isVisuallyContrasted</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">markingColors</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">nearbyWallColors</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">needsDoorbell</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">needsEuroKey</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">needsIntercom</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">needsKeyCard</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">needsKeyPad</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">needsRadarKey</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">needsSwitchToOpen</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">thresholdHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">thresholdIsRounded</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">turningSpaceInFront</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">width</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr></table>

  

### <a id="Entrance">Entrance</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Entrance.ts#L13)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">geometry</td><td class="property-type"><a href="#PointGeometry">PointGeometry</a></td><td class="property-docs"></td></tr><tr><td class="property-name">properties</td><td class="property-type"><a href="#EntranceProperties">EntranceProperties</a></td><td class="property-docs"></td></tr></table>

  

### <a id="EntranceProperties">EntranceProperties</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/EntranceProperties.ts#L12)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">door</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Door">Door</a></td><td class="property-docs"></td></tr><tr><td class="property-name">elevatorEquipmentId</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasFixedRamp</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasHoist</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasRemovableRamp</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasSignage</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">intercomEquipmentId</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isLevel</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isMainEntrance</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">name</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">needsAppointment</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">placeInfoId</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">slopeAngle</td><td class="property-type"><a href="#Slope">Slope</a></td><td class="property-docs"></td></tr><tr><td class="property-name">stairs</td><td class="property-type"><a href="#Stairs">Stairs</a></td><td class="property-docs"></td></tr></table>

  

### <a id="EquipmentInfo">EquipmentInfo</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/EquipmentInfo.ts#L14)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">geometry</td><td class="property-type"><a href="#PointGeometry">PointGeometry</a></td><td class="property-docs"></td></tr><tr><td class="property-name">properties</td><td class="property-type"><a href="#EquipmentProperties">EquipmentProperties</a></td><td class="property-docs"></td></tr></table>

  

### <a id="EquipmentProperties">EquipmentProperties</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/EquipmentProperties.ts#L64)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">accessMode</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">accessModeSufficient</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">accessibilityControl</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">accessibilityFeature</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">accessibilityHazard</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">alternativeRouteInstructions</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">cabinLength</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">cabinWidth</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">category</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>bed</code>

<code>bodyScanner</code>

<code>elevator</code>

<code>escalator</code>

<code>flushMechanism</code>

<code>hoist</code>

<code>intercom</code>

<code>luggageScanner</code>

<code>movingWalkway</code>

<code>powerOutlet</code>

<code>ramp</code>

<code>sitemap</code>

<code>stairLift</code>

<code>switch</code>

<code>vendingMachine</code>

<code>wardrobe</code>
</p>
</td><td class="property-docs"></td></tr><tr><td class="property-name">description</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">disruptionSourceImportId</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">door</td><td class="property-type"><a href="#Door">Door</a></td><td class="property-docs"></td></tr><tr><td class="property-name">emergencyIntercom</td><td class="property-type"><a href="#Intercom">Intercom</a></td><td class="property-docs"></td></tr><tr><td class="property-name">hasDoorsAtRightAngles</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasDoorsInBothDirections</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasExternalFloorSelection</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasLandings</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasMirror</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasVisualEmergencyAlarm</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">heightOfControls</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">ids</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>string</code>
</p>

Values must be of type <code>string</code>.
</td><td class="property-docs"></td></tr><tr><td class="property-name">interactions</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>arriveAtFloor</code>

<code>buy</code>

<code>call</code>

<code>callEmergency</code>

<code>disable</code>

<code>enable</code>

<code>engage</code>

<code>findYourDestination</code>

<code>flush</code>

<code>handover</code>

<code>locateYourself</code>

<code>ride</code>

<code>scan</code>

<code>selectFloor</code>

<code>sell</code>

<code>sleep</code>

<code>toggle</code>

<code>travel</code>

<code>understand</code>

<code>use</code>
</p>

Values must be of type <a href="#InteractionMode">InteractionMode</a>.
</td><td class="property-docs"></td></tr><tr><td class="property-name">isIndoors</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isSuitableForBicycles</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isWorking</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">languages</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">longDescription</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">manufacturerName</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">manufacturerSerialNumber</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">originalData</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">originalId</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">originalPlaceInfoId</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">outOfOrderReason</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">placeInfoId</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">placeSourceId</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">plannedCompletionDate</td><td class="property-type"><a href="#Date">Date</a></td><td class="property-docs"></td></tr><tr><td class="property-name">sameAs</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">servicePhoneNumber</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">serviceWebsiteUrl</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">shortDescription</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">sourceId</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">sourceImportId</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">stateExplanation</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">stateLastUpdate</td><td class="property-type"><a href="#Date">Date</a></td><td class="property-docs"></td></tr></table>

  

### <a id="GrabBars">GrabBars</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/GrabBars.ts#L12)</span>

  

  The `continuous` property is required.
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">continuous*</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">distanceBetweenBars</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">foldable</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">inFrontOfTheUser</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">interactions</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>findYourDestination</code>

<code>localizeYourself</code>
</p>

Values must be of type <a href="#InteractionMode">InteractionMode</a>.
</td><td class="property-docs"></td></tr><tr><td class="property-name">onUsersLeftSide</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">onUsersRightSide</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">topHeightFromFloor</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr></table>

  

### <a id="Interactable">Interactable</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Interactable.ts#L5)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">interactions</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<a href="#InteractionType">InteractionType</a>
</p>

Values must be of type <a href="#InteractionMode">InteractionMode</a>.
</td><td class="property-docs"></td></tr></table>

  

### <a id="InteractionMode">InteractionMode</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/InteractionMode.ts#L12)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">action</td><td class="property-type"><a href="#ActionMode">ActionMode</a></td><td class="property-docs"></td></tr><tr><td class="property-name">description</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">languages</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">name</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">optional</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">perception</td><td class="property-type"><a href="#PerceptionMode">PerceptionMode</a></td><td class="property-docs"></td></tr><tr><td class="property-name">required</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr></table>

  

### <a id="Intercom">Intercom</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Intercom.ts#L19)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">ambientNoiseLevel</td><td class="property-type"><a href="#Volume">Volume</a></td><td class="property-docs"></td></tr><tr><td class="property-name">audioIsComprehensible</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">description</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">hasAudio</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasVideoCamera</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasVisualFeedbackOnConnection</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">interactions</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>call</code>

<code>close</code>

<code>hangUp</code>

<code>identify</code>

<code>open</code>

<code>ring</code>
</p>

Values must be of type <a href="#InteractionMode">InteractionMode</a>.
</td><td class="property-docs"></td></tr><tr><td class="property-name">necessaryGripHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">needsKeyPad</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr></table>

  

### <a id="Media">Media</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Media.ts#L45)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">accessMode</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">accessModeSufficient</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">accessibilityControl</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">accessibilityFeature</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">accessibilityHazard</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">hasAudioDescription</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasContrastingBackground</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasDedicatedScreenForSubtitles</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasPlainLanguageOption</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasRealTimeCaptioning</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasSubtitles</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isAudio</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isBraille</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isLargePrint</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isTactile</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">languages</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">name</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">sameAs</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">turningSpaceInFront</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">type</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>document</code>

<code>exhibit</code>

<code>guide</code>

<code>menu</code>

<code>movie</code>

<code>play</code>

<code>presentation</code>

<code>screen</code>

<code>tour</code>

<code>website</code>
</p>
</td><td class="property-docs"></td></tr></table>

  

### <a id="Mirror">Mirror</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Mirror.ts#L18)</span>

  

  
  `heightFromGround`  and  `isAccessibleWhileSeated` properties are required.

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">heightFromGround*</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">interactions</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>adjust</code>

<code>clean</code>

<code>move</code>

<code>turn</code>

<code>use</code>
</p>

Values must be of type <a href="#InteractionMode">InteractionMode</a>.
</td><td class="property-docs"></td></tr><tr><td class="property-name">isAccessibleWhileSeated*</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isLocatedInsideRestroom</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr></table>

  

### <a id="Parking">Parking</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Parking.ts#L93)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">count</td><td class="property-type"><code>number</code></td><td class="property-docs"></td></tr><tr><td class="property-name">forWheelchairUsers</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#WheelchairParking">WheelchairParking</a></td><td class="property-docs"></td></tr><tr><td class="property-name">interactions</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>arrive</code>

<code>enterVehicle</code>

<code>exitVehicle</code>

<code>park</code>
</p>

Values must be of type <a href="#InteractionMode">InteractionMode</a>.
</td><td class="property-docs"></td></tr></table>

  

### <a id="Pathways">Pathways</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Pathways.ts#L10)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">isKerbstoneFree</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">surface</td><td class="property-type"><a href="#Surface">Surface</a></td><td class="property-docs"></td></tr><tr><td class="property-name">width</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">widthAtObstacles</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr></table>

  

### <a id="Payment">Payment</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Payment.ts#L17)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">acceptsBills</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">acceptsCoins</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">acceptsCreditCards</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">acceptsDebitCards</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">acceptsPaymentByMobilePhone</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">customPaymentMetaInfo</td><td class="property-type"><a href="../i18n">LocalizedString</a>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">hasPortablePaymentSystem</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr></table>

  

### <a id="PerceptionMode">PerceptionMode</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/PerceptionMode.ts#L42)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">acceleration</td><td class="property-type"><a href="#Acceleration">Acceleration</a></td><td class="property-docs"></td></tr><tr><td class="property-name">activationSignal</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">ambientNoiseLevel</td><td class="property-type"><a href="#Volume">Volume</a></td><td class="property-docs"></td></tr><tr><td class="property-name">ambientTemperature</td><td class="property-type"><a href="#Temperature">Temperature</a></td><td class="property-docs"></td></tr><tr><td class="property-name">animation</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">apiDocumentationUrl</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">attentionSpan</td><td class="property-type"><a href="#TimeInterval">TimeInterval</a></td><td class="property-docs"></td></tr><tr><td class="property-name">audibleClick</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">audioDescription</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">audioIsComprehensible</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">backgroundColors</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">backgroundMusic</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">beep</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">bing</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">blackAndWhite</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">braille</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">breathing</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">brightness</td><td class="property-type"><a href="#Brightness">Brightness</a></td><td class="property-docs"></td></tr><tr><td class="property-name">byod</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">cable</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">chart</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">colorCode</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">colorGradient</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">contentWarning</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">dedicatedScreenForSubtitles</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">description</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">duration</td><td class="property-type"><a href="#TimeInterval">TimeInterval</a></td><td class="property-docs"></td></tr><tr><td class="property-name">educationLevel</td><td class="property-type"><a href="#Number">Number</a></td><td class="property-docs"></td></tr><tr><td class="property-name">flash</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">flashingHazard</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">fontSize</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">force</td><td class="property-type"><a href="#Force">Force</a></td><td class="property-docs"></td></tr><tr><td class="property-name">forceFeedback</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">foregroundColors</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">framerate</td><td class="property-type"><a href="#Hertz">Hertz</a></td><td class="property-docs"></td></tr><tr><td class="property-name">frequency</td><td class="property-type"><a href="#Hertz">Hertz</a></td><td class="property-docs"></td></tr><tr><td class="property-name">fullBody</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">handwritten</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">haptic</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hapticClick</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">headphone</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">heat</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">highContrast</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">instructionsUrl</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">isEasyToFind</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isEasyToUnderstand</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">languages</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">led</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">light</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">morse</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">music</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">name</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">necessaryEyeHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">necessaryGripHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">needsHighConcentration</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">numbers</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">optional</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">paper</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">pictograms</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">pitchedTone</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">plainLanguageOption</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">printer</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">qrCode</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">radio</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">read</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">realTimeCaptioning</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">required</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">rhythmic</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">screen</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">signLanguage</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">smell</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">sound</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">soundVolume</td><td class="property-type"><a href="#Volume">Volume</a></td><td class="property-docs"></td></tr><tr><td class="property-name">speech</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">static</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">subtitles</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">tactile</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">tactileGuides</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">taste</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">techSufficient</td><td class="property-type"><a href="#TechCombination">TechCombination</a>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">techSupported</td><td class="property-type"><a href="#TechCombination">TechCombination</a>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">temperature</td><td class="property-type"><a href="#Temperature">Temperature</a></td><td class="property-docs"></td></tr><tr><td class="property-name">urgency</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>alarm</code>

<code>alert</code>

<code>debug</code>

<code>info</code>

<code>warning</code>
</p>
</td><td class="property-docs"></td></tr><tr><td class="property-name">url</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">vibration</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">visual</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr></table>

  

### <a id="PersonalProfile">PersonalProfile</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/PersonalProfile.ts#L12)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">blindness</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">guideDog</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hearingImpairment</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">learningImpairment</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">mobilityImpairment</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">muteness</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">visualImpairment</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">wheelchair</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr></table>

  

### <a id="PlaceInfo">PlaceInfo</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/PlaceInfo.ts#L9)</span>

  

  
  `geometry`  and  `properties` properties are required.

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">formatVersion</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">geometry*</td><td class="property-type"><a href="#PointGeometry">PointGeometry</a></td><td class="property-docs"></td></tr><tr><td class="property-name">properties*</td><td class="property-type"><a href="#PlaceProperties">PlaceProperties</a></td><td class="property-docs"></td></tr></table>

  

### <a id="PlaceProperties">PlaceProperties</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/PlaceProperties.ts#L14)</span>

  

  The `category` property is required.
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">access</td><td class="property-type">Array of one or more of these strings:

<p class='grid'>
<code>customers</code>

<code>delivery</code>

<code>designated</code>

<code>disabled</code>

<code>emergency</code>

<code>employees</code>

<code>no</code>

<code>permissive</code>

<code>permit</code>

<code>private</code>

<code>public</code>

<code>residents</code>

<code>yes</code>
</p>
</td><td class="property-docs"></td></tr><tr><td class="property-name">accessibility</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Accessibility">Accessibility</a></td><td class="property-docs"></td></tr><tr><td class="property-name">address</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#StructuredAddress">StructuredAddress</a></td><td class="property-docs"></td></tr><tr><td class="property-name">category*</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">description</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">editPageUrl</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">emailAddress</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">ids</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>string</code>
</p>

Values must be of type <code>string</code>.
</td><td class="property-docs"></td></tr><tr><td class="property-name">infoPageUrl</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">name</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">originalData</td><td class="property-type"><code>any</code></td><td class="property-docs"></td></tr><tr><td class="property-name">originalId</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">originalParentPlaceInfoId</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">parentPlaceInfoId</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">parentPlaceSourceId</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">phoneNumber</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">placeWebsiteUrl</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">sameAs</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">sourceId</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">sourceImportId</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr></table>

  

### <a id="PointGeometry">PointGeometry</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Geometry.ts#L5)</span>

  

  
  `coordinates`  and  `type` properties are required.

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">coordinates*</td><td class="property-type">tuple with 2 <code>number</code> elements</td><td class="property-docs"></td></tr><tr><td class="property-name">type*</td><td class="property-type"><code>"Point"</code></td><td class="property-docs"></td></tr></table>

  

### <a id="Quantity">Quantity</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L75)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">accuracy</td><td class="property-type"><code>number</code></td><td class="property-docs"></td></tr><tr><td class="property-name">max</td><td class="property-type"><code>number</code></td><td class="property-docs"></td></tr><tr><td class="property-name">min</td><td class="property-type"><code>number</code></td><td class="property-docs"></td></tr><tr><td class="property-name">operator</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>!=</code>

<code><</code>

<code><=</code>

<code>=</code>

<code>==</code>

<code>></code>

<code>>=</code>

<code>~</code>

<code>~=</code>
</p>
</td><td class="property-docs"></td></tr><tr><td class="property-name">precision</td><td class="property-type"><code>number</code></td><td class="property-docs"></td></tr><tr><td class="property-name">rawValue</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">unit</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">value</td><td class="property-type"><code>number</code></td><td class="property-docs"></td></tr></table>

  

### <a id="QueueSystem">QueueSystem</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/QueueSystem.ts#L13)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">canSkipQueueWithDisability</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">grabBars</td><td class="property-type"><a href="#GrabBars">GrabBars</a></td><td class="property-docs"></td></tr><tr><td class="property-name">interactions</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>arrive</code>

<code>checkIn</code>

<code>checkOut</code>

<code>enqueue</code>

<code>getOnesTurn</code>

<code>getTicket</code>

<code>leaveQueue</code>

<code>skipQueue</code>

<code>wait</code>
</p>

Values must be of type <a href="#InteractionMode">InteractionMode</a>.
</td><td class="property-docs"></td></tr><tr><td class="property-name">needsTickets</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">numberOfQueueServerPoints</td><td class="property-type"><code>number</code></td><td class="property-docs"></td></tr><tr><td class="property-name">numberOfSeats</td><td class="property-type"><code>number</code></td><td class="property-docs"></td></tr><tr><td class="property-name">usesCattleBars</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr></table>

  

### <a id="Restroom">Restroom</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Restroom.ts#L33)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">access</td><td class="property-type">Array of one or more of these strings:

<p class='grid'>
<code>customers</code>

<code>delivery</code>

<code>designated</code>

<code>disabled</code>

<code>emergency</code>

<code>employees</code>

<code>no</code>

<code>permissive</code>

<code>permit</code>

<code>private</code>

<code>public</code>

<code>residents</code>

<code>yes</code>
</p>
</td><td class="property-docs"></td></tr><tr><td class="property-name">address</td><td class="property-type"><a href="#StructuredAddress">StructuredAddress</a></td><td class="property-docs"></td></tr><tr><td class="property-name">description</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">entrance</td><td class="property-type"><a href="#Entrance">Entrance</a></td><td class="property-docs"></td></tr><tr><td class="property-name">hasBathTub</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasCeilingHoist</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasChangingTableForAdults</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasChangingTableForBabies</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasEmergencyPullstring</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasMirror</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasShower</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasSupportRails</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">heightOfDrier</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">heightOfSoap</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">interactions</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>closeWindow</code>

<code>enter</code>

<code>exit</code>

<code>lookAround</code>

<code>openWindow</code>

<code>play</code>

<code>see</code>

<code>sit</code>

<code>sleep</code>

<code>stand</code>

<code>storeThings</code>

<code>wait</code>
</p>

Values must be of type <a href="#InteractionMode">InteractionMode</a>.
</td><td class="property-docs"></td></tr><tr><td class="property-name">isAccessibleWithWheelchair</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">mirror</td><td class="property-type"><a href="#Mirror">Mirror</a></td><td class="property-docs"></td></tr><tr><td class="property-name">sameAs</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">shower</td><td class="property-type"><a href="#Shower">Shower</a></td><td class="property-docs"></td></tr><tr><td class="property-name">signIcons</td><td class="property-type">Array of one or more of these strings:

<p class='grid'>
<code>allGender</code>

<code>baby</code>

<code>changingTable</code>

<code>family</code>

<code>female</code>

<code>male</code>

<code>personInWheelchair</code>

<code>toiletBowl</code>

<code>urinal</code>

<code>washBasin</code>
</p>
</td><td class="property-docs"></td></tr><tr><td class="property-name">toilet</td><td class="property-type"><a href="#Toilet">Toilet</a></td><td class="property-docs"></td></tr><tr><td class="property-name">turningSpaceInside</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">usageFee</td><td class="property-type"><a href="#CurrencyValue">CurrencyValue</a>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">washBasin</td><td class="property-type"><a href="#WashBasin">WashBasin</a></td><td class="property-docs"></td></tr></table>

  

### <a id="Room">Room</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Room.ts#L27)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">address</td><td class="property-type"><a href="#StructuredAddress">StructuredAddress</a></td><td class="property-docs"></td></tr><tr><td class="property-name">description</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">interactions</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>closeWindow</code>

<code>enter</code>

<code>exit</code>

<code>lookAround</code>

<code>openWindow</code>

<code>play</code>

<code>see</code>

<code>sit</code>

<code>sleep</code>

<code>stand</code>

<code>storeThings</code>

<code>wait</code>
</p>

Values must be of type <a href="#InteractionMode">InteractionMode</a>.
</td><td class="property-docs"></td></tr><tr><td class="property-name">isAccessibleWithWheelchair</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">sameAs</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr></table>

  

### <a id="Seat">Seat</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Seat.ts#L44)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">adjustmentAxes</td><td class="property-type">Array of one or more of these strings:

<p class='grid'>
<code>axial</code>

<code>coronal</code>

<code>sagittal</code>
</p>
</td><td class="property-docs"></td></tr><tr><td class="property-name">adjustmentDirections</td><td class="property-type">Array of one or more of these strings:

<p class='grid'>
<code>backward</code>

<code>clockwise</code>

<code>counterclockwise</code>

<code>down</code>

<code>forward</code>

<code>left</code>

<code>right</code>

<code>up</code>
</p>
</td><td class="property-docs"></td></tr><tr><td class="property-name">columns</td><td class="property-type"><code>number</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">description</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">fixedHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">hasHeadRest</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasSeatbelt</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">interactions</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>adjust</code>

<code>adjustArmRests</code>

<code>adjustBackRest</code>

<code>adjustFootRest</code>

<code>adjustHeadRest</code>

<code>adjustHeight</code>

<code>adjustLegRest</code>

<code>adjustSeatBelt</code>

<code>adjustSeatBeltAngle</code>

<code>adjustSeatBeltHeight</code>

<code>adjustSeatBeltLength</code>

<code>adjustSeatBeltLock</code>

<code>adjustSeatBeltPosition</code>

<code>adjustSeatBeltTension</code>

<code>adjustSeatingAngle</code>

<code>adjustSeatingSurface</code>

<code>connectSeatbelt</code>

<code>fold</code>

<code>move</code>

<code>sit</code>

<code>unfold</code>
</p>

Values must be of type <a href="#InteractionMode">InteractionMode</a>.
</td><td class="property-docs"></td></tr><tr><td class="property-name">intercom</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Intercom">Intercom</a></td><td class="property-docs"></td></tr><tr><td class="property-name">isCenterColumn</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isFixed</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isFoldable</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isFrontRow</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isLastRow</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isMobile</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isWheelchairAccessible</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">maximalHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">minimalHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">name</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">payment</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Payment">Payment</a></td><td class="property-docs"></td></tr><tr><td class="property-name">reservedForPersonsWith</td><td class="property-type"><a href="#PersonalProfile">PersonalProfile</a></td><td class="property-docs"></td></tr><tr><td class="property-name">rows</td><td class="property-type"><code>number</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">seatbeltPoints</td><td class="property-type"><code>number</code></td><td class="property-docs"></td></tr><tr><td class="property-name">turningSpaceInFront</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr></table>

  

### <a id="Shower">Shower</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Shower.ts#L29)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">door</td><td class="property-type"><a href="#Door">Door</a></td><td class="property-docs"></td></tr><tr><td class="property-name">grabBars</td><td class="property-type"><a href="#GrabBars">GrabBars</a></td><td class="property-docs"></td></tr><tr><td class="property-name">hasShowerSeat</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasSupportRails</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">interactions</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>transfer</code>

<code>useConditioner</code>

<code>useShampoo</code>

<code>useShowerCurtain</code>

<code>useShowerGel</code>

<code>useShowerHead</code>

<code>useSoap</code>

<code>useSupport</code>

<code>wash</code>
</p>

Values must be of type <a href="#InteractionMode">InteractionMode</a>.
</td><td class="property-docs"></td></tr><tr><td class="property-name">seat</td><td class="property-type"><a href="#Seat">Seat</a></td><td class="property-docs"></td></tr><tr><td class="property-name">stairs</td><td class="property-type"><a href="#Stairs">Stairs</a></td><td class="property-docs"></td></tr></table>

  

### <a id="Signage">Signage</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Signage.ts#L17)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">description</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">fontHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">hasAudio</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasBraille</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasNumbers</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasPictograms</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasRaisedLetters</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasSearch</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasTactileGuideStrips</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasTactileHandRails</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasTactileMap</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasTactileNorthMarkers</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasTactilePaving</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasTactileRoomNames</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasText</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasVideo</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasVirtualMap</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">highLegibility</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">interactions</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>findYourDestination</code>

<code>locateYourself</code>

<code>useSitemap</code>
</p>

Values must be of type <a href="#InteractionMode">InteractionMode</a>.
</td><td class="property-docs"></td></tr><tr><td class="property-name">isHighContrast</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr></table>

  

### <a id="Staff">Staff</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Staff.ts#L7)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">canSeeVisitorsFromInside</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasFreeAssistantForVisitors</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">spokenLanguages</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr></table>

  

### <a id="Stairs">Stairs</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Stairs.ts#L11)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">alternativeMobileEquipmentIds</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">count</td><td class="property-type"><code>number</code></td><td class="property-docs"></td></tr><tr><td class="property-name">floors</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">grabBars</td><td class="property-type"><a href="#GrabBars">GrabBars</a></td><td class="property-docs"></td></tr><tr><td class="property-name">hasAntiSlipNosing</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasBrailleSignage</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasHandRail</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasHighContrastNosing</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasMetalGrating</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasTactileSafetyStrips</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasTactileSignage</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isSpiral</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isWellLit</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">name</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">stepHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr></table>

  

### <a id="StructuredAddress">StructuredAddress</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Address.ts#L8)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">areas</td><td class="property-type"><a href="../i18n">LocalizedString</a>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">building</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">city</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">countryCode</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">county</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">district</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">house</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">levelIndex</td><td class="property-type"><code>number</code></td><td class="property-docs"></td></tr><tr><td class="property-name">levelName</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">postalCode</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">regions</td><td class="property-type"><a href="../i18n">LocalizedString</a>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">room</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">roomNumber</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">state</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">stateCode</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">street</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">text</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr></table>

  

### <a id="Surface">Surface</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Surface.ts#L186)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">lateralSlope</td><td class="property-type"><a href="#Slope">Slope</a></td><td class="property-docs"></td></tr><tr><td class="property-name">longitudinalSlope</td><td class="property-type"><a href="#Slope">Slope</a></td><td class="property-docs"></td></tr><tr><td class="property-name">smoothness</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>bad</code>

<code>excellent</code>

<code>good</code>

<code>horrible</code>

<code>impassable</code>

<code>intermediate</code>

<code>very_bad</code>

<code>very_good</code>

<code>very_horrible</code>
</p>
</td><td class="property-docs"></td></tr><tr><td class="property-name">turningSpace</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">types</td><td class="property-type">Array of one or more of these strings:

<p class='grid'>
<code>acrylic</code>

<code>aluminium</code>

<code>anti-slip</code>

<code>artificial</code>

<code>artificial_grass</code>

<code>artificial_turf</code>

<code>asfalto</code>

<code>ash</code>

<code>asphalt</code>

<code>astroturf</code>

<code>bamboo</code>

<code>bare_rock</code>

<code>bark</code>

<code>barkchips</code>

<code>bedrock</code>

<code>bitumen</code>

<code>bituminous</code>

<code>block</code>

<code>boardwalk</code>

<code>boulders</code>

<code>brick</code>

<code>brick_weave</code>

<code>bricks</code>

<code>bushes</code>

<code>carpet</code>

<code>cement</code>

<code>chalk</code>

<code>chipseal</code>

<code>cinder</code>

<code>clay</code>

<code>cobblestone</code>

<code>compacted</code>

<code>compacted_gravel</code>

<code>composite</code>

<code>con</code>

<code>concrete</code>

<code>concrete_slab</code>

<code>concrete_slabs</code>

<code>construction</code>

<code>coral</code>

<code>coral_sand</code>

<code>crushed_limestone</code>

<code>crushed_shells</code>

<code>debris</code>

<code>decoturf</code>

<code>dirt</code>

<code>earth</code>

<code>enrobé</code>

<code>fine_gravel</code>

<code>fine_sand</code>

<code>flagstone</code>

<code>footway</code>

<code>glass</code>

<code>goudron</code>

<code>granite</code>

<code>grass</code>

<code>grass_paver</code>

<code>grass_scrub</code>

<code>grassland</code>

<code>grating</code>

<code>gravel</code>

<code>green</code>

<code>grit</code>

<code>ground</code>

<code>hardcore</code>

<code>ice</code>

<code>ice_road</code>

<code>interlock</code>

<code>iron</code>

<code>laterite</code>

<code>lawn</code>

<code>leaves</code>

<code>limerock</code>

<code>limestone</code>

<code>linoleum</code>

<code>loose_gravel</code>

<code>marble</code>

<code>marble_plate</code>

<code>meadow</code>

<code>metal</code>

<code>metal_grid</code>

<code>mixed</code>

<code>moss</code>

<code>mud</code>

<code>mulch</code>

<code>native</code>

<code>natural</code>

<code>none</code>

<code>oil</code>

<code>overgrown</code>

<code>path</code>

<code>paved</code>

<code>pavement</code>

<code>paving</code>

<code>paving_stone</code>

<code>paving_stones</code>

<code>peat</code>

<code>pebbles</code>

<code>pebblestone</code>

<code>plank</code>

<code>plastic</code>

<code>plates</code>

<code>rasin</code>

<code>residential</code>

<code>rock</code>

<code>rocks</code>

<code>rocky</code>

<code>roman_paving</code>

<code>rubber</code>

<code>rubbercrumb</code>

<code>rubble</code>

<code>salt</code>

<code>sand</code>

<code>sandstone</code>

<code>sawdust</code>

<code>scree</code>

<code>scrub</code>

<code>sealed</code>

<code>sett</code>

<code>shell</code>

<code>shells</code>

<code>shingle</code>

<code>slabs</code>

<code>snow</code>

<code>soil</code>

<code>spur</code>

<code>steel</code>

<code>stepping_stones</code>

<code>stone</code>

<code>stones</code>

<code>synthetic</code>

<code>tactile_paving</code>

<code>tar</code>

<code>tared</code>

<code>tarmac</code>

<code>tartan</code>

<code>terra</code>

<code>terre</code>

<code>tile</code>

<code>tiles</code>

<code>timber</code>

<code>track</code>

<code>trail</code>

<code>trees</code>

<code>tuff</code>

<code>turf</code>

<code>undefined</code>

<code>unhewn_cobblestone</code>

<code>unpaved</code>

<code>unpaved2</code>

<code>unpaved33</code>

<code>unpaved_minor</code>

<code>unsealed</code>

<code>water</code>

<code>wood</code>

<code>wood_chips</code>

<code>woodchips</code>

<code>zebra</code>
</p>
</td><td class="property-docs"></td></tr></table>

  

### <a id="TechCombination">TechCombination</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/TechCombination.ts#L7)</span>

  

  The `uris` property is required.
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">description</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">name</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">uris*</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr></table>

  

### <a id="Toilet">Toilet</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Toilet.ts#L21)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">flushMechanismDistanceFromToilet</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">grabBars</td><td class="property-type"><a href="#GrabBars">GrabBars</a></td><td class="property-docs"></td></tr><tr><td class="property-name">hasAutomaticFlush</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">heightOfBase</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">interactions</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>flush</code>

<code>secondaryFlush</code>

<code>spray</code>

<code>use</code>
</p>

Values must be of type <a href="#InteractionMode">InteractionMode</a>.
</td><td class="property-docs"></td></tr><tr><td class="property-name">isLatrine</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isSquatToilet</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isUrinal</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">spaceInFront</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">spaceOnUsersLeftSide</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">spaceOnUsersRightSide</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr></table>

  

### <a id="WashBasin">WashBasin</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/WashBasin.ts#L25)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">accessibleWithWheelchair</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">height</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">interactions</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>changeTemperature</code>

<code>changeWaterPressure</code>

<code>getCarbonizedWater</code>

<code>getColdWater</code>

<code>getHotWater</code>

<code>getPaperTowel</code>

<code>getTowel</code>

<code>sanitizeHands</code>

<code>useAirDryer</code>

<code>useSoap</code>

<code>useWater</code>

<code>useWaterJet</code>

<code>useWaterSpray</code>
</p>

Values must be of type <a href="#InteractionMode">InteractionMode</a>.
</td><td class="property-docs"></td></tr><tr><td class="property-name">isLocatedInsideRestroom</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">spaceBelowDepth</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">spaceBelowHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr></table>

  

### <a id="WheelchairParking">WheelchairParking</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Parking.ts#L20)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">count</td><td class="property-type"><code>number</code></td><td class="property-docs"></td></tr><tr><td class="property-name">distanceToEntrance</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">hasDedicatedSignage</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">interactions</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>arrive</code>

<code>enterVehicle</code>

<code>exitVehicle</code>

<code>park</code>
</p>

Values must be of type <a href="#InteractionMode">InteractionMode</a>.
</td><td class="property-docs"></td></tr><tr><td class="property-name">isLocatedInside</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">length</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">location</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">maxVehicleHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr><tr><td class="property-name">neededParkingPermits</td><td class="property-type"><a href="../i18n">LocalizedString</a>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">width</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"></td></tr></table>

  

### <a id="WheelchairPlaces">WheelchairPlaces</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/WheelchairPlaces.ts#L6)</span>

  

  The `count` property is required.
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">count*</td><td class="property-type"><code>number</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasSpaceForAssistant</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">wheelchairUserCapacity</td><td class="property-type"><code>number</code></td><td class="property-docs"></td></tr></table>

  

### <a id="WifiAccessibility">WifiAccessibility</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/WifiAccessibility.ts#L19)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">access</td><td class="property-type">Array of one or more of these strings:

<p class='grid'>
<code>customers</code>

<code>delivery</code>

<code>designated</code>

<code>disabled</code>

<code>emergency</code>

<code>employees</code>

<code>no</code>

<code>permissive</code>

<code>permit</code>

<code>private</code>

<code>public</code>

<code>residents</code>

<code>yes</code>
</p>
</td><td class="property-docs"></td></tr><tr><td class="property-name">descriptionWhereToGetLoginData</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">hasCaptivePortal</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">hasFixedPassword</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isCaptivePortalAccessible</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isOpenToEveryone</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isOpenToStaff</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">isOpenToVisitors</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">needsGuestPass</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">password</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">ssid</td><td class="property-type"><code>string</code></td><td class="property-docs"></td></tr><tr><td class="property-name">usageFee</td><td class="property-type"><a href="#CurrencyValue">CurrencyValue</a>[]</td><td class="property-docs"></td></tr></table>

  
