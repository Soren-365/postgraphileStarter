export class resourceClass {
  private _year: number;
  public edition: number;
  public name: string;
  public agencyId: number;
  public resourceType: string;
  public resourceId: number;
  public user: number;
  console: any;
  constructor({ agencyId, resourceType, resourceId, user, name }) {
    (this._year = 2017),
      (this.edition = 1),
      (this.agencyId = agencyId),
      (this.resourceType = resourceType),
      (this.resourceId = resourceId),
      (this.user = user),
      (this.name = name);
  }

  constructorProps() {
    console.log('Props in resourceClass constructor:', this.agencyId, this.resourceType, this.resourceId, this.user, this.name);
  }

  get year() {
    const returnFromGet = this._year + 2;

    console.log('get() this.year  | post | post@this._year >> returns@get() :/ ', this._year, '>>', returnFromGet);
    return returnFromGet;
  }

  set year(setterValue) {
    console.log('set() this.year= | pre  | pre@this._year >> @SetterValue :/ ', this._year, '>>', setterValue);

    if (setterValue > 2017) {
      this._year = setterValue;
      this.edition += setterValue - 2017;
    }
  }
}
