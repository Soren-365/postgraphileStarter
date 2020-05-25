import { topicsDbType as TopicsDbType } from '../../dbTypes/__generatedFromBackend__/types/topicsDbType'

export class TopicsDbClass implements TopicsDbType {
 nodeId?: string;

  constructor( nodeId?: string,) {
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}