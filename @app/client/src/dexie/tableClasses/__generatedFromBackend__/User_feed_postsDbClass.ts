import { user_feed_postsDbType as User_feed_postsDbType } from '../../dbTypes/__generatedFromBackend__/types/user_feed_postsDbType'

export class User_feed_postsDbClass implements User_feed_postsDbType {
id?: number;
user_id: string;
post_id: number;
 nodeId?: string;

  constructor(id?: number,user_id: string,post_id: number, nodeId?: string,) {
    this.id = id
    this.user_id = user_id
    this.post_id = post_id
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}