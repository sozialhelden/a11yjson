# Interfaces - things you can describe with A11yJSON

This is a list of data structures that A11yJSON specifies.

They are meant to be interfaces in the software development sense: This means you can either use
them as they are, or mix them into your own entity definitions.

  ### <a id="Accessibility">Accessibility</a>

  Describes the physical (and sometimes human rated) accessibility of a place.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>accessibleWith</td><td><a href="#PersonalProfile">PersonalProfile</a></td><td></td></tr><tr><td>ambientNoiseLevel</td><td><a href="#Volume">Volume</a></td><td><p>Ambient noise level in dB(A) relative to a reference pressure of 0.00002 Pa. Median over a
10-second period at least.</p>
</td></tr><tr><td>animalPolicy</td><td><a href="#AnimalPolicy">AnimalPolicy</a></td><td><p>Object describing the owner&#39;s policy regarding visitors bringing animals with them.</p>
</td></tr><tr><td>desks</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#Desk">Desk</a>[]</td><td><p>Describes the accessibility of desks in the place.
<code>null</code> indicates there are no desks, <code>undefined</code> or missing property indicates unknown.</p>
</td></tr><tr><td>entrances</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#Entrance">Entrance</a>[]</td><td><p>Describes the accessibility of entrances to the place.</p>
</td></tr><tr><td>hasAirConditioning</td><td><code>boolean</code></td><td><p>Determines if there is air conditioning installed and actively used.</p>
</td></tr><tr><td>{--hasBrailleSignage--}</td><td><code>boolean</code></td><td><p><code>true</code> if there is braille navigation for/to this place, <code>false</code> if not.</p>


<div class="admonition warning">
  <p class="admonition-title">Deprecated</p>
  <p>Use <code>signageSystems</code> instead.</p>

</div>
  </td></tr><tr><td>hasInductionLoop</td><td><code>boolean</code></td><td><p><code>true</code> if the venue has induction loops installed in its functional units where this is
relevant.</p>
</td></tr><tr><td>hasSoundAbsorption</td><td><code>boolean</code></td><td><p>Determines if there is sound absorption installed.</p>
</td></tr><tr><td>{--hasTactileGuideStrips--}</td><td><code>boolean</code></td><td><p><code>true</code> if the venue has tactile guide strips on the floor or at the walls, <code>false</code> if not.
<code>undefined</code> or missing property indicates unknown.</p>


<div class="admonition warning">
  <p class="admonition-title">Deprecated</p>
  <p>Use <code>signageSystems</code> instead.</p>

</div>
  </td></tr><tr><td>{--hasTactileSignage--}</td><td><code>boolean</code></td><td><p><code>true</code> if there is tactile navigation for/to this place, <code>false</code> if not.</p>


<div class="admonition warning">
  <p class="admonition-title">Deprecated</p>
  <p>Use <code>signageSystems</code> instead.</p>

</div>
  </td></tr><tr><td>interactions</td><td><a href="#InteractionMode">InteractionMode</a>[]</td><td><p>Typical interactions at this venue.</p>
</td></tr><tr><td>isQuiet</td><td><code>boolean</code></td><td><p>Determines if the venue is quiet (subjectively, by the assessor). If possible, use the
<code>ambientNoiseLevel</code> property instead.</p>
</td></tr><tr><td>isWellLit</td><td><code>boolean</code></td><td><p>Determines if the venue is well lit (subjectively, by the assessor).  Will be replaced by a
measurable lumen value in the future.</p>
</td></tr><tr><td>media</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#Media">Media</a>[]</td><td><p>Information about media.
<code>null</code> indicates there is no media, <code>undefined</code> or missing property indicates unknown.</p>
</td></tr><tr><td>offersActivitiesForPeopleWith</td><td><a href="#PersonalProfile">PersonalProfile</a></td><td></td></tr><tr><td>parking</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#Parking">Parking</a></td><td><p>Information about parking facilities at/around the venue.
<code>null</code> indicates there is no parking, <code>undefined</code> or missing property indicates unknown.</p>
</td></tr><tr><td>partiallyAccessibleWith</td><td><a href="#PersonalProfile">PersonalProfile</a></td><td></td></tr><tr><td>pathways</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#Pathways">Pathways</a></td><td><p>Describes the accessibility of pathways to the place or inside the place’s boundaries (mixed)</p>
</td></tr><tr><td>pathwaysFromEntrance</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#Pathways">Pathways</a></td><td><p>For places inside other places (e.g. a room inside a building).</p>
</td></tr><tr><td>pathwaysInside</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#Pathways">Pathways</a></td><td><p>Describes the accessibility of pathways to the place or inside the place’s boundaries (mixed)</p>
</td></tr><tr><td>payment</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#Payment">Payment</a></td><td><p>Information about payment at the place.
<code>null</code> indicates there is no payment possible/required,
<code>undefined</code> or missing property indicates unknown.</p>
</td></tr><tr><td>restrooms</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#Restroom">Restroom</a>[]</td><td><p>Describes the accessibility of restrooms in the place.</p>
</td></tr><tr><td>serviceContact</td><td><a href="../i18n">LocalizedString</a></td><td></td></tr><tr><td>signageSystems</td><td><a href="#Signage">Signage</a>[]</td><td><p>Describes local signage systems. If multiple different systems are used, describe them all.</p>
</td></tr><tr><td>smokingPolicy</td><td><a href="#SmokingPolicy">SmokingPolicy</a></td><td><p>Object describing the owner&#39;s smoking policy.</p>
</td></tr><tr><td>staff</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#Staff">Staff</a></td><td><p>Information about the service staff.
<code>null</code> indicates there is no staff, <code>undefined</code> or missing property indicates unknown.</p>
</td></tr><tr><td>surface</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#Surface">Surface</a></td><td><p>Object describing the place&#39;s ground condition. If there are very different ground conditions,
you can create multiple places and nest them.</p>
</td></tr><tr><td>tables</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#Desk">Desk</a>[]</td><td><p>Information about tables (for example in a restaurant).
<code>null</code> indicates there are no tables, <code>undefined</code> or missing property indicates unknown.</p>
</td></tr><tr><td>wheelchairAccessibilityGrade</td><td><a href="#WheelchairAccessibilityGrade">WheelchairAccessibilityGrade</a></td><td><p>Describes the general wheelchair accessibility of the place. This is a human-rated value.
It SHOULD conform to the traffic light system found in OpenStreetMap and Wheelmap.org:</p>
</td></tr><tr><td>wheelchairPlaces</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#WheelchairPlaces">WheelchairPlaces</a></td><td><p>Information about wheelchair places.
<code>null</code> indicates there are no places, <code>undefined</code> or missing property indicates unknown.</p>
</td></tr><tr><td>wifi</td><td><a href="#WifiAccessibility">WifiAccessibility</a></td><td><p>Describes the Wifi availability and accessibility at the place.</p>
</td></tr></table>
  

### <a id="AnimalPolicy">AnimalPolicy</a>

  

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>allowsAssistanceDogs</td><td><code>boolean</code></td><td><p><code>true</code> if the place allows visitors to bring assistance dogs, <code>false</code> if bringing them is
explicitly prohibited, <code>undefined</code> if the policy is unknown.</p>
</td></tr><tr><td>allowsDogs</td><td><code>boolean</code></td><td><p><code>true</code> if the place allows visitors to bring dogs in general, <code>false</code> if bringing them is
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
  

### <a id="CurrencyValue">CurrencyValue</a>

  Describes an amount of paid money in a specific currency, per specified unit, for a specific kind
of access to a service or product.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>access</td><td><code>"private"</code>&nbsp;|&nbsp;<code>"public"</code>&nbsp;|&nbsp;<code>"customers"</code>&nbsp;|&nbsp;<code>"permissive"</code>&nbsp;|&nbsp;<code>"yes"</code>&nbsp;|&nbsp;<code>"no"</code>&nbsp;|&nbsp;<code>"permit"</code>&nbsp;|&nbsp;<code>"designated"</code>&nbsp;|&nbsp;<code>"delivery"</code>&nbsp;|&nbsp;<code>"emergency"</code>&nbsp;|&nbsp;<code>"residents"</code>&nbsp;|&nbsp;<code>"employees"</code>&nbsp;|&nbsp;<code>"disabled"</code>[]</td><td><p>For whom is this amount of money paid?</p>


<div class="admonition warning">
  <p class="admonition-title">Deprecated</p>
  
</div>
  </td></tr><tr><td>amount</td><td><code>number</code></td><td><p>The amount of money.</p>
</td></tr><tr><td>currency</td><td><code>string</code></td><td><p>The currency in which the amount is specified, as three-letter acronym.</p>
</td></tr><tr><td>paymentTypes</td><td><a href="#Payment">Payment</a>[]</td><td><p>The payment method that is used to pay the amount of money.</p>
</td></tr><tr><td>per</td><td><a href="#Quantity">Quantity</a></td><td><p>Unit that is paid with the amount of money, e.g. &quot;minute&quot;, &quot;hour&quot;, &#39;GB&#39;, &#39;piece&#39;</p>
</td></tr></table>
  

### <a id="Desk">Desk</a>

  Describes a desk / table / cash desk / reception counter.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>controlledBySwitch</td><td><a href="#EquipmentProperties">EquipmentProperties</a></td><td><p>Describes an associated switch.</p>
