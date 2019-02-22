var AWS = require('aws-sdk');
var uuid = require('uuid');
var documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = function index(event, context, callback) {
  var params = {
    Item: {
      "userId": uuid.v1(),
      "name": event.name,
      "address": event.address
    },
    TableName: "Users"
  };
  documentClient.put(params, function (err, data) {
    callback(err, data);
  });
}
