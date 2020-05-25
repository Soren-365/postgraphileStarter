import { touristbidDbType as TouristbidDbType } from '../../dbTypes/__generatedFromBackend__/types/touristbidDbType'

export class TouristbidDbClass implements TouristbidDbType {
id?: number;
 nodeId?: string;

  constructor(id?: number, nodeId?: string,) {
    this.id = id
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}