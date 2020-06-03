import { postsDbType as objPosts } from '../../../dbTypes/__generatedFromBackend__/types/postsDbType'

import { Posts  as gqlPosts } from '*.graphqls'


export const PostsTransform = (raw: gqlPosts): objPosts => {
    return {
         id: raw.id, author_id: raw.author_id, headline: raw.headline, body: raw.body, topic: raw.topic, created_at: raw.created_at, updated_at: raw.updated_at
    }
}

// if editing the transform, make a manual PostsClassType instead of the line below
export type PostsClassType = objPosts