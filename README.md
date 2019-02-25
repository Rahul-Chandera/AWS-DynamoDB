# AWS-DynamoDB
Amazon DynamoDB is a fully managed non-relational database service that provides better performance and scalability. 
This sample demonstrates basic operations of DynamoDB with Nodejs.

DynamoDB is a document DB, so when you create a table, you just have to provide table name and primary key only. So in my case I have created "Users" table with "userId" primary key. To create new table, login to your AWS account and select "DynamoDB" from Services section. Here you will find "Create table" option. Just provide table name and primary key, and enable "Use default settings" if you don't want any other customisation with your table.

To do any operations with DynamoDB, we have to use "DynamoDB.DocumentClient()", and DynamoDB is part of AWS sdk, so we need to import "aws-sdk" here.
```
var AWS = require('aws-sdk');
var documentClient = new AWS.DynamoDB.DocumentClient();
```

We also need to create one parameter object, which will provide table name and field values.
```
var params = {
    Item: {
      "userId": "UNIQUE USER ID",
      "name": "USER NAME",
      "address": "USER ADDRESS"
    },
    TableName: "TABLE NAME"
  };
```

To insert record into table, we have to use "put()" function of DocumentClient.
```
documentClient.put(params, function (err, data) {
    callback(err, data);
});
```

You can refer "add_user.js" file for inserting new record in table, "update_user.js" file for updating any existing record, and "get_users.js" file for fetching records from table.


Reference:
-
- https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.03.html