</td></tr><tr><td>controlledBySwitchId</td><td><code>string</code></td><td><p>References a switch (<code>EquipmentInfo</code>) by its ID.</p>
</td></tr><tr><td>depthBelow</td><td><a href="#Length">Length</a></td><td><p>How much space is there under the desk?
This can be used to determine if a wheelchair user can sit at the desk.</p>
</td></tr><tr><td>fixedHeight</td><td><a href="#Length">Length</a></td><td><p>How high is the desk? For variable-height desks, use <code>minimalHeight</code> and <code>maximalHeight</code>
instead.</p>
</td></tr><tr><td>fixedHeightBelow</td><td><a href="#Length">Length</a></td><td><p>How much space is there below the desk?
This can be used to determine if a wheelchair user can sit at the desk.</p>
</td></tr><tr><td>interactions</td><td><a href="#InteractionMode">InteractionMode</a>[]</td><td><p>Indicates how the object can be interacted with.</p>
</td></tr><tr><td>intercom</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#Intercom">Intercom</a></td><td><p>Information about an intercom at this desk, if applicable.</p>
</td></tr><tr><td>isRollUnder</td><td><code>boolean</code></td><td><p><code>true</code> if the desk can be rolled under, <code>false</code> if not.
This can be used to determine if a wheelchair user can sit at the desk.</p>
</td></tr><tr><td>maximalHeight</td><td><a href="#Length">Length</a></td><td><p>How high is the desk maximally? This is only for variable-height desks. Use <code>fixedHeight</code> for
fixed-height desks.
This can be used to determine if a wheelchair user can sit at the desk.</p>
</td></tr><tr><td>minimalHeight</td><td><a href="#Length">Length</a></td><td><p>How high is the desk minimally? This is only for variable-height desks. Use <code>fixedHeight</code> for
fixed-height desks.
This can be used to determine if a wheelchair user can sit at the desk.</p>
</td></tr><tr><td>name</td><td><a href="../i18n">LocalizedString</a></td><td><p>Name of the entrance (helpful if there are multiple entrances).</p>
</td></tr><tr><td>payment</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#Payment">Payment</a></td><td><p>Information about payment at this desk.</p>
</td></tr><tr><td>queueSystem</td><td><a href="#QueueSystem">QueueSystem</a></td><td><p>Describes an associated queue system.</p>
</td></tr><tr><td>turningSpaceInFront</td><td><a href="#Length">Length</a></td><td><p>How much space is there in front of the desk?
This can be used to determine if a wheelchair user can sit at the desk.</p>
</td></tr><tr><td>widthBelow</td><td><a href="#Length">Length</a></td><td><p>How much space is there below the desk?
This can be used to determine if a wheelchair user can sit at the desk.</p>
</td></tr></table>
  

### <a id="Door">Door</a>

  Describes the door of a place's entrance or to one of its facilities (e.g. to a shower, or to
an elevator)

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>access</td><td><code>"private"</code>&nbsp;|&nbsp;<code>"public"</code>&nbsp;|&nbsp;<code>"customers"</code>&nbsp;|&nbsp;<code>"permissive"</code>&nbsp;|&nbsp;<code>"yes"</code>&nbsp;|&nbsp;<code>"no"</code>&nbsp;|&nbsp;<code>"permit"</code>&nbsp;|&nbsp;<code>"designated"</code>&nbsp;|&nbsp;<code>"delivery"</code>&nbsp;|&nbsp;<code>"emergency"</code>&nbsp;|&nbsp;<code>"residents"</code>&nbsp;|&nbsp;<code>"employees"</code>&nbsp;|&nbsp;<code>"disabled"</code>[]</td><td><p>Defines who this door is for. See <a href="https://wiki.openstreetmap.org/wiki/Key:access">https://wiki.openstreetmap.org/wiki/Key:access</a> for more
information.</p>
</td></tr><tr><td>colors</td><td><code>string</code>[]</td><td><p>Describes the colors of the door itself, as HTML color strings. Don&#39;t include the door frame or
door marking colors in this attribute, but use <code>markingColors</code> and <code>doorFrameColors</code> instead.</p>
</td></tr><tr><td>doorFrameColors</td><td><code>string</code>[]</td><td><p>Describes the colors of the door frame, if existent. If they are similar, describe only one
color. Use HTML color strings here.</p>
</td></tr><tr><td>doorOpensToOutside</td><td><code>boolean</code></td><td><p><code>true</code> if the door opens to the outside, <code>false</code> if it opens to the inside.</p>
</td></tr><tr><td>doorbellTopButtonHeight</td><td><a href="#Length">Length</a></td><td><p>Height of the door bell&#39;s top button. If there is a lowered extra door bell (often marked with
a wheelchair user symbol), use the height of this one&#39;s top button.</p>
</td></tr><tr><td>grabBars</td><td><a href="#GrabBars">GrabBars</a></td><td><p>Describes grab bars in front of the door.</p>
</td></tr><tr><td>hasAcousticFeedbackForClosing</td><td><code>boolean</code></td><td><p><code>true</code> if the door makes a sound when closing, <code>false</code> if not.</p>
</td></tr><tr><td>hasAcousticFeedbackForOpening</td><td><code>boolean</code></td><td><p><code>true</code> if the door makes a sound when opening, <code>false</code> if not.</p>
</td></tr><tr><td>hasAcousticFeedbackWhenOpenable</td><td><code>boolean</code></td><td><p><code>true</code> if the door makes a sound when it can be opened, <code>false</code> if not.</p>
</td></tr><tr><td>hasClearMarkingOnGlassDoor</td><td><code>boolean</code></td><td><p><code>true</code> if the door is a glass door, but is marked, <code>false</code> if the door is an unmarked glass
door, <code>undefined</code> if it is no glass door or the condition is unknown.</p>
</td></tr><tr><td>hasErgonomicDoorHandle</td><td><code>boolean</code></td><td><p><code>true</code> if the door&#39;s handle is easy to use (subjectively by the assessor), <code>false</code> if not.</p>
</td></tr><tr><td>hasIntercom</td><td><code>boolean</code></td><td><p><code>true</code> if the door has an intercom system, <code>false</code> if not.</p>
</td></tr><tr><td>hasProximitySensor</td><td><code>boolean</code></td><td><p><code>true</code> if the door has a proximity sensor that triggers the opening mechanism, <code>false</code> if not.</p>
</td></tr><tr><td>hasSwitch</td><td><code>boolean</code></td><td><p><code>true</code> if the door has a switch that triggers the opening mechanism, <code>false</code> if not.</p>
</td></tr><tr><td>hasVisualFeedbackForClosing</td><td><code>boolean</code></td><td><p><code>true</code> if the door has visual feedback when closing, <code>false</code> if not.</p>
</td></tr><tr><td>hasVisualFeedbackForOpening</td><td><code>boolean</code></td><td><p><code>true</code> if the door has visual feedback when opening, <code>false</code> if not.</p>
</td></tr><tr><td>hasVisualFeedbackWhenOpenable</td><td><code>boolean</code></td><td><p><code>true</code> if the door has visual feedback when it can be opened, <code>false</code> if not.</p>
</td></tr><tr><td>hasVisuallyContrastedFrame</td><td><code>boolean</code></td><td><p><code>true</code> if the door frame is visually contrasted to its surrounding wall, <code>false</code> if not.</p>
</td></tr><tr><td>interactions</td><td><a href="#InteractionMode">InteractionMode</a>[]</td><td><p>Indicates how the object can be interacted with.</p>
</td></tr><tr><td>intercom</td><td><a href="#Intercom">Intercom</a></td><td><p>Describes the intercom system of the door.</p>
</td></tr><tr><td>isAlwaysOpen</td><td><code>boolean</code></td><td><p><code>true</code> if the door is there, but always open, <code>false</code> if not.</p>
</td></tr><tr><td>isAutomatic</td><td><code>boolean</code></td><td><p><code>true</code> if the door opens automatically, <code>false</code> if not. The mechanism for opening the door is
defined in other attributes.</p>
</td></tr><tr><td>{--isAutomaticOrAlwaysOpen--}</td><td><code>boolean</code></td><td><p><code>true</code> if the door is always open or automatic, <code>false</code> if it has to be opened manually.</p>


<div class="admonition warning">
  <p class="admonition-title">Deprecated</p>
  <p>Use <code>isAutomatic</code>, <code>isAlwaysOpen</code> or <code>isManual</code> instead.</p>

</div>
  </td></tr><tr><td>isEasyToHoldOpen</td><td><code>boolean</code></td><td><p><code>true</code> if the door is easy to hold open (subjectively by the assessor), <code>false</code> if not.</p>
</td></tr><tr><td>isGlassDoor</td><td><code>boolean</code></td><td><p><code>true</code> if the door is a glass door, <code>false</code> if not.</p>
</td></tr><tr><td>isRevolving</td><td><code>boolean</code></td><td><p><code>true</code> if the door is revolving (like a carousel), <code>false</code> if not.</p>
</td></tr><tr><td>isSliding</td><td><code>boolean</code></td><td><p><code>true</code> if the door is a sliding door, <code>false</code> if not.</p>
</td></tr><tr><td>isTurnstile</td><td><code>boolean</code></td><td><p><code>true</code> if the door is a turnstile, <code>false</code> if not.</p>
</td></tr><tr><td>isVisuallyContrasted</td><td><code>boolean</code></td><td><p><code>true</code> if the door is visually contrasted to its surrounding wall, <code>false</code> if not.</p>
</td></tr><tr><td>markingColors</td><td><code>string</code>[]</td><td><p>Describes the colors of a door marking, if existent, as HTML color strings.</p>
</td></tr><tr><td>nearbyWallColors</td><td><code>string</code>[]</td><td><p>Describes the colors of the walls right next the door. Use HTML color strings here.</p>
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
</td></tr><tr><td>thresholdHeight</td><td><a href="#Length">Length</a></td><td><p>Height of the door’s threshold / sill / step inside the door frame.</p>
</td></tr><tr><td>thresholdIsRounded</td><td><code>boolean</code></td><td></td></tr><tr><td>turningSpaceInFront</td><td><a href="#Length">Length</a></td><td><p>Turning space in front of the door.</p>
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
</td></tr><tr><td>interactions</td><td><a href="#InteractionMode">InteractionMode</a>[]</td><td><p>Indicates how the object can be interacted with.</p>
</td></tr><tr><td>intercomEquipmentId</td><td><code>string</code></td><td><p>reference to the equipment id of the intercom of this entrance (on accessibility.cloud)</p>
</td></tr><tr><td>isLevel</td><td><code>boolean</code></td><td><p><code>true</code> if this entrance has no steps and needs no ramp, <code>false</code> if there are steps or a ramp.</p>
</td></tr><tr><td>isMainEntrance</td><td><code>boolean</code></td><td><p><code>true</code> if this is the main entrance, <code>false</code> if not.</p>
</td></tr><tr><td>name</td><td><a href="../i18n">LocalizedString</a></td><td><p>Name of the entrance (helpful if there are multiple entrances).</p>
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


