export interface tripofferresourceDbType {
id?: number;
tripOfferName?: string;
publisherId: number;
createdById: number;
availableAtCalendarId: number;
guideResponsibleId: number;
guideSecondaryId?: number;
atAgency?: number;
priceInfoId: number;
destinationId: number[];
isSigned: boolean;
atGuide?: number;
isActive?: boolean;
isPublic: boolean;
lastModified?: string;
timeCreated?: string;
 nodeId?: string;
}
