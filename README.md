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
         id: 'utc-time-now',
         name: 'Get the current time in UTC',
         request: '{{apiBaseUrl}}/utc/now'
}

msg.payload[1] = {
         id: 'utc-time-now9',
         name: 'Get the current time in UTC9',
         request: '{{apiBaseUrl}}/utc/now9'
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
      "id": "utc-time-now",
      "name": "Get the current time in UTC",
      "request": {
        "url": {
          "path": [
            "utc",
            "now"
          ],
          "host": [
            "{{apiBaseUrl}}"
          ],
          "query": [],
          "variable": []
        },
        "method": "GET"
      },
      "response": [],
      "event": []
    },
    {
      "id": "utc-time-now9",
      "name": "Get the current time in UTC9",
      "request": {
        "url": {
          "path": [
            "utc",
            "now9"
          ],
          "host": [
            "{{apiBaseUrl}}"
          ],
          "query": [],
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
    "_postman_id": "fedcc1db-f42b-47e5-8b86-7a58f27feb13",
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

[{"id":"5632e67b.ef9268","type":"inject","z":"f62f004c.8d6dd","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"","payloadType":"date","x":120,"y":40,"wires":[["9cedc1b4.c5e61"]]},{"id":"9cedc1b4.c5e61","type":"function","z":"f62f004c.8d6dd","name":"set payload","func":"msg = {};\nmsg.payload = [];\nmsg.payload[0] = {\n         id: 'utc-time-now',\n         name: 'Get the current time in UTC',\n         request: '{{apiBaseUrl}}/utc/now'\n}\n\nmsg.payload[1] = {\n         id: 'utc-time-now9',\n         name: 'Get the current time in UTC9',\n         request: '{{apiBaseUrl}}/utc/now9'\n}\n \nreturn msg;","outputs":1,"noerr":0,"initialize":"","finalize":"","x":280,"y":40,"wires":[["19334026.02666"]]},{"id":"3f8dfec9.1ef702","type":"debug","z":"f62f004c.8d6dd","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":810,"y":40,"wires":[]},{"id":"f9ab1202.d9d66","type":"file","z":"f62f004c.8d6dd","name":"","filename":"/download/collection.json","appendNewline":true,"createDir":true,"overwriteFile":"true","encoding":"none","x":850,"y":80,"wires":[["fd869677.42ac88"]]},{"id":"fd869677.42ac88","type":"debug","z":"f62f004c.8d6dd","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"true","targetType":"full","statusVal":"","statusType":"auto","x":1030,"y":80,"wires":[]},{"id":"19334026.02666","type":"postman","z":"f62f004c.8d6dd","name":"Payload to Postman Collection JSON","apiBaseUrl":"http://localhost","collectionName":"xmysql collection","version":"0.0.1","x":550,"y":40,"wires":[["3f8dfec9.1ef702","f9ab1202.d9d66"]]}]

```