<div class="admonition warning">
  <p class="admonition-title">Deprecated</p>
  
</div>
  </td></tr><tr><td>accessModeSufficient</td><td><code>string</code>[]</td><td><p>Access mode combinations that allow understanding and using the equipment.</p>


<div class="admonition warning">
  <p class="admonition-title">Deprecated</p>
  
</div>
  </td></tr><tr><td>accessibilityControl</td><td><code>string</code>[]</td><td><p>The accessibility controls that allow controlling this equipment.</p>


<div class="admonition warning">
  <p class="admonition-title">Deprecated</p>
  
</div>
  </td></tr><tr><td>accessibilityFeature</td><td><code>string</code>[]</td><td><p>Indicates features that allow understanding or using the equipment.</p>


<div class="admonition warning">
  <p class="admonition-title">Deprecated</p>
  
</div>
  </td></tr><tr><td>accessibilityHazard</td><td><code>string</code>[]</td><td><p>Indicates hazards that may be an obstacle to understanding or using the equipment.</p>


<div class="admonition warning">
  <p class="admonition-title">Deprecated</p>
  
</div>
  </td></tr><tr><td>alternativeRouteInstructions</td><td><a href="../i18n">LocalizedString</a></td><td><p>Short alternative routing instructions for travelers when they cannot use this facility.</p>


<div class="admonition warning">
  <p class="admonition-title">Deprecated</p>
  
</div>
  </td></tr><tr><td>cabinLength</td><td><a href="#Length">Length</a></td><td><p>Length / depth of the cabin when facing the equipment’s entrance, or <code>undefined</code> if the
equipment has no cabin. For a hoist, this refers to the hoist platform itself.</p>
</td></tr><tr><td>cabinWidth</td><td><a href="#Length">Length</a></td><td><p>Width of the cabin when facing the equipment’s entrance, or <code>undefined</code> if the equipment has no
cabin. For a hoist, this refers to the hoist platform itself.</p>
</td></tr><tr><td>category</td><td><a href="#EquipmentTypes">EquipmentTypes</a></td><td><p>Type of the equipment or facility.</p>
</td></tr><tr><td>description</td><td><a href="../i18n">LocalizedString</a></td><td><p>Describes where the equipment is located. If only one description string is technically
possible to maintain, it MUST not contain any abbreviations to allow being readable aloud by
screen readers or voice assistants.</p>


<div class="admonition warning">
  <p class="admonition-title">Deprecated</p>
  
</div>
  </td></tr><tr><td>disruptionSourceImportId</td><td><code>string</code></td><td><p>Data source ID of a secondary source used for realtime status info on accessibility.cloud</p>
</td></tr><tr><td>door</td><td><a href="#Door">Door</a></td><td><p>Object describing the door to the equipment, or <code>undefined</code> if there is no door.</p>
</td></tr><tr><td>emergencyIntercom</td><td><a href="#Intercom">Intercom</a></td><td><p>Describes the intercom system for emergency calls.</p>
</td></tr><tr><td>hasDoorsAtRightAnglesToEachOther</td><td><code>boolean</code></td><td><p><code>true</code> if the equipment has doors at right angles to each other.</p>
</td></tr><tr><td>hasDoorsInBothDirections</td><td><code>boolean</code></td><td><p><code>true</code> if the equipment has doors in two directions, so wheelchair, rollator, bike or pushchair
users do not have to move backwards to exit.</p>
</td></tr><tr><td>hasExternalFloorSelection</td><td><code>boolean</code></td><td><p>For elevators. <code>true</code> if the elevator needs a command to be entered outside the elevator,
<code>false</code> if not.</p>
</td></tr><tr><td>hasLandings</td><td><code>boolean</code></td><td><p><code>true</code> if the equipment has a landing platform, <code>false</code> if not. Helpful for escalators.</p>
</td></tr><tr><td>hasMirror</td><td><code>boolean</code></td><td><p>For elevators. <code>true</code> if the elevator has a mirror, <code>false</code> if not.</p>
</td></tr><tr><td>hasVisualEmergencyAlarm</td><td><code>boolean</code></td><td><p><code>true</code> if the equipment has a visual emergency alarm, <code>false</code> if not (for example, inside
elevators).</p>
</td></tr><tr><td>heightOfControls</td><td><a href="#Length">Length</a></td><td><p>Height of the lowest working controls that are needed to operate this equipment. <code>undefined</code> if
the equipment needs no controls.</p>
</td></tr><tr><td>ids</td><td><a href="#Record">Record</a></td><td><p>IDs in other data sources that are linked to this equipment, indexed by schema/context.</p>
</td></tr><tr><td>interactions</td><td><a href="#InteractionMode">InteractionMode</a>[]</td><td><p>Indicates how the object can be interacted with.</p>
</td></tr><tr><td>isIndoors</td><td><code>boolean</code></td><td><p><code>true</code> if the equipment is indoors, <code>false</code> if it’s fully or partially outdoors.</p>
</td></tr><tr><td>isSuitableForBicycles</td><td><code>boolean</code></td><td><p>For elevators. <code>true</code> if the elevator can carry a bicycle, <code>false</code> if not.</p>
</td></tr><tr><td>isWorking</td><td><code>boolean</code></td><td><p>Live status update.</p>
</td></tr><tr><td>languages</td><td><a href="#IetfLanguageTagOrSignLanguageCode">IetfLanguageTagOrSignLanguageCode</a>[]</td><td><p>Languages of the equipment’s visible controls and/or voice output.</p>
</td></tr><tr><td>longDescription</td><td><a href="../i18n">LocalizedString</a></td><td><p>Contains the same information as description, but in a longer form which can be read out by a
screen reader or voice assistant.</p>
</td></tr><tr><td>manufacturerName</td><td><a href="../i18n">LocalizedString</a></td><td><p>Official name of the company that manufactured the equipment.</p>
</td></tr><tr><td>manufacturerSerialNumber</td><td><code>string</code></td><td><p>Manufacturer serial number of the equipment / facility.</p>
</td></tr><tr><td>originalData</td><td><code>string</code></td><td><p>Original source data for this equipment (for easier debugging)</p>
</td></tr><tr><td>originalId</td><td><code>string</code></td><td><p>ID of this equipment in the original data source. To simplify communication with the operator,
it’s a good idea to use the operator facility management system ID here.</p>
</td></tr><tr><td>originalPlaceInfoId</td><td><code>string</code></td><td><p>ID of the place that this equipment belongs to (unique in the original data source)</p>
</td></tr><tr><td>outOfOrderReason</td><td><a href="../i18n">LocalizedString</a></td><td><p>Live status update.</p>


<div class="admonition warning">
  <p class="admonition-title">Deprecated</p>
  
</div>
  </td></tr><tr><td>placeInfoId</td><td><code>string</code></td><td><p>Place info ID that this equipment belongs to (accessibility.cloud ID)</p>
</td></tr><tr><td>placeSourceId</td><td><code>string</code></td><td><p>ID of the place data source that this equipment belongs to (accessibility.cloud ID)</p>
</td></tr><tr><td>plannedCompletionDate</td><td><a href="#Date">Date</a></td><td><p>Live status update.</p>
</td></tr><tr><td>sameAs</td><td><code>string</code>[]</td><td><p>URLs of this equipment in external data sources, for example in GTFS, IMDF or other sources.</p>
</td></tr><tr><td>servicePhoneNumber</td><td><code>string</code></td><td><p>Phone number where a service operator can be reached for help using this facility.</p>
</td></tr><tr><td>serviceWebsiteUrl</td><td><code>string</code></td><td><p>URL pointing to a website that describes the equipnent or it&#39;s current operational status.</p>
</td></tr><tr><td>shortDescription</td><td><a href="../i18n">LocalizedString</a></td><td><p>Contains the same information as description, but in a shorter form, to save space on the
screen. This CAN contain Unicode characters such as ⟷ or ↘︎ as well as abbreviations (e.g.
‘pl.’ instead of ‘platform’, ‘dir.’ instead of ‘direction’).</p>
</td></tr><tr><td>sourceId</td><td><code>string</code></td><td><p>Data source ID on accessibility.cloud</p>
</td></tr><tr><td>sourceImportId</td><td><code>string</code></td><td><p>Data import ID on accessibility.cloud</p>
</td></tr><tr><td>stateExplanation</td><td><a href="../i18n">LocalizedString</a></td><td><p>Live status update.</p>
</td></tr><tr><td>stateLastUpdate</td><td><a href="#Date">Date</a></td><td><p>Live status update.</p>
</td></tr></table>
  

### <a id="GrabBars">GrabBars</a>

  Describes grab bars or hand rails.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>continuous</td><td><code>boolean</code></td><td><p>Indicates if the grab bars are continuous or not. Helpful for stair grab rails.</p>
