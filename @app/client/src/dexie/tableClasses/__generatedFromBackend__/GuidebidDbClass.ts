import { guidebidDbType as GuidebidDbType } from '../../dbTypes/__generatedFromBackend__/types/guidebidDbType'

export class GuidebidDbClass implements GuidebidDbType {
id?: number;
tripOfferIdPool?: number;
 nodeId?: string;

  constructor(id?: number,tripOfferIdPool?: number, nodeId?: string,) {
    this.id = id
    this.tripOfferIdPool = tripOfferIdPool
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}