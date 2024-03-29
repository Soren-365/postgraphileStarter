import { guidefavoriteDbType as GuidefavoriteDbType } from '../../dbTypes/__generatedFromBackend__/types/guidefavoriteDbType'

export class GuidefavoriteDbClass implements GuidefavoriteDbType {
id?: number;
agenciesRomanianIdPool?: number[];
agenciesAbroadIdPool?: number[];
travelGroupResourceIdPool?: number;
 nodeId?: string;

  constructor(id?: number,agenciesRomanianIdPool?: number[],agenciesAbroadIdPool?: number[],travelGroupResourceIdPool?: number, nodeId?: string,) {
    this.id = id
    this.agenciesRomanianIdPool = agenciesRomanianIdPool
    this.agenciesAbroadIdPool = agenciesAbroadIdPool
    this.travelGroupResourceIdPool = travelGroupResourceIdPool
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}