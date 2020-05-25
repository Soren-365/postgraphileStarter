export interface touristDbType {
id?: number;
touristFirstName?: string;
touristLastName?: string;
contactId: number;
publisherId: number;
createdById: number;
nativeLanguage?: string;
alternativeLanguage?: string;
touristOfferId: number;
touristFavoriteId: number;
touristBidId: number;
touristDealId: number;
guideReviewInIdPool?: number[];
agencyReviewInIdPool?: number[];
guideReviewOutIdPool?: number[];
agencyReviewOutIdPool?: number[];
timeCreated?: string;
atTravelGroup?: number;
isActive?: boolean;
isRomanian: boolean;
 nodeId?: string;
}
