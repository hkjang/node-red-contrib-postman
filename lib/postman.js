var Collection = require('postman-collection').Collection,
    myCollection;


module.exports = function (RED) {

  function postmanFunction(config) {
    RED.nodes.createNode(this, config);
    var self = this;
    myCollection = new Collection();

    this.on('input', function(msg) {

      for(var i in msg.payload){
        myCollection.items.add(msg.payload[i]);
      }
      msg.payload = JSON.stringify(myCollection, null, 2);
      self.send(msg);
    });
  }

  RED.nodes.registerType('postman', postmanFunction);

};