</td></tr><tr><td>distanceBetweenBars</td><td><a href="#Length">Length</a></td><td><p>Indicates how far the bars are apart.</p>
</td></tr><tr><td>foldable</td><td><code>boolean</code></td><td><p><code>true</code> if the grab bars can be folded, <code>false</code> if not..</p>
</td></tr><tr><td>inFrontOfTheUser</td><td><code>boolean</code></td><td><p><code>true</code> if there is a folding handle in front of the user, <code>false</code> if not.</p>
</td></tr><tr><td>interactions</td><td><a href="#InteractionMode">InteractionMode</a>[]</td><td><p>Indicates how the object can be interacted with.</p>
</td></tr><tr><td>onUsersLeftSide</td><td><code>boolean</code></td><td><p><code>true</code> if there is a folding handle on left side, <code>false</code> if not.</p>
</td></tr><tr><td>onUsersRightSide</td><td><code>boolean</code></td><td><p><code>true</code> if there is a folding handle on right side, <code>false</code> if not.</p>
</td></tr><tr><td>topHeightFromFloor</td><td><a href="#Length">Length</a></td><td><p>Indicates how high the grab bars are (top edge, measured from the floor).</p>
</td></tr></table>
  

### <a id="Interactable">Interactable</a>

  

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>interactions</td><td><a href="#InteractionMode">InteractionMode</a>[]</td><td><p>Indicates how the object can be interacted with.</p>
</td></tr></table>
  

### <a id="InteractionMode">InteractionMode</a>

  Describes how you can interact with a thing and which abilities you need to do so.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>action</td><td><a href="#ActionMode">ActionMode</a>[]</td><td><p>Action modes that are absolutely necessary to facilitate the interaction, e.g. ‘pushing a
button’.</p>
</td></tr><tr><td>description</td><td><a href="../i18n">LocalizedString</a></td><td><p>Describes the output as human-readable text.</p>
</td></tr><tr><td>languages</td><td><a href="#IetfLanguageTag">IetfLanguageTag</a>[]</td><td><p>Input languages supported.</p>
</td></tr><tr><td>name</td><td><a href="../i18n">LocalizedString</a></td><td><p>Describes which output is meant. Helpful if there are multiple outputs.</p>
</td></tr><tr><td>optional</td><td><code>boolean</code></td><td><p><code>true</code> if the interaction is optional, <code>false</code> if it is required.</p>
</td></tr><tr><td>perception</td><td><a href="#PerceptionMode">PerceptionMode</a>[]</td><td><p>Perception modes supported to facilitate the interaction.</p>
</td></tr><tr><td>required</td><td><code>boolean</code></td><td><p><code>false</code> if the interaction is optional, <code>true</code> if it is required.</p>
</td></tr></table>
  

### <a id="Intercom">Intercom</a>

  Describes a system to communicate over distance, e.g. a door intercom next to a doorbell.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>ambientNoiseLevel</td><td><a href="#Volume">Volume</a></td><td><p>The ambient noise level when using the intercom.</p>
</td></tr><tr><td>audioIsComprehensible</td><td><code>boolean</code></td><td><p><code>true</code> if intercom system’s audio quality is good enough for understanding speech, <code>false</code>
if not.</p>
</td></tr><tr><td>description</td><td><a href="../i18n">LocalizedString</a></td><td></td></tr><tr><td>hasAudio</td><td><code>boolean</code></td><td><p><code>true</code> if the door has an audio intercom system, <code>false</code> if not.</p>
</td></tr><tr><td>hasVideoCamera</td><td><code>boolean</code></td><td><p><code>true</code> if the door has a video intercom system, <code>false</code> if not.</p>
</td></tr><tr><td>hasVisualFeedbackOnConnection</td><td><code>boolean</code></td><td><p><code>true</code> if the intercom system has a visual feedback, <code>false</code> if not. Visual feedback might be
a screen or light that displays if a connection is established.</p>
</td></tr><tr><td>interactions</td><td><a href="#InteractionMode">InteractionMode</a>[]</td><td><p>Indicates how the object can be interacted with.</p>
</td></tr><tr><td>necessaryGripHeight</td><td><a href="#Length">Length</a></td><td><p>The height of the top control element of the intercom system.</p>
</td></tr><tr><td>needsKeyPad</td><td><code>boolean</code></td><td><p><code>true</code> if you need to use a key pad to pass this door, <code>false</code> if not.</p>
</td></tr></table>
  

### <a id="Media">Media</a>

  Describes a media unit provided at this place, for example an exhibit at a museum or a movie in
a cinema.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>accessMode</td><td><code>string</code>[]</td><td><p>Access modes supported by this equipment.</p>


<div class="admonition warning">
  <p class="admonition-title">Deprecated</p>
  
</div>
  </td></tr><tr><td>accessModeSufficient</td><td><code>string</code>[]</td><td><p>Access mode combinations that allow understanding and using the equipment.</p>


<div class="admonition warning">
  <p class="admonition-title">Deprecated</p>
  
</div>
  </td></tr><tr><td>accessibilityControl</td><td><code>string</code>[]</td><td><p>The accessibility controls that allow controlling this equipment.</p>


<div class="admonition warning">
  <p class="admonition-title">Deprecated</p>
  
</div>
  </td></tr><tr><td>accessibilityFeature</td><td><code>string</code>[]</td><td><p>Indicates the access mode combinations that allow understanding and using the equipment.</p>


<div class="admonition warning">
  <p class="admonition-title">Deprecated</p>
  
</div>
  </td></tr><tr><td>accessibilityHazard</td><td><code>string</code>[]</td><td><p>Indicates the access mode combinations that allow understanding and using the equipment.</p>


<div class="admonition warning">
  <p class="admonition-title">Deprecated</p>
  
</div>
  </td></tr><tr><td>hasAudioDescription</td><td><code>boolean</code></td><td><p>Is the media unit provided with audio description?</p>
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
</td></tr><tr><td>isTactile</td><td><code>boolean</code></td><td><p>Is the media tactile?</p>
</td></tr><tr><td>languages</td><td><a href="#IetfLanguageTagOrSignLanguageCode">IetfLanguageTagOrSignLanguageCode</a>[]</td><td><p>Specifies which languages (including sign languages) in which the media unit is provided</p>
</td></tr><tr><td>name</td><td><a href="../i18n">LocalizedString</a></td><td><p>Name of the media unit (relevant if there are multiple units of the same kind)</p>
</td></tr><tr><td>sameAs</td><td><code>string</code>[]</td><td><p>URLs that contain the media. Use this to link data, for example with <a href="https://www.w3.org/RDF/">RDF</a>.</p>
</td></tr><tr><td>turningSpaceInFront</td><td><a href="#Length">Length</a></td><td><p>If the media is consumed while the consumer is directly in front of it, this property specifies
how much turning space there is in front of it.</p>
</td></tr><tr><td>type</td><td><code>"document"</code>&nbsp;|&nbsp;<code>"menu"</code>&nbsp;|&nbsp;<code>"guide"</code>&nbsp;|&nbsp;<code>"tour"</code>&nbsp;|&nbsp;<code>"presentation"</code>&nbsp;|&nbsp;<code>"exhibit"</code>&nbsp;|&nbsp;<code>"movie"</code>&nbsp;|&nbsp;<code>"play"</code>&nbsp;|&nbsp;<code>"screen"</code>&nbsp;|&nbsp;<code>"website"</code></td><td><p>Type of the media unit</p>
</td></tr></table>
  

### <a id="Mirror">Mirror</a>

  Describes a mirror.

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

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>isKerbstoneFree</td><td><code>boolean</code></td><td><p><code>true</code> if the pathway is kerbstone-free, <code>false</code> if not, <code>undefined</code> if condition is unknown.</p>
</td></tr><tr><td>surface</td><td><a href="#Surface">Surface</a></td><td></td></tr><tr><td>width</td><td><a href="#Length">Length</a></td><td><p>Width constraints of all pathways inside a place relevant for consumers.</p>
</td></tr><tr><td>widthAtObstacles</td><td><a href="#Length">Length</a></td><td><p>Width constraints of all pathways inside a place relevant for consumers.</p>
</td></tr></table>
  

### <a id="Payment">Payment</a>

  The `Payment` interface describes the payment options at a location.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>acceptsBills</td><td><code>boolean</code></td><td></td></tr><tr><td>acceptsCoins</td><td><code>boolean</code></td><td></td></tr><tr><td>acceptsCreditCards</td><td><code>boolean</code></td><td></td></tr><tr><td>acceptsDebitCards</td><td><code>boolean</code></td><td></td></tr><tr><td>acceptsPaymentByMobilePhone</td><td><code>boolean</code></td><td></td></tr><tr><td>customPaymentMetaInfo</td><td><a href="../i18n">LocalizedString</a>[]</td><td></td></tr><tr><td>hasPortablePaymentSystem</td><td><code>boolean</code></td><td></td></tr></table>
  

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

  Properties of a place of interest.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>access</td><td><code>"private"</code>&nbsp;|&nbsp;<code>"public"</code>&nbsp;|&nbsp;<code>"customers"</code>&nbsp;|&nbsp;<code>"permissive"</code>&nbsp;|&nbsp;<code>"yes"</code>&nbsp;|&nbsp;<code>"no"</code>&nbsp;|&nbsp;<code>"permit"</code>&nbsp;|&nbsp;<code>"designated"</code>&nbsp;|&nbsp;<code>"delivery"</code>&nbsp;|&nbsp;<code>"emergency"</code>&nbsp;|&nbsp;<code>"residents"</code>&nbsp;|&nbsp;<code>"employees"</code>&nbsp;|&nbsp;<code>"disabled"</code>[]</td><td><p>Defines who this restroom is for. See <a href="https://wiki.openstreetmap.org/wiki/Key:access">https://wiki.openstreetmap.org/wiki/Key:access</a> for more
information.</p>
</td></tr><tr><td>accessibility</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#Accessibility">Accessibility</a></td><td><p>The accessibility of this place. <code>null</code> indicates that this place has no data, <code>undefined</code> or
missing property indicates unknown.</p>
</td></tr><tr><td>address</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#StructuredAddress">StructuredAddress</a></td><td><p>The address of this place. <code>null</code> indicates that this place has no address, <code>undefined</code> or
missing property indicates unknown.</p>
</td></tr><tr><td>category</td><td><code>string</code></td><td><p>Category name of the place</p>


