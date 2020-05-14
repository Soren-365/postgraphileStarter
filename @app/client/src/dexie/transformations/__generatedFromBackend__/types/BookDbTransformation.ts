import { Book  as gqlBook } from '*.graphqls'

import { bookDbType as objBook } from '../../../dbTypes/__generatedFromBackend__/types/bookDbType'


export const BookTransform = (raw: gqlBook): objBook => {
    return {
         id: raw.id, publishedYear: raw.publishedYear, priceOfAquisition: raw.priceOfAquisition
    }
}

// if editing the transform, make a manual BookClassType instead of the line below
export type BookClassType = objBook