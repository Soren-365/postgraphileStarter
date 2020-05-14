export const query = `query getConditionalAccounting(, $id:  number , $publisherId:  number ) {
        __typename
        accountings(condition: {id: $id ,publisherId: $publisherId ,,,,,,,,,,, })  {
          nodes {
            id publisherId paymentHistory abonamentActive lastPayment lastPaymentAmount abonamentExpires onYearlyPayment onFreePeriod freePeriodExpires isRomanian isActive
 
          }
        }
      }`
      export default `${query}`
        