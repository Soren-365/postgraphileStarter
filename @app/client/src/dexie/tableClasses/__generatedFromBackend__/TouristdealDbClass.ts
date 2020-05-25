import { touristdealDbType as TouristdealDbType } from '../../dbTypes/__generatedFromBackend__/types/touristdealDbType'

export class TouristdealDbClass implements TouristdealDbType {
id?: number;
 nodeId?: string;

  constructor(id?: number, nodeId?: string,) {
    this.id = id
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}