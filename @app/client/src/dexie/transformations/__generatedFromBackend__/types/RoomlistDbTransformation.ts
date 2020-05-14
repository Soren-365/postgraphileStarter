import { Roomlist  as gqlRoomlist } from '*.graphqls'

import { roomlistDbType as objRoomlist } from '../../../dbTypes/__generatedFromBackend__/types/roomlistDbType'


export const RoomlistTransform = (raw: gqlRoomlist): objRoomlist => {
    return {
         id: raw.id, atAccomodation: raw.atAccomodation, roomNames: raw.roomNames, roomNumPeople: raw.roomNumPeople, roomCalendarId: raw.roomCalendarId, roomPrices: raw.roomPrices
    }
}

// if editing the transform, make a manual RoomlistClassType instead of the line below
export type RoomlistClassType = objRoomlist