import { date_DbType as Date_DbType } from '../../dbTypes/__generatedFromBackend__/types/date_DbType'

export class Date_DbClass implements Date_DbType {
useTimeStamp: boolean;
 nodeId?: string;

  constructor(useTimeStamp: boolean, nodeId?: string,) {
    this.useTimeStamp = useTimeStamp
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}