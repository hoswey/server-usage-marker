import { Meteor } from 'meteor/meteor';
import { Servers } from '../../api/servers/servers.js'
import { Apps } from '../../api/apps/apps.js'
import { Usages} from '../../api/usages/usages.js'

Meteor.startup(() => {

    console.log('Startup');
    // code to run on server at startup
    if (Servers.find().count() === 0) {

        const servers = [
            {
                ip: '10.21.8.188'
            }, {
                ip: '10.21.8.29'
            }, {
                ip: '10.21.8.10'
            }, {
                ip: '10.25.37.6'
            }, {
                ip: '10.25.37.7'
            }
        ];

        servers.forEach(server => {
            Servers.insert({
                ip: server.ip,
                createTime: new Date()
            })
        });
    }

    if (Apps.find().count() === 0) {

        const apps = [
            {
                appName: '微博'
            }, {
                appName: '基础web'
            },
            {
                appName: 'invest'
            }, {
                appName: 'push'
            }
        ];

        apps.forEach(app => {
            Apps.insert({
                appName: app.appName,
                createTime: new Date()
            });
        })
    }
});