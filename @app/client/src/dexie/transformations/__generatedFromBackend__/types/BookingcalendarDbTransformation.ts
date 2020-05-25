import { bookingcalendarDbType as objBookingcalendar } from '../../../dbTypes/__generatedFromBackend__/types/bookingcalendarDbType'

import { Bookingcalendar  as gqlBookingcalendar } from '*.graphqls'


export const BookingcalendarTransform = (raw: gqlBookingcalendar): objBookingcalendar => {
    return {
         id: raw.id, belongsToId: raw.belongsToId, belongsToType: raw.belongsToType, createdById: raw.createdById, isActive: raw.isActive, fromTimestamp: raw.fromTimestamp, toTimestamp: raw.toTimestamp, resourceType: raw.resourceType, comment: raw.comment, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual BookingcalendarClassType instead of the line below
export type BookingcalendarClassType = objBookingcalendar