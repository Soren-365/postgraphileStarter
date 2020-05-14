export const query = `query getAgencyaccountings($atAgency: Int!, $id: Int) {
        __typename
        accountings(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id publisherId paymentHistory abonamentActive lastPayment lastPaymentAmount abonamentExpires onYearlyPayment onFreePeriod freePeriodExpires isRomanian isActive

          }
        }
      }`
      export default `${query}`
     