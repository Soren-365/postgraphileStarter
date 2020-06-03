import { topicsDbType as TopicsDbType } from '../../dbTypes/__generatedFromBackend__/types/topicsDbType'

export class TopicsDbClass implements TopicsDbType {
title: string;
 nodeId?: string;

  constructor(title: string, nodeId?: string,) {
    this.title = title
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}