<div class="admonition warning">
  <p class="admonition-title">Deprecated</p>
  
</div>
  </td></tr><tr><td>description</td><td><a href="../i18n">LocalizedString</a></td><td><p>Text description containing helpful information for people with disabilities.</p>
</td></tr><tr><td>editPageUrl</td><td><code>string</code></td><td><p>URL of the original data source’s website on a subpage that allows to edit the original data.</p>
</td></tr><tr><td>emailAddress</td><td><code>string</code></td><td><p>Email address of the place&#39;s operator where you can get accessibility relevant information.</p>
</td></tr><tr><td>ids</td><td><a href="#Record">Record</a></td><td><p>IDs in other data sources that are linked to this equipment, indexed by schema/context.</p>
</td></tr><tr><td>infoPageUrl</td><td><code>string</code></td><td><p>URL of the original data source’s website describing this place.</p>
</td></tr><tr><td>name</td><td><a href="../i18n">LocalizedString</a></td><td><p>The official name of this place.</p>
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

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>{--accuracy--}</td><td><code>number</code></td><td><p>± in given units, uniform error.</p>


<div class="admonition warning">
  <p class="admonition-title">Deprecated</p>
  <p>Please use the <code>precision</code> property instead.</p>

</div>
  </td></tr><tr><td>operator</td><td><a href="#Operator">Operator</a></td><td><p>the operator, indicating the value is not an absolute value</p>
</td></tr><tr><td>precision</td><td><code>number</code></td><td><p>± in given units, uniform error</p>
</td></tr><tr><td>rangeInclusive</td><td><code>number</code></td><td><p>± in given units, inclusive range</p>
</td></tr><tr><td>rawValue</td><td><code>string</code></td><td><p>raw, imported value, eg. &#39;90 .. 120cm&#39; - only required when importing</p>
</td></tr><tr><td>unit</td><td><code>string</code></td><td><p>one of the length units in js-quantities</p>
</td></tr><tr><td>value</td><td><code>number</code></td><td><p>the value in the specified unit</p>
</td></tr></table>
  

### <a id="QueueSystem">QueueSystem</a>

  Describes a system that encourages or forces people to queue up.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>canSkipQueueWithDisability</td><td><code>boolean</code></td><td><p><code>true</code> if you can skip the queue with a disability, <code>false</code> if not.</p>
</td></tr><tr><td>grabBars</td><td><a href="#GrabBars">GrabBars</a></td><td><p>Grab bars inside the queueing system, if applicable.</p>
</td></tr><tr><td>interactions</td><td><a href="#InteractionMode">InteractionMode</a>[]</td><td><p>Indicates how the object can be interacted with.</p>
</td></tr><tr><td>needsTickets</td><td><code>boolean</code></td><td><p><code>true</code> if the queueing uses tickets (usually numbered), <code>false</code> if not.</p>
</td></tr><tr><td>numberOfQueueServerPoints</td><td><code>number</code></td><td><p>Number of queue server points.</p>
</td></tr><tr><td>numberOfSeats</td><td><code>number</code></td><td><p>Number of seats that can be used by people while waiting in the queue.</p>
</td></tr><tr><td>ticketEquipment</td><td><a href="#EquipmentInfo">EquipmentInfo</a></td><td><p>The ticket printer, if existing.</p>
</td></tr><tr><td>ticketEquipmentId</td><td><code>string</code></td><td><p>The ticket printer&#39;s ID on accessibility.cloud, if existing.</p>
</td></tr><tr><td>usesCattleBars</td><td><code>boolean</code></td><td><p><code>true</code> if the queueing uses rails / cattle bars, <code>false</code> if not.</p>
</td></tr></table>
  

### <a id="Restroom">Restroom</a>

  Describes a `Room` that contains one or more `Toilet`s or `Shower`s.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>access</td><td><code>"private"</code>&nbsp;|&nbsp;<code>"public"</code>&nbsp;|&nbsp;<code>"customers"</code>&nbsp;|&nbsp;<code>"permissive"</code>&nbsp;|&nbsp;<code>"yes"</code>&nbsp;|&nbsp;<code>"no"</code>&nbsp;|&nbsp;<code>"permit"</code>&nbsp;|&nbsp;<code>"designated"</code>&nbsp;|&nbsp;<code>"delivery"</code>&nbsp;|&nbsp;<code>"emergency"</code>&nbsp;|&nbsp;<code>"residents"</code>&nbsp;|&nbsp;<code>"employees"</code>&nbsp;|&nbsp;<code>"disabled"</code>[]</td><td><p>Defines who this restroom is for. See <a href="https://wiki.openstreetmap.org/wiki/Key:access">https://wiki.openstreetmap.org/wiki/Key:access</a> for more information.</p>
</td></tr><tr><td>address</td><td><a href="#StructuredAddress">StructuredAddress</a></td><td></td></tr><tr><td>description</td><td><a href="../i18n">LocalizedString</a></td><td></td></tr><tr><td>entrance</td><td><a href="#Entrance">Entrance</a></td><td><p>Object describing the entrance to this restroom.</p>
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
</td></tr><tr><td>interactions</td><td><a href="#InteractionMode">InteractionMode</a>[]</td><td><p>Indicates how the object can be interacted with.</p>
</td></tr><tr><td>isAccessibleWithWheelchair</td><td><code>boolean</code></td><td><p><code>true</code> if the room&#39;s relevant facilities are completely accessible while using a wheelchair,
<code>false</code> if not, <code>undefined</code> if the condition is unknown or difficult to assess.</p>
</td></tr><tr><td>mirror</td><td><a href="#Mirror">Mirror</a></td><td><p>Describes a mirror, if existing.</p>
</td></tr><tr><td>sameAs</td><td><code>string</code>[]</td><td></td></tr><tr><td>shower</td><td><a href="#Shower">Shower</a></td><td><p>Object describing a shower inside this restroom, if existing.</p>
</td></tr><tr><td>signIcons</td><td><code>"allGender"</code>&nbsp;|&nbsp;<code>"female"</code>&nbsp;|&nbsp;<code>"male"</code>&nbsp;|&nbsp;<code>"personInWheelchair"</code>&nbsp;|&nbsp;<code>"changingTable"</code>&nbsp;|&nbsp;<code>"baby"</code>&nbsp;|&nbsp;<code>"family"</code>&nbsp;|&nbsp;<code>"urinal"</code>&nbsp;|&nbsp;<code>"washBasin"</code>&nbsp;|&nbsp;<code>"toiletBowl"</code>[]</td><td><p>Visible icons on the restroom’s sign</p>
</td></tr><tr><td>toilet</td><td><a href="#Toilet">Toilet</a></td><td><p>Object describing a toilet inside the restroom, if existing.</p>
</td></tr><tr><td>turningSpaceInside</td><td><a href="#Length">Length</a></td><td><p>How wide is the space inside that is usable for turning?</p>
</td></tr><tr><td>usageFee</td><td><a href="#CurrencyValue">CurrencyValue</a>[]</td><td><p>Defines how much you have to pay to use this restroom. There might be multiple fee amounts,
e.g. for different access types or usage times.</p>
</td></tr><tr><td>washBasin</td><td><a href="#WashBasin">WashBasin</a></td><td><p>Object describing a wash basin belonging to this restroom. It can be outside of the restroom.</p>
</td></tr></table>
  

### <a id="Room">Room</a>

  Describes a room inside a structure.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>address</td><td><a href="#StructuredAddress">StructuredAddress</a></td><td></td></tr><tr><td>description</td><td><a href="../i18n">LocalizedString</a></td><td></td></tr><tr><td>interactions</td><td><a href="#InteractionMode">InteractionMode</a>[]</td><td><p>Indicates how the object can be interacted with.</p>
</td></tr><tr><td>isAccessibleWithWheelchair</td><td><code>boolean</code></td><td><p><code>true</code> if the room&#39;s relevant facilities are completely accessible while using a wheelchair,
<code>false</code> if not, <code>undefined</code> if the condition is unknown or difficult to assess.</p>
</td></tr><tr><td>sameAs</td><td><code>string</code>[]</td><td></td></tr></table>
  

