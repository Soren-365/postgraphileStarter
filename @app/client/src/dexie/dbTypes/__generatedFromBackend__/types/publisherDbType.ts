export interface publisherDbType {
id?: number;
name?: string;
createdById?: number;
belongsToId?: number;
belongsToType?: string;
canReview?: boolean;
canPublish?: boolean;
isRomanian?: boolean;
isActive?: boolean;
commandLogEntryId?: number[];
timeCreated?: string;
 nodeId?: string;
}
