import { Roomcalendar  as gqlRoomcalendar } from '*.graphqls'

import { roomcalendarDbType as objRoomcalendar } from '../../../dbTypes/__generatedFromBackend__/types/roomcalendarDbType'


export const RoomcalendarTransform = (raw: gqlRoomcalendar): objRoomcalendar => {
    return {
         id: raw.id, publisherId: raw.publisherId, createdById: raw.createdById, isActive: raw.isActive, calendarentryId: raw.calendarentryId, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual RoomcalendarClassType instead of the line below
export type RoomcalendarClassType = objRoomcalendar