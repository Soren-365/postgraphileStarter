import { guidefavoriteDbType as GuidefavoriteDbType } from '../../dbTypes/__generatedFromBackend__/types/guidefavoriteDbType'

export class GuidefavoriteDbClass implements GuidefavoriteDbType {
id?: number;
 nodeId?: string;

  constructor(id?: number, nodeId?: string,) {
    this.id = id
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}