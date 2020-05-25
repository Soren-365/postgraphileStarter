import { agencyofferDbType as AgencyofferDbType } from '../../dbTypes/__generatedFromBackend__/types/agencyofferDbType'

export class AgencyofferDbClass implements AgencyofferDbType {
id?: number;
 nodeId?: string;

  constructor(id?: number, nodeId?: string,) {
    this.id = id
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}