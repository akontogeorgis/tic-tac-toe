const { Client } = require('@elastic/elasticsearch/index')
const client = new Client({ node: 'http://localhost:9200' })


client.cluster.health({},function(err,resp,status) {
    console.log("-- Client Health --",resp);
});



