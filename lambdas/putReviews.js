console.log('Function Starting');

const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

exports.handler = async (event, context, callback) => {
    await updateTable(event.message).then(()=>{
        callback(null, {
            statusCode: 201,
            body: '',
            headers: {
                'Access-Control-Allow-Origin' : '*'
            }
        });
    }).catch((err)=>{
        console.error(err)
    })
};

function updateTable(value) {
    const params = {
        TableName: "restaurant_review",
        Item: {
            'date': Date.now(),
            'message': value
        }
    }
    return ddb.put(params).promise();
}
