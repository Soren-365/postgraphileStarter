export const query = `query getAgencyaccountings($atAgency: Int!) {
        __typename
        accountings(condition: {atAgency: $atAgency }) {
          nodes {
            id,publisherId,paymentHistory,abonamentActive,lastPayment,lastPaymentAmount,abonamentExpires,onYearlyPayment,onFreePeriod,freePeriodExpires,isRomanian,isActive

          }
        }
      }`
      export default `${query}`
     