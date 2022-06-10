const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema/type-defs');
const { resolvers } = require('./schema/resolvers');


const server = new ApolloServer({
    typeDefs, 
    resolvers
});

let PORT = 4001;
server.listen(PORT).then(({url}) => { 
    console.log(`Your API is running at: ${url} :)`);
});