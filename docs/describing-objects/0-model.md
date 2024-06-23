# Core Data Model

<style>
    .source-link {
      float: right;
    }
  </style>

This is a list of data structures that A11yJSON specifies.

They are meant to be interfaces in the software development sense: This means you can either use
them as they are, or mix them into your own model.

### <a id="Accessibility">Accessibility</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Accessibility.ts#L93)</span>

  <p>Describes the physical (and sometimes human rated) accessibility of a place.</p>


  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">accessibleWith</td><td class="property-type"><a href="#PersonalProfile">PersonalProfile</a></td><td class="property-docs"></td></tr><tr><td class="property-name">ambientNoiseLevel</td><td class="property-type"><a href="#Volume">Volume</a></td><td class="property-docs"><p>Ambient noise level in dB(A) relative to a reference pressure of 0.00002 Pa. Median over a
10-second period at least.</p>
</td></tr><tr><td class="property-name">animalPolicy</td><td class="property-type"><a href="#AnimalPolicy">AnimalPolicy</a></td><td class="property-docs"><p>Object describing the owner&#39;s policy regarding visitors bringing animals with them.</p>
</td></tr><tr><td class="property-name">appointmentPolicies</td><td class="property-type"><a href="#AppointmentPolicy">AppointmentPolicy</a>[]</td><td class="property-docs"><p>Describes how you can get an appointment for this place, or if you need one.</p>
</td></tr><tr><td class="property-name">availableEquipment</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#EquipmentProperties">EquipmentProperties</a>[]</td><td class="property-docs"><p>Information about the place&#39;s equipment.</p>
<p>Use this property for equipment that does not need to be locatable in a specific geolocation,
but belongs to a place.</p>
</td></tr><tr><td class="property-name">desks</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Desk">Desk</a>[]</td><td class="property-docs"><p>Describes the accessibility of desks in the place.
<code>null</code> indicates there are no desks, <code>undefined</code> or missing property indicates unknown.</p>
</td></tr><tr><td class="property-name">entrances</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Entrance">Entrance</a>[]</td><td class="property-docs"><p>Describes the accessibility of entrances to the place.</p>
</td></tr><tr><td class="property-name">hasAirConditioning</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>Determines if there is air conditioning installed and actively used.</p>
</td></tr><tr><td class="property-name">hasBackgroundMusic</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>Determines if there is background music playing.</p>
</td></tr><tr><td class="property-name">hasBrailleSignage</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if there is braille navigation for/to this place, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">hasInductionLoop</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the venue has induction loops installed in its functional units where this is
relevant.</p>
</td></tr><tr><td class="property-name">hasLowStimulusEnvironment</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the venue has a designated low-stimulus room or environment, <code>false</code> if not.
Can help with hypersensitivity to sensory input.</p>
</td></tr><tr><td class="property-name">hasPatientLifter</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the venue has a patient lifter (MedTech) installed, <code>false</code> if not..</p>
</td></tr><tr><td class="property-name">hasSoundAbsorption</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>Determines if there is sound absorption installed.</p>
</td></tr><tr><td class="property-name">hasTactileGuideStrips</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the venue has tactile guide strips on the floor or at the walls, <code>false</code> if not.
<code>undefined</code> or missing property indicates unknown.</p>
</td></tr><tr><td class="property-name">hasTactileSignage</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if there is tactile navigation for/to this place, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">interactions</td><td class="property-type">
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

<code>getDrinks</code>

<code>getFood</code>

<code>getService</code>

<code>getTreatment</code>

<code>listen</code>

<code>main</code>

<code>order</code>

<code>orderAnnouncement</code>

<code>pay</code>

<code>pickUpOrder</code>

<code>play</code>

<code>read</code>

<code>rent</code>

<code>roam</code>

<code>see</code>

<code>sell</code>

<code>use</code>

<code>useLockers</code>

<code>useService</code>

<code>visit</code>

<code>watch</code>

<code>watchMovies</code>

<code>watchPlays</code>

<code>workHere</code>
</p>

Values must be of type <a href="#InteractionMode">InteractionMode</a>.
</td><td class="property-docs"><p>An object that indicates how the object can be interacted with, or how you can engange in the
main function of a place or thing.</p>
<p>The keys of this object are the interaction types, and the values are <a href="../0-model/#InteractionMode">InteractionMode</a>
objects.</p>
</td></tr><tr><td class="property-name">isQuiet</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>Determines if the venue is quiet (subjectively, by the assessor). If possible, use the
<code>ambientNoiseLevel</code> property instead.</p>
</td></tr><tr><td class="property-name">isWellLit</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>Determines if the venue is well lit (subjectively, by the assessor).  Will be replaced by a
measurable lumen value in the future.</p>
</td></tr><tr><td class="property-name">media</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Media">Media</a>[]</td><td class="property-docs"><p>Information about media.
<code>null</code> indicates there is no media, <code>undefined</code> or missing property indicates unknown.</p>
</td></tr><tr><td class="property-name">offersActivitiesForPeopleWith</td><td class="property-type"><a href="#PersonalProfile">PersonalProfile</a></td><td class="property-docs"></td></tr><tr><td class="property-name">offersTreatmentWithoutLeavingWheelchair</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> for healthcare providers that offer that wheelchair users do not have to leave their
wheelchair for treatment, <code>false</code> if this is not possible.</p>
</td></tr><tr><td class="property-name">parking</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Parking">Parking</a></td><td class="property-docs"><p>Information about parking facilities at/around the venue.
<code>null</code> indicates there is no parking, <code>undefined</code> or missing property indicates unknown.</p>
</td></tr><tr><td class="property-name">partiallyAccessibleWith</td><td class="property-type"><a href="#PersonalProfile">PersonalProfile</a></td><td class="property-docs"></td></tr><tr><td class="property-name">pathways</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Pathways">Pathways</a></td><td class="property-docs"><p>Describes the accessibility of pathways to the place or inside the place’s boundaries (mixed)</p>
</td></tr><tr><td class="property-name">pathwaysFromEntrance</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Pathways">Pathways</a></td><td class="property-docs"><p>For places inside other places (e.g. a room inside a building).</p>
<p>Describes the accessibility of pathways to the place. If an extra accessible entrance exists,
describe pathways from there to this place.</p>
</td></tr><tr><td class="property-name">pathwaysInside</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Pathways">Pathways</a></td><td class="property-docs"><p>Describes the accessibility of pathways to the place or inside the place’s boundaries (mixed)</p>
</td></tr><tr><td class="property-name">payment</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Payment">Payment</a></td><td class="property-docs"><p>Information about payment at the place.
<code>null</code> indicates there is no payment possible/required,
<code>undefined</code> or missing property indicates unknown.</p>
</td></tr><tr><td class="property-name">queueSystem</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#QueueSystem">QueueSystem</a></td><td class="property-docs"><p>Information about the place&#39;s queue system.</p>
</td></tr><tr><td class="property-name">restrooms</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Restroom">Restroom</a>[]</td><td class="property-docs"><p>Describes the accessibility of restrooms that belong to the place.</p>
</td></tr><tr><td class="property-name">rooms</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Room">Room</a>[]</td><td class="property-docs"><p>Describes the accessibility of rooms that belong to the place.</p>
</td></tr><tr><td class="property-name">serviceContact</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">signageSystems</td><td class="property-type"><a href="#Signage">Signage</a>[]</td><td class="property-docs"><p>Describes local signage systems. If multiple different systems are used, describe them all.</p>
</td></tr><tr><td class="property-name">smokingPolicy</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>allowedEverywhere</code>

<code>dedicatedToSmoking</code>

<code>inIsolatedArea</code>

<code>inSeparateArea</code>

<code>onlyOutside</code>

<code>prohibited</code>
</p>
</td><td class="property-docs"><p>Object describing the owner&#39;s smoking policy.</p>
</td></tr><tr><td class="property-name">staff</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Staff">Staff</a></td><td class="property-docs"><p>Information about the service staff.
<code>null</code> indicates there is no staff, <code>undefined</code> or missing property indicates unknown.</p>
</td></tr><tr><td class="property-name">surface</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Surface">Surface</a></td><td class="property-docs"><p>Object describing the place&#39;s ground condition. If there are very different ground conditions,
you can create multiple places and nest them.</p>
</td></tr><tr><td class="property-name">tables</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Desk">Desk</a>[]</td><td class="property-docs"><p>Information about tables (for example in a restaurant).
<code>null</code> indicates there are no tables, <code>undefined</code> or missing property indicates unknown.</p>
</td></tr><tr><td class="property-name">wheelchairAccessibilityGrade</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>fully</code>

<code>not</code>

<code>partially</code>
</p>
</td><td class="property-docs"><p>Describes the general wheelchair accessibility of the place. This is a human-rated value.</p>
</td></tr><tr><td class="property-name">wheelchairPlaces</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#WheelchairPlaces">WheelchairPlaces</a></td><td class="property-docs"><p>Information about wheelchair places.
<code>null</code> indicates there are no places, <code>undefined</code> or missing property indicates unknown.</p>
</td></tr><tr><td class="property-name">wifi</td><td class="property-type"><a href="#WifiAccessibility">WifiAccessibility</a></td><td class="property-docs"><p>Describes the Wifi availability and accessibility at the place.</p>
</td></tr></table>

  

### <a id="ActionMode">ActionMode</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/ActionMode.ts#L61)</span>

  <p>Describes necessary abilities and modes inputting information.</p>


  
  

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
</td><td class="property-docs"><p>Who has access to this action?</p>
</td></tr><tr><td class="property-name">activationForce</td><td class="property-type"><a href="#Force">Force</a></td><td class="property-docs"><p>Force needed for the described input method.</p>
</td></tr><tr><td class="property-name">activationTimeInterval</td><td class="property-type"><a href="#TimeInterval">TimeInterval</a></td><td class="property-docs"><p>Time interval needed for activation/engagement.</p>
</td></tr><tr><td class="property-name">apiDocumentationUrl</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>The input API documentation URL.</p>
</td></tr><tr><td class="property-name">attentionSpan</td><td class="property-type"><a href="#TimeInterval">TimeInterval</a></td><td class="property-docs"><p>Attention time needed for activation/engagement.</p>
</td></tr><tr><td class="property-name">bodyHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>A supported body height.</p>
</td></tr><tr><td class="property-name">bodyMass</td><td class="property-type"><a href="#Mass">Mass</a></td><td class="property-docs"><p>A supported body weight.</p>
</td></tr><tr><td class="property-name">brailleKeyboard</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to write textual content with a braille keyboard is supported or needed.</p>
</td></tr><tr><td class="property-name">brailleText</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to read braille is supported or needed.</p>
</td></tr><tr><td class="property-name">burnHazard</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>There is a burn hazard.</p>
</td></tr><tr><td class="property-name">cable</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>A cable is supported or needed.</p>
</td></tr><tr><td class="property-name">capacitive</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The action uses a capacity sensor, for example a touch sensor.</p>
</td></tr><tr><td class="property-name">carryWeight</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to carry a weight is supported or needed.</p>
</td></tr><tr><td class="property-name">clap</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>Clapping your hands is supported or needed.</p>
</td></tr><tr><td class="property-name">click</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to click a button with a finger is supported or needed.</p>
</td></tr><tr><td class="property-name">description</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Describes the output as human-readable text.</p>
</td></tr><tr><td class="property-name">direction</td><td class="property-type">One of the following strings:

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
</td><td class="property-docs"><p>The direction of the action, relative to the body.</p>
</td></tr><tr><td class="property-name">directionAxis</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>axial</code>

<code>coronal</code>