### <a id="Seat">Seat</a>

  Describes one or multiple seats / chairs / benches / stools / couches / sofas / armchairs / ...

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>columns</td><td><code>number</code>[]</td><td><p>The seat column numbers. This is only for seats in a fixed seating arrangement.</p>
</td></tr><tr><td>controlledBySwitch</td><td><a href="#EquipmentProperties">EquipmentProperties</a></td><td><p>Describes an associated switch.</p>
</td></tr><tr><td>controlledBySwitchId</td><td><code>string</code></td><td><p>References a switch (<code>EquipmentInfo</code>) by its ID.</p>
</td></tr><tr><td>description</td><td><a href="../i18n">LocalizedString</a></td><td><p>Name of the entrance (helpful if there are multiple entrances).</p>
</td></tr><tr><td>fixedHeight</td><td><a href="#Length">Length</a></td><td><p>How high is the desk? For variable-height desks, use <code>minimalHeight</code> and <code>maximalHeight</code>
instead.</p>
</td></tr><tr><td>interactions</td><td><a href="#InteractionMode">InteractionMode</a>[]</td><td><p>How can you interact with something at this seat?</p>
</td></tr><tr><td>intercom</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#Intercom">Intercom</a></td><td><p>Information about an intercom at this seat, if applicable.</p>
</td></tr><tr><td>isCenterColumn</td><td><code>boolean</code></td><td><p>The seat is located at the center of the seating arrangement, laterally.</p>
</td></tr><tr><td>isFixed</td><td><code>boolean</code></td><td><p>The seat is fixed.</p>
</td></tr><tr><td>isFoldable</td><td><code>boolean</code></td><td><p>The seat can be folded.</p>
</td></tr><tr><td>isFrontRow</td><td><code>boolean</code></td><td><p>The seat is located at the front row of the seating arrangement.</p>
</td></tr><tr><td>isLastRow</td><td><code>boolean</code></td><td><p>The seat is located at the last row of the seating arrangement.</p>
</td></tr><tr><td>isMobile</td><td><code>boolean</code></td><td><p>The seat is mobile.</p>
</td></tr><tr><td>isWheelchairAccessible</td><td><code>boolean</code></td><td><p>The seat is wheelchair accessible.</p>
</td></tr><tr><td>maximalHeight</td><td><a href="#Length">Length</a></td><td><p>How high is the desk maximally? This is only for variable-height desks. Use <code>fixedHeight</code> for
fixed-height desks.
This can be used to determine if a wheelchair user can sit at the desk.</p>
</td></tr><tr><td>minimalHeight</td><td><a href="#Length">Length</a></td><td><p>How high is the desk minimally? This is only for variable-height desks. Use <code>fixedHeight</code> for
fixed-height desks.
This can be used to determine if a wheelchair user can sit at the desk.</p>
</td></tr><tr><td>name</td><td><a href="../i18n">LocalizedString</a></td><td><p>Name of the entrance (helpful if there are multiple entrances).</p>
</td></tr><tr><td>payment</td><td><code>undefined</code>&nbsp;|&nbsp;<a href="#Payment">Payment</a></td><td><p>Information about payment at this seat or the cost of using this seat.</p>
</td></tr><tr><td>reservedForPersonsWith</td><td><a href="#PersonalProfile">PersonalProfile</a></td><td><p>The seat is reserved for persons with the given profile.</p>
</td></tr><tr><td>rows</td><td><code>number</code>[]</td><td><p>The seat row numbers. This is only for seats in a fixed seating arrangement.</p>
</td></tr><tr><td>turningSpaceInFront</td><td><a href="#Length">Length</a></td><td><p>How much space is there in front of the desk?
This can be used to determine if a wheelchair user can sit at the desk.</p>
</td></tr></table>
  

### <a id="Shower">Shower</a>

  Describes a shower.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>door</td><td><a href="#Door">Door</a></td><td></td></tr><tr><td>grabBars</td><td><a href="#GrabBars">GrabBars</a></td><td><p>Ergonomic handles inside the shower.</p>
</td></tr><tr><td>hasShowerSeat</td><td><code>boolean</code></td><td><p><code>true</code> if the shower has a seat, <code>false</code> if not, <code>undefined</code> if condition is unknown..</p>
</td></tr><tr><td>hasSupportRails</td><td><code>boolean</code></td><td><p><code>true</code> if the shower has support rails, <code>false</code> if not, <code>undefined</code> if condition is unknown.</p>
</td></tr><tr><td>showerSeatIsFolding</td><td><code>boolean</code></td><td><p><code>true</code> if the shower seat can be folded, <code>false</code> if not, <code>undefined</code> if condition is unknown.</p>
</td></tr><tr><td>showerSeatIsRemovable</td><td><code>boolean</code></td><td><p><code>true</code> if the shower seat can be removed from the shower easily, <code>false</code> if not, <code>undefined</code>
if condition is unknown.</p>
</td></tr><tr><td>stairs</td><td><a href="#Stairs">Stairs</a></td><td></td></tr><tr><td>supportRailsHeight</td><td><a href="#Length">Length</a></td><td><p>At which height are the support rails? Measured from the top.</p>
</td></tr></table>
  

### <a id="Signage">Signage</a>

  Describes a signage / physical navigation system belonging to a location.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>description</td><td><a href="../i18n">LocalizedString</a></td><td><p>A description of the signage.</p>
</td></tr><tr><td>fontHeight</td><td><a href="#Length">Length</a></td><td><p>The height of the font used on the signage. Most likely in millimeters, using a range.</p>
</td></tr><tr><td>hasAudio</td><td><code>boolean</code></td><td><p><code>true</code> if the signage has audio, <code>false</code> if not, <code>undefined</code> if condition is unknown.</p>
</td></tr><tr><td>hasBraille</td><td><code>boolean</code></td><td><p><code>true</code> if the signage has braille, <code>false</code> if not, <code>undefined</code> if condition is unknown.</p>
</td></tr><tr><td>hasNumbers</td><td><code>boolean</code></td><td><p><code>true</code> if the signage uses a numbering scheme, <code>false</code> if not, <code>undefined</code> if condition is
unknown.</p>
</td></tr><tr><td>hasPictograms</td><td><code>boolean</code></td><td><p><code>true</code> if the signage has pictograms, <code>false</code> if not, <code>undefined</code> if condition is unknown.</p>
</td></tr><tr><td>hasRaisedLetters</td><td><code>boolean</code></td><td><p><code>true</code> if the signage has raised letters, <code>false</code> if not, <code>undefined</code> if condition is unknown.</p>
</td></tr><tr><td>hasSearch</td><td><code>boolean</code></td><td><p><code>true</code> if the signage has a search function, <code>false</code> if not, <code>undefined</code> if condition is
unknown.</p>
</td></tr><tr><td>hasTactileGuideStrips</td><td><code>boolean</code></td><td><p><code>true</code> if the signage has tactile guide strips, <code>false</code> if not, <code>undefined</code> if condition is
nknown.</p>
</td></tr><tr><td>hasTactileHandRails</td><td><code>boolean</code></td><td><p><code>true</code> if the signage has tactile hand rails, <code>false</code> if not, <code>undefined</code> if condition is
unknown.</p>
</td></tr><tr><td>hasTactileMap</td><td><code>boolean</code></td><td><p><code>true</code> if the signage has a tactile map, <code>false</code> if not, <code>undefined</code> if condition is unknown.</p>
</td></tr><tr><td>hasTactileNorthMarkers</td><td><code>boolean</code></td><td><p><code>true</code> if the signage has tactile north markers, <code>false</code> if not, <code>undefined</code> if condition is
unknown.</p>
</td></tr><tr><td>hasTactilePaving</td><td><code>boolean</code></td><td><p><code>true</code> if the signage has tactile paving, <code>false</code> if not, <code>undefined</code> if condition is unknown.</p>
</td></tr><tr><td>hasTactileRoomNames</td><td><code>boolean</code></td><td><p><code>true</code> if the signage has tactile room names, <code>false</code> if not, <code>undefined</code> if condition is
unknown.</p>
</td></tr><tr><td>hasText</td><td><code>boolean</code></td><td><p><code>true</code> if the signage has text features, <code>false</code> if not, <code>undefined</code> if condition is unknown.</p>
</td></tr><tr><td>hasVideo</td><td><code>boolean</code></td><td><p><code>true</code> if the signage has video, <code>false</code> if not, <code>undefined</code> if condition is unknown.</p>
</td></tr><tr><td>hasVirtualMap</td><td><code>boolean</code></td><td><p><code>true</code> if the signage has a virtual map, <code>false</code> if not, <code>undefined</code> if condition is unknown.</p>
</td></tr><tr><td>highLegibility</td><td><code>boolean</code></td><td><p><code>true</code> if the signage has high legibility, <code>false</code> if not, <code>undefined</code> if condition is unknown.</p>
</td></tr><tr><td>isHighContrast</td><td><code>boolean</code></td><td><p><code>true</code> if the signage has high contrast, <code>false</code> if not, <code>undefined</code> if condition is unknown.</p>
</td></tr><tr><td>sitemap</td><td><a href="#EquipmentInfo">EquipmentInfo</a></td><td><p>Information about the sitemap.</p>
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
</td></tr><tr><td>floors</td><td><code>string</code>[]</td><td><p>Floor numbers that are accessible via these stairs.</p>
</td></tr><tr><td>grabBars</td><td><a href="#GrabBars">GrabBars</a></td><td><p>Grab bars belonging to the stairs.</p>
</td></tr><tr><td>hasAntiSlipNosing</td><td><code>boolean</code></td><td><p><code>true</code> if all relevant steps are made with anti-slip material.</p>
</td></tr><tr><td>hasBrailleSignage</td><td><code>boolean</code></td><td><p><code>true</code> if there is braille navigation in this staircase, <code>false</code> if not.</p>
</td></tr><tr><td>hasHandRail</td><td><code>boolean</code></td><td><p><code>true</code> if there is a handrail covering all relevant steps, <code>false</code> if not.</p>
</td></tr><tr><td>hasHighContrastNosing</td><td><code>boolean</code></td><td><p><code>true</code> if all relevant steps have a high contrast nosing.</p>
</td></tr><tr><td>hasMetalGrating</td><td><code>boolean</code></td><td><p>Do the stairs have metal grating? This is difficult to navigate for people with assistance
dogs.</p>
</td></tr><tr><td>hasTactileSafetyStrips</td><td><code>boolean</code></td><td><p><code>true</code> if all relevant steps have tactile safety surfaces, used as warnings, implying textures
detectable with the touch of a foot or sweep of a cane.</p>
</td></tr><tr><td>hasTactileSignage</td><td><code>boolean</code></td><td><p><code>true</code> if there is tactile navigation in this staircase, <code>false</code> if not.</p>
</td></tr><tr><td>isSpiral</td><td><code>boolean</code></td><td><p><code>true</code> if the stairs are spiral, <code>false</code> if not.</p>
</td></tr><tr><td>isWellLit</td><td><code>boolean</code></td><td><p>Are the stairs and podests well lit?</p>
</td></tr><tr><td>name</td><td><a href="../i18n">LocalizedString</a></td><td><p>If there are multiple staircase, you SHOULD indicate a name for this staircase here.</p>
</td></tr><tr><td>stepHeight</td><td><a href="#Length">Length</a></td><td><p>Indicates how high the steps if these stairs are (can be a range).</p>
</td></tr></table>
  

### <a id="StructuredAddress">StructuredAddress</a>

  The address of a places as Address as a series of structured attributes.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>areas</td><td><a href="../i18n">LocalizedString</a>[]</td><td><p>An array of named areas below the district and above street.
