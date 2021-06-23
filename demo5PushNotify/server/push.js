// yarn add onesignal-node
const OneSignal = require('onesignal-node');
const client = new OneSignal.Client('app_id', 'rest_api');

// See all fields: https://documentation.onesignal.com/reference/create-notification
const notification = {
  contents: {
    tr: 'Yeni bildirim',
    en: 'New notification',
  },
  included_segments: ['Subscribed Users'],
  filters: [{field: 'tag', key: 'level', relation: '>', value: 10}],
};

// or you can use promise style:
client
  .createNotification(notification)
  .then(response => {
    console.log('push successfully');
  })
  .catch(e => {
    console.log('push failed - ' + JSON.stringify(e));
  });