<code>sagittal</code>
</p>
</td><td class="property-docs"><p>The direction axis of the action, relative to the body.</p>
</td></tr><tr><td class="property-name">doubleClick</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to click a button with a finger is supported or needed.</p>
</td></tr><tr><td class="property-name">drag</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to drag an object is supported or needed.</p>
</td></tr><tr><td class="property-name">dragAndDropGesture</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to do a virtual drag-and-drop finger/mouse gesture is supported or needed.</p>
</td></tr><tr><td class="property-name">educationLevel</td><td class="property-type"><a href="#Number">Number</a></td><td class="property-docs"><p>Education level needed to understand the action.</p>
<p><a href="http://www.ibe.unesco.org/en/glossary-curriculum-terminology/l/levels-education">http://www.ibe.unesco.org/en/glossary-curriculum-terminology/l/levels-education</a></p>
<ul>
<li>early childhood education (level 0)</li>
<li>primary education (level 1)</li>
<li>lower secondary education (level 2)</li>
<li>upper secondary education (level 3)</li>
<li>postsecondary non-tertiary education (level 4)</li>
<li>short-cycle tertiary education (level 5)</li>
<li>bachelor’s or equivalent level (level 6)</li>
<li>master’s or equivalent level (level 7)</li>
<li>doctor or equivalent level (level 8).</li>
</ul>
</td></tr><tr><td class="property-name">eyeTracker</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to use an eye tracker is supported or needed.</p>
</td></tr><tr><td class="property-name">faceRecognition</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The input uses face recognition.</p>
</td></tr><tr><td class="property-name">feedback</td><td class="property-type"><a href="#PerceptionMode">PerceptionMode</a></td><td class="property-docs"><p>How is feedback given for an input?</p>
</td></tr><tr><td class="property-name">fingerprintScan</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The input uses a fingerprint scanner.</p>
</td></tr><tr><td class="property-name">handwriting</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to write textual content by hand is supported or needed.</p>
</td></tr><tr><td class="property-name">haptic</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>Haptic input is supported or needed.</p>
</td></tr><tr><td class="property-name">headPointer</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to use a head pointer is supported or needed.</p>
</td></tr><tr><td class="property-name">headphone</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>Headphones are supported or needed.</p>
</td></tr><tr><td class="property-name">highContrast</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>The input has high contrast elements, for example around buttons.</p>
</td></tr><tr><td class="property-name">instructionsUrl</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>URL describing how to use the input mechanism.</p>
</td></tr><tr><td class="property-name">irisScan</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The input uses an iris scanner.</p>
</td></tr><tr><td class="property-name">isEasyToFind</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the item is easy to find, <code>false</code> if people might face difficulties trying to
find the item, or <code>undefined</code> if this is unknown or irrelevant.</p>
</td></tr><tr><td class="property-name">isEasyToUnderstand</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the input is easy to understand, <code>false</code> if people might face difficulties trying to
understand how the input works, or <code>undefined</code> if this is unknown or irrelevant.</p>
</td></tr><tr><td class="property-name">joystick</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to use a joystick is supported or needed.</p>
</td></tr><tr><td class="property-name">keyboard</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to write textual content by typing on a keyboard is supported or needed.</p>
</td></tr><tr><td class="property-name">keypad</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to write numbers by typing on a keypad is supported or needed.</p>
</td></tr><tr><td class="property-name">knob</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The action uses a knob.</p>
</td></tr><tr><td class="property-name">knurled</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>The input has a knurled surface, for example around buttons.</p>
</td></tr><tr><td class="property-name">languages</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"><p>Input languages supported.</p>
</td></tr><tr><td class="property-name">leftHanded</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>You can or must give input with your left hand.</p>
</td></tr><tr><td class="property-name">lick</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to lick an object with your tongue is supported or needed (e.g. a lollipop)</p>
</td></tr><tr><td class="property-name">morseCode</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>Morse code input is supported or needed.</p>
</td></tr><tr><td class="property-name">mouse</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to use a mouse is supported or needed.</p>
</td></tr><tr><td class="property-name">move</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to move an object is supported or needed.</p>
</td></tr><tr><td class="property-name">name</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Describes which output is meant. Helpful if there are multiple outputs.</p>
</td></tr><tr><td class="property-name">necessaryClimbHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>Height you need to be able to climb over (for obstacles)</p>
</td></tr><tr><td class="property-name">necessaryEyeHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>How tall do you have to be to perceive the content/output/signal.</p>
</td></tr><tr><td class="property-name">necessaryGripHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>The height you need to grip to perceive the content/output/signal.</p>
</td></tr><tr><td class="property-name">optional</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the action is optional, <code>false</code> if it is required.</p>
</td></tr><tr><td class="property-name">paper</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>Handling paper is supported or needed.</p>
</td></tr><tr><td class="property-name">pedal</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to use a pedal is supported or needed.</p>
</td></tr><tr><td class="property-name">photo</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The input makes a photo.</p>
</td></tr><tr><td class="property-name">pinch</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to pinch an object is supported or needed.</p>
</td></tr><tr><td class="property-name">pinchFingerGesture</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to use a pinch finger gesture is supported or needed.</p>
</td></tr><tr><td class="property-name">press</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to apply force to an object is supported or needed.</p>
</td></tr><tr><td class="property-name">pullSwitch</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to use a pull switch is supported or needed.</p>
</td></tr><tr><td class="property-name">pullstring</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to use a pullstring is supported or needed.</p>
</td></tr><tr><td class="property-name">pushButton</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to use a push button is supported or needed.</p>
</td></tr><tr><td class="property-name">pushSwitch</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to use a push switch is supported or needed.</p>
</td></tr><tr><td class="property-name">qrCode</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>A QR code is supported or needed.</p>
</td></tr><tr><td class="property-name">raisedText</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p><code>true</code> if the controls or signs have raised letters, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">required</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>false</code> if the action is optional, <code>true</code> if it is required.</p>
</td></tr><tr><td class="property-name">rhythm</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to use rhythm input is supported or needed.</p>
</td></tr><tr><td class="property-name">rightHanded</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>You can or must give input with your right hand.</p>
</td></tr><tr><td class="property-name">rotate</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to rotate an object is supported or needed.</p>
</td></tr><tr><td class="property-name">rotateTwoFingersGesture</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to use a two-finger rotation gesture is supported or needed.</p>
</td></tr><tr><td class="property-name">scratch</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to scratch is supported or needed.</p>
</td></tr><tr><td class="property-name">screen</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>A screen is supported or needed.</p>
</td></tr><tr><td class="property-name">signLanguage</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to use sign language is supported or needed.</p>
</td></tr><tr><td class="property-name">singleHanded</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>You can or must give input with one hand.</p>
</td></tr><tr><td class="property-name">sipAndPuff</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to use a sip and puff switch is supported or needed.</p>
</td></tr><tr><td class="property-name">smell</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to smell is supported or needed.</p>
</td></tr><tr><td class="property-name">soundRecording</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The input makes a sound recording.</p>
</td></tr><tr><td class="property-name">speak</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to speak is supported or needed.</p>
</td></tr><tr><td class="property-name">squeeze</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to squeeze an object is supported or needed.</p>
</td></tr><tr><td class="property-name">stateCount</td><td class="property-type"><code>number</code></td><td class="property-docs"><p>State count for a button or switch, for example 2 for a toggle button, 3 for a 3-way button.</p>
</td></tr><tr><td class="property-name">swipeFingerGesture</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to use a swipe finger gesture is supported or needed.</p>
</td></tr><tr><td class="property-name">swipeThreeFingersGesture</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to use a three-finger swipe gesture is supported or needed.</p>
</td></tr><tr><td class="property-name">swipeTwoFingersGesture</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to use a three-finger swipe gesture is supported or needed.</p>
</td></tr><tr><td class="property-name">tactile</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>Tactile input is supported or needed.</p>
</td></tr><tr><td class="property-name">tactileGuides</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The input has tactile guides, for example around buttons.</p>
</td></tr><tr><td class="property-name">tap</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to tap an element with a finger is supported or needed.</p>
</td></tr><tr><td class="property-name">tearApart</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to tear something apart is supported or needed.</p>
</td></tr><tr><td class="property-name">techSufficient</td><td class="property-type"><a href="#TechCombination">TechCombination</a>[]</td><td class="property-docs"><p>Technology combinations that are sufficient to make use of the output.</p>
</td></tr><tr><td class="property-name">techSupported</td><td class="property-type"><a href="#TechCombination">TechCombination</a>[]</td><td class="property-docs"><p>Technologies that are sufficient to make use of the output.</p>
</td></tr><tr><td class="property-name">tilt</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to tilt an object is supported or needed.</p>
</td></tr><tr><td class="property-name">tongue</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to move an object with your tongue is supported or needed.</p>
</td></tr><tr><td class="property-name">touch</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>Touch input is supported or needed.</p>
</td></tr><tr><td class="property-name">touchscreen</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>Touchscreen input is supported or needed.</p>
</td></tr><tr><td class="property-name">trackball</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to use a trackball is supported or needed.</p>
</td></tr><tr><td class="property-name">tripleClick</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to click a button with a finger is supported or needed.</p>
</td></tr><tr><td class="property-name">turn</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to turn an object is supported or needed.</p>
</td></tr><tr><td class="property-name">turnKnob</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to turn a knob is supported or needed.</p>
</td></tr><tr><td class="property-name">twoHanded</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>You can or must give input with both hands.</p>
</td></tr><tr><td class="property-name">url</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>URL where you can use the input mechanism, e.g. on your phone.</p>
</td></tr><tr><td class="property-name">video</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The input makes a video.</p>
</td></tr><tr><td class="property-name">visualRecognition</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p><code>true</code> if the input user interface needs or supports visual input, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">voiceActivation</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p><code>true</code> if the control is activated by voice, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">walk</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>Walking is supported or needed.</p>
</td></tr><tr><td class="property-name">wave</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>Waving your hands is supported or needed.</p>
</td></tr><tr><td class="property-name">weight</td><td class="property-type"><a href="#Mass">Mass</a></td><td class="property-docs"><p>A weight you need to be able to lift.</p>
</td></tr><tr><td class="property-name">wheel</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The input features a wheel.</p>
</td></tr><tr><td class="property-name">wireless</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The input is wireless.</p>
</td></tr></table>

  

### <a id="AnimalPolicy">AnimalPolicy</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/AnimalPolicy.ts#L4)</span>

  

  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">allowsAssistanceDogs</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the place allows visitors to bring assistance dogs, <code>false</code> if bringing them is
explicitly prohibited, <code>undefined</code> if the policy is unknown.</p>
</td></tr><tr><td class="property-name">allowsDogs</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the place allows visitors to bring dogs in general, <code>false</code> if bringing them is
explicitly prohibited (with exception of dogs specified by <code>allowsGuideDogs</code> and
<code>allowsTherapyAnimals</code>), <code>undefined</code> if the policy is unknown.</p>
</td></tr><tr><td class="property-name">allowsGuideDogs</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the place allows visitors to bring guide dogs, <code>false</code> if bringing them is
explicitly prohibited, <code>undefined</code> if the policy is unknown.</p>
</td></tr><tr><td class="property-name">allowsServiceAnimals</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the place allows bringing any kind of animal, <code>false</code> or <code>undefined</code> if not or if
there are exceptions.</p>
</td></tr><tr><td class="property-name">dogsNeedMuzzle</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the place denies entry to visitors bringing a dogs without muzzles, <code>false</code> if
dogs without muzzles are explicitly allowed.</p>
</td></tr><tr><td class="property-name">suppliesWaterForPets</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the place supplies water for accompanying animals, <code>false</code> if explicitly not, or
<code>undefined</code> if unknown.</p>
</td></tr></table>

  

### <a id="AppointmentPolicy">AppointmentPolicy</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/AppointmentPolicy.ts#L14)</span>

  <p>Mixin to link <a href="../0-model/#InteractionMode">InteractionMode</a> objects to your model.</p>


  
  

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
</td><td class="property-docs"><p>Who can make this kind of appointment.</p>
</td></tr><tr><td class="property-name">allowsWalkIn</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if you need no appointment to visit the place.</p>
</td></tr><tr><td class="property-name">bookingURL</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>The URL to a page where the appointment can be booked.</p>
</td></tr><tr><td class="property-name">description</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Describes this policy as text string, e.g. ‘home visits possible if you are over 60’. Use the
other fields only if the described place has only one typical policy (like at a hairdresser).</p>
</td></tr><tr><td class="property-name">equipmentProperties</td><td class="property-type"><a href="#EquipmentProperties">EquipmentProperties</a></td><td class="property-docs"><p>If the appointment needs a specific equipment, it is described here.</p>
</td></tr><tr><td class="property-name">fees</td><td class="property-type"><a href="#CurrencyValue">CurrencyValue</a>[]</td><td class="property-docs"><p>The amount of money that is charged for the appointment.</p>
</td></tr><tr><td class="property-name">homeVisit</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the appointment can be at the person’s home.</p>
</td></tr><tr><td class="property-name">inPersonOnSite</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the appointment can be made in person.</p>
</td></tr><tr><td class="property-name">interactions</td><td class="property-type">
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

<code>getDrinks</code>

<code>getFood</code>

<code>getService</code>

<code>getTreatment</code>

<code>listen</code>

<code>main</code>

<code>order</code>

<code>orderAnnouncement</code>

<code>pay</code>

<code>pickUpOrder</code>

<code>play</code>

<code>read</code>

<code>rent</code>

<code>roam</code>

<code>see</code>

<code>sell</code>

<code>use</code>

<code>useLockers</code>

<code>useService</code>

<code>visit</code>

<code>watch</code>

<code>watchMovies</code>

<code>watchPlays</code>

<code>workHere</code>
</p>

Values must be of type <a href="#InteractionMode">InteractionMode</a>.
</td><td class="property-docs"><p>An object that indicates how the object can be interacted with, or how you can engange in the
main function of a place or thing.</p>
<p>The keys of this object are the interaction types, and the values are <a href="../0-model/#InteractionMode">InteractionMode</a>
objects.</p>
</td></tr><tr><td class="property-name">languages</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"><p>The languages that are spoken by the person who is responsible for the appointment.</p>
</td></tr><tr><td class="property-name">limitationsDescription</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Describes limitations that apply to this policy, e.g. ‘only for people with a disability’.</p>
</td></tr><tr><td class="property-name">needsAppointmentForAssistant</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if appointments with an assistant are possible, but need to be booked separately.</p>
</td></tr><tr><td class="property-name">openingHours</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>Opening hours in the format described at <a href="https://wiki.openstreetmap.org/wiki/Key:opening_hours">https://wiki.openstreetmap.org/wiki/Key:opening_hours</a>.</p>
</td></tr><tr><td class="property-name">paymentTypes</td><td class="property-type"><a href="#Payment">Payment</a>[]</td><td class="property-docs"><p>The payment method that is used to pay the amount of money. Use <code>fees</code> instead, if possible.</p>
</td></tr><tr><td class="property-name">phoneCall</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the appointment can be made by video call.</p>
</td></tr><tr><td class="property-name">seat</td><td class="property-type"><a href="#Seat">Seat</a></td><td class="property-docs"><p>If a seat is associated with this appointment, it is described here.</p>
</td></tr><tr><td class="property-name">seatCount</td><td class="property-type"><code>number</code></td><td class="property-docs"><p>How many seats are available for this appointment.</p>
</td></tr><tr><td class="property-name">videoCall</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the appointment can be made by video call.</p>
</td></tr></table>

  

### <a id="CurrencyValue">CurrencyValue</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/CurrencyValue.ts#L16)</span>

  <p>Describes an amount of paid money in a specific currency, per specified unit, for a specific kind
of access to a service or product.</p>
<p>Can represent free availability, by setting <code>amount</code> to 0, and not defining <code>currency</code>.</p>
<p>Don&#39;t use this for very small amounts of money (like sub-cent dollar amounts) as this uses no
BigDecimal arithmetic.</p>


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
</td><td class="property-docs"><p>For whom is this amount of money paid?</p>
</td></tr><tr><td class="property-name">amount*</td><td class="property-type"><code>number</code></td><td class="property-docs"><p>The amount of money.</p>
</td></tr><tr><td class="property-name">currency</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>The currency in which the amount is specified, as three-letter acronym.</p>
<p>Can be undefined if the amount is zero.</p>
</td></tr><tr><td class="property-name">paymentTypes</td><td class="property-type"><a href="#Payment">Payment</a>[]</td><td class="property-docs"><p>The payment method that is used to pay the amount of money.</p>
</td></tr><tr><td class="property-name">per</td><td class="property-type"><a href="#Quantity">Quantity</a></td><td class="property-docs"><p>Unit that is paid with the amount of money, e.g. &quot;30 minutes&quot;, &quot;1 hour&quot;, &#39;1 GB&#39;, &#39;3 pieces&#39;</p>
</td></tr></table>

  

### <a id="Desk">Desk</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Desk.ts#L40)</span>

  <p>Describes a desk / table / cash desk / reception counter.</p>


  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">depthBelow</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>How much space is there under the desk?
