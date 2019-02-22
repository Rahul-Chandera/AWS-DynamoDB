var AWS = require('aws-sdk');
var documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = function index(event, context, callback) {

  var params = {
    TableName: "Users",
    Key: {
      "userId": event.userId
    },
    UpdateExpression: "set name = :a, address = :b",
    ExpressionAttributeValues: {
      ":a": event.name,
      ":b": event.address
    },
    ReturnValues: "UPDATED_NEW"
  };

  documentClient.update(params, function (err, data) {
    callback(err, data);
  });
}
