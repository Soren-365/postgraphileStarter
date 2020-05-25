import { agencydealDbType as AgencydealDbType } from '../../dbTypes/__generatedFromBackend__/types/agencydealDbType'

export class AgencydealDbClass implements AgencydealDbType {
id?: number;
 nodeId?: string;

  constructor(id?: number, nodeId?: string,) {
    this.id = id
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}