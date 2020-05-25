import { calendarentryDbType as CalendarentryDbType } from '../../dbTypes/__generatedFromBackend__/types/calendarentryDbType'

export class CalendarentryDbClass implements CalendarentryDbType {
id?: number;
 nodeId?: string;

  constructor(id?: number, nodeId?: string,) {
    this.id = id
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}