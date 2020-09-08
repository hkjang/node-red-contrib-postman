var Collection = require('postman-collection').Collection,
    myCollection;


module.exports = function (RED) {

  function postmanFunction(config) {
    RED.nodes.createNode(this, config);
    var self = this;

    this.apiBaseUrl = config.apiBaseUrl;
    this.collectionName = config.collectionName || "";
    this.version = config.version || "";

    var node = this;
    this.on('input', function(msg) {
      var apiBaseUrl = node.apiBaseUrl || msg.apiBaseUrl;
      var collectionName = node.collectionName || msg.collectionName;
      var version = node.version || msg.version;

      myCollection = new Collection({
        info: {
          name: collectionName,
          version: version
        },
        item: msg.payload
      });
      myCollection.variables.add({
        id: 'apiBaseUrl',
        value: apiBaseUrl,
        type: 'string'
      });

      // for(var i in msg.payload){
      //   myCollection.items.add(msg.payload[i]);
      // }
      msg.payload = JSON.stringify(myCollection, null, 2);
      self.send(msg);
    });
  }

  RED.nodes.registerType('postman', postmanFunction);

};
