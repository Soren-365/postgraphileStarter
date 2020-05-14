export const query = `query getConditionalDestinationresource(, $id:  number , $publishedById:  number , $createdById:  number , $tripTypeName:  string , $priceInfoId:  number , $activeAtPeriodsId:  number , $presentationId:  number , $atAgency:  number , $geoCodingId:  number , $lastModifiedBy:  number ) {
        __typename
        destinationresources(condition: {id: $id ,,publishedById: $publishedById ,createdById: $createdById ,,,tripTypeName: $tripTypeName ,,priceInfoId: $priceInfoId ,activeAtPeriodsId: $activeAtPeriodsId ,presentationId: $presentationId ,atAgency: $atAgency ,geoCodingId: $geoCodingId ,,,lastModifiedBy: $lastModifiedBy , })  {
          nodes {
            id destinationName publishedById createdById area judet tripTypeName isActive priceInfoId activeAtPeriodsId presentationId atAgency geoCodingId isPublic lastModified lastModifiedBy
 
          }
        }
      }`
      export default `${query}`
        