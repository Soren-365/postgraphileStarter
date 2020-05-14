export interface PublisherDbType {
publisherId: number;
publisherName: string;
refersToId: number;
isAgency: boolean;
isTourist: boolean;
isGuide: boolean;
canReview: boolean;
canPublish: boolean;
isRomanian: string;
isActive: boolean;
commandLogEntryId: number;
timeCreated: string;
createdById: number;
timeCommand: string;
}
