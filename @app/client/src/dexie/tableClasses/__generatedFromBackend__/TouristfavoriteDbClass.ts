import { touristfavoriteDbType as TouristfavoriteDbType } from '../../dbTypes/__generatedFromBackend__/types/touristfavoriteDbType'

export class TouristfavoriteDbClass implements TouristfavoriteDbType {
id?: number;
 nodeId?: string;

  constructor(id?: number, nodeId?: string,) {
    this.id = id
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}