import { similarbytriptypeeventDbType as SimilarbytriptypeeventDbType } from '../../dbTypes/__generatedFromBackend__/types/similarbytriptypeeventDbType'

export class SimilarbytriptypeeventDbClass implements SimilarbytriptypeeventDbType {
eventIds?: number[];
--?: string;
resource?: string;
eventres?: string;
accomodationres?: string;
hostres?: string;
transportres?: string;
app_public.guideres?: string;
app_public.tourist??: string;
travelgroup?]
?: string;
atAgency?: number;
timeCreated?: string;
 nodeId?: string;

  constructor(eventIds?: number[],--?: string,resource?: string,eventres?: string,accomodationres?: string,hostres?: string,transportres?: string,app_public.guideres?: string,app_public.tourist??: string,travelgroup?]?: string,atAgency?: number,timeCreated?: string, nodeId?: string,) {
    this.eventIds = eventIds
    this.-- = --
    this.resource = resource
    this.eventres = eventres
    this.accomodationres = accomodationres
    this.hostres = hostres
    this.transportres = transportres
    this.app_public.guideres = app_public.guideres
    this.app_public.tourist? = app_public.tourist?
    this.travelgroup?]
 = travelgroup?]

    this.atAgency = atAgency
    this.timeCreated = timeCreated
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}