import { usertablDbType as UsertablDbType } from '../../dbTypes/__generatedFromBackend__/types/usertablDbType'

export class UsertablDbClass implements UsertablDbType {
id: number;
firstName?: string;
lastName?: string;
userEmail?: string;
atAgency?: number;
isAdmin?: boolean;
atGuide?: number;
atTourist?: number;
timeCreated?: string;
isActive?: boolean;
isRomanian?: boolean;
 nodeId?: string;

  constructor(id: number,firstName?: string,lastName?: string,userEmail?: string,atAgency?: number,isAdmin?: boolean,atGuide?: number,atTourist?: number,timeCreated?: string,isActive?: boolean,isRomanian?: boolean, nodeId?: string,) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.userEmail = userEmail
    this.atAgency = atAgency
    this.isAdmin = isAdmin
    this.atGuide = atGuide
    this.atTourist = atTourist
    this.timeCreated = timeCreated
    this.isActive = isActive
    this.isRomanian = isRomanian
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}