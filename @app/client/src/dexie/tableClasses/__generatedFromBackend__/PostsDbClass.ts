import { postsDbType as PostsDbType } from '../../dbTypes/__generatedFromBackend__/types/postsDbType'

export class PostsDbClass implements PostsDbType {
id?: number;
author_id?: string;
headline: string;
body?: string;
topic: string;
created_at: string;
updated_at: string;
 nodeId?: string;

  constructor(id?: number,author_id?: string,headline: string,body?: string,topic: string,created_at: string,updated_at: string, nodeId?: string,) {
    this.id = id
    this.author_id = author_id
    this.headline = headline
    this.body = body
    this.topic = topic
    this.created_at = created_at
    this.updated_at = updated_at
    this.nodeId = nodeId
  }
//  add methods here and move to 'edited' folder
}