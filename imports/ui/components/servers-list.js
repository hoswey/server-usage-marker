import {Servers} from '../../api/servers/servers.js'
import {Template} from 'meteor/templating';

import './servers-list.html'

Template.Servers_List.onCreated(function onCreated() {
});

Template.Servers_List.helpers({
        servers: Servers.find(),
    }
);