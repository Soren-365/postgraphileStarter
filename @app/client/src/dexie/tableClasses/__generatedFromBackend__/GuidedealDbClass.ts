import { guidedealDbType as GuidedealDbType } from '../../dbTypes/__generatedFromBackend__/types/guidedealDbType'

export class GuidedealDbClass implements GuidedealDbType {
id?: number;
 nodeId?: string;

  constructor(id?: number, nodeId?: string,) {
    this.id = id
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}