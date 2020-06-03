import { touristofferDbType as TouristofferDbType } from '../../dbTypes/__generatedFromBackend__/types/touristofferDbType'

export class TouristofferDbClass implements TouristofferDbType {
id?: number;
touristResourceIdPool?: number;
 nodeId?: string;

  constructor(id?: number,touristResourceIdPool?: number, nodeId?: string,) {
    this.id = id
    this.touristResourceIdPool = touristResourceIdPool
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}