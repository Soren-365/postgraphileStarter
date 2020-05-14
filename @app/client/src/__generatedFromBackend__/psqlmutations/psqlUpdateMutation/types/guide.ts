export interface guideupdateMutationType {
id: number;
name?: string;
guideLicenceUrl?: string;
guideFirstName?: string;
guideLastName?: string;
atAgency?: number;
tripTypeName?: string;
agencyReviewInIdPool?: number[];
touristReviewInIdPool?: number[];
agencyReviewOutIdPool?: number[];
touristReviewOutIdPool?: number[];
hostIdPool?: number[];
eventIdPool?: number[];
accomodationIdPool?: number[];
transportIdPool?: number[];
lastModified?: string;
timeCreated?: string;
isActive?: boolean;
}