This can be used to determine if a wheelchair user can sit at the desk.</p>
</td></tr><tr><td class="property-name">fixedHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>How high is the desk? For variable-height desks, use <code>minimalHeight</code> and <code>maximalHeight</code>
instead.</p>
<p>This can be used to determine if a wheelchair user can sit at the desk.</p>
</td></tr><tr><td class="property-name">fixedHeightBelow</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>How much space is there below the desk?
This can be used to determine if a wheelchair user can sit at the desk.</p>
</td></tr><tr><td class="property-name">interactions</td><td class="property-type">
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
</td><td class="property-docs"><p>An object that indicates how the object can be interacted with, or how you can engange in the
main function of a place or thing.</p>
<p>The keys of this object are the interaction types, and the values are <a href="../0-model/#InteractionMode">InteractionMode</a>
objects.</p>
</td></tr><tr><td class="property-name">intercom</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Intercom">Intercom</a></td><td class="property-docs"><p>Information about an intercom at this desk, if applicable.</p>
<p><code>null</code> indicates there is no intercom.</p>
</td></tr><tr><td class="property-name">isRollUnder</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the desk can be rolled under, <code>false</code> if not.
This can be used to determine if a wheelchair user can sit at the desk.</p>
</td></tr><tr><td class="property-name">maximalHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>How high is the desk maximally? This is only for variable-height desks. Use <code>fixedHeight</code> for
fixed-height desks.
This can be used to determine if a wheelchair user can sit at the desk.</p>
</td></tr><tr><td class="property-name">minimalHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>How high is the desk minimally? This is only for variable-height desks. Use <code>fixedHeight</code> for
fixed-height desks.
This can be used to determine if a wheelchair user can sit at the desk.</p>
</td></tr><tr><td class="property-name">name</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Name of the entrance (helpful if there are multiple entrances).</p>
</td></tr><tr><td class="property-name">payment</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Payment">Payment</a></td><td class="property-docs"><p>Information about payment at this desk.</p>
<p><code>null</code> indicates there is no payment possible/required.</p>
</td></tr><tr><td class="property-name">queueSystem</td><td class="property-type"><a href="#QueueSystem">QueueSystem</a></td><td class="property-docs"><p>Describes an associated queue system.</p>
</td></tr><tr><td class="property-name">turningSpaceInFront</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>How much space is there in front of the desk?
This can be used to determine if a wheelchair user can sit at the desk.</p>
</td></tr><tr><td class="property-name">widthBelow</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>How much space is there below the desk?
This can be used to determine if a wheelchair user can sit at the desk.</p>
</td></tr></table>

  

### <a id="Door">Door</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Door.ts#L26)</span>

  <p>Describes the door of a place&#39;s entrance or to one of its facilities (e.g. to a shower, or to
an elevator)</p>


  
  

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
</td><td class="property-docs"><p>Defines who this door is for. See <a href="https://wiki.openstreetmap.org/wiki/Key:access">https://wiki.openstreetmap.org/wiki/Key:access</a> for more
information.</p>
</td></tr><tr><td class="property-name">colors</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"><p>Describes the colors of the door itself, as HTML color strings. Don&#39;t include the door frame or
door marking colors in this attribute, but use <code>markingColors</code> and <code>doorFrameColors</code> instead.</p>
<p>This can make the door easier to find.</p>
<p>If there are multiple colors, it might be enough to describe the most dominant one.</p>
<p>If there are multiple colors, but there is no predominant color, describe all of them.</p>
<p>This allows to determine the contrast to the wall and the door frame.</p>
<p>Its best to determine the color at daylight.</p>
<p>For glass doors, you can use &#39;transparent&#39; as color.</p>
</td></tr><tr><td class="property-name">doorFrameColors</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"><p>Describes the colors of the door frame, if existent. If they are similar, describe only one
color. Use HTML color strings here.</p>
<p>This can make the door easier to find, and allows to determine the contrast to the door and
the wall.</p>
<p>If there are multiple colors, it might be enough to describe the most dominant one.</p>
<p>If there are multiple colors, but there is no predominant color, describe all of them.</p>
<p>Its best to determine the color at daylight.</p>
</td></tr><tr><td class="property-name">doorOpensToOutside</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the door opens to the outside, <code>false</code> if it opens to the inside.</p>
</td></tr><tr><td class="property-name">doorbellTopButtonHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>Height of the door bell&#39;s top button. If there is a lowered extra door bell (often marked with
a wheelchair user symbol), use the height of this one&#39;s top button.</p>
</td></tr><tr><td class="property-name">grabBars</td><td class="property-type"><a href="#GrabBars">GrabBars</a></td><td class="property-docs"><p>Describes grab bars in front of the door.</p>
</td></tr><tr><td class="property-name">hasClearMarkingOnGlassDoor</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the door is a glass door, but is marked, <code>false</code> if the door is an unmarked glass
door, <code>undefined</code> if it is no glass door or the condition is unknown.</p>
</td></tr><tr><td class="property-name">hasErgonomicDoorHandle</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the door&#39;s handle is easy to use (subjectively by the assessor), <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">hasIntercom</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the door has an intercom system, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">hasProximitySensor</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the door has a proximity sensor that triggers the opening mechanism, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">hasSwitch</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the door has a switch that triggers the opening mechanism, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">hasVisuallyContrastedFrame</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the door frame is visually contrasted to its surrounding wall, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">interactions</td><td class="property-type">
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
</td><td class="property-docs"><p>An object that indicates how the object can be interacted with, or how you can engange in the
main function of a place or thing.</p>
<p>The keys of this object are the interaction types, and the values are <a href="../0-model/#InteractionMode">InteractionMode</a>
objects.</p>
</td></tr><tr><td class="property-name">intercom</td><td class="property-type"><a href="#Intercom">Intercom</a></td><td class="property-docs"><p>Describes the intercom system of the door.</p>
</td></tr><tr><td class="property-name">isAlwaysOpen</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the door is there, but always open, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">isAutomatic</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the door opens automatically, <code>false</code> if not. The mechanism for opening the door is
defined in other attributes.</p>
</td></tr><tr><td class="property-name">isAutomaticOrAlwaysOpen</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the door is always open or automatic, <code>false</code> if it has to be opened manually.</p>
</td></tr><tr><td class="property-name">isEasyToHoldOpen</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the door is easy to hold open (subjectively by the assessor), <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">isGlassDoor</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the door is a glass door, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">isRevolving</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the door is revolving (like a carousel), <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">isSliding</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the door is a sliding door, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">isTurnstile</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the door is a turnstile, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">isVisuallyContrasted</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the door is visually contrasted to its surrounding wall, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">markingColors</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"><p>Describes the colors of a door marking, if existent, as HTML color strings.</p>
<p>This can make the door easier to find.</p>
<p>If there are multiple colors, it might be enough to describe the most dominant one.</p>
<p>If there are multiple colors, but there is no predominant color, describe all of them.</p>
<p>Its best to determine the color at daylight.</p>
</td></tr><tr><td class="property-name">nearbyWallColors</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"><p>Describes the colors of the walls right next the door. Use HTML color strings here.</p>
<p>This can make the door easier to find, and allows to determine the contrast to the door frame
and the door.</p>
<ul>
<li>If there are multiple colors, it might be enough to describe the most dominant one.</li>
<li>If there are multiple colors, but there is no predominant color, describe all of them.</li>
</ul>
<p>Its best to determine the color at daylight.</p>
</td></tr><tr><td class="property-name">needsDoorbell</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if you need to ring a doorbell to pass the entrance, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">needsEuroKey</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if you need a <a href="https://en.wikipedia.org/wiki/Euro_key">Euro key</a> to open the door,
<code>false</code> if it&#39;s in Europe outside UK and works without a key, <code>undefined</code> if it is unknown or
needs a different key.</p>
</td></tr><tr><td class="property-name">needsIntercom</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if you need to use the intercom to pass this door, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">needsKeyCard</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if you need to use a keycard to pass the entrance, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">needsKeyPad</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if you need to use a key pad to pass this door, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">needsRadarKey</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if you need a <a href="https://en.wikipedia.org/wiki/Disability_Rights_UK#National_Key_Scheme">RADAR key</a>
to open the door, <code>false</code> if it&#39;s in the UK but you need no key
or needs a different key.</p>
</td></tr><tr><td class="property-name">needsSwitchToOpen</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the door needs pressing a switch to open, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">thresholdHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>Height of the door’s threshold / sill / step inside the door frame.</p>
</td></tr><tr><td class="property-name">thresholdIsRounded</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the threshold has rounded edges, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">turningSpaceInFront</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>Turning space in front of the door.</p>
</td></tr><tr><td class="property-name">width</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>Width of the door.</p>
</td></tr></table>

  

### <a id="Entrance">Entrance</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Entrance.ts#L13)</span>

  <p>Describes an entrance to a <code>PlaceInfo</code>.</p>


  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">geometry</td><td class="property-type"><a href="#PointGeometry">PointGeometry</a></td><td class="property-docs"><p>The physical location of the entrance in WGS84 coordinates. Currently only a GeoJSON
<code>PointGeometry</code> is supported.</p>
</td></tr><tr><td class="property-name">properties</td><td class="property-type"><a href="#EntranceProperties">EntranceProperties</a></td><td class="property-docs"></td></tr></table>

  

### <a id="EntranceProperties">EntranceProperties</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/EntranceProperties.ts#L12)</span>

  <p>Describes an entrance to a place.</p>


  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">door</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Door">Door</a></td><td class="property-docs"><p>Object that describes the entrance’s door. <code>null</code> if there is no door.</p>
</td></tr><tr><td class="property-name">elevatorEquipmentId</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>reference to the equipment id if this entrance is an elevator (on accessibility.cloud)</p>
</td></tr><tr><td class="property-name">hasFixedRamp</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if this entrance has a fixed ramp, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">hasHoist</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if there is a hoist / wheelchair lift, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">hasRemovableRamp</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if there is a removable ramp, <code>false</code> if not. If there is a fixed ramp,
this property MUST be <code>undefined</code>.</p>
</td></tr><tr><td class="property-name">hasSignage</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>If this entrance is NOT the main entrance: Is this entrance connected to the main entrance, and
is there signage that points to this entrance?</p>
</td></tr><tr><td class="property-name">intercomEquipmentId</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>reference to the equipment id of the intercom of this entrance (on accessibility.cloud)</p>
</td></tr><tr><td class="property-name">isLevel</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if this entrance has no steps and needs no ramp, <code>false</code> if there are steps or a ramp.</p>
</td></tr><tr><td class="property-name">isMainEntrance</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if this is the main entrance, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">name</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Name of the entrance (helpful if there are multiple entrances).</p>
</td></tr><tr><td class="property-name">needsAppointment</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if you need an appointment to enter, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">placeInfoId</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>reference to the place that this entrance is connected to (on accessibility.cloud)</p>
</td></tr><tr><td class="property-name">slopeAngle</td><td class="property-type"><a href="#Slope">Slope</a></td><td class="property-docs"><p>How steep is the ground at the entrance?</p>
</td></tr><tr><td class="property-name">stairs</td><td class="property-type"><a href="#Stairs">Stairs</a></td><td class="property-docs"><p>Object that describes stairs that you have to take to use the entrance.</p>
</td></tr></table>

  

### <a id="EquipmentInfo">EquipmentInfo</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/EquipmentInfo.ts#L14)</span>

  <p>Describes a facility equipment that is part of a place, like an elevator, an escalator, or a
sitemap. Can contain attributes that are realtime updated to indicate operational status.</p>


  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">geometry</td><td class="property-type"><a href="#PointGeometry">PointGeometry</a></td><td class="property-docs"><p>The physical location of the place in WGS84 coordinates. Currently only a GeoJSON
<code>PointGeometry</code> is supported.</p>
</td></tr><tr><td class="property-name">properties</td><td class="property-type"><a href="#EquipmentProperties">EquipmentProperties</a></td><td class="property-docs"></td></tr></table>

  

### <a id="EquipmentProperties">EquipmentProperties</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/EquipmentProperties.ts#L74)</span>

  <p>Mixin to link <a href="../0-model/#InteractionMode">InteractionMode</a> objects to your model.</p>


  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">accessMode</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"><p>Access modes supported by this equipment.</p>
</td></tr><tr><td class="property-name">accessModeSufficient</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"><p>Access mode combinations that allow understanding and using the equipment.</p>
</td></tr><tr><td class="property-name">accessibilityControl</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"><p>The accessibility controls that allow controlling this equipment.</p>
</td></tr><tr><td class="property-name">accessibilityFeature</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"><p>Indicates features that allow understanding or using the equipment.</p>
</td></tr><tr><td class="property-name">accessibilityHazard</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"><p>Indicates hazards that may be an obstacle to understanding or using the equipment.</p>
</td></tr><tr><td class="property-name">alternativeRouteInstructions</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Short alternative routing instructions for travelers when they cannot use this facility.</p>
<p>The text MUST NOT have abbreviations to be readable aloud by a screen reader or voice
assistant.</p>
<p>Software using this attribute MUST NOT assume that the equipment is out of operation if it the
attribute is defined.</p>
</td></tr><tr><td class="property-name">cabinLength</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>Length / depth of the cabin when facing the equipment’s entrance, or <code>undefined</code> if the
equipment has no cabin. For a hoist, this refers to the hoist platform itself.</p>
</td></tr><tr><td class="property-name">cabinWidth</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>Width of the cabin when facing the equipment’s entrance, or <code>undefined</code> if the equipment has no
cabin. For a hoist, this refers to the hoist platform itself.</p>
</td></tr><tr><td class="property-name">category</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>bed</code>

<code>bodyScanner</code>

<code>ctScanner</code>

<code>elevator</code>

<code>escalator</code>

<code>flushMechanism</code>

<code>hoist</code>

<code>intercom</code>

<code>luggageScanner</code>

<code>movingWalkway</code>

<code>mriScanner</code>

<code>powerOutlet</code>

<code>ramp</code>

<code>sitemap</code>

<code>stairLift</code>

<code>switch</code>

<code>ticketVendingMachine</code>

<code>treatmentChair</code>

<code>ultrasoundScanner</code>

<code>vendingMachine</code>

<code>wardrobe</code>

<code>wheelchairLift</code>

