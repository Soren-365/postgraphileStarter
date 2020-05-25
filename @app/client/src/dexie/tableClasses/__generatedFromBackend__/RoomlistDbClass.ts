import { roomlistDbType as RoomlistDbType } from '../../dbTypes/__generatedFromBackend__/types/roomlistDbType'

export class RoomlistDbClass implements RoomlistDbType {
id?: number;
atAccomodation: number;
roomNames?: string;
roomNumPeople?: number;
roomCalendarId?: number;
roomPrices?: number;
roomActive?: boolean;
 nodeId?: string;

  constructor(id?: number,atAccomodation: number,roomNames?: string,roomNumPeople?: number,roomCalendarId?: number,roomPrices?: number,roomActive?: boolean, nodeId?: string,) {
    this.id = id
    this.atAccomodation = atAccomodation
    this.roomNames = roomNames
    this.roomNumPeople = roomNumPeople
    this.roomCalendarId = roomCalendarId
    this.roomPrices = roomPrices
    this.roomActive = roomActive
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}