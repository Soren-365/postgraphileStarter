export const query = `query getConditionalAccounting(, $undefined:  undefined ) {
        __typename
        accountings(condition: {undefined: $undefined ,,,,,,,,,,,, })  {
          nodes {
            id publisherId paymentHistory abonamentActive lastPayment lastPaymentAmount abonamentExpires onYearlyPayment onFreePeriod freePeriodExpires isRomanian isActive timeCreated

          }
        }
      }`
      export default `${query}`
        