<code>xrayMachine</code>
</p>
</td><td class="property-docs"><p>Type of the equipment or facility.</p>
</td></tr><tr><td class="property-name">description</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Describes where the equipment is located. If only one description string is technically
possible to maintain, it MUST not contain any abbreviations to allow being readable aloud by
screen readers or voice assistants.</p>
</td></tr><tr><td class="property-name">disruptionSourceImportId</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>Data source ID of a secondary source used for realtime status info on accessibility.cloud</p>
</td></tr><tr><td class="property-name">door</td><td class="property-type"><a href="#Door">Door</a></td><td class="property-docs"><p>Object describing the door to the equipment, or <code>undefined</code> if there is no door.</p>
</td></tr><tr><td class="property-name">emergencyIntercom</td><td class="property-type"><a href="#Intercom">Intercom</a></td><td class="property-docs"><p>Describes the intercom system for emergency calls.</p>
</td></tr><tr><td class="property-name">hasAdjustableHeight</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the equipment&#39;s height is adjustable, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">hasDoorsAtRightAngles</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the equipment has doors at right angles to each other.</p>
</td></tr><tr><td class="property-name">hasDoorsInBothDirections</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the equipment has doors in two directions, so wheelchair, rollator, bike or pushchair
users do not have to move backwards to exit.</p>
</td></tr><tr><td class="property-name">hasExternalFloorSelection</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>For elevators. <code>true</code> if the elevator needs a command to be entered outside the elevator,
<code>false</code> if not.</p>
</td></tr><tr><td class="property-name">hasLandings</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the equipment has a landing platform, <code>false</code> if not. Helpful for escalators.</p>
</td></tr><tr><td class="property-name">hasMirror</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>For elevators. <code>true</code> if the elevator has a mirror, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">hasVisualEmergencyAlarm</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the equipment has a visual emergency alarm, <code>false</code> if not (for example, inside
elevators).</p>
</td></tr><tr><td class="property-name">heightOfControls</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>Height of the lowest working controls that are needed to operate this equipment. <code>undefined</code> if
the equipment needs no controls.</p>
</td></tr><tr><td class="property-name">ids</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>string</code>
</p>

Values must be of type <code>string</code>.
</td><td class="property-docs"><p>IDs in other data sources that are linked to this equipment, indexed by schema/context.</p>
</td></tr><tr><td class="property-name">interactions</td><td class="property-type">
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

<code>getTreatment</code>

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
</td><td class="property-docs"><p>An object that indicates how the object can be interacted with, or how you can engange in the
main function of a place or thing.</p>
<p>The keys of this object are the interaction types, and the values are <a href="../0-model/#InteractionMode">InteractionMode</a>
objects.</p>
</td></tr><tr><td class="property-name">isAccessibleWithWheelchair</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the equipment is fully operatable for/by a person in a wheelchair, <code>false</code> if not.
If you can, please don&#39;t use this attribute. Instead, use more specific attributes.</p>
</td></tr><tr><td class="property-name">isIndoors</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the equipment is indoors, <code>false</code> if it’s fully or partially outdoors.</p>
</td></tr><tr><td class="property-name">isSuitableForBicycles</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>For elevators. <code>true</code> if the elevator can carry a bicycle, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">isWorking</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>Live status update.</p>
<p><code>true</code> if the equipment is in operation, <code>false</code> if not, or <code>undefined</code> if it is unknown. When
reading this attribute for showing it in a user interface, the user interface MUST show the
operational status as ‘unknown’ if the status could be out of date, for example if it is older
than 10 minutes.</p>
<p>When displaying the operational status, user interfaces SHOULD show the date saved in
<code>stateLastUpdate</code> next to the operational status additionally for transparency.</p>
</td></tr><tr><td class="property-name">languages</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"><p>Languages of the equipment’s visible controls and/or voice output.</p>
</td></tr><tr><td class="property-name">longDescription</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Contains the same information as description, but in a longer form which can be read out by a
screen reader or voice assistant.</p>
<p>Words MUST be written out fully (e.g. ‘direction’ instead of ‘dir.‘, ‘ground’ instead of ‘G‘,
‘platform’ instead of ‘pl.’). The field MUST NOT contain any symbols (e.g. <code>-&gt;</code>, <code>&lt;-&gt;</code>, or
<code>→</code>).</p>
<p>This MUST be suitable for people who have a visual impairment or use a screen reader or voice
assistant (e.g. Amazon’s Alexa).</p>
<p>If only one description field can be used for technical reasons, then the written-out form MUST
be given preference, because a short form can be generated from the long form more easily than
the other way around.</p>
<p>This attribute SHOULD be used as <code>aria-label</code>-attribute in web content.</p>
</td></tr><tr><td class="property-name">manufacturerName</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Official name of the company that manufactured the equipment.</p>
</td></tr><tr><td class="property-name">manufacturerSerialNumber</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>Manufacturer serial number of the equipment / facility.</p>
<p>Intentionally not localizable to allow matching with other data, e.g. from manufacturer&#39;s own
APIs.</p>
</td></tr><tr><td class="property-name">originalData</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>Original source data for this equipment (for easier debugging)</p>
</td></tr><tr><td class="property-name">originalId</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>ID of this equipment in the original data source. To simplify communication with the operator,
it’s a good idea to use the operator facility management system ID here.</p>
</td></tr><tr><td class="property-name">originalPlaceInfoId</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>ID of the place that this equipment belongs to (unique in the original data source)</p>
</td></tr><tr><td class="property-name">outOfOrderReason</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Live status update.</p>
<p>Reason why the equipment is not in operation. MUST be <code>undefined</code> if the equipment is in
operation.</p>
</td></tr><tr><td class="property-name">placeInfoId</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>Place info ID that this equipment belongs to (accessibility.cloud ID)</p>
</td></tr><tr><td class="property-name">placeSourceId</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>ID of the place data source that this equipment belongs to (accessibility.cloud ID)</p>
</td></tr><tr><td class="property-name">plannedCompletionDate</td><td class="property-type"><a href="#Date">Date</a></td><td class="property-docs"><p>Live status update.</p>
<p>If <code>isWorking</code> is false, this is the planned date when the equipment will be in operation
again.</p>
<p>MUST be <code>undefined</code> if the facility is currently in operation.</p>
</td></tr><tr><td class="property-name">sameAs</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"><p>URLs of this equipment in external data sources, for example in GTFS, IMDF or other sources.</p>
</td></tr><tr><td class="property-name">seat</td><td class="property-type"><a href="#Seat">Seat</a></td><td class="property-docs"><p>Object describing the seat of the equipment, or <code>undefined</code> if there is no seat.</p>
</td></tr><tr><td class="property-name">servicePhoneNumber</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>Phone number where a service operator can be reached for help using this facility.</p>
</td></tr><tr><td class="property-name">serviceWebsiteUrl</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>URL pointing to a website that describes the equipnent or it&#39;s current operational status.</p>
</td></tr><tr><td class="property-name">shortDescription</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Contains the same information as description, but in a shorter form, to save space on the
screen. This CAN contain Unicode characters such as ⟷ or ↘︎ as well as abbreviations (e.g.
‘pl.’ instead of ‘platform’, ‘dir.’ instead of ‘direction’).</p>
</td></tr><tr><td class="property-name">sourceId</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>Data source ID on accessibility.cloud</p>
</td></tr><tr><td class="property-name">sourceImportId</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>Data import ID on accessibility.cloud</p>
</td></tr><tr><td class="property-name">stateExplanation</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Live status update.</p>
<p>Information about the current state. If <code>isWorking</code> is true, this can show information about
future planned maintenance or construction work rendering this facility unusable.</p>
<p>The text MUST NOT have abbreviations to be readable aloud by a screen reader or voice
assistant.</p>
<p>This field SHOULD only be used if a separation into individual disorder attributes (<code>state</code>,
<code>outOfOrderReason</code>) is not technically possible (e.g. when existing APIs can not be further
developed and users are only given one text field to describe the problem.)</p>
</td></tr><tr><td class="property-name">stateLastUpdate</td><td class="property-type"><a href="#Date">Date</a></td><td class="property-docs"><p>Live status update.</p>
<p>Date when the <code>isWorking</code> flag was updated by a realtime system.</p>
</td></tr></table>

  

### <a id="GrabBars">GrabBars</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/GrabBars.ts#L19)</span>

  <p>Describes grab bars or hand rails.</p>


  The `continuous` property is required.
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">continuous*</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>Indicates if the grab bars are continuous or not. Helpful for stair grab rails.</p>
</td></tr><tr><td class="property-name">distanceBetweenBars</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>Indicates how far the bars are apart.</p>
</td></tr><tr><td class="property-name">foldable</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the grab bars can be folded, <code>false</code> if not..</p>
</td></tr><tr><td class="property-name">inFrontOfTheUser</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if there is a folding handle in front of the user, <code>false</code> if not.</p>
<p>Seen from the perspective</p>
<ul>
<li>of somebody using a toilet</li>
<li>of somebody in front of stairs, facing upwards</li>
<li>of somebody in front of a door</li>
</ul>
</td></tr><tr><td class="property-name">interactions</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>adjust</code>

<code>findYourDestination</code>

<code>foldDown</code>

<code>foldUp</code>

<code>localizeYourself</code>
</p>

Values must be of type <a href="#InteractionMode">InteractionMode</a>.
</td><td class="property-docs"><p>An object that indicates how the object can be interacted with, or how you can engange in the
main function of a place or thing.</p>
<p>The keys of this object are the interaction types, and the values are <a href="../0-model/#InteractionMode">InteractionMode</a>
objects.</p>
</td></tr><tr><td class="property-name">onUsersLeftSide</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if there is a folding handle on left side, <code>false</code> if not.</p>
<p>Seen from the perspective</p>
<ul>
<li>of somebody using a toilet</li>
<li>of somebody in front of stairs, facing upwards</li>
<li>of somebody in front of a door</li>
</ul>
</td></tr><tr><td class="property-name">onUsersRightSide</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if there is a folding handle on right side, <code>false</code> if not.</p>
<p>Seen from the perspective</p>
<ul>
<li>of somebody using a toilet</li>
<li>of somebody in front of stairs, facing upwards</li>
<li>of somebody in front of a door</li>
</ul>
</td></tr><tr><td class="property-name">topHeightFromFloor</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>Indicates how high the grab bars are (top edge, measured from the floor).</p>
</td></tr></table>

  

### <a id="Interactable">Interactable</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Interactable.ts#L12)</span>

  <p>Mixin to link <a href="../0-model/#InteractionMode">InteractionMode</a> objects to your model.</p>


  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">interactions</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<a href="#InteractionType">InteractionType</a>
</p>

Values must be of type <a href="#InteractionMode">InteractionMode</a>.
</td><td class="property-docs"><p>An object that indicates how the object can be interacted with, or how you can engange in the
main function of a place or thing.</p>
<p>The keys of this object are the interaction types, and the values are <a href="../0-model/#InteractionMode">InteractionMode</a>
objects.</p>
</td></tr></table>

  

### <a id="InteractionMode">InteractionMode</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/InteractionMode.ts#L26)</span>

  <p>Many people with disabilities face barriers when interacting with places or things. These stem
from the physical environment, the design of the object, or the way the interaction with the
object or place is designed.</p>
<p>The <code>Interactable</code> model allows to describe how you can interact with a thing or engange in the
key purposes of a place, and which abilities you need for this.</p>
<p>Attributes typically contain</p>
<ul>
<li>barriers</li>
<li>means of interaction</li>
<li>required and optional abilities, experiences, or senses</li>
</ul>
<p>This allows for UIs that adapt to the user&#39;s needs and abilities, or to provide usage
descriptions that work for everyone.</p>


  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">action</td><td class="property-type"><a href="#ActionMode">ActionMode</a></td><td class="property-docs"><p>Action modes that are absolutely necessary to facilitate the interaction, e.g. ‘pushing a
button’.</p>
</td></tr><tr><td class="property-name">description</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Describes the output as human-readable text.</p>
</td></tr><tr><td class="property-name">languages</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"><p>Input languages supported.</p>
</td></tr><tr><td class="property-name">name</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Describes which output is meant. Helpful if there are multiple outputs.</p>
</td></tr><tr><td class="property-name">optional</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the interaction is optional, <code>false</code> if it is required.</p>
</td></tr><tr><td class="property-name">perception</td><td class="property-type"><a href="#PerceptionMode">PerceptionMode</a></td><td class="property-docs"><p>Perception modes supported to facilitate the interaction.</p>
</td></tr><tr><td class="property-name">required</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>false</code> if the interaction is optional, <code>true</code> if it is required.</p>
</td></tr></table>

  

### <a id="Intercom">Intercom</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Intercom.ts#L20)</span>

  <p>Describes a system to communicate over distance, e.g. a door intercom next to a doorbell.</p>


  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">ambientNoiseLevel</td><td class="property-type"><a href="#Volume">Volume</a></td><td class="property-docs"><p>The ambient noise level when using the intercom.</p>
</td></tr><tr><td class="property-name">audioIsComprehensible</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if intercom system’s audio quality is good enough for understanding speech, <code>false</code>
if not.</p>
</td></tr><tr><td class="property-name">description</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">hasAudio</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the door has an audio intercom system, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">hasVideoCamera</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the door has a video intercom system, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">hasVisualFeedbackOnConnection</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the intercom system has a visual feedback, <code>false</code> if not. Visual feedback might be
a screen or light that displays if a connection is established.</p>
</td></tr><tr><td class="property-name">interactions</td><td class="property-type">
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
</td><td class="property-docs"><p>An object that indicates how the object can be interacted with, or how you can engange in the
main function of a place or thing.</p>
<p>The keys of this object are the interaction types, and the values are <a href="../0-model/#InteractionMode">InteractionMode</a>
objects.</p>
</td></tr><tr><td class="property-name">necessaryGripHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>The height of the top control element of the intercom system.</p>
</td></tr><tr><td class="property-name">needsKeyPad</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if you need to use a key pad to pass this door, <code>false</code> if not.</p>
</td></tr></table>

  

### <a id="Media">Media</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Media.ts#L49)</span>

  <p>Describes a media unit provided at this place, for example an exhibit at a museum or a movie in
a cinema.</p>


  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">accessMode</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"><p>Access modes supported by this equipment.</p>
