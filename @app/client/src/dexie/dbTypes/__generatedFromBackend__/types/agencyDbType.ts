export interface agencyDbType {
id?: number;
name: string;
contactId?: number;
activeInsurance: boolean;
insuranceUrl?: string;
insuranceExpery?: string;
publisherId?: number;
createdById: number;
isActive?: boolean;
isPublic?: boolean;
agencyBidId?: number;
agencyFavoriteId?: number;
agencyOfferId?: number;
agencyDealId?: number;
trustedPartnerIdPool?: number[];
extendedNetworkIdPool?: number[];
guideReviewInIdPool?: number[];
agencyReviewInIdPool?: number[];
touristReviewInIdPool?: number[];
guideReviewOutIdPool?: number[];
agencyReviewOutIdPool?: number[];
touristReviewOutIdPool?: number[];
agencyMediaLibraryId?: number;
isRomanian: boolean;
bookingCalendarId?: number;
specializedAgency?: string;
lastModified?: string;
timeCreated?: string;
 nodeId?: string;
}
