// yarn add onesignal-node
const OneSignal = require('onesignal-node');
const client = new OneSignal.Client(
  'e522b740-cd0e-4a72-bfb8-0a505ffc4199',
  'N2U3YWQyNDgtMzU1NS00YmI5LWIxMjYtYTEwMGNjODA5YjJh',
);

// See all fields: https://documentation.onesignal.com/reference/create-notification
const notification = {
  contents: {
    en: 'New notification',
  },
  included_segments: ['Subscribed Users'],
  // filters: [{field: 'tag', key: 'level', relation: '>', value: 10}],
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
