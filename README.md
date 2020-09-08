Payload to Postman Collection JSON NodeRED Node
=====================

postman Wrapper 

https://github.com/tkrkt/postman


Install
-------

`npm install node-red-contrib-postman`

Example 
-------
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
{  "item": [    {      "id": "utc-time-now",      "name": "Get the current time in UTC",      "request": {        "url": {          "path": [            "utc",            "now"          ],          "host": [            "{{apiBaseUrl}}"          ],          "query": [],          "variable": []        },        "method": "GET"      },      "response": [],      "event": []    },    {      "id": "utc-time-now9",      "name": "Get the current time in UTC9",      "request": {        "url": {          "path": [            "utc",            "now9"          ],          "host": [            "{{apiBaseUrl}}"          ],          "query": [],          "variable": []        },        "method": "GET"      },      "response": [],      "event": []    }  ],  "event": [],  "variable": [],  "info": {    "_postman_id": "88ae1add-a97d-4227-8363-619c6f0e357a",    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"  }}
```

Flow Sample
-------
```json

[{"id":"2f478eca.add412","type":"inject","z":"b541d855.b457b8","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"","payloadType":"date","x":140,"y":60,"wires":[["84a0c663.9a5018"]]},{"id":"84a0c663.9a5018","type":"function","z":"b541d855.b457b8","name":"set payload","func":"msg = {};\nmsg.payload = [];\nmsg.payload[0] = {\n         id: 'utc-time-now',\n         name: 'Get the current time in UTC',\n         request: '{{apiBaseUrl}}/utc/now'\n}\n\nmsg.payload[1] = {\n         id: 'utc-time-now9',\n         name: 'Get the current time in UTC9',\n         request: '{{apiBaseUrl}}/utc/now9'\n}\n \nreturn msg;","outputs":1,"noerr":0,"initialize":"","finalize":"","x":300,"y":60,"wires":[["af07ae0a.125f3"]]},{"id":"af07ae0a.125f3","type":"postman","z":"b541d855.b457b8","name":"Payload to Postman Collection JSON","x":560,"y":60,"wires":[["c8f70167.23f3c","21d674c6.77d7cc"]]},{"id":"c8f70167.23f3c","type":"debug","z":"b541d855.b457b8","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":830,"y":60,"wires":[]},{"id":"21d674c6.77d7cc","type":"file","z":"b541d855.b457b8","name":"","filename":"/download/collection.json","appendNewline":true,"createDir":false,"overwriteFile":"false","encoding":"none","x":870,"y":100,"wires":[["58ea7f27.29069"]]},{"id":"58ea7f27.29069","type":"debug","z":"b541d855.b457b8","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"true","targetType":"full","statusVal":"","statusType":"auto","x":1050,"y":100,"wires":[]}]

```
