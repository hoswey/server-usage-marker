import {Apps} from '../../api/apps/apps.js'
import {Template} from 'meteor/templating';

import './apps-list.html'

Template.Apps_List.onCreated(function onCreated() {
});

Template.Apps_List.helpers({
        apps: Apps.find(),
    }
);