import { similarbytriptypeaccomodationDbType as SimilarbytriptypeaccomodationDbType } from '../../dbTypes/__generatedFromBackend__/types/similarbytriptypeaccomodationDbType'

export class SimilarbytriptypeaccomodationDbClass implements SimilarbytriptypeaccomodationDbType {
accomodationIds?: number[];
tripTypeName?: string;
atAgency?: number;
timeCreated?: string;
 nodeId?: string;

  constructor(accomodationIds?: number[],tripTypeName?: string,atAgency?: number,timeCreated?: string, nodeId?: string,) {
    this.accomodationIds = accomodationIds
    this.tripTypeName = tripTypeName
    this.atAgency = atAgency
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}