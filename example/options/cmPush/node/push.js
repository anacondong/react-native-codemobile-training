var OneSignal = require('onesignal-node');

// first we need to create a client
var myClient = new OneSignal.Client({
    userAuthKey: 'MzE0YTMzOTAtNGFiZC00OGU5LTlkNmItMDI1NjNlMGM0OWY2',
    app: { appAuthKey: 'MjA3MTM4ZGUtNGIxNy00MTZkLWI2YTktNDNmZTY0MjBmY2Fh', appId: '9f6b1eb8-bf54-49d6-bf81-46149170e1da' }
});

// we need to create a notification to send
var firstNotification = new OneSignal.Notification({
    contents: {
        en: "CodeMobiles.com1",
        th: "โค้ดโมบายส์ จำกัด"
    }
});

firstNotification.postBody["headings"] = {"en": "CodeMobiles", "th": "โค้ดโมบายส์"};    


// set target users
firstNotification.setIncludedSegments(['All']);
firstNotification.setExcludedSegments(['Inactive Users']);

// set notification parameters
firstNotification.setParameter('data', {"abc": "123", "foo": "bar"});
//firstNotification.setParameter('send_after', 'Thu Sep 24 2015 14:00:00 GMT-0700 (PDT)');

/*
var firstNotification = new OneSignal.Notification({    
    contents: {    
        en: "Test notification",    
        tr: "Test mesajı"    
    },  
    include_player_ids: ["1dd608f2-c6a1-11e3-851d-000c2940e62c", "2dd608f2-c6a1-11e3-851d-000c2940e62c"]  
});  
*/

// send this notification to All Users except Inactive ones
myClient.sendNotification(firstNotification, function (err, httpResponse,data) {
   if (err) {
       console.log('Something went wrong...');
   } else {
       console.log(data, httpResponse.statusCode);
   }
});