</td></tr><tr><td class="property-name">accessModeSufficient</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"><p>Access mode combinations that allow understanding and using the equipment.</p>
</td></tr><tr><td class="property-name">accessibilityControl</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"><p>The accessibility controls that allow controlling this equipment.</p>
</td></tr><tr><td class="property-name">accessibilityFeature</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"><p>Indicates the access mode combinations that allow understanding and using the equipment.</p>
</td></tr><tr><td class="property-name">accessibilityHazard</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"><p>Indicates the access mode combinations that allow understanding and using the equipment.</p>
</td></tr><tr><td class="property-name">hasAudioDescription</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>Is the media unit provided with audio description?</p>
</td></tr><tr><td class="property-name">hasContrastingBackground</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>If the media unit is printed or on a screen, does it have high contrast between background and
foreground?</p>
</td></tr><tr><td class="property-name">hasDedicatedScreenForSubtitles</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>Relevant for movies, screens and presentations: Is there a dedicated screen where subtitles can
be read?</p>
</td></tr><tr><td class="property-name">hasPlainLanguageOption</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>Is the media unit provided in a <a href="https://en.wikipedia.org/wiki/Plain_language">Plain Language</a> option?</p>
</td></tr><tr><td class="property-name">hasRealTimeCaptioning</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>Does the media unit have <a href="https://www.washington.edu/doit/what-real-time-captioning">real time captioning</a>?</p>
</td></tr><tr><td class="property-name">hasSubtitles</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>Is the media unit provided with subtitles?</p>
</td></tr><tr><td class="property-name">interactions</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>browse</code>

<code>close</code>

<code>discover</code>

<code>feel</code>

<code>interact</code>

<code>listen</code>

<code>open</code>

<code>read</code>

<code>recognize</code>

<code>rent</code>

<code>watch</code>
</p>

Values must be of type <a href="#InteractionMode">InteractionMode</a>.
</td><td class="property-docs"><p>An object that indicates how the object can be interacted with, or how you can engange in the
main function of a place or thing.</p>
<p>The keys of this object are the interaction types, and the values are <a href="../0-model/#InteractionMode">InteractionMode</a>
objects.</p>
</td></tr><tr><td class="property-name">isAudio</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>Is the media unit consumable as audio-only option?</p>
</td></tr><tr><td class="property-name">isBraille</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>Is the media unit consumable or described for Braille readers?</p>
</td></tr><tr><td class="property-name">isLargePrint</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>If the media unit is printed, is the print large?</p>
</td></tr><tr><td class="property-name">isTactile</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>Is the media tactile?</p>
</td></tr><tr><td class="property-name">languages</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"><p>Specifies which languages (including sign languages) in which the media unit is provided</p>
</td></tr><tr><td class="property-name">name</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Name of the media unit (relevant if there are multiple units of the same kind)</p>
</td></tr><tr><td class="property-name">sameAs</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"><p>URLs that contain the media. Use this to link data, for example with <a href="https://www.w3.org/RDF/">RDF</a>.</p>
</td></tr><tr><td class="property-name">turningSpaceInFront</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>If the media is consumed while the consumer is directly in front of it, this property specifies
how much turning space there is in front of it.</p>
</td></tr><tr><td class="property-name">type</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>document</code>

<code>exhibit</code>

<code>form</code>

<code>guide</code>

<code>menu</code>

<code>movie</code>

<code>play</code>

<code>presentation</code>

<code>screen</code>

<code>tour</code>

<code>website</code>
</p>
</td><td class="property-docs"><p>Type of the media unit</p>
</td></tr></table>

  

### <a id="Mirror">Mirror</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Mirror.ts#L19)</span>

  <p>Describes a mirror.</p>


  
  `heightFromGround`  and  `isAccessibleWhileSeated` properties are required.

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">heightFromGround*</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>How far is the mirror&#39;s bottom from the ground?</p>
</td></tr><tr><td class="property-name">interactions</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>adjust</code>

<code>clean</code>

<code>move</code>

<code>turn</code>

<code>use</code>
</p>

Values must be of type <a href="#InteractionMode">InteractionMode</a>.
</td><td class="property-docs"><p>An object that indicates how the object can be interacted with, or how you can engange in the
main function of a place or thing.</p>
<p>The keys of this object are the interaction types, and the values are <a href="../0-model/#InteractionMode">InteractionMode</a>
objects.</p>
</td></tr><tr><td class="property-name">isAccessibleWhileSeated*</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the mirror is accessible while sitting in a wheelchair, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">isLocatedInsideRestroom</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the mirror is located inside the restroom, <code>false</code> if not.</p>
</td></tr></table>

  

### <a id="Parking">Parking</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Parking.ts#L94)</span>

  <p>Mixin to link <a href="../0-model/#InteractionMode">InteractionMode</a> objects to your model.</p>


  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">count</td><td class="property-type"><code>number</code></td><td class="property-docs"></td></tr><tr><td class="property-name">forWheelchairUsers</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#WheelchairParking">WheelchairParking</a></td><td class="property-docs"></td></tr><tr><td class="property-name">interactions</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>arrive</code>

<code>enterVehicle</code>

<code>exitVehicle</code>

<code>park</code>
</p>

Values must be of type <a href="#InteractionMode">InteractionMode</a>.
</td><td class="property-docs"><p>An object that indicates how the object can be interacted with, or how you can engange in the
main function of a place or thing.</p>
<p>The keys of this object are the interaction types, and the values are <a href="../0-model/#InteractionMode">InteractionMode</a>
objects.</p>
</td></tr></table>

  

### <a id="Pathways">Pathways</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Pathways.ts#L10)</span>

  <p>Describes one or multiple pathways inside a place.</p>


  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">isKerbstoneFree</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the pathway is kerbstone-free, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">surface</td><td class="property-type"><a href="#Surface">Surface</a></td><td class="property-docs"></td></tr><tr><td class="property-name">width</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>Width constraints of all pathways inside a place relevant for consumers.</p>
</td></tr><tr><td class="property-name">widthAtObstacles</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>Width constraints of all pathways inside a place relevant for consumers.</p>
</td></tr></table>

  

### <a id="Payment">Payment</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Payment.ts#L17)</span>

  <p>The <code>Payment</code> interface describes the payment options at a location.</p>


  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">acceptsBills</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">acceptsCoins</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">acceptsCreditCards</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">acceptsDebitCards</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">acceptsPaymentByMobilePhone</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr><tr><td class="property-name">customPaymentMetaInfo</td><td class="property-type"><a href="../i18n">LocalizedString</a>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">hasPortablePaymentSystem</td><td class="property-type"><code>boolean</code></td><td class="property-docs"></td></tr></table>

  

### <a id="PerceptionMode">PerceptionMode</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/PerceptionMode.ts#L18)</span>

  <p>Describes necessary abilities and modes for interpreting information output, signals, or
content.</p>


  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">acceleration</td><td class="property-type"><a href="#Acceleration">Acceleration</a></td><td class="property-docs"><p>Feedback force applied to the user.</p>
</td></tr><tr><td class="property-name">activationSignal</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>The output is an activation/engagement signal.</p>
</td></tr><tr><td class="property-name">ambientNoiseLevel</td><td class="property-type"><a href="#Volume">Volume</a></td><td class="property-docs"><p>Ambient noise level in dB(A) relative to a reference pressure of 0.00002 Pa. Median over a
10-second period at least.</p>
</td></tr><tr><td class="property-name">ambientTemperature</td><td class="property-type"><a href="#Temperature">Temperature</a></td><td class="property-docs"><p>The ambient temperature around the output.</p>
</td></tr><tr><td class="property-name">animation</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The output is animated.</p>
</td></tr><tr><td class="property-name">apiDocumentationUrl</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>The input API documentation URL.</p>
</td></tr><tr><td class="property-name">attentionSpan</td><td class="property-type"><a href="#TimeInterval">TimeInterval</a></td><td class="property-docs"><p>Attention time span needed to understand the output.</p>
</td></tr><tr><td class="property-name">audibleClick</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The output has an acoustic click feedback.</p>
</td></tr><tr><td class="property-name">audioDescription</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The output has  audio description.</p>
</td></tr><tr><td class="property-name">audioIsComprehensible</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the system’s audio quality is good enough for understanding speech, <code>false</code> if it is
difficult.</p>
</td></tr><tr><td class="property-name">backgroundColors</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"><p>Background output HTML colors (for example, the background behind a text or icon).</p>
</td></tr><tr><td class="property-name">backgroundMusic</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>There is background music playing.</p>
</td></tr><tr><td class="property-name">beep</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The output uses one or more beeps as signal.</p>
</td></tr><tr><td class="property-name">bing</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The output uses one or more bing-like signals.</p>
</td></tr><tr><td class="property-name">blackAndWhite</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>The output uses black and white colors.</p>
</td></tr><tr><td class="property-name">braille</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to read braille is supported or needed.</p>
</td></tr><tr><td class="property-name">breathing</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The light looks like it is breathing.</p>
</td></tr><tr><td class="property-name">brightness</td><td class="property-type"><a href="#Brightness">Brightness</a></td><td class="property-docs"><p>The output&#39;s brightness.</p>
</td></tr><tr><td class="property-name">buzzer</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The output is using a buzzer / paging device.</p>
</td></tr><tr><td class="property-name">byod</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p><code>true</code> if you can or have to perceive the content with a device that you own.</p>
</td></tr><tr><td class="property-name">cable</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>A cable is supported or needed.</p>
</td></tr><tr><td class="property-name">chart</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The output uses one or more charts.</p>
</td></tr><tr><td class="property-name">colorCode</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>The output uses a discrete color code.</p>
</td></tr><tr><td class="property-name">colorGradient</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>The output uses a color gradient.</p>
</td></tr><tr><td class="property-name">contentWarning</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Lists potential content warnings you have to expect here. User interfaces should not show the
content warning directly, but should instead show a button to show the content warning.</p>
</td></tr><tr><td class="property-name">dedicatedScreenForSubtitles</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The output has a dedicated screen for subtitles.</p>
</td></tr><tr><td class="property-name">description</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Describes the content/output/signal as human-readable text.</p>
</td></tr><tr><td class="property-name">duration</td><td class="property-type"><a href="#TimeInterval">TimeInterval</a></td><td class="property-docs"><p>Time interval in which the output is active.</p>
</td></tr><tr><td class="property-name">educationLevel</td><td class="property-type"><a href="#Number">Number</a></td><td class="property-docs"><p>Education level needed to understand the output.</p>
<p><a href="http://www.ibe.unesco.org/en/glossary-curriculum-terminology/l/levels-education">http://www.ibe.unesco.org/en/glossary-curriculum-terminology/l/levels-education</a></p>
<ul>
<li>early childhood education (level 0)</li>
<li>primary education (level 1)</li>
<li>lower secondary education (level 2)</li>
<li>upper secondary education (level 3)</li>
<li>postsecondary non-tertiary education (level 4)</li>
<li>short-cycle tertiary education (level 5)</li>
<li>bachelor’s or equivalent level (level 6)</li>
<li>master’s or equivalent level (level 7)</li>
<li>doctor or equivalent level (level 8).</li>
</ul>
</td></tr><tr><td class="property-name">flash</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The output is a flashing light.</p>
</td></tr><tr><td class="property-name">flashingHazard</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the output is a flashing hazard, <code>false</code> if there is explicitly no flashing hazard
and someone / something ensures this. This can be relevant for people with epilepsy.</p>
</td></tr><tr><td class="property-name">fontSize</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>Font size used in the output.</p>
</td></tr><tr><td class="property-name">force</td><td class="property-type"><a href="#Force">Force</a></td><td class="property-docs"><p>Feedback force applied to the user.</p>
</td></tr><tr><td class="property-name">forceFeedback</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The content/output/signal has active force feedback.</p>
</td></tr><tr><td class="property-name">foregroundColors</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"><p>Foreground output HTML colors (for example, the text or icon color).</p>
</td></tr><tr><td class="property-name">framerate</td><td class="property-type"><a href="#Hertz">Hertz</a></td><td class="property-docs"><p>The framerate of animations.</p>
</td></tr><tr><td class="property-name">frequency</td><td class="property-type"><a href="#Hertz">Hertz</a></td><td class="property-docs"><p>The frequency of the output, for tones or flashes.</p>
</td></tr><tr><td class="property-name">fullBody</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The content/output/signal affects your full body.</p>
</td></tr><tr><td class="property-name">handwritten</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The content is handwritten.</p>
</td></tr><tr><td class="property-name">haptic</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The output is haptic.</p>
</td></tr><tr><td class="property-name">hapticClick</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The output has a haptic click feedback.</p>
</td></tr><tr><td class="property-name">headphone</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>Headphones are supported or needed.</p>
</td></tr><tr><td class="property-name">heat</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>Heat perception is supported or needed.</p>
</td></tr><tr><td class="property-name">highContrast</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>The output is displayed in high contrast.</p>
</td></tr><tr><td class="property-name">instructionsUrl</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>URL describing how to make use of the content/output/signal.</p>
</td></tr><tr><td class="property-name">isEasyToFind</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the input is easy to find.</p>
</td></tr><tr><td class="property-name">isEasyToUnderstand</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the input is easy to understand, <code>false</code> if people might face difficulties trying to
understand how the input works, or <code>undefined</code> if this is unknown or irrelevant.</p>
</td></tr><tr><td class="property-name">languages</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"><p>Content languages supported.</p>
</td></tr><tr><td class="property-name">led</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The output is an LED.</p>
</td></tr><tr><td class="property-name">light</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The output is a light.</p>
</td></tr><tr><td class="property-name">morse</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The output uses morse code.</p>
</td></tr><tr><td class="property-name">music</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The output uses music.</p>
</td></tr><tr><td class="property-name">name</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Describes which output is meant. Helpful if there are multiple signals/outputs/content
lements.</p>
</td></tr><tr><td class="property-name">necessaryEyeHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>How tall do you have to be to perceive the content/output/signal.</p>
</td></tr><tr><td class="property-name">necessaryGripHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>The height you need to grip to perceive the content/output/signal.</p>
</td></tr><tr><td class="property-name">needsHighConcentration</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The output needs high concentration to understand.</p>
</td></tr><tr><td class="property-name">numbers</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The output uses one or more numbers.</p>
</td></tr><tr><td class="property-name">optional</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the perception is optional, <code>false</code> if it is required.</p>
</td></tr><tr><td class="property-name">paper</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The output is displayed on a paper.</p>
</td></tr><tr><td class="property-name">pictograms</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The output uses one or more pictograms.</p>
</td></tr><tr><td class="property-name">pitchedTone</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The output uses a pitched tone as signal.</p>
</td></tr><tr><td class="property-name">plainLanguageOption</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The output has a plain language option.</p>
</td></tr><tr><td class="property-name">printer</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The output is from a printer.</p>
</td></tr><tr><td class="property-name">provisionalHearingAid</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The perceiving person uses a provisional hearing aid, e.g. a stethoscope, a smartphone, or a
headset with a microphone that amplifies the sound or speech.</p>
</td></tr><tr><td class="property-name">qrCode</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>A QR code is supported or needed.</p>
</td></tr><tr><td class="property-name">radio</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>A radio connection is supported or needed (e.g. WiFi, Bluetooth, NFC, etc.)</p>
</td></tr><tr><td class="property-name">read</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to read is supported or needed.</p>
</td></tr><tr><td class="property-name">realTimeCaptioning</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The output has realtime captioning.</p>
</td></tr><tr><td class="property-name">required</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>false</code> if the perception is required to make use of the main function of the described
object, <code>true</code> if it is required.</p>
</td></tr><tr><td class="property-name">rhythmic</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The output is rhythmic.</p>
</td></tr><tr><td class="property-name">screen</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The output is displayed on a screen.</p>
</td></tr><tr><td class="property-name">signLanguage</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to understand sign language is supported or needed.</p>
</td></tr><tr><td class="property-name">smell</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to smell is supported or needed.</p>
</td></tr><tr><td class="property-name">sound</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The output is acoustic.</p>
</td></tr><tr><td class="property-name">soundVolume</td><td class="property-type"><a href="#Volume">Volume</a></td><td class="property-docs"><p>The content/output/signal has active vibration feedback.</p>
</td></tr><tr><td class="property-name">speech</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The ability to understand speech is supported or needed.</p>
</td></tr><tr><td class="property-name">static</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the output is usually static and does not change over time, <code>false</code> if it is dynamic
and changes over time.</p>
</td></tr><tr><td class="property-name">stethoscope</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The perceiving person uses a stethoscope.</p>
<p>This is method for patient communication that is used by doctors to speak to patients with
hearing impairments:</p>
<blockquote>
<p>British doctors recommend using the stethoscope as a hearing aid for patients in such
situations (BMJ 2010; 341: c4672). If the patient has the buttons in his ear and the
physician speaks softly and clearly into the diaphragm as into a microphone, then sufficient
communication is often possible despite hearing problems. The intimacy of the conversation
can be preserved by this simple means.</p>
</blockquote>
<p>Sources:</p>
<ul>
<li><a href="https://www.aerztezeitung.de/Medizin/Das-Stethoskop-als-Hoerhilfe-213950.html">Ärztezeitung</a></li>
<li><a href="https://www.bmj.com/content/341/bmj.c4672?ijkey=66f0d96a9e9bca9e8d5b85b5f35ee0177d7e4239&keytype2=tf_ipsecsha">BMJ 2010;341:c4672</a></li>
</ul>
</td></tr><tr><td class="property-name">subtitles</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The output has subtitles.</p>
</td></tr><tr><td class="property-name">tactile</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The output is tactile.</p>
</td></tr><tr><td class="property-name">tactileGuides</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The output has tactile guides, for example around buttons.</p>
</td></tr><tr><td class="property-name">taste</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>Tasting something is supported or needed.</p>
</td></tr><tr><td class="property-name">techSufficient</td><td class="property-type"><a href="#TechCombination">TechCombination</a>[]</td><td class="property-docs"><p>Technology combinations that are sufficient to make use of the content/output/signal.</p>
</td></tr><tr><td class="property-name">techSupported</td><td class="property-type"><a href="#TechCombination">TechCombination</a>[]</td><td class="property-docs"><p>Technologies that are sufficient to make use of the content/output/signal.</p>
</td></tr><tr><td class="property-name">temperature</td><td class="property-type"><a href="#Temperature">Temperature</a></td><td class="property-docs"><p>The temperature of the output.</p>
</td></tr><tr><td class="property-name">urgency</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>alarm</code>

