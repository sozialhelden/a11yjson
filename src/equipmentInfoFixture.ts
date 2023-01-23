import { EquipmentInfo } from './EquipmentInfo';
import pointGeometryFixture from './pointGeometryFixture';
import equipmentPropertiesFixture from './equipmentPropertiesFixture';
import { Complete } from './Complete';

const equipmentInfoFixture: Complete<EquipmentInfo> = {
  properties: equipmentPropertiesFixture,
  geometry: pointGeometryFixture,
};
export default equipmentInfoFixture;
