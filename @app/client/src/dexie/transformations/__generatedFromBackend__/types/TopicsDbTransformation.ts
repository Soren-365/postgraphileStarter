import { topicsDbType as objTopics } from '../../../dbTypes/__generatedFromBackend__/types/topicsDbType'

import { Topics  as gqlTopics } from '*.graphqls'


export const TopicsTransform = (raw: gqlTopics): objTopics => {
    return {
         title: raw.title
    }
}

// if editing the transform, make a manual TopicsClassType instead of the line below
export type TopicsClassType = objTopics