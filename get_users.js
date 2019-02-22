var AWS = require('aws-sdk');
var documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = function index(event, context, callback) {
  var params = {
    TableName: "Users"
  };
  documentClient.scan(params, function (err, data) {
    if (err) {
      callback(err, null);
    } else {
      var result = {
        data: { users: data.Items },
        result: true
      };
      callback(null, result);
    }
  });
}
