import { EquipmentInfo } from './EquipmentInfo.js';
import pointGeometryFixture from './pointGeometryFixture.js';
import equipmentPropertiesFixture from './equipmentPropertiesFixture.js';
import { Complete } from './Complete.js';

const equipmentInfoFixture: Complete<EquipmentInfo> = {
  properties: equipmentPropertiesFixture,
  geometry: pointGeometryFixture,
};
export default equipmentInfoFixture;