<code>alert</code>

<code>announcement</code>

<code>debug</code>

<code>info</code>

<code>warning</code>
</p>
</td><td class="property-docs"><p>Urgency of the content when perceived.</p>
</td></tr><tr><td class="property-name">url</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>URL where you can see or make use of the content/output/signal, e.g. on your phone.</p>
</td></tr><tr><td class="property-name">vibration</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The content/output/signal has active vibration feedback.</p>
</td></tr><tr><td class="property-name">visual</td><td class="property-type">One of the following strings:

<p class='grid'>
<code>always</code>

<code>discouraged</code>

<code>forbidden</code>

<code>impossible</code>

<code>notApplicable</code>

<code>notAvailable</code>

<code>notNecessary</code>

<code>optional</code>

<code>possible</code>

<code>recommended</code>

<code>required</code>

<code>sometimes</code>

<code>unknown</code>

<code>usually</code>
</p>
</td><td class="property-docs"><p>The output is visual.</p>
</td></tr></table>

  

### <a id="PersonalProfile">PersonalProfile</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/PersonalProfile.ts#L12)</span>

  <p>Describes a person. This exists only to transform data from sources where no physical attributes
of places have been captured as data directly. It&#39;s better to describe physical attributes of
places and let people decide themselves which facilities they need or which place condition works
for them.</p>


  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">blindness</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> for a person that is blind.</p>
</td></tr><tr><td class="property-name">guideDog</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> for a person that has a guide dog.</p>
</td></tr><tr><td class="property-name">hearingImpairment</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> for a person that has a hearing impairment.</p>
</td></tr><tr><td class="property-name">learningImpairment</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> for a person that has a learning impairment.</p>
</td></tr><tr><td class="property-name">mobilityImpairment</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> for a person that has a mobility impairment.</p>
</td></tr><tr><td class="property-name">muteness</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> for a person that is inable to speak.</p>
</td></tr><tr><td class="property-name">visualImpairment</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> for a person that has a visual impairment.</p>
</td></tr><tr><td class="property-name">wheelchair</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> for a person that uses a wheelchair.</p>
</td></tr></table>

  

### <a id="PlaceInfo">PlaceInfo</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/PlaceInfo.ts#L9)</span>

  <p>The PlaceInfo interface describes a physical location with added accessibility properties.</p>


  
  `geometry`  and  `properties` properties are required.

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">formatVersion</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>The format version this place info document was created with
(Uses the npm module version from <code>package.json</code>)
Not used right now, but added for future compatibility.</p>
</td></tr><tr><td class="property-name">geometry*</td><td class="property-type"><a href="#PointGeometry">PointGeometry</a></td><td class="property-docs"><p>The physical location of the place in WGS84 coordinates. Currently only a GeoJSON
<code>PointGeometry</code> is supported.</p>
</td></tr><tr><td class="property-name">properties*</td><td class="property-type"><a href="#PlaceProperties">PlaceProperties</a></td><td class="property-docs"><p>Holds additional place properties such as name and category and accessibility information</p>
</td></tr></table>

  

### <a id="PlaceProperties">PlaceProperties</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/PlaceProperties.ts#L13)</span>

  <p>Properties of a place of interest.</p>


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
</td><td class="property-docs"><p>Defines who this restroom is for. See <a href="https://wiki.openstreetmap.org/wiki/Key:access">https://wiki.openstreetmap.org/wiki/Key:access</a> for more
information.</p>
</td></tr><tr><td class="property-name">accessibility</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Accessibility">Accessibility</a></td><td class="property-docs"><p>The accessibility of this place. <code>null</code> indicates that this place has no data, <code>undefined</code> or
missing property indicates unknown.</p>
</td></tr><tr><td class="property-name">address</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#StructuredAddress">StructuredAddress</a></td><td class="property-docs"><p>The address of this place. <code>null</code> indicates that this place has no address, <code>undefined</code> or
missing property indicates unknown.</p>
</td></tr><tr><td class="property-name">category*</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>Category name of the place</p>
</td></tr><tr><td class="property-name">description</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Text description containing helpful information for people with disabilities.</p>
</td></tr><tr><td class="property-name">editPageUrl</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>URL of the original data source’s website on a subpage that allows to edit the original data.</p>
</td></tr><tr><td class="property-name">emailAddress</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>Email address of the place&#39;s operator where you can get accessibility relevant information.</p>
</td></tr><tr><td class="property-name">ids</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>string</code>
</p>

Values must be of type <code>string</code>.
</td><td class="property-docs"><p>IDs in other data sources that are linked to this equipment, indexed by schema/context.</p>
</td></tr><tr><td class="property-name">infoPageUrl</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>URL of the original data source’s website describing this place.</p>
</td></tr><tr><td class="property-name">name</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>The official name of this place.</p>
</td></tr><tr><td class="property-name">originalData</td><td class="property-type"><code>any</code></td><td class="property-docs"><p>Original source data for this equipment (for easier debugging)</p>
</td></tr><tr><td class="property-name">originalId</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>ID of this place of interest in the original data source. To simplify communication with the
data provider, it’s a good idea to use the provider&#39;s internal ID here.</p>
</td></tr><tr><td class="property-name">originalParentPlaceInfoId</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>The parent&#39;s place ID in the original dataset from the data provider.</p>
</td></tr><tr><td class="property-name">parentPlaceInfoId</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>ID of the parent place that this place belongs to.</p>
</td></tr><tr><td class="property-name">parentPlaceSourceId</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>Source ID of the parent place that this place belongs to. This is usually the same ID as
<code>sourceId</code>, but the parent place can be from another data provider.</p>
</td></tr><tr><td class="property-name">phoneNumber</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>Phone number to call a representant of the place&#39;s operator.</p>
</td></tr><tr><td class="property-name">placeWebsiteUrl</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>URL of the place’s own website.</p>
</td></tr><tr><td class="property-name">sameAs</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"><p>URLs of this equipment in external data sources, for example in GTFS, IMDF or other sources.</p>
</td></tr><tr><td class="property-name">sourceId</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>ID of the data source that provided the place (accessibility.cloud ID)</p>
</td></tr><tr><td class="property-name">sourceImportId</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>ID of the import that created this place (accessibility.cloud ID)</p>
</td></tr><tr><td class="property-name">tags</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>string</code>
</p>

Values must be of type <code>string</code>.
</td><td class="property-docs"><p>Tags that are not part of the schema, but are still useful for the data consumer.</p>
<ul>
<li>If a OSM place is described, the tags are the OSM tags.</li>
<li>If a GTFS place is described, the tags are the GTFS fields.</li>
<li>If a IMDF place is described, the tags are the IMDF fields.</li>
<li>If a custom place is described, the tags are the custom fields.</li>
<li>If a place is described by a combination of multiple sources, the tags are the union of all
fields.</li>
</ul>
</td></tr></table>

  

### <a id="PointGeometry">PointGeometry</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Geometry.ts#L5)</span>

  <p><a href="https://tools.ietf.org/html/rfc7946">GeoJSON</a> <code>Point</code> object.</p>


  
  `coordinates`  and  `type` properties are required.

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">coordinates*</td><td class="property-type">tuple with 2 <code>number</code> elements</td><td class="property-docs"></td></tr><tr><td class="property-name">type*</td><td class="property-type"><code>"Point"</code></td><td class="property-docs"></td></tr></table>

  

### <a id="Quantity">Quantity</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L75)</span>

  <p>Describes a quantity of a unit type.</p>


  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">accuracy</td><td class="property-type"><code>number</code></td><td class="property-docs"><p>± in given units, uniform error.</p>
</td></tr><tr><td class="property-name">max</td><td class="property-type"><code>number</code></td><td class="property-docs"><p>maximal value (inclusive)</p>
</td></tr><tr><td class="property-name">min</td><td class="property-type"><code>number</code></td><td class="property-docs"><p>minimal value (inclusive)</p>
</td></tr><tr><td class="property-name">operator</td><td class="property-type">One of the following strings:

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
</td><td class="property-docs"><p>the operator, indicating the value is not an absolute value</p>
</td></tr><tr><td class="property-name">precision</td><td class="property-type"><code>number</code></td><td class="property-docs"><p>± in given units, uniform error</p>
</td></tr><tr><td class="property-name">rawValue</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>raw, imported value, eg. &#39;90 .. 120cm&#39; - only required when importing</p>
</td></tr><tr><td class="property-name">unit</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>one of the length units in js-quantities</p>
</td></tr><tr><td class="property-name">value</td><td class="property-type"><code>number</code></td><td class="property-docs"><p>the value in the specified unit</p>
</td></tr></table>

  

### <a id="QueueSystem">QueueSystem</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/QueueSystem.ts#L14)</span>

  <p>Describes a system that encourages or forces people to queue up.</p>


  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">canSkipQueueWithDisability</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if you can skip the queue with a disability, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">grabBars</td><td class="property-type"><a href="#GrabBars">GrabBars</a></td><td class="property-docs"><p>Grab bars inside the queueing system, if applicable.</p>
</td></tr><tr><td class="property-name">hasVisualAnnouncements</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the queueing system announces the next person in line visually, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">interactions</td><td class="property-type">
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
</td><td class="property-docs"><p>An object that indicates how the object can be interacted with, or how you can engange in the
main function of a place or thing.</p>
<p>The keys of this object are the interaction types, and the values are <a href="../0-model/#InteractionMode">InteractionMode</a>
objects.</p>
</td></tr><tr><td class="property-name">needsTickets</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the queueing uses tickets (usually numbered), <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">numberOfQueueServerPoints</td><td class="property-type"><code>number</code></td><td class="property-docs"><p>Number of queue server points.</p>
</td></tr><tr><td class="property-name">numberOfSeats</td><td class="property-type"><code>number</code></td><td class="property-docs"><p>Number of seats that can be used by people while waiting in the queue.</p>
</td></tr><tr><td class="property-name">usesCattleBars</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the queueing uses rails / cattle bars, <code>false</code> if not.</p>
</td></tr></table>

  

