export interface agencyupdateMutationType {
id: number;
contactId?: number;
insuranceUrl?: string;
insuranceExpery?: string;
publisherId?: number;
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
bookingCalendarId?: number;
specializedAgency?: string;
lastModified?: string;
timeCreated?: string;
}