In some regions such areas might also contain street names,
when individual street segments have names separate from the name of the whole road.</p>
</td></tr><tr><td>building</td><td><a href="../i18n">LocalizedString</a></td><td><p>Building name</p>
</td></tr><tr><td>city</td><td><a href="../i18n">LocalizedString</a></td><td><p>The name of the primary locality of the place.</p>
</td></tr><tr><td>countryCode</td><td><code>string</code></td><td><p>A three-letter country code in ISO 3166-1 alpha-3, see <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3">https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3</a></p>
</td></tr><tr><td>county</td><td><a href="../i18n">LocalizedString</a></td><td><p>A division of a state; typically a secondary-level administrative division of a country or
equivalent.</p>
</td></tr><tr><td>district</td><td><a href="../i18n">LocalizedString</a></td><td><p>A division of city; typically an administrative unit within a larger
city or a customary name of a city&#39;s neighborhood.</p>
</td></tr><tr><td>house</td><td><a href="../i18n">LocalizedString</a></td><td><p>House or street number.</p>
</td></tr><tr><td>levelIndex</td><td><code>number</code></td><td><p>Relative in relation to other levels. <code>0</code> for ground level must have index 0, <code>1</code> for first
level, etc. You can use half numbers for levels like &quot;1.5&quot;.</p>
</td></tr><tr><td>levelName</td><td><a href="../i18n">LocalizedString</a></td><td><p>Name of the level. Example: &quot;Floor 1&quot;, &quot;Ground level&quot;.</p>
</td></tr><tr><td>postalCode</td><td><a href="../i18n">LocalizedString</a></td><td><p>An alphanumeric string included in a postal address to
facilitate mail sorting (a.k.a. post code, postcode, or ZIP code).</p>
</td></tr><tr><td>regions</td><td><a href="../i18n">LocalizedString</a>[]</td><td><p>For address conventions where more than to levels of named areas above the city level are in
use, the regions attribute provides an array with all additional area names, ordered by
decreasing size (starting with the highest subdivision below state)</p>
</td></tr><tr><td>room</td><td><a href="../i18n">LocalizedString</a></td><td><p>Room name. Example: &quot;Meeting room &#39;Rome&#39;&quot;.</p>
</td></tr><tr><td>roomNumber</td><td><a href="../i18n">LocalizedString</a></td><td><p>Room number. Example: &quot;B-101&quot;.</p>
</td></tr><tr><td>state</td><td><a href="../i18n">LocalizedString</a></td><td><p>A division of a country; typically a first-level administrative division of a country and/or a
geographical region.</p>
</td></tr><tr><td>stateCode</td><td><code>string</code></td><td><p>A code/abbreviation for the state division of a country.</p>
</td></tr><tr><td>street</td><td><a href="../i18n">LocalizedString</a></td><td><p>Street name (in practice may also contain street number).</p>
</td></tr><tr><td>text</td><td><a href="../i18n">LocalizedString</a></td><td><p>A displayable, formatted address as rich text.</p>
</td></tr></table>
  

### <a id="Surface">Surface</a>

  Describes the surface of a ground or path.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>lateralSlope</td><td><a href="#Slope">Slope</a></td><td></td></tr><tr><td>longitudinalSlope</td><td><a href="#Slope">Slope</a></td><td></td></tr><tr><td>smoothness</td><td><code>"excellent"</code>&nbsp;|&nbsp;<code>"good"</code>&nbsp;|&nbsp;<code>"intermediate"</code>&nbsp;|&nbsp;<code>"bad"</code>&nbsp;|&nbsp;<code>"horrible"</code>&nbsp;|&nbsp;<code>"impassable"</code>&nbsp;|&nbsp;<code>"very_bad"</code>&nbsp;|&nbsp;<code>"very_horrible"</code>&nbsp;|&nbsp;<code>"very_good"</code></td><td><p>According to <a href="https://wiki.openstreetmap.org/wiki/Key:smoothness">https://wiki.openstreetmap.org/wiki/Key:smoothness</a></p>
</td></tr><tr><td>turningSpace</td><td><a href="#Length">Length</a></td><td><p>Turning space that this ground provides to people.</p>
</td></tr><tr><td>types</td><td><code>"undefined"</code>&nbsp;|&nbsp;<code>"none"</code>&nbsp;|&nbsp;<code>"acrylic"</code>&nbsp;|&nbsp;<code>"aluminium"</code>&nbsp;|&nbsp;<code>"anti-slip"</code>&nbsp;|&nbsp;<code>"artificial"</code>&nbsp;|&nbsp;<code>"artificial_grass"</code>&nbsp;|&nbsp;<code>"artificial_turf"</code>&nbsp;|&nbsp;<code>"asfalto"</code>&nbsp;|&nbsp;<code>"ash"</code>&nbsp;|&nbsp;<code>"asphalt"</code>&nbsp;|&nbsp;<code>"astroturf"</code>&nbsp;|&nbsp;<code>"bamboo"</code>&nbsp;|&nbsp;<code>"bare_rock"</code>&nbsp;|&nbsp;<code>"bark"</code>&nbsp;|&nbsp;<code>"barkchips"</code>&nbsp;|&nbsp;<code>"bedrock"</code>&nbsp;|&nbsp;<code>"bitumen"</code>&nbsp;|&nbsp;<code>"bituminous"</code>&nbsp;|&nbsp;<code>"block"</code>&nbsp;|&nbsp;<code>"boardwalk"</code>&nbsp;|&nbsp;<code>"boulders"</code>&nbsp;|&nbsp;<code>"brick"</code>&nbsp;|&nbsp;<code>"brick_weave"</code>&nbsp;|&nbsp;<code>"bricks"</code>&nbsp;|&nbsp;<code>"bushes"</code>&nbsp;|&nbsp;<code>"carpet"</code>&nbsp;|&nbsp;<code>"cement"</code>&nbsp;|&nbsp;<code>"chalk"</code>&nbsp;|&nbsp;<code>"chipseal"</code>&nbsp;|&nbsp;<code>"cinder"</code>&nbsp;|&nbsp;<code>"clay"</code>&nbsp;|&nbsp;<code>"cobblestone"</code>&nbsp;|&nbsp;<code>"compacted"</code>&nbsp;|&nbsp;<code>"compacted_gravel"</code>&nbsp;|&nbsp;<code>"composite"</code>&nbsp;|&nbsp;<code>"con"</code>&nbsp;|&nbsp;<code>"concrete"</code>&nbsp;|&nbsp;<code>"concrete_slab"</code>&nbsp;|&nbsp;<code>"concrete_slabs"</code>&nbsp;|&nbsp;<code>"construction"</code>&nbsp;|&nbsp;<code>"coral"</code>&nbsp;|&nbsp;<code>"coral_sand"</code>&nbsp;|&nbsp;<code>"crushed_limestone"</code>&nbsp;|&nbsp;<code>"crushed_shells"</code>&nbsp;|&nbsp;<code>"debris"</code>&nbsp;|&nbsp;<code>"decoturf"</code>&nbsp;|&nbsp;<code>"dirt"</code>&nbsp;|&nbsp;<code>"earth"</code>&nbsp;|&nbsp;<code>"enrobé"</code>&nbsp;|&nbsp;<code>"fine_gravel"</code>&nbsp;|&nbsp;<code>"fine_sand"</code>&nbsp;|&nbsp;<code>"flagstone"</code>&nbsp;|&nbsp;<code>"footway"</code>&nbsp;|&nbsp;<code>"glass"</code>&nbsp;|&nbsp;<code>"goudron"</code>&nbsp;|&nbsp;<code>"granite"</code>&nbsp;|&nbsp;<code>"grass"</code>&nbsp;|&nbsp;<code>"grass_paver"</code>&nbsp;|&nbsp;<code>"grass_scrub"</code>&nbsp;|&nbsp;<code>"grassland"</code>&nbsp;|&nbsp;<code>"grating"</code>&nbsp;|&nbsp;<code>"gravel"</code>&nbsp;|&nbsp;<code>"green"</code>&nbsp;|&nbsp;<code>"grit"</code>&nbsp;|&nbsp;<code>"ground"</code>&nbsp;|&nbsp;<code>"hardcore"</code>&nbsp;|&nbsp;<code>"ice"</code>&nbsp;|&nbsp;<code>"ice_road"</code>&nbsp;|&nbsp;<code>"interlock"</code>&nbsp;|&nbsp;<code>"iron"</code>&nbsp;|&nbsp;<code>"laterite"</code>&nbsp;|&nbsp;<code>"lawn"</code>&nbsp;|&nbsp;<code>"leaves"</code>&nbsp;|&nbsp;<code>"limerock"</code>&nbsp;|&nbsp;<code>"limestone"</code>&nbsp;|&nbsp;<code>"linoleum"</code>&nbsp;|&nbsp;<code>"loose_gravel"</code>&nbsp;|&nbsp;<code>"marble"</code>&nbsp;|&nbsp;<code>"marble_plate"</code>&nbsp;|&nbsp;<code>"meadow"</code>&nbsp;|&nbsp;<code>"metal"</code>&nbsp;|&nbsp;<code>"metal_grid"</code>&nbsp;|&nbsp;<code>"mixed"</code>&nbsp;|&nbsp;<code>"moss"</code>&nbsp;|&nbsp;<code>"mud"</code>&nbsp;|&nbsp;<code>"mulch"</code>&nbsp;|&nbsp;<code>"native"</code>&nbsp;|&nbsp;<code>"natural"</code>&nbsp;|&nbsp;<code>"oil"</code>&nbsp;|&nbsp;<code>"overgrown"</code>&nbsp;|&nbsp;<code>"path"</code>&nbsp;|&nbsp;<code>"paved"</code>&nbsp;|&nbsp;<code>"pavement"</code>&nbsp;|&nbsp;<code>"paving"</code>&nbsp;|&nbsp;<code>"paving_stone"</code>&nbsp;|&nbsp;<code>"paving_stones"</code>&nbsp;|&nbsp;<code>"peat"</code>&nbsp;|&nbsp;<code>"pebbles"</code>&nbsp;|&nbsp;<code>"pebblestone"</code>&nbsp;|&nbsp;<code>"plank"</code>&nbsp;|&nbsp;<code>"plastic"</code>&nbsp;|&nbsp;<code>"plates"</code>&nbsp;|&nbsp;<code>"rasin"</code>&nbsp;|&nbsp;<code>"residential"</code>&nbsp;|&nbsp;<code>"rock"</code>&nbsp;|&nbsp;<code>"rocks"</code>&nbsp;|&nbsp;<code>"rocky"</code>&nbsp;|&nbsp;<code>"roman_paving"</code>&nbsp;|&nbsp;<code>"rubber"</code>&nbsp;|&nbsp;<code>"rubbercrumb"</code>&nbsp;|&nbsp;<code>"rubble"</code>&nbsp;|&nbsp;<code>"salt"</code>&nbsp;|&nbsp;<code>"sand"</code>&nbsp;|&nbsp;<code>"sandstone"</code>&nbsp;|&nbsp;<code>"sawdust"</code>&nbsp;|&nbsp;<code>"scree"</code>&nbsp;|&nbsp;<code>"scrub"</code>&nbsp;|&nbsp;<code>"sealed"</code>&nbsp;|&nbsp;<code>"sett"</code>&nbsp;|&nbsp;<code>"shell"</code>&nbsp;|&nbsp;<code>"shells"</code>&nbsp;|&nbsp;<code>"shingle"</code>&nbsp;|&nbsp;<code>"slabs"</code>&nbsp;|&nbsp;<code>"snow"</code>&nbsp;|&nbsp;<code>"soil"</code>&nbsp;|&nbsp;<code>"spur"</code>&nbsp;|&nbsp;<code>"steel"</code>&nbsp;|&nbsp;<code>"stepping_stones"</code>&nbsp;|&nbsp;<code>"stone"</code>&nbsp;|&nbsp;<code>"stones"</code>&nbsp;|&nbsp;<code>"synthetic"</code>&nbsp;|&nbsp;<code>"tactile_paving"</code>&nbsp;|&nbsp;<code>"tar"</code>&nbsp;|&nbsp;<code>"tared"</code>&nbsp;|&nbsp;<code>"tarmac"</code>&nbsp;|&nbsp;<code>"tartan"</code>&nbsp;|&nbsp;<code>"terra"</code>&nbsp;|&nbsp;<code>"terre"</code>&nbsp;|&nbsp;<code>"tile"</code>&nbsp;|&nbsp;<code>"tiles"</code>&nbsp;|&nbsp;<code>"timber"</code>&nbsp;|&nbsp;<code>"track"</code>&nbsp;|&nbsp;<code>"trail"</code>&nbsp;|&nbsp;<code>"trees"</code>&nbsp;|&nbsp;<code>"tuff"</code>&nbsp;|&nbsp;<code>"turf"</code>&nbsp;|&nbsp;<code>"unhewn_cobblestone"</code>&nbsp;|&nbsp;<code>"unpaved"</code>&nbsp;|&nbsp;<code>"unpaved2"</code>&nbsp;|&nbsp;<code>"unpaved33"</code>&nbsp;|&nbsp;<code>"unpaved_minor"</code>&nbsp;|&nbsp;<code>"unsealed"</code>&nbsp;|&nbsp;<code>"water"</code>&nbsp;|&nbsp;<code>"wood"</code>&nbsp;|&nbsp;<code>"wood_chips"</code>&nbsp;|&nbsp;<code>"woodchips"</code>&nbsp;|&nbsp;<code>"zebra"</code>[]</td><td><p>According to <a href="https://wiki.openstreetmap.org/wiki/Key:surface">https://wiki.openstreetmap.org/wiki/Key:surface</a></p>
</td></tr></table>
  

