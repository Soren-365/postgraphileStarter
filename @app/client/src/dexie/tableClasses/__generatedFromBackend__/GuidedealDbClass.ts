import { guidedealDbType as GuidedealDbType } from '../../dbTypes/__generatedFromBackend__/types/guidedealDbType'

export class GuidedealDbClass implements GuidedealDbType {
id?: number;
tripsOfferResourceIdPool?: number[];
agenciesRomanianIdPool?: number[];
agenciesAbroadIdPool?: number[];
touristResourceIdPool?: number;
 nodeId?: string;

  constructor(id?: number,tripsOfferResourceIdPool?: number[],agenciesRomanianIdPool?: number[],agenciesAbroadIdPool?: number[],touristResourceIdPool?: number, nodeId?: string,) {
    this.id = id
    this.tripsOfferResourceIdPool = tripsOfferResourceIdPool
    this.agenciesRomanianIdPool = agenciesRomanianIdPool
    this.agenciesAbroadIdPool = agenciesAbroadIdPool
    this.touristResourceIdPool = touristResourceIdPool
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}