### <a id="Restroom">Restroom</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Restroom.ts#L31)</span>

  <p>Describes a <code>Room</code> that contains one or more <code>Toilet</code>s or <code>Shower</code>s.</p>


  
  

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
</td><td class="property-docs"><p>Defines who this room is for. See <a href="https://wiki.openstreetmap.org/wiki/Key:access">https://wiki.openstreetmap.org/wiki/Key:access</a> for more information.</p>
</td></tr><tr><td class="property-name">address</td><td class="property-type"><a href="#StructuredAddress">StructuredAddress</a></td><td class="property-docs"></td></tr><tr><td class="property-name">description</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">entrance</td><td class="property-type"><a href="#EntranceProperties">EntranceProperties</a></td><td class="property-docs"><p>Object describing the entrance to this room.</p>
</td></tr><tr><td class="property-name">entrances</td><td class="property-type"><a href="#Entrance">Entrance</a>[]</td><td class="property-docs"><p>Object describing the entrance to this room.</p>
</td></tr><tr><td class="property-name">hasBathTub</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if there is a bath tub in this room, <code>false</code> if not, <code>undefined</code> if condition is
unknown.</p>
</td></tr><tr><td class="property-name">hasCeilingHoist</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the restroom has a ceiling hoist, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">hasChangingTableForAdults</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the restroom has a changing table for adults, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">hasChangingTableForBabies</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the restroom has a changing table for babies, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">hasEmergencyPullstring</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the restroom has an emergency pull string, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">hasMirror</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the restroom has a mirror, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">hasShower</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the restroom has a shower, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">hasSupportRails</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if there support rails on the walls</p>
</td></tr><tr><td class="property-name">heightOfDrier</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>At which height from the floor is the drier or towel?</p>
</td></tr><tr><td class="property-name">heightOfSoap</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>At which height from the floor is the soap?</p>
</td></tr><tr><td class="property-name">interactions</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>callEmergency</code>

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
</td><td class="property-docs"><p>An object that indicates how the object can be interacted with, or how you can engange in the
main function of a place or thing.</p>
<p>The keys of this object are the interaction types, and the values are <a href="../0-model/#InteractionMode">InteractionMode</a>
objects.</p>
</td></tr><tr><td class="property-name">isAccessibleWithWheelchair</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the room&#39;s relevant facilities are completely accessible while using a wheelchair,
<code>false</code> if not, <code>undefined</code> if the condition is unknown or difficult to assess.</p>
</td></tr><tr><td class="property-name">mirror</td><td class="property-type"><a href="#Mirror">Mirror</a></td><td class="property-docs"><p>Describes a mirror, if existing.</p>
</td></tr><tr><td class="property-name">sameAs</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">shower</td><td class="property-type"><a href="#Shower">Shower</a></td><td class="property-docs"><p>Object describing a shower inside this restroom, if existing.</p>
</td></tr><tr><td class="property-name">signIcons</td><td class="property-type">Array of one or more of these strings:

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
</td><td class="property-docs"><p>Visible icons on the restroom’s sign</p>
</td></tr><tr><td class="property-name">toilet</td><td class="property-type"><a href="#Toilet">Toilet</a></td><td class="property-docs"><p>Object describing a toilet inside the restroom, if existing.</p>
</td></tr><tr><td class="property-name">turningSpaceInside</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>How wide is the space inside that you can use for turning?</p>
</td></tr><tr><td class="property-name">usageFee</td><td class="property-type"><a href="#CurrencyValue">CurrencyValue</a>[]</td><td class="property-docs"><p>Defines how much you have to pay to use this restroom. There might be multiple fee amounts,
e.g. for different access types or usage times.</p>
</td></tr><tr><td class="property-name">washBasin</td><td class="property-type"><a href="#WashBasin">WashBasin</a></td><td class="property-docs"><p>Object describing a wash basin belonging to this restroom. It can be outside of the restroom.</p>
</td></tr></table>

  

### <a id="Room">Room</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Room.ts#L33)</span>

  <p>Describes a room inside a structure.</p>


  
  

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
</td><td class="property-docs"><p>Defines who this room is for. See <a href="https://wiki.openstreetmap.org/wiki/Key:access">https://wiki.openstreetmap.org/wiki/Key:access</a> for more information.</p>
</td></tr><tr><td class="property-name">address</td><td class="property-type"><a href="#StructuredAddress">StructuredAddress</a></td><td class="property-docs"></td></tr><tr><td class="property-name">description</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"></td></tr><tr><td class="property-name">entrance</td><td class="property-type"><a href="#EntranceProperties">EntranceProperties</a></td><td class="property-docs"><p>Object describing the entrance to this room.</p>
</td></tr><tr><td class="property-name">entrances</td><td class="property-type"><a href="#Entrance">Entrance</a>[]</td><td class="property-docs"><p>Object describing the entrance to this room.</p>
</td></tr><tr><td class="property-name">hasSupportRails</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if there support rails on the walls</p>
</td></tr><tr><td class="property-name">interactions</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>callEmergency</code>

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
</td><td class="property-docs"><p>An object that indicates how the object can be interacted with, or how you can engange in the
main function of a place or thing.</p>
<p>The keys of this object are the interaction types, and the values are <a href="../0-model/#InteractionMode">InteractionMode</a>
objects.</p>
</td></tr><tr><td class="property-name">isAccessibleWithWheelchair</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the room&#39;s relevant facilities are completely accessible while using a wheelchair,
<code>false</code> if not, <code>undefined</code> if the condition is unknown or difficult to assess.</p>
</td></tr><tr><td class="property-name">sameAs</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr><tr><td class="property-name">turningSpaceInside</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>How wide is the space inside that you can use for turning?</p>
</td></tr></table>

  

### <a id="Seat">Seat</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Seat.ts#L46)</span>

  <p>Describes one or multiple seats / chairs / benches / stools / couches / sofas / armchairs / ...</p>


  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">adjustmentAxes</td><td class="property-type">Array of one or more of these strings:

<p class='grid'>
<code>axial</code>

<code>coronal</code>

<code>sagittal</code>
</p>
</td><td class="property-docs"><p>The seat can be adjusted in the following axes.</p>
</td></tr><tr><td class="property-name">adjustmentDirections</td><td class="property-type">Array of one or more of these strings:

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
</td><td class="property-docs"><p>The seat can be adjusted in the following directions.</p>
</td></tr><tr><td class="property-name">columns</td><td class="property-type"><code>number</code>[]</td><td class="property-docs"><p>The seat column numbers. This is only for seats in a fixed seating arrangement.</p>
</td></tr><tr><td class="property-name">description</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Name of the entrance (helpful if there are multiple entrances).</p>
</td></tr><tr><td class="property-name">fixedHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>How high is the desk? For variable-height desks, use <code>minimalHeight</code> and <code>maximalHeight</code>
instead.</p>
<p>This can be used to determine if a wheelchair user can sit at the desk.</p>
</td></tr><tr><td class="property-name">hasAdjustableHeight</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>The seat has an adjustable seating surface.</p>
</td></tr><tr><td class="property-name">hasHeadRest</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>The seat has a headrest.</p>
</td></tr><tr><td class="property-name">hasRemovableArmRests</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>The seat has removable armrests.</p>
</td></tr><tr><td class="property-name">hasSeatbelt</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>The seat has a seatbelt.</p>
</td></tr><tr><td class="property-name">interactions</td><td class="property-type">
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

<code>removeArmrests</code>

<code>sit</code>

<code>unfold</code>
</p>

Values must be of type <a href="#InteractionMode">InteractionMode</a>.
</td><td class="property-docs"><p>An object that indicates how the object can be interacted with, or how you can engange in the
main function of a place or thing.</p>
<p>The keys of this object are the interaction types, and the values are <a href="../0-model/#InteractionMode">InteractionMode</a>
objects.</p>
</td></tr><tr><td class="property-name">intercom</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Intercom">Intercom</a></td><td class="property-docs"><p>Information about an intercom at this seat, if applicable.</p>
<p><code>null</code> indicates there is no intercom.</p>
</td></tr><tr><td class="property-name">isCenterColumn</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>The seat is located at the center of the seating arrangement, laterally.</p>
</td></tr><tr><td class="property-name">isFixed</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>The seat is fixed.</p>
</td></tr><tr><td class="property-name">isFoldable</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>The seat can be folded.</p>
</td></tr><tr><td class="property-name">isFrontRow</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>The seat is located at the front row of the seating arrangement.</p>
</td></tr><tr><td class="property-name">isLastRow</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>The seat is located at the last row of the seating arrangement.</p>
</td></tr><tr><td class="property-name">isMobile</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>The seat is mobile.</p>
</td></tr><tr><td class="property-name">isWheelchairAccessible</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>The seat is wheelchair accessible.</p>
</td></tr><tr><td class="property-name">maximalHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>How high is the desk maximally? This is only for variable-height desks. Use <code>fixedHeight</code> for
fixed-height desks.
This can be used to determine if a wheelchair user can sit at the desk.</p>
</td></tr><tr><td class="property-name">minimalHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>How high is the desk minimally? This is only for variable-height desks. Use <code>fixedHeight</code> for
fixed-height desks.
This can be used to determine if a wheelchair user can sit at the desk.</p>
</td></tr><tr><td class="property-name">name</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Name of the entrance (helpful if there are multiple entrances).</p>
</td></tr><tr><td class="property-name">payment</td><td class="property-type"><code>undefined</code>&nbsp;|&nbsp;<a href="#Payment">Payment</a></td><td class="property-docs"><p>Information about payment at this seat or the cost of using this seat.</p>
<p><code>null</code> indicates there is no payment possible/required.</p>
</td></tr><tr><td class="property-name">reservedForPersonsWith</td><td class="property-type"><a href="#PersonalProfile">PersonalProfile</a></td><td class="property-docs"><p>The seat is reserved for persons with the given profile.</p>
</td></tr><tr><td class="property-name">rows</td><td class="property-type"><code>number</code>[]</td><td class="property-docs"><p>The seat row numbers. This is only for seats in a fixed seating arrangement.</p>
</td></tr><tr><td class="property-name">seatbeltPoints</td><td class="property-type"><code>number</code></td><td class="property-docs"><p>The number of seatbelt points.</p>
</td></tr><tr><td class="property-name">turningSpaceInFront</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>How much space is there in front of the desk?
This can be used to determine if a wheelchair user can sit at the desk.</p>
</td></tr></table>

  

### <a id="Shower">Shower</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Shower.ts#L30)</span>

  <p>Describes a shower.</p>


  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">door</td><td class="property-type"><a href="#Door">Door</a></td><td class="property-docs"></td></tr><tr><td class="property-name">grabBars</td><td class="property-type"><a href="#GrabBars">GrabBars</a></td><td class="property-docs"><p>Ergonomic handles inside the shower.</p>
</td></tr><tr><td class="property-name">hasShowerSeat</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the shower has a seat, <code>false</code> if not..</p>
</td></tr><tr><td class="property-name">hasSupportRails</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the shower has support rails, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">interactions</td><td class="property-type">
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
</td><td class="property-docs"><p>An object that indicates how the object can be interacted with, or how you can engange in the
main function of a place or thing.</p>
<p>The keys of this object are the interaction types, and the values are <a href="../0-model/#InteractionMode">InteractionMode</a>
objects.</p>
</td></tr><tr><td class="property-name">seat</td><td class="property-type"><a href="#Seat">Seat</a></td><td class="property-docs"><p>Describes the shower seat, if existing.</p>
</td></tr><tr><td class="property-name">stairs</td><td class="property-type"><a href="#Stairs">Stairs</a></td><td class="property-docs"></td></tr></table>

  

### <a id="Signage">Signage</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Signage.ts#L18)</span>

  <p>Describes a signage / physical navigation system belonging to a location.</p>


  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">description</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>A description of the signage.</p>
</td></tr><tr><td class="property-name">fontHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>The height of the font used on the signage. Most likely in millimeters, using a range.</p>
</td></tr><tr><td class="property-name">hasAudio</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the signage has audio, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">hasBraille</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the signage has braille, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">hasNumbers</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the signage uses a numbering scheme, <code>false</code> if not, <code>undefined</code> if condition is
unknown.</p>
</td></tr><tr><td class="property-name">hasPictograms</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the signage has pictograms, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">hasRaisedLetters</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the signage has raised letters, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">hasSearch</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the signage has a search function, <code>false</code> if not, <code>undefined</code> if condition is
unknown.</p>
</td></tr><tr><td class="property-name">hasTactileGuideStrips</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the signage has tactile guide strips, <code>false</code> if not, <code>undefined</code> if condition is
nknown.</p>
</td></tr><tr><td class="property-name">hasTactileHandRails</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the signage has tactile hand rails, <code>false</code> if not, <code>undefined</code> if condition is
unknown.</p>
</td></tr><tr><td class="property-name">hasTactileMap</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the signage has a tactile map, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">hasTactileNorthMarkers</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the signage has tactile north markers, <code>false</code> if not, <code>undefined</code> if condition is
unknown.</p>
<p><a href="https://twitter.com/saizai/status/1210352258950598656">https://twitter.com/saizai/status/1210352258950598656</a></p>
</td></tr><tr><td class="property-name">hasTactilePaving</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the signage has tactile paving, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">hasTactileRoomNames</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the signage has tactile room names, <code>false</code> if not, <code>undefined</code> if condition is
unknown.</p>
</td></tr><tr><td class="property-name">hasText</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the signage has text features, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">hasVideo</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the signage has video, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">hasVirtualMap</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the signage has a virtual map, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">highLegibility</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the signage has high legibility, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">interactions</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>findYourDestination</code>

<code>locateYourself</code>

<code>useSitemap</code>
</p>

Values must be of type <a href="#InteractionMode">InteractionMode</a>.
</td><td class="property-docs"><p>An object that indicates how the object can be interacted with, or how you can engange in the
main function of a place or thing.</p>
<p>The keys of this object are the interaction types, and the values are <a href="../0-model/#InteractionMode">InteractionMode</a>
objects.</p>
</td></tr><tr><td class="property-name">isHighContrast</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the signage has high contrast, <code>false</code> if not.</p>
</td></tr></table>

  

### <a id="Staff">Staff</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Staff.ts#L7)</span>

  <p>Describes the presence of staff and their qualifications and/or provided services.</p>


  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">canSeeVisitorsFromInside</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the staff has means to see visitors from the inside at all times when the place is
open (for example a window or CCTV system), <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">hasFreeAssistantForVisitors</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if there is an assistant for the duration of the visit that is free of charge, <code>false</code>
if not.</p>
</td></tr><tr><td class="property-name">languages</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"><p>Languages that the staff speaks, including sign language variants.</p>
<p>Uses <a href="https://github.com/sozialhelden/ietf-language-tags">IETF language codes</a>.</p>
</td></tr><tr><td class="property-name">spokenLanguages</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"></td></tr></table>

  

### <a id="Stairs">Stairs</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Stairs.ts#L11)</span>

  <p>The <code>Stairs</code> interface describes one or more walkable stairs.</p>


  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">alternativeMobileEquipmentIds</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"><p>You SHOULD reference alternative equipment IDs with this field, for example elevators,
