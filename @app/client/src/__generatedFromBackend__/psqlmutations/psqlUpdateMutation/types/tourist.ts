export interface touristupdateMutationType {
id: number;
touristFirstName?: string;
touristLastName?: string;
nativeLanguage?: string;
alternativeLanguage?: string;
guideReviewInIdPool?: number[];
agencyReviewInIdPool?: number[];
guideReviewOutIdPool?: number[];
agencyReviewOutIdPool?: number[];
timeCreated?: string;
atTravelGroup?: number;
isActive?: boolean;
}
