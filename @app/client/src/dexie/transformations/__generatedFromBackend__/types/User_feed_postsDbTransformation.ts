import { user_feed_postsDbType as objUser_feed_posts } from '../../../dbTypes/__generatedFromBackend__/types/user_feed_postsDbType'

import { User_feed_posts  as gqlUser_feed_posts } from '*.graphqls'


export const User_feed_postsTransform = (raw: gqlUser_feed_posts): objUser_feed_posts => {
    return {
         id: raw.id, user_id: raw.user_id, post_id: raw.post_id
    }
}

// if editing the transform, make a manual User_feed_postsClassType instead of the line below
export type User_feed_postsClassType = objUser_feed_posts