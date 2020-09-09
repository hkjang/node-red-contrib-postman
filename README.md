Payload to Postman Collection JSON NodeRED Node
=====================

Install
-------

`npm install node-red-contrib-postman`


Example 
-------

![alt text](flows.png "Flow Image")

```javascript
msg = {};
msg.payload = [];

msg.payload[0] = {
         "id": "set-utc-time-now",
         "name": "Set the current time in UTC",
         "description": "Set the current time in UTC",
         "request": {
             "url":"{{apiBaseUrl}}/utc/settime",
             "method": "Post",
             "body":{
                 "mode": "urlencoded",
                 "urlencoded": [
                    {
                     "key": "nation",
                     "value": "ko-kr",
                     "description" : "nation code"
                    },
                    {
                     "key": "nation2",
                     "value": "ko-kr"
                    }
                ]
             }
         }
}

msg.payload[1] = {
         "id": "get-utc-time-now",
         "name": "Get the current time in UTC",
         "description": "Get the current time in UTC",
         "request": "{{apiBaseUrl}}/utc/now?a=a"
}

return msg;
```

<a href="https://www.buymeacoffee.com/gagagiga" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>


Result 
-------
```json
{
  "item": [
    {
      "id": "set-utc-time-now",
      "name": "Set the current time in UTC",
      "description": {
        "content": "Set the current time in UTC",
        "type": "text/plain"
      },
      "request": {
        "url": {
          "path": [
            "utc",
            "settime"
          ],
          "host": [
            "{{apiBaseUrl}}"
          ],
          "query": [],
          "variable": []
        },
        "method": "POST",
        "body": {
          "mode": "formdata",
          "formdata": [
            {
              "description": {
                "content": "nation code",
                "type": "text/plain"
              },
              "key": "nation",
              "value": "ko-kr"
            },
            {
              "key": "nation2",
              "value": "ko-kr"
            }
          ]
        }
      },
      "response": [],
      "event": []
    },
    {
      "id": "get-utc-time-now",
      "name": "Get the current time in UTC",
      "description": {
        "content": "Get the current time in UTC",
        "type": "text/plain"
      },
      "request": {
        "url": {
          "path": [
            "utc",
            "now"
          ],
          "host": [
            "{{apiBaseUrl}}"
          ],
          "query": [
            {
              "key": "a",
              "value": "a"
            }
          ],
          "variable": []
        },
        "method": "GET"
      },
      "response": [],
      "event": []
    }
  ],
  "event": [],
  "variable": [
    {
      "id": "apiBaseUrl",
      "type": "string",
      "value": "http://localhost"
    }
  ],
  "info": {
    "_postman_id": "69dc1833-3b1a-4ab0-a1e5-94c8201cecd1",
    "name": "xmysql collection",
    "version": {
      "raw": "0.0.1",
      "major": 0,
      "minor": 0,
      "patch": 1,
      "prerelease": [],
      "build": [],
      "string": "0.0.1"
    },
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  }
}
```

