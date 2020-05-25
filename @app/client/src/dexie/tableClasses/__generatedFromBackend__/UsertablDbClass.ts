import { usertablDbType as UsertablDbType } from '../../dbTypes/__generatedFromBackend__/types/usertablDbType'

export class UsertablDbClass implements UsertablDbType {
id: number;
 nodeId?: string;

  constructor(id: number, nodeId?: string,) {
    this.id = id
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}