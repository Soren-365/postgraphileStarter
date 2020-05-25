import { roomcalendarentryDbType as RoomcalendarentryDbType } from '../../dbTypes/__generatedFromBackend__/types/roomcalendarentryDbType'

export class RoomcalendarentryDbClass implements RoomcalendarentryDbType {
id?: number;
 nodeId?: string;

  constructor(id?: number, nodeId?: string,) {
    this.id = id
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}