escalators, or hoists.</p>
</td></tr><tr><td class="property-name">count</td><td class="property-type"><code>number</code></td><td class="property-docs"><p>Number of steps.</p>
</td></tr><tr><td class="property-name">floors</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"><p>Floor numbers that are accessible via these stairs.</p>
</td></tr><tr><td class="property-name">grabBars</td><td class="property-type"><a href="#GrabBars">GrabBars</a></td><td class="property-docs"><p>Grab bars belonging to the stairs.</p>
</td></tr><tr><td class="property-name">hasAntiSlipNosing</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if all relevant steps are made with anti-slip material.</p>
</td></tr><tr><td class="property-name">hasBrailleSignage</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if there is braille navigation in this staircase, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">hasHandRail</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if there is a handrail covering all relevant steps, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">hasHighContrastNosing</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if all relevant steps have a high contrast nosing.</p>
</td></tr><tr><td class="property-name">hasMetalGrating</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>Do the stairs have metal grating? This is difficult to navigate for people with assistance
dogs.</p>
</td></tr><tr><td class="property-name">hasTactileSafetyStrips</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if all relevant steps have tactile safety surfaces, used as warnings, implying textures
detectable with the touch of a foot or sweep of a cane.</p>
</td></tr><tr><td class="property-name">hasTactileSignage</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if there is tactile navigation in this staircase, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">isSpiral</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the stairs are spiral, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">isWellLit</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>Are the stairs and podests well lit?</p>
</td></tr><tr><td class="property-name">name</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>If there are multiple staircase, you SHOULD indicate a name for this staircase here.</p>
</td></tr><tr><td class="property-name">stepHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>Indicates how high the steps if these stairs are (can be a range).</p>
</td></tr></table>

  

### <a id="StructuredAddress">StructuredAddress</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Address.ts#L8)</span>

  <p>The address of a places as Address as a series of structured attributes.</p>


  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">areas</td><td class="property-type"><a href="../i18n">LocalizedString</a>[]</td><td class="property-docs"><p>An array of named areas below the district and above street.
In some regions such areas might also contain street names,
when individual street segments have names separate from the name of the whole road.</p>
</td></tr><tr><td class="property-name">building</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Building name</p>
</td></tr><tr><td class="property-name">city</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>The name of the primary locality of the place.</p>
</td></tr><tr><td class="property-name">countryCode</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>A three-letter country code in ISO 3166-1 alpha-3, see <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3">https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3</a></p>
</td></tr><tr><td class="property-name">county</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>A division of a state; typically a secondary-level administrative division of a country or
equivalent.</p>
</td></tr><tr><td class="property-name">district</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>A division of city; typically an administrative unit within a larger
city or a customary name of a city&#39;s neighborhood.</p>
</td></tr><tr><td class="property-name">house</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>House or street number.</p>
</td></tr><tr><td class="property-name">levelIndex</td><td class="property-type"><code>number</code></td><td class="property-docs"><p>Relative in relation to other levels. <code>0</code> for ground level must have index 0, <code>1</code> for first
level, etc. You can use half numbers for levels like <code>1.5</code>.</p>
</td></tr><tr><td class="property-name">levelName</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Name of the level. Example: <code>{ en: &quot;Floor 1&quot; }</code>, <code>{ en: &quot;Ground level&quot; }</code>.</p>
</td></tr><tr><td class="property-name">postalCode</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>An alphanumeric string included in a postal address to
facilitate mail sorting (a.k.a. post code, postcode, or ZIP code).</p>
</td></tr><tr><td class="property-name">regions</td><td class="property-type"><a href="../i18n">LocalizedString</a>[]</td><td class="property-docs"><p>For address conventions where more than to levels of named areas above the city level are in
use, the regions attribute provides an array with all additional area names, ordered by
decreasing size (starting with the highest subdivision below state)</p>
</td></tr><tr><td class="property-name">room</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Room name. Example: <code>{ en: &quot;Meeting room ‘Rome’&quot; }</code>.</p>
</td></tr><tr><td class="property-name">roomNumber</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Room number. Example: <code>{ en: &quot;B-101&quot; }</code>.</p>
</td></tr><tr><td class="property-name">state</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>A division of a country; typically a first-level administrative division of a country and/or a
geographical region.</p>
</td></tr><tr><td class="property-name">stateCode</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>A code/abbreviation for the state division of a country.</p>
</td></tr><tr><td class="property-name">street</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Street name (in practice may also contain street number).</p>
</td></tr><tr><td class="property-name">text</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>A displayable, formatted address as rich text.</p>
</td></tr></table>

  

### <a id="Surface">Surface</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Surface.ts#L186)</span>

  <p>Describes the surface of a ground or path.</p>


  
  

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
</td><td class="property-docs"><p>According to <a href="https://wiki.openstreetmap.org/wiki/Key:smoothness">https://wiki.openstreetmap.org/wiki/Key:smoothness</a></p>
</td></tr><tr><td class="property-name">turningSpace</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>Turning space that this ground provides to people.</p>
</td></tr><tr><td class="property-name">types</td><td class="property-type">Array of one or more of these strings:

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
</td><td class="property-docs"><p>According to <a href="https://wiki.openstreetmap.org/wiki/Key:surface">https://wiki.openstreetmap.org/wiki/Key:surface</a></p>
</td></tr></table>

  

### <a id="TechCombination">TechCombination</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/TechCombination.ts#L7)</span>

  <p>Describes a combination of technologies that are used together to achieve a specific goal.</p>


  The `uris` property is required.
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">description</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Localizable description of the combination. Can describe in which mode or for what goal the
tech is used.</p>
</td></tr><tr><td class="property-name">name</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Localizable name/title of the combination. Can describe in which mode or for what goal the
tech is used.</p>
</td></tr><tr><td class="property-name">uris*</td><td class="property-type"><code>string</code>[]</td><td class="property-docs"><p>URIs of technologies that are combined together to form this tech combination. Use RDF if
possible.</p>
<p>Supported prefix examples:</p>
<ul>
<li><code>wikidata:Q117266</code> for a banana connector (<a href="https://www.wikidata.org/wiki/Q117266">https://www.wikidata.org/wiki/Q117266</a>)</li>
<li><code>openstreetmap:way/123</code> for tying the tech to a specific location on the planet</li>
<li><code>wikipedia:Banana connector</code> for a banana connector (<a href="https://en.wikipedia.org/wiki/Banana_connector">https://en.wikipedia.org/wiki/Banana_connector</a>)</li>
</ul>
</td></tr></table>

  

### <a id="Toilet">Toilet</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Toilet.ts#L22)</span>

  <p>Describes a single toilet that can be inside a restroom or cabin.</p>


  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">flushMechanismDistanceFromToilet</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>Indicates how far the flush mechanism(s) from the toilet, from the perspective of a the floor
plan. If the flush mechanism is right behind the toilet, this is a 0 length.</p>
</td></tr><tr><td class="property-name">grabBars</td><td class="property-type"><a href="#GrabBars">GrabBars</a></td><td class="property-docs"><p>Object describing the grab bars.</p>
</td></tr><tr><td class="property-name">hasAutomaticFlush</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the toilet is automatically flushing after use.</p>
</td></tr><tr><td class="property-name">heightOfBase</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>Indicates the height of the toilet’s base.</p>
</td></tr><tr><td class="property-name">interactions</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>flush</code>

<code>secondaryFlush</code>

<code>spray</code>

<code>use</code>
</p>

Values must be of type <a href="#InteractionMode">InteractionMode</a>.
</td><td class="property-docs"><p>An object that indicates how the object can be interacted with, or how you can engange in the
main function of a place or thing.</p>
<p>The keys of this object are the interaction types, and the values are <a href="../0-model/#InteractionMode">InteractionMode</a>
objects.</p>
</td></tr><tr><td class="property-name">isLatrine</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>Indicates whether the toilet is a latrine.</p>
</td></tr><tr><td class="property-name">isSquatToilet</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>Indicates whether the toilet is a squat toilet.</p>
</td></tr><tr><td class="property-name">isUrinal</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>Indicates whether the toilet is a urinal.</p>
</td></tr><tr><td class="property-name">spaceInFront</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>How much space is in front of the toilet?</p>
</td></tr><tr><td class="property-name">spaceOnUsersLeftSide</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>How much space is on the left side of the toilet? (from the perspective of somebody using the
toilet)</p>
</td></tr><tr><td class="property-name">spaceOnUsersRightSide</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>How much space is on the right side of the toilet? (from the perspective of somebody using the
toilet)</p>
</td></tr></table>

  

### <a id="WashBasin">WashBasin</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/WashBasin.ts#L26)</span>

  <p>Describes a wash basin.</p>


  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">accessibleWithWheelchair</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the wash basin is accessible with wheelchairs, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">height</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>Defines at which height is the wash basin&#39;s top</p>
</td></tr><tr><td class="property-name">interactions</td><td class="property-type">
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
</td><td class="property-docs"><p>An object that indicates how the object can be interacted with, or how you can engange in the
main function of a place or thing.</p>
<p>The keys of this object are the interaction types, and the values are <a href="../0-model/#InteractionMode">InteractionMode</a>
objects.</p>
</td></tr><tr><td class="property-name">isLocatedInsideRestroom</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the restroom&#39;s wash basin is inside the cabin, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">spaceBelowDepth</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>How deep is the space below the wash basin?</p>
</td></tr><tr><td class="property-name">spaceBelowHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>How high is the space below the wash basin?</p>
</td></tr></table>

  

### <a id="WheelchairParking">WheelchairParking</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Parking.ts#L21)</span>

  <p>Describes one or more wheelchair parking lots.</p>


  
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">count</td><td class="property-type"><code>number</code></td><td class="property-docs"><p>Defines many wheelchair accessible parking lots are provided</p>
</td></tr><tr><td class="property-name">distanceToEntrance</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>How far away is the parking from the main entrance? If there is a separate wheelchair entrance,
the distance to this entrance MUST be used.</p>
</td></tr><tr><td class="property-name">hasDedicatedSignage</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if there is dedicated signage at all relevant turning points from the street to the
parking, <code>false</code> if not, <code>undefined</code> if this is unknown.</p>
</td></tr><tr><td class="property-name">interactions</td><td class="property-type">
Object with one or more of these keys:

<p class="grid">
<code>arrive</code>

<code>enterVehicle</code>

<code>exitVehicle</code>

<code>park</code>
</p>

Values must be of type <a href="#InteractionMode">InteractionMode</a>.
</td><td class="property-docs"><p>An object that indicates how the object can be interacted with, or how you can engange in the
main function of a place or thing.</p>
<p>The keys of this object are the interaction types, and the values are <a href="../0-model/#InteractionMode">InteractionMode</a>
objects.</p>
</td></tr><tr><td class="property-name">isLocatedInside</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the parking is inside a building or under a roof, <code>false</code> if not, <code>undefined</code> if
unknown.</p>
</td></tr><tr><td class="property-name">length</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>Length constraint of the parking lots.</p>
</td></tr><tr><td class="property-name">location</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Describes where the parking is located.</p>
</td></tr><tr><td class="property-name">maxVehicleHeight</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>Maximal allowed vehicle height for users of this parking.</p>
</td></tr><tr><td class="property-name">neededParkingPermits</td><td class="property-type"><a href="../i18n">LocalizedString</a>[]</td><td class="property-docs"><p>List of permit names that allow using this parking.</p>
</td></tr><tr><td class="property-name">width</td><td class="property-type"><a href="#Length">Length</a></td><td class="property-docs"><p>Width constraint of the parking lots.</p>
</td></tr></table>

  

### <a id="WheelchairPlaces">WheelchairPlaces</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/WheelchairPlaces.ts#L6)</span>

  <p>The WheelchairPlaces interface describes the presence of reserved spots for wheelchairs.</p>


  The `count` property is required.
  

  <table><tr><th class="property-name">Name</th><th class="property-type">Type</th><th class="property-docs"></th></tr><tr><td class="property-name">count*</td><td class="property-type"><code>number</code></td><td class="property-docs"><p>The number of designated places for wheelchairs, for example, in a cinema or theater.</p>
</td></tr><tr><td class="property-name">hasSpaceForAssistant</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p>Is there additional space for an assistant?</p>
</td></tr><tr><td class="property-name">wheelchairUserCapacity</td><td class="property-type"><code>number</code></td><td class="property-docs"><p>The number of people using a wheelchair that can be accomodated at the same time. Use this when
there is no designated space for wheelchair users, but the number is known.</p>
</td></tr></table>

  

### <a id="WifiAccessibility">WifiAccessibility</a>

  <span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/WifiAccessibility.ts#L20)</span>

  <p>Describes the presence of staff and their qualifications and/or provided services.</p>


  
  

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
</td><td class="property-docs"><p>Describes who can access the wifi.</p>
</td></tr><tr><td class="property-name">descriptionWhereToGetLoginData</td><td class="property-type"><a href="../i18n">LocalizedString</a></td><td class="property-docs"><p>Describes where you get the login data / guest pass.</p>
</td></tr><tr><td class="property-name">hasCaptivePortal</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the wifi has a captive portal website.</p>
</td></tr><tr><td class="property-name">hasFixedPassword</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the wifi has a fixed password. Knowing this password must be enough to enter and use
the wifi.</p>
</td></tr><tr><td class="property-name">isCaptivePortalAccessible</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the wifi captive portal is accessible (WAI/ARIA).</p>
</td></tr><tr><td class="property-name">isOpenToEveryone</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the wifi is open to everyone, <code>false</code> if it is explicitly not.</p>
</td></tr><tr><td class="property-name">isOpenToStaff</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the wifi is open to explicit place staff, <code>false</code> if explicitly not.</p>
</td></tr><tr><td class="property-name">isOpenToVisitors</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if the wifi is open to explicit place visitors, <code>false</code> if explicitly not.</p>
</td></tr><tr><td class="property-name">needsGuestPass</td><td class="property-type"><code>boolean</code></td><td class="property-docs"><p><code>true</code> if you need a personalized guest pass / code / password to use the wifi, <code>false</code> if not.</p>
</td></tr><tr><td class="property-name">password</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>A string with the Wifi password. Only use this attribute if security allows to publish this
info online publicly.</p>
</td></tr><tr><td class="property-name">ssid</td><td class="property-type"><code>string</code></td><td class="property-docs"><p>A string with the Wifi name (SSID). Only use this attribute if security allows to publish this
info online publicly.</p>
</td></tr><tr><td class="property-name">usageFee</td><td class="property-type"><a href="#CurrencyValue">CurrencyValue</a>[]</td><td class="property-docs"><p>Describes if you need to pay a usage fee to use the wifi, or if no fee is needed.</p>
</td></tr></table>

  