Flow Sample
-------
```json

[{"id":"fc672842.a00258","type":"inject","z":"f62f004c.8d6dd","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"","payloadType":"date","x":120,"y":60,"wires":[["b25e3277.3c2e1"]]},{"id":"b25e3277.3c2e1","type":"function","z":"f62f004c.8d6dd","name":"set payload","func":"msg = {};\nmsg.payload = [];\n\nmsg.payload[0] = {\n         \"id\": \"set-utc-time-now\",\n         \"name\": \"Set the current time in UTC\",\n         \"description\": \"Set the current time in UTC\",\n         \"request\": {\n             \"url\":\"{{apiBaseUrl}}/utc/settime\",\n             \"method\": \"Post\",\n             \"body\":{\n                 \"mode\": \"urlencoded\",\n                 \"urlencoded\": [\n                    {\n                     \"key\": \"nation\",\n                     \"value\": \"ko-kr\",\n                     \"description\" : \"nation code\"\n                    },\n                    {\n                     \"key\": \"nation2\",\n                     \"value\": \"ko-kr\"\n                    }\n                ]\n             }\n         }\n}\n\nmsg.payload[1] = {\n         \"id\": \"get-utc-time-now\",\n         \"name\": \"Get the current time in UTC\",\n         \"description\": \"Get the current time in UTC\",\n         \"request\": \"{{apiBaseUrl}}/utc/now?a=a\"\n}\n \n \nreturn msg;","outputs":1,"noerr":0,"initialize":"","finalize":"","x":280,"y":60,"wires":[["8f0d17f2.22ad08"]]},{"id":"17b5c8b4.023597","type":"debug","z":"f62f004c.8d6dd","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":790,"y":60,"wires":[]},{"id":"44086fc4.83877","type":"file","z":"f62f004c.8d6dd","name":"","filename":"/download/collection.json","appendNewline":true,"createDir":true,"overwriteFile":"true","encoding":"none","x":830,"y":100,"wires":[["33dd9ec1.8c4352"]]},{"id":"33dd9ec1.8c4352","type":"debug","z":"f62f004c.8d6dd","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"true","targetType":"full","statusVal":"","statusType":"auto","x":1030,"y":100,"wires":[]},{"id":"8f0d17f2.22ad08","type":"postman","z":"f62f004c.8d6dd","name":"Payload to Postman Collection JSON","apiBaseUrl":"http://localhost","collectionName":"xmysql collection","version":"0.0.1","x":530,"y":60,"wires":[["17b5c8b4.023597","44086fc4.83877"]]},{"id":"c6896b6e.7a35b8","type":"function","z":"f62f004c.8d6dd","name":"set payload","func":"\nmsg.apiBaseUrl = msg.payload.apiBaseUrl;\nmsg.collectionName = msg.payload.collectionName;\nmsg.version = msg.payload.version;\n\nmsg.payload = msg.payload.items;\n\nreturn msg;","outputs":1,"noerr":0,"initialize":"","finalize":"","x":410,"y":140,"wires":[["debfaca0.10b3a","42e5a08c.37c08"]]},{"id":"42e5a08c.37c08","type":"postman","z":"f62f004c.8d6dd","name":"Payload to Postman Collection JSON","apiBaseUrl":"","collectionName":"","version":"","x":670,"y":140,"wires":[["35724443.92ec9c","d81583a.6a37e8"]]},{"id":"56f3c1a5.e79d","type":"http in","z":"f62f004c.8d6dd","name":"","url":"/postman/create/collection","method":"post","upload":false,"swaggerDoc":"","x":170,"y":140,"wires":[["c6896b6e.7a35b8"]]},{"id":"35724443.92ec9c","type":"http response","z":"f62f004c.8d6dd","name":"","statusCode":"","headers":{},"x":910,"y":140,"wires":[]},{"id":"656c8102.2b047","type":"inject","z":"f62f004c.8d6dd","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"","payloadType":"date","x":120,"y":220,"wires":[["bcbe9b6.4221768"]]},{"id":"bcbe9b6.4221768","type":"function","z":"f62f004c.8d6dd","name":"set payload","func":"msg = {};\nmsg.payload = {};\n\nmsg.payload.apiBaseUrl = 'http://localhost/api';\nmsg.payload.collectionName = 'postman collection';\nmsg.payload.version = '0.0.1';\nmsg.payload.items = [];\n\nmsg.payload.items[0] = {\n         \"id\": \"set-utc-time-now\",\n         \"name\": \"Set the current time in UTC\",\n         \"description\": \"Set the current time in UTC\",\n         \"request\": {\n             \"url\":\"{{apiBaseUrl}}/utc/settime\",\n             \"method\": \"Post\",\n             \"body\":{\n                 \"mode\": \"urlencoded\",\n                 \"urlencoded\": [\n                    {\n                     \"key\": \"nation\",\n                     \"value\": \"ko-kr\",\n                     \"description\" : \"nation code\"\n                    },\n                    {\n                     \"key\": \"nation2\",\n                     \"value\": \"ko-kr\"\n                    }\n                ]\n             }\n         }\n}\n\nmsg.payload.items[1] = {\n         \"id\": \"get-utc-time-now\",\n         \"name\": \"Get the current time in UTC\",\n         \"description\": \"Get the current time in UTC\",\n         \"request\": \"{{apiBaseUrl}}/utc/now?a=a\"\n}\n \nreturn msg;","outputs":1,"noerr":0,"initialize":"","finalize":"","x":280,"y":220,"wires":[["d2349579.556098"]]},{"id":"d2349579.556098","type":"http request","z":"f62f004c.8d6dd","name":"","method":"POST","ret":"txt","paytoqs":"ignore","url":"http://localhost:1880/postman/create/collection","tls":"","persist":false,"proxy":"","authType":"","x":470,"y":220,"wires":[["335c5bc1.8d6524"]]},{"id":"335c5bc1.8d6524","type":"debug","z":"f62f004c.8d6dd","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":670,"y":220,"wires":[]},{"id":"d81583a.6a37e8","type":"debug","z":"f62f004c.8d6dd","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":930,"y":180,"wires":[]},{"id":"debfaca0.10b3a","type":"debug","z":"f62f004c.8d6dd","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"true","targetType":"full","statusVal":"","statusType":"auto","x":570,"y":180,"wires":[]}]

```
