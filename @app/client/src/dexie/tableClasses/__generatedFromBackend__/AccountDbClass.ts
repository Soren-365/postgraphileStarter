import { accountDbType as AccountDbType } from '../../dbTypes/__generatedFromBackend__/types/accountDbType'

export class AccountDbClass implements AccountDbType {
id?: number;
emailHash?: string;
passwordHash?: string;
sessionId?: string;
logins?: number;
 nodeId?: string;

  constructor(id?: number,emailHash?: string,passwordHash?: string,sessionId?: string,logins?: number, nodeId?: string,) {
    this.id = id
    this.emailHash = emailHash
    this.passwordHash = passwordHash
    this.sessionId = sessionId
    this.logins = logins
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}