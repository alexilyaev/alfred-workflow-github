#!/usr/bin/env node
'use strict';

// process.env.alfred_debug = '1';

const alfy = require('alfy');

const command = 'get';

const input = alfy.input;

const token = alfy.config.get('token');

if (!token) {
  return alfy.error(new Error(`Run "${command} token" with your Personal GitHub Token`));
}

// alfy.fetch('jsonplaceholder.typicode.com/posts')
//   .then((data) => {
//     // alfy.log('hi');
//
//     const items = alfy
//       .inputMatches(data, 'title')
//       .map(x => ({
//         title: x.title,
//         subtitle: x.body,
//         arg: x.id
//       }));
//
//     alfy.output(items);
//   });

const query = `{
  viewer { 
    repositories(first: 10) {
      nodes {
        id
        name
        description
        url
      }
      # edges {
      #   node {
      #     id
      #     name
      #     description
      #     url
      #   }
      # }
    }
  }
}`;

const variables = {};

alfy.fetch('https://api.github.com/graphql', {
  'method': 'POST',
  'headers': {
    'Authorization': 'bearer ' + token
  },
  body: JSON.stringify({ query, variables })
})
  .then((json) => {
    const data = json.data;

    if (!data) {
      return alfy.log(json.errors ? json.errors : 'Unknown GraphQL Error');
    }

    // alfy.log('All good!');
    // alfy.log(data.viewer.repositories.nodes);

    const results = data.viewer.repositories.nodes.map((node) => {
      return {
        title: node.name,
        subtitle: node.description || '',
        arg: node.url
      }
    });

    alfy.output(results);
  });
