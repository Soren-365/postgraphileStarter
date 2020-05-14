export const mutation = `mutation updateAccounting($id: Int ,$publisherId: Int! ,$paymentHistory: [String] ,$abonamentActive: Boolean! ,$lastPayment: Date ,$lastPaymentAmount: String ,$abonamentExpires: Date ,$onYearlyPayment: Boolean! ,$onFreePeriod: Boolean! ,$freePeriodExpires: Date ,$isRomanian: Boolean ,$isActive: Boolean , $clientMutationId: String!) {
        __typename
        updateAccounting(input: {clientMutationId: $clientMutationId, patch: {,publisherId: $publisherId ,paymentHistory: $paymentHistory ,abonamentActive: $abonamentActive ,lastPayment: $lastPayment ,lastPaymentAmount: $lastPaymentAmount ,abonamentExpires: $abonamentExpires ,onYearlyPayment: $onYearlyPayment ,onFreePeriod: $onFreePeriod ,freePeriodExpires: $freePeriodExpires ,isRomanian: $isRomanian ,isActive: $isActive }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     