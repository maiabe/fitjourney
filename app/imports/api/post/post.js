import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

class PostsCollection {
  constructor() {
    this.name = 'PostsCollection';
    this.collection = new Mongo.Collection(this.name);
    this.schema = new SimpleSchema({
      title: String,
      contents: String,
      image: { type: String, optional: true },
      createdAt: Date,
      owner: String,
      activityDurationHours: {
        type: SimpleSchema.Integer,
        optional: true,
        min: 0,
        max: 24,
      },
      activityDurationMinutes: {
        type: SimpleSchema.Integer,
        optional: true,
        min: 0,
        max: 59,
      },
    });
    this.collection.attachSchema(this.schema);
    this.userPublicationName = `${this.name}.publication.user`;
  }
}

export const Posts = new PostsCollection();
