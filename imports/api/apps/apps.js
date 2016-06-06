import {Mongo} from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class ProcessesCollections extends Mongo.Collection {

}

export const Apps = new ProcessesCollections('apps');

Apps.schema = new SimpleSchema({
    appName: {type: String},
    createTime: {type: Date}
});

Apps.attachSchema(Apps.schema);