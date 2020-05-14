// import AgencyDB from '../dexie/dexieDB';

export class Storage {
  private _year: number;
  public edition: number;
  public name: string;
  public agencyId: number;
  public resourceType: string;
  public resourceId: number;
  public user: number;
  console: any;
  constructor({ agencyId, user }) {
    (this._year = 2017), (this.edition = 1), (this.agencyId = agencyId), (this.user = user);
  }

  static async test() {
    // try {
    //   var id = await db.
    //   console.log('Got id ' + id);
    //   // Now lets add a bunch of destinationresource
    //   await db.destinationresource.bulkPut([
    //     { lastModified: Date.now(), destinationName: 'Jamies local kitchen' },
    //     { lastModified: Date.now(), destinationName: 'Royal traditions and culture' },
    //   ]);
    //   // Ok, so let's query it
    //   var destinationresource = await db.destinationresource.above(0).toArray();
    //   console.log('New in destinationresource: ' + JSON.stringify(destinationresource, 0, 2));
    //   // Ok, so let's complete the 'Test Dexie' task.
    //   await db.destinationresource
    //     .where('destinationName')
    //     .startsWithIgnoreCase('jamies')
    //     .modify({ isActive: 1 });
    //   console.log('All destinationresource should be completed now.');
    //   console.log("Now let's delete all old destinationresource:");
    //   // And let's remove all old destinationresource:
    //   // await db.destinationresource
    //   //     .where('lastModified')
    //   //     .below(Date.now())
    //   //     .delete();
    //   console.log('Done.');
    // } catch {
    //   (err: { stack: any }) => {
    //     console.error('Uh oh! ', err.stack);
    //   };
    // }
  }

  constructorProps() {
    console.log('Props in sagaDB constructor:', this.agencyId, this.resourceType, this.resourceId, this.user, this.name);
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
