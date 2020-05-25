import { agencyfavoriteDbType as AgencyfavoriteDbType } from '../../dbTypes/__generatedFromBackend__/types/agencyfavoriteDbType'

export class AgencyfavoriteDbClass implements AgencyfavoriteDbType {
resourceId?: number;
 nodeId?: string;

  constructor(resourceId?: number, nodeId?: string,) {
    this.resourceId = resourceId
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}