export const query = `query getNodeaccounting($nodeId: String!) {
        __typename
        accountingByNodeId(nodeId: $nodeId }) {
            id publisherId paymentHistory abonamentActive lastPayment lastPaymentAmount abonamentExpires onYearlyPayment onFreePeriod freePeriodExpires isRomanian isActive timeCreated

        }
      }`
      export default `${query}`
     