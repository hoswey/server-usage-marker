import {Mongo} from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class UsagesCollections extends Mongo.Collection {

}

export const Usages = new UsagesCollections('usages');

Usages.schema = new SimpleSchema({
    username: {type: String, optional: true},
    appName: {type: String},
    ip: {type: String}
});

Usages.attachSchema(Usages.schema);