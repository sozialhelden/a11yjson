# Constants

<style>
    .source-link {
      float: right;
    }
  </style>

Besides [interfaces](./0-model.md) and [bare types](./type-aliases.md), A11yJSON defines the following constants.

Some lack proper formatting in the documentation. Fixes in [`tools/generate-overview.ts`](https://github.com/sozialhelden/a11yjson/blob/master/tools/generate-overview.ts) are welcome!

### <a id="AccelerationSchema">AccelerationSchema</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L182)</span>



`SimpleSchema` from the [`@sozialhelden/simpl-schema` NPM package](https://www.npmjs.com/package/@sozialhelden/simpl-schema).


### <a id="AccelerationSchemaDefinition">AccelerationSchemaDefinition</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L178)</span>

<p>Validates a acceleration quantity object and will only accept acceleration units, eg.
meter/second^2, miles/hour^2. Useful to describe the acceleration of a vehicle, or the
acceleration that a person is subjected to.</p>


`SchemaDefinition` from the [`@sozialhelden/simpl-schema` NPM package](https://www.npmjs.com/package/@sozialhelden/simpl-schema).


### <a id="AccessTypes">AccessTypes</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/AccessType.ts#L1)</span>



Read-only tuple with 15 strings:
<ul>
<li><code>private</code></li>

<li><code>public</code></li>

<li><code>customers</code></li>

<li><code>permissive</code></li>

<li><code>yes</code></li>

<li><code>no</code></li>

<li><code>permit</code></li>

<li><code>designated</code></li>

<li><code>delivery</code></li>

<li><code>emergency</code></li>

<li><code>residents</code></li>

<li><code>employees</code></li>

<li><code>disabled</code></li>

<li><code>yes</code></li>

<li><code>no</code></li>
</ul>



### <a id="BaseQuantitySchema">BaseQuantitySchema</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L137)</span>



`SimpleSchema` from the [`@sozialhelden/simpl-schema` NPM package](https://www.npmjs.com/package/@sozialhelden/simpl-schema).


### <a id="BrightnessSchema">BrightnessSchema</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L226)</span>



`SimpleSchema` from the [`@sozialhelden/simpl-schema` NPM package](https://www.npmjs.com/package/@sozialhelden/simpl-schema).


### <a id="BrightnessSchemaDefinition">BrightnessSchemaDefinition</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L225)</span>

<p>Validates a brightness descriptor and will only accept brightness units, eg. nits or lumens.</p>


`SchemaDefinition` from the [`@sozialhelden/simpl-schema` NPM package](https://www.npmjs.com/package/@sozialhelden/simpl-schema).


### <a id="DeskInteractions">DeskInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Desk.ts#L11)</span>



Read-only tuple with 20 strings:
<ul>
<li><code>changeHeight</code></li>

<li><code>savePreset</code></li>

<li><code>enqueue</code></li>

<li><code>checkIn</code></li>

<li><code>checkOut</code></li>

<li><code>ringBell</code></li>

<li><code>pay</code></li>

<li><code>handoverLuggage</code></li>

<li><code>handover</code></li>

<li><code>getReturn</code></li>

<li><code>getFood</code></li>

<li><code>getShoppingBag</code></li>

<li><code>scan</code></li>

<li><code>selfCheckout</code></li>

<li><code>open</code></li>

<li><code>close</code></li>

<li><code>unlock</code></li>

<li><code>lock</code></li>

<li><code>unlockAndLock</code></li>

<li><code>openAndClose</code></li>
</ul>



### <a id="DeskInteractionsSet">DeskInteractionsSet</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Desk.ts#L35)</span>



Set&lt;One of the following strings:

<p class='grid'>
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
&gt;


### <a id="DirectionAxes">DirectionAxes</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/ActionMode.ts#L26)</span>

<p>Describes a physical direction axis relative to a person’s body.</p>


Read-only tuple with 3 strings:
<ul>
<li><code>sagittal</code></li>

<li><code>coronal</code></li>

<li><code>axial</code></li>
</ul>



### <a id="Directions">Directions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/ActionMode.ts#L42)</span>

<p>Describes physical directions, from the perspective of a person facing forward.</p>


Read-only tuple with 8 strings:
<ul>
<li><code>up</code></li>

<li><code>down</code></li>

<li><code>left</code></li>

<li><code>right</code></li>

<li><code>forward</code></li>

<li><code>backward</code></li>

<li><code>clockwise</code></li>

<li><code>counterclockwise</code></li>
</ul>



### <a id="DoorInteractions">DoorInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Door.ts#L17)</span>



Read-only tuple with 7 strings:
<ul>
<li><code>ringDoorbell</code></li>

<li><code>open</code></li>

<li><code>close</code></li>

<li><code>unlock</code></li>

<li><code>lock</code></li>

<li><code>unlockAndLock</code></li>

<li><code>openAndClose</code></li>
</ul>



### <a id="DoorInteractionsSet">DoorInteractionsSet</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Door.ts#L20)</span>



Set&lt;One of the following strings:

<p class='grid'>
<code>close</code>

<code>lock</code>

<code>open</code>

<code>openAndClose</code>

<code>ringDoorbell</code>

<code>unlock</code>

<code>unlockAndLock</code>
</p>
&gt;


### <a id="EquipmentInteractions">EquipmentInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/EquipmentProperties.ts#L47)</span>



Read-only tuple with 21 strings:
<ul>
<li><code>use</code></li>

<li><code>selectFloor</code></li>

<li><code>arriveAtFloor</code></li>

<li><code>callEmergency</code></li>

<li><code>ride</code></li>

<li><code>travel</code></li>

<li><code>buy</code></li>

<li><code>sell</code></li>

<li><code>call</code></li>

<li><code>understand</code></li>

<li><code>sleep</code></li>

<li><code>toggle</code></li>

<li><code>engage</code></li>

<li><code>flush</code></li>

<li><code>scan</code></li>

<li><code>handover</code></li>

<li><code>enable</code></li>

<li><code>disable</code></li>

<li><code>locateYourself</code></li>

<li><code>findYourDestination</code></li>

<li><code>getTreatment</code></li>
</ul>



### <a id="EquipmentInteractionsSet">EquipmentInteractionsSet</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/EquipmentProperties.ts#L72)</span>



Set&lt;One of the following strings:

<p class='grid'>
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
&gt;


### <a id="EquipmentTypes">EquipmentTypes</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/EquipmentProperties.ts#L19)</span>



Read-only tuple with 23 strings:
<ul>
<li><code>bed</code></li>

<li><code>wardrobe</code></li>

<li><code>elevator</code></li>

<li><code>escalator</code></li>

<li><code>movingWalkway</code></li>

<li><code>ramp</code></li>

<li><code>hoist</code></li>

<li><code>stairLift</code></li>

<li><code>switch</code></li>

<li><code>sitemap</code></li>

<li><code>vendingMachine</code></li>

<li><code>intercom</code></li>

<li><code>powerOutlet</code></li>

<li><code>flushMechanism</code></li>

<li><code>bodyScanner</code></li>

<li><code>luggageScanner</code></li>

<li><code>ticketVendingMachine</code></li>

<li><code>xrayMachine</code></li>

<li><code>ctScanner</code></li>

<li><code>mriScanner</code></li>

<li><code>ultrasoundScanner</code></li>

<li><code>wheelchairLift</code></li>

<li><code>treatmentChair</code></li>
</ul>



### <a id="ForceSchema">ForceSchema</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L189)</span>



`SimpleSchema` from the [`@sozialhelden/simpl-schema` NPM package](https://www.npmjs.com/package/@sozialhelden/simpl-schema).


### <a id="ForceSchemaDefinition">ForceSchemaDefinition</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L188)</span>

<p>Validates a force quantity object and will only accept force units, eg. newton, or
kilogram*meter/second^2.</p>


`SchemaDefinition` from the [`@sozialhelden/simpl-schema` NPM package](https://www.npmjs.com/package/@sozialhelden/simpl-schema).


### <a id="GenericInteractions">GenericInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Accessibility.ts#L53)</span>



Read-only tuple with 31 strings:
<ul>
<li><code>main</code></li>

<li><code>watchMovies</code></li>

<li><code>watchPlays</code></li>

<li><code>explore</code></li>

<li><code>visit</code></li>

<li><code>roam</code></li>

<li><code>read</code></li>

<li><code>rent</code></li>

<li><code>watch</code></li>

<li><code>see</code></li>

<li><code>listen</code></li>

<li><code>getFood</code></li>

<li><code>getDrinks</code></li>

<li><code>getTreatment</code></li>

<li><code>getService</code></li>

<li><code>eat</code></li>

<li><code>order</code></li>

<li><code>pickUpOrder</code></li>

<li><code>pay</code></li>

<li><code>buy</code></li>

<li><code>sell</code></li>

<li><code>workHere</code></li>

<li><code>arrive</code></li>

<li><code>checkIn</code></li>

<li><code>checkOut</code></li>

<li><code>useLockers</code></li>

<li><code>useService</code></li>

<li><code>change</code></li>

<li><code>use</code></li>

<li><code>book</code></li>

<li><code>play</code></li>
</ul>



### <a id="GenericInteractionsSet">GenericInteractionsSet</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Accessibility.ts#L87)</span>



Set&lt;One of the following strings:

<p class='grid'>
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
&gt;


### <a id="GrabBarsInteractions">GrabBarsInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/GrabBars.ts#L6)</span>



Read-only tuple with 5 strings:
<ul>
<li><code>localizeYourself</code></li>

<li><code>findYourDestination</code></li>

<li><code>foldUp</code></li>

<li><code>foldDown</code></li>

<li><code>adjust</code></li>
</ul>



### <a id="GrabBarsInteractionsSet">GrabBarsInteractionsSet</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/GrabBars.ts#L14)</span>



Set&lt;One of the following strings:

<p class='grid'>
<code>adjust</code>

<code>findYourDestination</code>

<code>foldDown</code>

<code>foldUp</code>

<code>localizeYourself</code>
</p>
&gt;


### <a id="HertzSchema">HertzSchema</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L214)</span>



`SimpleSchema` from the [`@sozialhelden/simpl-schema` NPM package](https://www.npmjs.com/package/@sozialhelden/simpl-schema).


### <a id="HertzSchemaDefinition">HertzSchemaDefinition</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L213)</span>

<p>Validates a frequency quantity object and will only accept frequency units, eg. hertz.</p>


`SchemaDefinition` from the [`@sozialhelden/simpl-schema` NPM package](https://www.npmjs.com/package/@sozialhelden/simpl-schema).


### <a id="IntercomInteractions">IntercomInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Intercom.ts#L13)</span>



Read-only tuple with 6 strings:
<ul>
<li><code>ring</code></li>

<li><code>call</code></li>

<li><code>hangUp</code></li>

<li><code>open</code></li>

<li><code>close</code></li>

<li><code>identify</code></li>
</ul>



### <a id="IntercomInteractionsSet">IntercomInteractionsSet</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Intercom.ts#L15)</span>



Set&lt;One of the following strings:

<p class='grid'>
<code>call</code>

<code>close</code>

<code>hangUp</code>

<code>identify</code>

<code>open</code>

<code>ring</code>
</p>
&gt;


### <a id="LengthSchema">LengthSchema</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L164)</span>



`SimpleSchema` from the [`@sozialhelden/simpl-schema` NPM package](https://www.npmjs.com/package/@sozialhelden/simpl-schema).


### <a id="LengthSchemaDefinition">LengthSchemaDefinition</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L163)</span>

<p>Validates a length quantity object and will only accept length units, eg. meter, centimeter or
inch.</p>


`SchemaDefinition` from the [`@sozialhelden/simpl-schema` NPM package](https://www.npmjs.com/package/@sozialhelden/simpl-schema).


### <a id="MassSchema">MassSchema</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L202)</span>



`SimpleSchema` from the [`@sozialhelden/simpl-schema` NPM package](https://www.npmjs.com/package/@sozialhelden/simpl-schema).


### <a id="MassSchemaDefinition">MassSchemaDefinition</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L201)</span>

<p>Validates a mass quantity object and will only accept mass/weight units, eg. kilogram, gram or
pound.</p>


`SchemaDefinition` from the [`@sozialhelden/simpl-schema` NPM package](https://www.npmjs.com/package/@sozialhelden/simpl-schema).


### <a id="MediaInteractions">MediaInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Media.ts#L13)</span>



Read-only tuple with 11 strings:
<ul>
<li><code>watch</code></li>

<li><code>listen</code></li>

<li><code>feel</code></li>

<li><code>discover</code></li>

<li><code>open</code></li>

<li><code>close</code></li>

<li><code>rent</code></li>

<li><code>recognize</code></li>

<li><code>browse</code></li>

<li><code>read</code></li>

<li><code>interact</code></li>
</ul>



### <a id="MediaInteractionsSet">MediaInteractionsSet</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Media.ts#L27)</span>



Set&lt;One of the following strings:

<p class='grid'>
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
&gt;


### <a id="MediaTypeSet">MediaTypeSet</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Media.ts#L43)</span>



Set&lt;One of the following strings:

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
&gt;


### <a id="MediaTypes">MediaTypes</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Media.ts#L29)</span>



Read-only tuple with 11 strings:
<ul>
<li><code>document</code></li>

<li><code>menu</code></li>

<li><code>guide</code></li>

<li><code>tour</code></li>

<li><code>presentation</code></li>

<li><code>exhibit</code></li>

<li><code>movie</code></li>

<li><code>play</code></li>

<li><code>screen</code></li>

<li><code>website</code></li>

<li><code>form</code></li>
</ul>



### <a id="MirrorInteractions">MirrorInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Mirror.ts#L6)</span>



Read-only tuple with 5 strings:
<ul>
<li><code>turn</code></li>

<li><code>adjust</code></li>

<li><code>move</code></li>

<li><code>clean</code></li>

<li><code>use</code></li>
</ul>



### <a id="MirrorInteractionsSet">MirrorInteractionsSet</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Mirror.ts#L14)</span>



Set&lt;One of the following strings:

<p class='grid'>
<code>adjust</code>

<code>clean</code>

<code>move</code>

<code>turn</code>

<code>use</code>
</p>
&gt;


### <a id="Necessities">Necessities</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Necessity.ts#L3)</span>



Read-only tuple with 12 strings:
<ul>
<li><code>optional</code></li>

<li><code>always</code></li>

<li><code>required</code></li>

<li><code>possible</code></li>

<li><code>impossible</code></li>

<li><code>recommended</code></li>

<li><code>discouraged</code></li>

<li><code>forbidden</code></li>

<li><code>notApplicable</code></li>

<li><code>notAvailable</code></li>

<li><code>notNecessary</code></li>

<li><code>unknown</code></li>
</ul>



### <a id="NecessityField">NecessityField</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Necessity.ts#L20)</span>



`SchemaKeyDefinition` from the [`@sozialhelden/simpl-schema` NPM package](https://www.npmjs.com/package/@sozialhelden/simpl-schema).


### <a id="Operators">Operators</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L66)</span>

<p>The allowed operators for comparison quantities</p>


Read-only tuple with 9 strings:
<ul>
<li><code><</code></li>

<li><code><=</code></li>

<li><code>==</code></li>

<li><code>>=</code></li>

<li><code>></code></li>

<li><code>=</code></li>

<li><code>~</code></li>

<li><code>~=</code></li>

<li><code>!=</code></li>
</ul>



### <a id="ParkingInteractions">ParkingInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Parking.ts#L9)</span>



Read-only tuple with 4 strings:
<ul>
<li><code>park</code></li>

<li><code>enterVehicle</code></li>

<li><code>exitVehicle</code></li>

<li><code>arrive</code></li>
</ul>



### <a id="ParkingInteractionsSet">ParkingInteractionsSet</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Parking.ts#L16)</span>



Set&lt;One of the following strings:

<p class='grid'>
<code>arrive</code>

<code>enterVehicle</code>

<code>exitVehicle</code>

<code>park</code>
</p>
&gt;


### <a id="PaymentInteractions">PaymentInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Payment.ts#L5)</span>



Read-only tuple with 5 strings:
<ul>
<li><code>pay</code></li>

<li><code>checkIn</code></li>

<li><code>logIn</code></li>

<li><code>logOut</code></li>

<li><code>register</code></li>
</ul>



### <a id="QueueSystemInteractions">QueueSystemInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/QueueSystem.ts#L7)</span>



Read-only tuple with 9 strings:
<ul>
<li><code>enqueue</code></li>

<li><code>skipQueue</code></li>

<li><code>wait</code></li>

<li><code>leaveQueue</code></li>

<li><code>arrive</code></li>

<li><code>checkIn</code></li>

<li><code>checkOut</code></li>

<li><code>getTicket</code></li>

<li><code>getOnesTurn</code></li>
</ul>



### <a id="QueueSystemInteractionsSet">QueueSystemInteractionsSet</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/QueueSystem.ts#L9)</span>



Set&lt;One of the following strings:

<p class='grid'>
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
&gt;


### <a id="RestroomSignIcons">RestroomSignIcons</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Restroom.ts#L13)</span>



Read-only tuple with 10 strings:
<ul>
<li><code>allGender</code></li>

<li><code>female</code></li>

<li><code>male</code></li>

<li><code>personInWheelchair</code></li>

<li><code>changingTable</code></li>

<li><code>baby</code></li>

<li><code>family</code></li>

<li><code>urinal</code></li>

<li><code>washBasin</code></li>

<li><code>toiletBowl</code></li>
</ul>



### <a id="RoomInteractions">RoomInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Room.ts#L12)</span>



Read-only tuple with 13 strings:
<ul>
<li><code>enter</code></li>

<li><code>exit</code></li>

<li><code>stand</code></li>

<li><code>sit</code></li>

<li><code>see</code></li>

<li><code>sleep</code></li>

<li><code>play</code></li>

<li><code>wait</code></li>

<li><code>storeThings</code></li>

<li><code>lookAround</code></li>

<li><code>openWindow</code></li>

<li><code>closeWindow</code></li>

<li><code>callEmergency</code></li>
</ul>



### <a id="RoomInteractionsSet">RoomInteractionsSet</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Room.ts#L28)</span>



Set&lt;One of the following strings:

<p class='grid'>
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
&gt;


### <a id="SeatInteractions">SeatInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Seat.ts#L16)</span>



Read-only tuple with 22 strings:
<ul>
<li><code>sit</code></li>

<li><code>fold</code></li>

<li><code>unfold</code></li>

<li><code>move</code></li>

<li><code>adjust</code></li>

<li><code>adjustHeight</code></li>

<li><code>adjustSeatingSurface</code></li>

<li><code>adjustSeatingAngle</code></li>

<li><code>adjustArmRests</code></li>

<li><code>removeArmrests</code></li>

<li><code>adjustHeadRest</code></li>

<li><code>adjustLegRest</code></li>

<li><code>adjustBackRest</code></li>

<li><code>adjustFootRest</code></li>

<li><code>adjustSeatBelt</code></li>

<li><code>adjustSeatBeltLength</code></li>

<li><code>adjustSeatBeltHeight</code></li>

<li><code>adjustSeatBeltAngle</code></li>

<li><code>adjustSeatBeltPosition</code></li>

<li><code>adjustSeatBeltTension</code></li>

<li><code>adjustSeatBeltLock</code></li>

<li><code>connectSeatbelt</code></li>
</ul>



### <a id="SeatInteractionsSet">SeatInteractionsSet</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Seat.ts#L41)</span>



Set&lt;One of the following strings:

<p class='grid'>
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
&gt;


### <a id="ShowerInteractions">ShowerInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Shower.ts#L12)</span>



Read-only tuple with 9 strings:
<ul>
<li><code>transfer</code></li>

<li><code>wash</code></li>

<li><code>useShampoo</code></li>

<li><code>useShowerGel</code></li>

<li><code>useSoap</code></li>

<li><code>useConditioner</code></li>

<li><code>useShowerCurtain</code></li>

<li><code>useShowerHead</code></li>

<li><code>useSupport</code></li>
</ul>



### <a id="ShowerInteractionsSet">ShowerInteractionsSet</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Shower.ts#L24)</span>



Set&lt;One of the following strings:

<p class='grid'>
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
&gt;


### <a id="SignageInteractions">SignageInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Signage.ts#L7)</span>



Read-only tuple with 3 strings:
<ul>
<li><code>locateYourself</code></li>

<li><code>findYourDestination</code></li>

<li><code>useSitemap</code></li>
</ul>



### <a id="SignageInteractionsSet">SignageInteractionsSet</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Signage.ts#L13)</span>



Set&lt;One of the following strings:

<p class='grid'>
<code>findYourDestination</code>

<code>locateYourself</code>

<code>useSitemap</code>
</p>
&gt;


### <a id="SlopeSchema">SlopeSchema</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L220)</span>



`SimpleSchema` from the [`@sozialhelden/simpl-schema` NPM package](https://www.npmjs.com/package/@sozialhelden/simpl-schema).


### <a id="SlopeSchemaDefinition">SlopeSchemaDefinition</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L219)</span>

<p>Validates a slope quantity object and will only accept units to descrie a slope, eg. degrees.</p>


`SchemaDefinition` from the [`@sozialhelden/simpl-schema` NPM package](https://www.npmjs.com/package/@sozialhelden/simpl-schema).


### <a id="SmoothnessTypeValues">SmoothnessTypeValues</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Surface.ts#L169)</span>



Read-only tuple with 9 strings:
<ul>
<li><code>excellent</code></li>

<li><code>good</code></li>

<li><code>intermediate</code></li>

<li><code>bad</code></li>

<li><code>horrible</code></li>

<li><code>impassable</code></li>

<li><code>very_bad</code></li>

<li><code>very_horrible</code></li>

<li><code>very_good</code></li>
</ul>



### <a id="SpeedSchema">SpeedSchema</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L171)</span>



`SimpleSchema` from the [`@sozialhelden/simpl-schema` NPM package](https://www.npmjs.com/package/@sozialhelden/simpl-schema).


### <a id="SpeedSchemaDefinition">SpeedSchemaDefinition</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L170)</span>

<p>Validates a speed quantity object and will only accept speed units, eg. meter/second, miles/hour
or similar.</p>


`SchemaDefinition` from the [`@sozialhelden/simpl-schema` NPM package](https://www.npmjs.com/package/@sozialhelden/simpl-schema).


### <a id="SurfaceTypeValues">SurfaceTypeValues</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Surface.ts#L6)</span>



Read-only tuple with 158 strings:
<ul>
<li><code>acrylic</code></li>

<li><code>aluminium</code></li>

<li><code>anti-slip</code></li>

<li><code>artificial</code></li>

<li><code>artificial_grass</code></li>

<li><code>artificial_turf</code></li>

<li><code>asfalto</code></li>

<li><code>ash</code></li>

<li><code>asphalt</code></li>

<li><code>astroturf</code></li>

<li><code>bamboo</code></li>

<li><code>bare_rock</code></li>

<li><code>bark</code></li>

<li><code>barkchips</code></li>

<li><code>bedrock</code></li>

<li><code>bitumen</code></li>

<li><code>bituminous</code></li>

<li><code>block</code></li>

<li><code>boardwalk</code></li>

<li><code>boulders</code></li>

<li><code>brick</code></li>

<li><code>brick_weave</code></li>

<li><code>bricks</code></li>

<li><code>bushes</code></li>

<li><code>carpet</code></li>

<li><code>cement</code></li>

<li><code>chalk</code></li>

<li><code>chipseal</code></li>

<li><code>cinder</code></li>

<li><code>clay</code></li>

<li><code>cobblestone</code></li>

<li><code>compacted</code></li>

<li><code>compacted_gravel</code></li>

<li><code>composite</code></li>

<li><code>con</code></li>

<li><code>concrete</code></li>

<li><code>concrete_slab</code></li>

<li><code>concrete_slabs</code></li>

<li><code>construction</code></li>

<li><code>coral</code></li>

<li><code>coral_sand</code></li>

<li><code>crushed_limestone</code></li>

<li><code>crushed_shells</code></li>

<li><code>debris</code></li>

<li><code>decoturf</code></li>

<li><code>dirt</code></li>

<li><code>earth</code></li>

<li><code>enrobé</code></li>

<li><code>fine_gravel</code></li>

<li><code>fine_sand</code></li>

<li><code>flagstone</code></li>

<li><code>footway</code></li>

<li><code>glass</code></li>

<li><code>goudron</code></li>

<li><code>granite</code></li>

<li><code>grass</code></li>

<li><code>grass_paver</code></li>

<li><code>grass_scrub</code></li>

<li><code>grassland</code></li>

<li><code>grating</code></li>

<li><code>gravel</code></li>

<li><code>green</code></li>

<li><code>grit</code></li>

<li><code>ground</code></li>

<li><code>hardcore</code></li>

<li><code>ice</code></li>

<li><code>ice_road</code></li>

<li><code>interlock</code></li>

<li><code>iron</code></li>

<li><code>laterite</code></li>

<li><code>lawn</code></li>

<li><code>leaves</code></li>

<li><code>limerock</code></li>

<li><code>limestone</code></li>

<li><code>linoleum</code></li>

<li><code>loose_gravel</code></li>

<li><code>marble</code></li>

<li><code>marble_plate</code></li>

<li><code>meadow</code></li>

<li><code>metal</code></li>

<li><code>metal_grid</code></li>

<li><code>mixed</code></li>

<li><code>moss</code></li>

<li><code>mud</code></li>

<li><code>mulch</code></li>

<li><code>native</code></li>

<li><code>natural</code></li>

<li><code>none</code></li>

<li><code>oil</code></li>

<li><code>overgrown</code></li>

<li><code>path</code></li>

<li><code>paved</code></li>

<li><code>pavement</code></li>

<li><code>paving</code></li>

<li><code>paving_stone</code></li>

<li><code>paving_stones</code></li>

<li><code>peat</code></li>

<li><code>pebbles</code></li>

<li><code>pebblestone</code></li>

<li><code>plank</code></li>

<li><code>plastic</code></li>

<li><code>plates</code></li>

<li><code>rasin</code></li>

<li><code>residential</code></li>

<li><code>rock</code></li>

<li><code>rocks</code></li>

<li><code>rocky</code></li>

<li><code>roman_paving</code></li>

<li><code>rubber</code></li>

<li><code>rubbercrumb</code></li>

<li><code>rubble</code></li>

<li><code>salt</code></li>

<li><code>sand</code></li>

<li><code>sandstone</code></li>

<li><code>sawdust</code></li>

<li><code>scree</code></li>

<li><code>scrub</code></li>

<li><code>sealed</code></li>

<li><code>sett</code></li>

<li><code>shell</code></li>

<li><code>shells</code></li>

<li><code>shingle</code></li>

<li><code>slabs</code></li>

<li><code>snow</code></li>

<li><code>soil</code></li>

<li><code>spur</code></li>

<li><code>steel</code></li>

<li><code>stepping_stones</code></li>

<li><code>stone</code></li>

<li><code>stones</code></li>

<li><code>synthetic</code></li>

<li><code>tactile_paving</code></li>

<li><code>tar</code></li>

<li><code>tared</code></li>

<li><code>tarmac</code></li>

<li><code>tartan</code></li>

<li><code>terra</code></li>

<li><code>terre</code></li>

<li><code>tile</code></li>

<li><code>tiles</code></li>

<li><code>timber</code></li>

<li><code>track</code></li>

<li><code>trail</code></li>

<li><code>trees</code></li>

<li><code>tuff</code></li>

<li><code>turf</code></li>

<li><code>undefined</code></li>

<li><code>unhewn_cobblestone</code></li>

<li><code>unpaved</code></li>

<li><code>unpaved2</code></li>

<li><code>unpaved33</code></li>

<li><code>unpaved_minor</code></li>

<li><code>unsealed</code></li>

<li><code>water</code></li>

<li><code>wood</code></li>

<li><code>wood_chips</code></li>

<li><code>woodchips</code></li>

<li><code>zebra</code></li>
</ul>



### <a id="TemperatureSchema">TemperatureSchema</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L236)</span>



`SimpleSchema` from the [`@sozialhelden/simpl-schema` NPM package](https://www.npmjs.com/package/@sozialhelden/simpl-schema).


### <a id="TemperatureSchemaDefinition">TemperatureSchemaDefinition</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L232)</span>

<p>Validates a temperature quantity object and will only accept temperature units, eg. degrees
celsius (<code>degC</code>), degrees Fahrenheit (<code>degF</code>) or kelvin (<code>K</code>).</p>


`SchemaDefinition` from the [`@sozialhelden/simpl-schema` NPM package](https://www.npmjs.com/package/@sozialhelden/simpl-schema).


### <a id="TimeIntervalSchema">TimeIntervalSchema</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L195)</span>



`SimpleSchema` from the [`@sozialhelden/simpl-schema` NPM package](https://www.npmjs.com/package/@sozialhelden/simpl-schema).


### <a id="TimeIntervalSchemaDefinition">TimeIntervalSchemaDefinition</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L194)</span>

<p>Validates a timer interval object and will only accept time units, eg. seconds, minutes or hours.</p>


`SchemaDefinition` from the [`@sozialhelden/simpl-schema` NPM package](https://www.npmjs.com/package/@sozialhelden/simpl-schema).


### <a id="ToiletInteractions">ToiletInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Toilet.ts#L10)</span>



Read-only tuple with 4 strings:
<ul>
<li><code>use</code></li>

<li><code>flush</code></li>

<li><code>secondaryFlush</code></li>

<li><code>spray</code></li>
</ul>



### <a id="ToiletInteractionsSet">ToiletInteractionsSet</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Toilet.ts#L17)</span>



Set&lt;One of the following strings:

<p class='grid'>
<code>flush</code>

<code>secondaryFlush</code>

<code>spray</code>

<code>use</code>
</p>
&gt;


### <a id="UnitlessSchema">UnitlessSchema</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L157)</span>



`SimpleSchema` from the [`@sozialhelden/simpl-schema` NPM package](https://www.npmjs.com/package/@sozialhelden/simpl-schema).


### <a id="UnitlessSchemaDefinition">UnitlessSchemaDefinition</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L156)</span>



`SchemaDefinition` from the [`@sozialhelden/simpl-schema` NPM package](https://www.npmjs.com/package/@sozialhelden/simpl-schema).


### <a id="VolumeSchema">VolumeSchema</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L208)</span>



`SimpleSchema` from the [`@sozialhelden/simpl-schema` NPM package](https://www.npmjs.com/package/@sozialhelden/simpl-schema).


### <a id="VolumeSchemaDefinition">VolumeSchemaDefinition</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Quantity.ts#L207)</span>

<p>Validates a sound volume quantity object and will only accept sound volume units, eg. decibel.</p>


`SchemaDefinition` from the [`@sozialhelden/simpl-schema` NPM package](https://www.npmjs.com/package/@sozialhelden/simpl-schema).


### <a id="WashBashinInteractions">WashBashinInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/WashBasin.ts#L5)</span>



Read-only tuple with 13 strings:
<ul>
<li><code>changeTemperature</code></li>

<li><code>changeWaterPressure</code></li>

<li><code>useWater</code></li>

<li><code>getHotWater</code></li>

<li><code>getColdWater</code></li>

<li><code>getCarbonizedWater</code></li>

<li><code>useWaterJet</code></li>

<li><code>useWaterSpray</code></li>

<li><code>useSoap</code></li>

<li><code>getTowel</code></li>

<li><code>getPaperTowel</code></li>

<li><code>useAirDryer</code></li>

<li><code>sanitizeHands</code></li>
</ul>



### <a id="WashBasinInteractionsSet">WashBasinInteractionsSet</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/WashBasin.ts#L21)</span>



Set&lt;One of the following strings:

<p class='grid'>
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
&gt;


### <a id="WheelchairAccessibilityGrades">WheelchairAccessibilityGrades</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/Accessibility.ts#L32)</span>

<p>Describes the general wheelchair accessibility of the place. This is a human-rated value.
It SHOULD conform to the traffic light system found in OpenStreetMap and Wheelmap.org.</p>


Read-only tuple with 3 strings:
<ul>
<li><code>fully</code></li>

<li><code>partially</code></li>

<li><code>not</code></li>
</ul>



### <a id="WifiInteractions">WifiInteractions</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/WifiAccessibility.ts#L6)</span>



Read-only tuple with 6 strings:
<ul>
<li><code>login</code></li>

<li><code>register</code></li>

<li><code>getPassword</code></li>

<li><code>getGuestPass</code></li>

<li><code>getTerms</code></li>

<li><code>acceptTerms</code></li>
</ul>



### <a id="WifiInteractionsSet">WifiInteractionsSet</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/WifiAccessibility.ts#L15)</span>



Set&lt;One of the following strings:

<p class='grid'>
<code>acceptTerms</code>

<code>getGuestPass</code>

<code>getPassword</code>

<code>getTerms</code>

<code>login</code>

<code>register</code>
</p>
&gt;


### <a id="smokingPolicies">smokingPolicies</a>

<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/SmokingPolicy.ts#L4)</span>

<p>Describes smoking policies for visitors of a place.</p>


Read-only tuple with 6 strings:
<ul>
<li><code>dedicatedToSmoking</code></li>

<li><code>allowedEverywhere</code></li>

<li><code>inSeparateArea</code></li>

<li><code>inIsolatedArea</code></li>

<li><code>prohibited</code></li>

<li><code>onlyOutside</code></li>
</ul>

