# Type Aliases

<style>
    .source-link {
      float: right;
    }
  </style>

Besides [interfaces](./interfaces.md) and [constants](./constants.md), A11yJSON defines the following bare types.

Some lack proper formatting in the documentation. Fixes in [`tools/generate-overview.ts`](https://github.com/sozialhelden/a11yjson/blob/master/tools/generate-overview.ts) are welcome!

### <a id="Acceleration">Acceleration</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L246)</span>



Definition: <a href="#Quantity">Quantity</a>&nbsp;|&nbsp;<code>string</code>



### <a id="AccessType">AccessType</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/AccessType.ts#L20)</span>



Definition: one of the following strings:

- `private`

- `public`

- `customers`

- `permissive`

- `yes`

- `no`

- `permit`

- `designated`

- `delivery`

- `emergency`

- `residents`

- `employees`

- `disabled`

- `yes`

- `no`



### <a id="Brightness">Brightness</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L241)</span>



Definition: <a href="#Quantity">Quantity</a>&nbsp;|&nbsp;<code>string</code>



### <a id="DeskInteraction">DeskInteraction</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Desk.ts#L34)</span>



Definition: one of the following strings:

- `changeHeight`

- `savePreset`

- `enqueue`

- `checkIn`

- `checkOut`

- `ringBell`

- `pay`

- `handoverLuggage`

- `handover`

- `getReturn`

- `getFood`

- `getShoppingBag`

- `scan`

- `selfCheckout`

- `open`

- `close`

- `unlock`

- `lock`

- `unlockAndLock`

- `openAndClose`



### <a id="Direction">Direction</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/ActionMode.ts#L57)</span>

<p>Describes a physical direction, from the perspective of a person facing forward.</p>


Definition: one of the following strings:

- `up`

- `down`

- `left`

- `right`

- `forward`

- `backward`

- `clockwise`

- `counterclockwise`



### <a id="DirectionAxis">DirectionAxis</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/ActionMode.ts#L38)</span>

<p>Describes a physical direction axis relative to a person’s body.</p>


Definition: one of the following strings:

- `sagittal`

- `coronal`

- `axial`



### <a id="DoorInteraction">DoorInteraction</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Door.ts#L20)</span>



Definition: one of the following strings:

- `ringDoorbell`

- `open`

- `close`

- `unlock`

- `lock`

- `unlockAndLock`

- `openAndClose`



### <a id="EquipmentInteraction">EquipmentInteraction</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/EquipmentProperties.ts#L71)</span>



Definition: one of the following strings:

- `use`

- `selectFloor`

- `arriveAtFloor`

- `callEmergency`

- `ride`

- `travel`

- `buy`

- `sell`

- `call`

- `understand`

- `sleep`

- `toggle`

- `engage`

- `flush`

- `scan`

- `handover`

- `enable`

- `disable`

- `locateYourself`

- `findYourDestination`

- `getTreatment`



### <a id="EquipmentType">EquipmentType</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/EquipmentProperties.ts#L45)</span>



Definition: one of the following strings:

- `bed`

- `wardrobe`

- `elevator`

- `escalator`

- `movingWalkway`

- `ramp`

- `hoist`

- `stairLift`

- `switch`

- `sitemap`

- `vendingMachine`

- `intercom`

- `powerOutlet`

- `flushMechanism`

- `bodyScanner`

- `luggageScanner`

- `ticketVendingMachine`

- `xrayMachine`

- `ctScanner`

- `mriScanner`

- `ultrasoundScanner`

- `wheelchairLift`

- `treatmentChair`



### <a id="Force">Force</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L244)</span>



Definition: <a href="#Quantity">Quantity</a>&nbsp;|&nbsp;<code>string</code>



### <a id="GenericInteraction">GenericInteraction</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Accessibility.ts#L79)</span>



Definition: one of the following strings:

- `watchMovies`

- `watchPlays`

- `explore`

- `visit`

- `roam`

- `read`

- `rent`

- `watch`

- `see`

- `listen`

- `getFood`

- `getTreatment`

- `getService`

- `eat`

- `pay`

- `buy`

- `sell`

- `workHere`

- `arrive`

- `checkIn`

- `checkOut`

- `useLockers`

- `useService`

- `change`

- `use`

- `book`

- `play`



### <a id="GrabBarsInteraction">GrabBarsInteraction</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/GrabBars.ts#L13)</span>



Definition: one of the following strings:

- `localizeYourself`

- `findYourDestination`

- `foldUp`

- `foldDown`

- `adjust`



### <a id="Hertz">Hertz</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L247)</span>



Definition: <a href="#Quantity">Quantity</a>&nbsp;|&nbsp;<code>string</code>



### <a id="IETFLanguageTag">IETFLanguageTag</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/ietfLanguageTags.ts#L7)</span>

<p>Defines a spoken or written language in <a href="https://github.com/sozialhelden/ietf-language-tags">IETF language tag format</a>.</p>


Definition: <code>string</code>



### <a id="IntercomInteraction">IntercomInteraction</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Intercom.ts#L14)</span>



Definition: one of the following strings:

- `ring`

- `call`

- `hangUp`

- `open`

- `close`

- `identify`



### <a id="Length">Length</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L238)</span>



Definition: <a href="#Quantity">Quantity</a>&nbsp;|&nbsp;<code>string</code>



### <a id="LocalizedString">LocalizedString</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/LocalizedString.ts#L13)</span>



Definition: 
Object with one or more of these keys:

<p class="grid">
<code>string</code>
</p>

Values must be of type <code>string</code>.




### <a id="Mass">Mass</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L240)</span>



Definition: <a href="#Quantity">Quantity</a>&nbsp;|&nbsp;<code>string</code>



### <a id="MediaInteraction">MediaInteraction</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Media.ts#L26)</span>



Definition: one of the following strings:

- `watch`

- `listen`

- `feel`

- `discover`

- `open`

- `close`

- `rent`

- `recognize`

- `browse`

- `read`

- `interact`



### <a id="MediaType">MediaType</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Media.ts#L42)</span>



Definition: one of the following strings:

- `document`

- `menu`

- `guide`

- `tour`

- `presentation`

- `exhibit`

- `movie`

- `play`

- `screen`

- `website`

- `form`



### <a id="MirrorInteraction">MirrorInteraction</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Mirror.ts#L13)</span>



Definition: one of the following strings:

- `turn`

- `adjust`

- `move`

- `clean`

- `use`



### <a id="Operator">Operator</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L67)</span>



Definition: one of the following strings:

- `<`

- `<=`

- `==`

- `>=`

- `>`

- `=`

- `~`

- `~=`

- `!=`



### <a id="ParkingInteraction">ParkingInteraction</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Parking.ts#L15)</span>



Definition: one of the following strings:

- `park`

- `enterVehicle`

- `exitVehicle`

- `arrive`



### <a id="Paymentnteraction">Paymentnteraction</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Payment.ts#L12)</span>



Definition: one of the following strings:

- `pay`

- `checkIn`

- `logIn`

- `logOut`

- `register`



### <a id="QueueSystemInteraction">QueueSystemInteraction</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/QueueSystem.ts#L8)</span>



Definition: one of the following strings:

- `enqueue`

- `skipQueue`

- `wait`

- `leaveQueue`

- `arrive`

- `checkIn`

- `checkOut`

- `getTicket`

- `getOnesTurn`



### <a id="RestroomSignIcon">RestroomSignIcon</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Restroom.ts#L26)</span>



Definition: one of the following strings:

- `allGender`

- `female`

- `male`

- `personInWheelchair`

- `changingTable`

- `baby`

- `family`

- `urinal`

- `washBasin`

- `toiletBowl`



### <a id="RoomInteraction">RoomInteraction</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Room.ts#L27)</span>



Definition: one of the following strings:

- `enter`

- `exit`

- `stand`

- `sit`

- `see`

- `sleep`

- `play`

- `wait`

- `storeThings`

- `lookAround`

- `openWindow`

- `closeWindow`

- `callEmergency`



### <a id="SeatInteraction">SeatInteraction</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Seat.ts#L40)</span>



Definition: one of the following strings:

- `sit`

- `fold`

- `unfold`

- `move`

- `adjust`

- `adjustHeight`

- `adjustSeatingSurface`

- `adjustSeatingAngle`

- `adjustArmRests`

- `removeArmrests`

- `adjustHeadRest`

- `adjustLegRest`

- `adjustBackRest`

- `adjustFootRest`

- `adjustSeatBelt`

- `adjustSeatBeltLength`

- `adjustSeatBeltHeight`

- `adjustSeatBeltAngle`

- `adjustSeatBeltPosition`

- `adjustSeatBeltTension`

- `adjustSeatBeltLock`

- `connectSeatbelt`



### <a id="ShowerInteraction">ShowerInteraction</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Shower.ts#L23)</span>



Definition: one of the following strings:

- `transfer`

- `wash`

- `useShampoo`

- `useShowerGel`

- `useSoap`

- `useConditioner`

- `useShowerCurtain`

- `useShowerHead`

- `useSupport`



### <a id="SignageInteraction">SignageInteraction</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Signage.ts#L12)</span>



Definition: one of the following strings:

- `locateYourself`

- `findYourDestination`

- `useSitemap`



### <a id="Slope">Slope</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L242)</span>



Definition: <a href="#Quantity">Quantity</a>&nbsp;|&nbsp;<code>string</code>



### <a id="SmokingPolicy">SmokingPolicy</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/SmokingPolicy.ts#L16)</span>

<p>Describes the smoking policy for visitors of a place.</p>


Definition: one of the following strings:

- `dedicatedToSmoking`

- `allowedEverywhere`

- `inSeparateArea`

- `inIsolatedArea`

- `prohibited`

- `onlyOutside`



### <a id="SmoothnessType">SmoothnessType</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Surface.ts#L181)</span>



Definition: one of the following strings:

- `excellent`

- `good`

- `intermediate`

- `bad`

- `horrible`

- `impassable`

- `very_bad`

- `very_horrible`

- `very_good`



### <a id="Speed">Speed</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L245)</span>



Definition: <a href="#Quantity">Quantity</a>&nbsp;|&nbsp;<code>string</code>



### <a id="SurfaceType">SurfaceType</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Surface.ts#L167)</span>



Definition: one of the following strings:

- `acrylic`

- `aluminium`

- `anti-slip`

- `artificial`

- `artificial_grass`

- `artificial_turf`

- `asfalto`

- `ash`

- `asphalt`

- `astroturf`

- `bamboo`

- `bare_rock`

- `bark`

- `barkchips`

- `bedrock`

- `bitumen`

- `bituminous`

- `block`

- `boardwalk`

- `boulders`

- `brick`

- `brick_weave`

- `bricks`

- `bushes`

- `carpet`

- `cement`

- `chalk`

- `chipseal`

- `cinder`

- `clay`

- `cobblestone`

- `compacted`

- `compacted_gravel`

- `composite`

- `con`

- `concrete`

- `concrete_slab`

- `concrete_slabs`

- `construction`

- `coral`

- `coral_sand`

- `crushed_limestone`

- `crushed_shells`

- `debris`

- `decoturf`

- `dirt`

- `earth`

- `enrobé`

- `fine_gravel`

- `fine_sand`

- `flagstone`

- `footway`

- `glass`

- `goudron`

- `granite`

- `grass`

- `grass_paver`

- `grass_scrub`

- `grassland`

- `grating`

- `gravel`

- `green`

- `grit`

- `ground`

- `hardcore`

- `ice`

- `ice_road`

- `interlock`

- `iron`

- `laterite`

- `lawn`

- `leaves`

- `limerock`

- `limestone`

- `linoleum`

- `loose_gravel`

- `marble`

- `marble_plate`

- `meadow`

- `metal`

- `metal_grid`

- `mixed`

- `moss`

- `mud`

- `mulch`

- `native`

- `natural`

- `none`

- `oil`

- `overgrown`

- `path`

- `paved`

- `pavement`

- `paving`

- `paving_stone`

- `paving_stones`

- `peat`

- `pebbles`

- `pebblestone`

- `plank`

- `plastic`

- `plates`

- `rasin`

- `residential`

- `rock`

- `rocks`

- `rocky`

- `roman_paving`

- `rubber`

- `rubbercrumb`

- `rubble`

- `salt`

- `sand`

- `sandstone`

- `sawdust`

- `scree`

- `scrub`

- `sealed`

- `sett`

- `shell`

- `shells`

- `shingle`

- `slabs`

- `snow`

- `soil`

- `spur`

- `steel`

- `stepping_stones`

- `stone`

- `stones`

- `synthetic`

- `tactile_paving`

- `tar`

- `tared`

- `tarmac`

- `tartan`

- `terra`

- `terre`

- `tile`

- `tiles`

- `timber`

- `track`

- `trail`

- `trees`

- `tuff`

- `turf`

- `undefined`

- `unhewn_cobblestone`

- `unpaved`

- `unpaved2`

- `unpaved33`

- `unpaved_minor`

- `unsealed`

- `water`

- `wood`

- `wood_chips`

- `woodchips`

- `zebra`



### <a id="Temperature">Temperature</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L248)</span>



Definition: <a href="#Quantity">Quantity</a>&nbsp;|&nbsp;<code>string</code>



### <a id="TimeInterval">TimeInterval</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L243)</span>



Definition: <a href="#Quantity">Quantity</a>&nbsp;|&nbsp;<code>string</code>



### <a id="ToiletInteraction">ToiletInteraction</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Toilet.ts#L16)</span>



Definition: one of the following strings:

- `use`

- `flush`

- `secondaryFlush`

- `spray`



### <a id="Urgency">Urgency</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/PerceptionMode.ts#L36)</span>



Definition: one of the following strings:

- `alert`

- `alarm`

- `warning`

- `info`

- `debug`



### <a id="Volume">Volume</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L239)</span>



Definition: <a href="#Quantity">Quantity</a>&nbsp;|&nbsp;<code>string</code>



### <a id="WashBashinInteraction">WashBashinInteraction</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/WashBasin.ts#L20)</span>



Definition: one of the following strings:

- `changeTemperature`

- `changeWaterPressure`

- `useWater`

- `getHotWater`

- `getColdWater`

- `getCarbonizedWater`

- `useWaterJet`

- `useWaterSpray`

- `useSoap`

- `getTowel`

- `getPaperTowel`

- `useAirDryer`

- `sanitizeHands`



### <a id="WheelchairAccessibilityGrade">WheelchairAccessibilityGrade</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Accessibility.ts#L48)</span>



Definition: one of the following strings:

- `fully`

- `partially`

- `not`



### <a id="WifiInteraction">WifiInteraction</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/WifiAccessibility.ts#L14)</span>



Definition: one of the following strings:

- `login`

- `register`

- `getPassword`

- `getGuestPass`

- `getTerms`

- `acceptTerms`

