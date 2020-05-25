import { similarbytriptypeaccomodationDbType as SimilarbytriptypeaccomodationDbType } from '../../dbTypes/__generatedFromBackend__/types/similarbytriptypeaccomodationDbType'

export class SimilarbytriptypeaccomodationDbClass implements SimilarbytriptypeaccomodationDbType {
accomodationIds?: number[];
--?: string;
triptypes?: string;
tripTypeName?: string;
atAgency?: number;
timeCreated?: string;
 nodeId?: string;

  constructor(accomodationIds?: number[],--?: string,triptypes?: string,tripTypeName?: string,atAgency?: number,timeCreated?: string, nodeId?: string,) {
    this.accomodationIds = accomodationIds
    this.-- = --
    this.triptypes = triptypes
    this.tripTypeName = tripTypeName
    this.atAgency = atAgency
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}