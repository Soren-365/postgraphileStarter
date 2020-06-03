import { geocodingDbType as objGeocoding } from '../../../dbTypes/__generatedFromBackend__/types/geocodingDbType'

import { Geocoding  as gqlGeocoding } from '*.graphqls'


export const GeocodingTransform = (raw: gqlGeocoding): objGeocoding => {
    return {
         id: raw.id, locationLat: raw.locationLat, locationLng: raw.locationLng, locationType: raw.locationType, placesId: raw.placesId, formattedAdress: raw.formattedAdress, type: raw.type, viewportNorthEastLat: raw.viewportNorthEastLat, viewportNorthEastLng: raw.viewportNorthEastLng, viewportSouthWestLat: raw.viewportSouthWestLat, viewportSouthWestLng: raw.viewportSouthWestLng, createdById: raw.createdById, publishedById: raw.publishedById, lastModified: raw.lastModified, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual GeocodingClassType instead of the line below
export type GeocodingClassType = objGeocoding