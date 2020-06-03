import { guideofferDbType as GuideofferDbType } from '../../dbTypes/__generatedFromBackend__/types/guideofferDbType'

export class GuideofferDbClass implements GuideofferDbType {
id?: number;
guideResourceIdPool?: number[];
transportResourceIdPool?: number[];
hostResourceIdPool?: number[];
accomodationResourceIdPool?: number;
 nodeId?: string;

  constructor(id?: number,guideResourceIdPool?: number[],transportResourceIdPool?: number[],hostResourceIdPool?: number[],accomodationResourceIdPool?: number, nodeId?: string,) {
    this.id = id
    this.guideResourceIdPool = guideResourceIdPool
    this.transportResourceIdPool = transportResourceIdPool
    this.hostResourceIdPool = hostResourceIdPool
    this.accomodationResourceIdPool = accomodationResourceIdPool
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}