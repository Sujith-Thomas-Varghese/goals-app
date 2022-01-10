console.log('Function Starting');

const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

exports.handler = async (event, context, callback) => {
    await readMessage().then((data)=>{
        callback(null, {
            statusCode: 201,
            body: data.Items,
            headers: {
                'Access-Control-Allow-Origin' : '*'
            }
        });
    }).catch((err)=>{
        console.error(err)
    })
};

function readMessage() {
    const params = {
        TableName: 'restaurant_review',
        Limit: 1000
    }
    return ddb.scan(params).promise();
}
