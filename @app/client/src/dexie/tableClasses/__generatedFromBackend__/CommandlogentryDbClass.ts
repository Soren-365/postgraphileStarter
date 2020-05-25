import { commandlogentryDbType as CommandlogentryDbType } from '../../dbTypes/__generatedFromBackend__/types/commandlogentryDbType'

export class CommandlogentryDbClass implements CommandlogentryDbType {
id?: number;
 nodeId?: string;

  constructor(id?: number, nodeId?: string,) {
    this.id = id
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}