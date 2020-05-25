export const mutation = `mutation updateContact($id: Int ,$firstName: String ,$lastName: String ,$associatedCompany: String ,$street: String ,$city: String ,$postCode: String ,$country: String ,$telephone: String ,$email: String ,$isCompany: Boolean ,$createdById: Int ,$belongsToType: Resourcetype ,$belongsToId: Int ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateContact(input: {clientMutationId: $clientMutationId, patch: {,firstName: $firstName ,lastName: $lastName ,associatedCompany: $associatedCompany ,street: $street ,city: $city ,postCode: $postCode ,country: $country ,telephone: $telephone ,email: $email ,isCompany: $isCompany ,createdById: $createdById ,belongsToType: $belongsToType ,belongsToId: $belongsToId ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     