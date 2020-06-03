export const mutation = `mutation createAccounting(,$publisherId: Int! ,$paymentHistory: [String] ,$abonamentActive: Boolean! ,$lastPayment: Date ,$lastPaymentAmount: String ,$abonamentExpires: Date ,$onYearlyPayment: Boolean! ,$onFreePeriod: Boolean! ,$freePeriodExpires: Date ,$isRomanian: Boolean ,$isActive: Boolean ,$timeCreated: Datetime , $id: String!) {
        __typename
        createAccounting(input: {id: $id,accounting: {,publisherId: $publisherId ,paymentHistory: $paymentHistory ,abonamentActive: $abonamentActive ,lastPayment: $lastPayment ,lastPaymentAmount: $lastPaymentAmount ,abonamentExpires: $abonamentExpires ,onYearlyPayment: $onYearlyPayment ,onFreePeriod: $onFreePeriod ,freePeriodExpires: $freePeriodExpires ,isRomanian: $isRomanian ,isActive: $isActive ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     