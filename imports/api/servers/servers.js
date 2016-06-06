import {Mongo} from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class ServersCollections extends Mongo.Collection {

}

export const Servers = new ServersCollections('servers');

Servers.schema = new SimpleSchema({
    ip: {type: String},
    createTime: {type: Date}
});

Servers.attachSchema(Servers.schema);