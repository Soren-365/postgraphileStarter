import { Commandlogentry  as gqlCommandlogentry } from '*.graphqls'

import { commandlogentryDbType as objCommandlogentry } from '../../../dbTypes/__generatedFromBackend__/types/commandlogentryDbType'


export const CommandlogentryTransform = (raw: gqlCommandlogentry): objCommandlogentry => {
    return {
         id: raw.id, atPublisher: raw.atPublisher, belongsToType: raw.belongsToType, resourceId: raw.resourceId, logcommand: raw.logcommand, timeCommand: raw.timeCommand
    }
}

// if editing the transform, make a manual CommandlogentryClassType instead of the line below
export type CommandlogentryClassType = objCommandlogentry