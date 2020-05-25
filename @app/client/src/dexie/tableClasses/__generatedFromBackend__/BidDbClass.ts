import { bidDbType as BidDbType } from '../../dbTypes/__generatedFromBackend__/types/bidDbType'

export class BidDbClass implements BidDbType {
id?: number;
 nodeId?: string;

  constructor(id?: number, nodeId?: string,) {
    this.id = id
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}