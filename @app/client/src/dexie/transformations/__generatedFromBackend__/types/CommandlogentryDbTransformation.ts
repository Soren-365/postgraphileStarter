import { commandlogentryDbType as objCommandlogentry } from '../../../dbTypes/__generatedFromBackend__/types/commandlogentryDbType'

import { Commandlogentry  as gqlCommandlogentry } from '*.graphqls'


export const CommandlogentryTransform = (raw: gqlCommandlogentry): objCommandlogentry => {
    return {
         id: raw.id
    }
}

// if editing the transform, make a manual CommandlogentryClassType instead of the line below
export type CommandlogentryClassType = objCommandlogentry