import { Deserializable } from "../interfaces/deserializable.interface";
import { User } from "../../user/user.model";


export class Article implements Deserializable {
  id: string;
  title: string;
  description: string;
  published: boolean;
  image: string;
  usersVoted: User[];

  constructor(article: any = {}) {
    this.id = article.id;
    this.title = article.title;
    this.description = article.description;
    this.published = article.published || false;
    this.image = article.image || '';
    this.usersVoted = article.usersVoted || [];
  }

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
