export interface bookingcalendarDbType {
id?: number;
belongsToId?: number;
belongsToType?: string;
createdById?: number;
isActive?: boolean;
fromTimestamp: string[];
toTimestamp: string[];
resourceType?: string[];
comment?: string[];
timeCreated?: string;
 nodeId?: string;
}