### <a id="TechCombination">TechCombination</a>

  Describes a combination of technologies that are used together to achieve a specific goal.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>description</td><td><a href="../i18n">LocalizedString</a></td><td><p>Localizable description of the combination. Can describe in which mode or for what goal the
tech is used.</p>
</td></tr><tr><td>name</td><td><a href="../i18n">LocalizedString</a></td><td><p>Localizable name/title of the combination. Can describe in which mode or for what goal the
tech is used.</p>
</td></tr><tr><td>uris</td><td><code>string</code>[]</td><td><p>URIs of technologies that are combined together to form this tech combination. Use RDF if
possible.</p>
</td></tr></table>
  

### <a id="Toilet">Toilet</a>

  Describes a single toilet that can be inside a restroom or cabin.

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>flushMechanism</td><td><a href="#EquipmentProperties">EquipmentProperties</a></td><td><p>Describes the flush mechanism as equipment. Use <code>actionMode</code> and/or <code>perceptionMode</code> on the
properties to describe the mechanism.</p>
</td></tr><tr><td>flushMechanismDistanceFromToilet</td><td><a href="#Length">Length</a></td><td><p>Indicates how far the flush mechanism is from the toilet, from the perspective of a the floor
plan. If the flush mechanism is right behind the toilet, this is a 0 length.</p>
</td></tr><tr><td>grabBars</td><td><a href="#GrabBars">GrabBars</a></td><td><p>Object describing the grab bars.</p>
</td></tr><tr><td>hasAutomaticFlush</td><td><code>boolean</code></td><td><p><code>true</code> if the toilet is automatically flushing after use.</p>
</td></tr><tr><td>heightOfBase</td><td><a href="#Length">Length</a></td><td><p>Indicates the height of the toilet’s base.</p>
</td></tr><tr><td>isSquatToilet</td><td><code>boolean</code></td><td><p>Indicates whether the toilet is a squat toilet.</p>
</td></tr><tr><td>isUrinal</td><td><code>boolean</code></td><td><p>Indicates whether the toilet is a urinal.</p>
</td></tr><tr><td>secondaryFlushMechanism</td><td><a href="#EquipmentProperties">EquipmentProperties</a></td><td><p>Describes the secondary flush mechanism as equipment. Use <code>actionMode</code> and/or <code>perceptionMode</code>
on the properties to describe the mechanism.</p>
</td></tr><tr><td>secondaryFlushMechanismDistanceFromToilet</td><td><a href="#Length">Length</a></td><td><p>Indicates how far the flush mechanism is from the toilet, from the perspective of a the floor
plan. If the flush mechanism is right behind the toilet, this is a 0 length.</p>
</td></tr><tr><td>spaceInFront</td><td><a href="#Length">Length</a></td><td><p>How much space is in front of the toilet?</p>
</td></tr><tr><td>spaceOnUsersLeftSide</td><td><a href="#Length">Length</a></td><td><p>How much space is on the left side of the toilet? (from the perspective of somebody using the
toilet)</p>
</td></tr><tr><td>spaceOnUsersRightSide</td><td><a href="#Length">Length</a></td><td><p>How much space is on the right side of the toilet? (from the perspective of somebody using the
toilet)</p>
</td></tr></table>
  

### <a id="WashBasin">WashBasin</a>

  Describes a wash basin.

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
</td></tr><tr><td>location</td><td><a href="../i18n">LocalizedString</a></td><td><p>Describes where the parking is located.</p>
</td></tr><tr><td>maxVehicleHeight</td><td><a href="#Length">Length</a></td><td><p>Maximal allowed vehicle height for users of this parking.</p>
</td></tr><tr><td>neededParkingPermits</td><td><a href="../i18n">LocalizedString</a>[]</td><td><p>List of permit names that allow using this parking.</p>


<div class="admonition warning">
  <p class="admonition-title">Deprecated</p>
  
</div>
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

  <table><tr><td>Name</td><td>Type</td><td></td></tr><tr><td>descriptionWhereToGetLoginData</td><td><a href="../i18n">LocalizedString</a></td><td><p>Describes where you get the login data / guest pass.</p>
</td></tr><tr><td>hasCaptivePortal</td><td><code>boolean</code></td><td><p><code>true</code> if the wifi has a captive portal website.</p>
</td></tr><tr><td>hasFixedPassword</td><td><code>boolean</code></td><td><p><code>true</code> if the wifi has a fixed password. Knowing this password must be enough to enter and use
the wifi.</p>
</td></tr><tr><td>isCaptivePortalAccessible</td><td><code>boolean</code></td><td><p><code>true</code> if the wifi captive portal is accessible (WAI/ARIA).</p>
</td></tr><tr><td>isOpenToEveryone</td><td><code>boolean</code></td><td><p><code>true</code> if the wifi is open to everyone, <code>false</code> if it is explicitly not.</p>
</td></tr><tr><td>isOpenToStaff</td><td><code>boolean</code></td><td><p><code>true</code> if the wifi is open to explicit place staff, <code>false</code> if explicitly not.</p>
</td></tr><tr><td>isOpenToVisitors</td><td><code>boolean</code></td><td><p><code>true</code> if the wifi is open to explicit place visitors, <code>false</code> if explicitly not.</p>
</td></tr><tr><td>needsGuestPass</td><td><code>boolean</code></td><td><p><code>true</code> if you need a personalized guest pass / code / password to use the wifi, <code>false</code> if not.</p>
</td></tr><tr><td>password</td><td><code>string</code></td><td><p>A string with the Wifi password. Only use this attribute if security allows to publish this
info online publicly.</p>
</td></tr><tr><td>ssid</td><td><code>string</code></td><td><p>A string with the Wifi name (SSID). Only use this attribute if security allows to publish this
info online publicly.</p>
</td></tr><tr><td>usageFee</td><td><a href="#CurrencyValue">CurrencyValue</a>[]</td><td><p>Describes if you need to pay a usage fee to use the wifi, or if no fee is needed.</p>
</td></tr></table>
  
