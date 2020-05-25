import { guideofferDbType as GuideofferDbType } from '../../dbTypes/__generatedFromBackend__/types/guideofferDbType'

export class GuideofferDbClass implements GuideofferDbType {
id?: number;
 nodeId?: string;

  constructor(id?: number, nodeId?: string,) {
    this.id = id
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}