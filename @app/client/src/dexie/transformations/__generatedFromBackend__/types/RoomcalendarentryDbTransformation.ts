import { roomcalendarentryDbType as objRoomcalendarentry } from '../../../dbTypes/__generatedFromBackend__/types/roomcalendarentryDbType'

import { Roomcalendarentry  as gqlRoomcalendarentry } from '*.graphqls'


export const RoomcalendarentryTransform = (raw: gqlRoomcalendarentry): objRoomcalendarentry => {
    return {
         id: raw.id, atRoomCalendar: raw.atRoomCalendar, fromDate: raw.fromDate, toDate: raw.toDate, comment: raw.comment, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual RoomcalendarentryClassType instead of the line below
export type RoomcalendarentryClassType = objRoomcalendarentry