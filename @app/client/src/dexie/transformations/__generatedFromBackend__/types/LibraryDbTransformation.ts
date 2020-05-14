import { Library  as gqlLibrary } from '*.graphqls'

import { libraryDbType as objLibrary } from '../../../dbTypes/__generatedFromBackend__/types/libraryDbType'


export const LibraryTransform = (raw: gqlLibrary): objLibrary => {
    return {
         id: raw.id, bookCathegories: raw.bookCathegories, numberOfBook: raw.numberOfBook, userId: raw.userId
    }
}

// if editing the transform, make a manual LibraryClassType instead of the line below
export type LibraryClassType = objLibrary