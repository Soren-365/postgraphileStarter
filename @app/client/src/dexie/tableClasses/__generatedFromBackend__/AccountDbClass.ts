import { accountDbType as AccountDbType } from '../../dbTypes/__generatedFromBackend__/types/accountDbType'

export class AccountDbClass implements AccountDbType {
id?: number;
 nodeId?: string;

  constructor(id?: number, nodeId?: string,) {
    this.id = id
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}