import {Meteor} from 'meteor/meteor'
import {Usages} from '../../api/usages/usages.js'
import {Template} from 'meteor/templating';
import {Servers} from '../../api/servers/servers.js'
import {Apps} from '../../api/apps/apps.js'

import './usages-list.html'

Template.Usages_List.onCreated(function onCreated() {
    console.log(Servers.findOne().ip)
});

Template.Usages_List.helpers({
        usages: Usages.find({}, {sort: {ip: 1, appName: 1}}),
        servers: Servers.find(),
        apps: Apps.find(),
    }
);

Template.Usages_List.events({
        'click .server-ip'(event) {
            const ip = this.ip;
            $('#selectedServerIp').text(ip);
        }, 'click .app-name'(event) {
            const appName = this.appName;
            $('#selectedAppName').text(appName);
        },
        'click #serverConfirm'(event){
            const ip = $('#selectedServerIp').text().trim();
            const appName = $('#selectedAppName').text().trim();

            if (Usages.find({'ip': ip, 'appName': appName}).count() != 0) {
                alert("该记录已存在");
                return;
            }
            Usages.insert({
                ip: ip,
                appName: appName
            }, function () {
                $('#serverModal').modal('hide')
            });
        },
        'click #use, click #cancel'(event){

            const btn = $(event.currentTarget);
            const ip = btn.closest('tr').find('.ip').text().trim();
            const appName = btn.closest('tr').find('.appName').text().trim();
            const isUse = btn[0].id == 'use';

            const usage = Usages.findOne({ip: ip, appName: appName});
            if (!usage) {
                return;
            }

            if (isUse) {
                if (usage.username != null) {
                    alert('该服务器已被占用');
                } else {
                    Usages.update({_id: usage._id}, {$set: {username: Meteor.user().username}});
                }
            } else {
                if (usage.username == Meteor.user().username) {
                    Usages.update({_id: usage._id}, {$unset: {username: ""}})
                } else {
                    alert('该服务器已被占用');
                }
            }

        }
    }
);

Template.editable.rendered = function onRender() {
    $('.editable').editable({
        placement: "auto top",
        success: function (response, newValue) {
            console.log('set new value to ' + newValue);
        }
    });
};