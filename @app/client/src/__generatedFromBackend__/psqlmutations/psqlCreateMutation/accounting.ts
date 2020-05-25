export const mutation = `mutation createAccounting(,$publisherId: Int! ,$paymentHistory: [String] ,$abonamentActive: Boolean! ,$lastPayment: Date ,$lastPaymentAmount: String ,$abonamentExpires: Date ,$onYearlyPayment: Boolean! ,$onFreePeriod: Boolean! ,$freePeriodExpires: Date ,$isRomanian: Boolean ,$isActive: Boolean ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createAccounting(input: {clientMutationId: $clientMutationId,accounting: {,publisherId: $publisherId ,paymentHistory: $paymentHistory ,abonamentActive: $abonamentActive ,lastPayment: $lastPayment ,lastPaymentAmount: $lastPaymentAmount ,abonamentExpires: $abonamentExpires ,onYearlyPayment: $onYearlyPayment ,onFreePeriod: $onFreePeriod ,freePeriodExpires: $freePeriodExpires ,isRomanian: $isRomanian ,isActive: $isActive ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     