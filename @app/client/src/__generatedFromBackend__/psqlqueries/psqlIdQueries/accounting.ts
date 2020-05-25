export const query = `query Accounting($id: Int!) {
        __typename
        accounting(id: $id) {
            id publisherId paymentHistory abonamentActive lastPayment lastPaymentAmount abonamentExpires onYearlyPayment onFreePeriod freePeriodExpires isRomanian isActive timeCreated

        }
      }`
      export default `${query}`
