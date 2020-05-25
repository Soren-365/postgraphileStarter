import { timerangeDbType as TimerangeDbType } from '../../dbTypes/__generatedFromBackend__/types/timerangeDbType'

export class TimerangeDbClass implements TimerangeDbType {
id?: number;
 nodeId?: string;

  constructor(id?: number, nodeId?: string,) {
    this.id = id
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}