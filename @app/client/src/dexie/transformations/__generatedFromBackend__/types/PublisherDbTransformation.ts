import { publisherDbType as objPublisher } from '../../../dbTypes/__generatedFromBackend__/types/publisherDbType'

import { Publisher  as gqlPublisher } from '*.graphqls'


export const PublisherTransform = (raw: gqlPublisher): objPublisher => {
    return {
         id: raw.id, name: raw.name, createdById: raw.createdById, belongsToId: raw.belongsToId, belongsToType: raw.belongsToType, canReview: raw.canReview, canPublish: raw.canPublish, isRomanian: raw.isRomanian, isActive: raw.isActive, commandLogEntryId: raw.commandLogEntryId, timeCreated: raw.timeCreated, timeCommand: raw.timeCommand
    }
}

// if editing the transform, make a manual PublisherClassType instead of the line below
export type PublisherClassType = objPublisher