// process.env.alfred_debug = '1';

import alfy from 'alfy';

const command = process.env['WF_COMMAND'];
const input = alfy.input;
const token = alfy.config.get('token');

async function fetchGists() {
  const data = await alfy.fetch(
    'https://api.github.com/users/alexilyaev/gists',
    {
      headers: {
        Accept: 'application/vnd.github+json',
      },
    }
  );
  // console.log('🚀 -> fetchGists -> data', data);

  // const items = alfy.inputMatches(data, 'description').map(element => ({
  //   title: element.description,
  //   subtitle: element.owner.login,
  //   arg: element.html_url,
  // }));

  const items = [];

  data.forEach(gistItem => {
    // if (gistItem.description.toLowerCase().includes(input.toLowerCase())) {
    if (new RegExp(input, 'i').test(gistItem.description)) {
      items.push({
        title: gistItem.description,
        subtitle: gistItem.owner.login,
        arg: gistItem.html_url,
      });
    }
  });

  return items;
}

async function fetchGitHubRepos() {
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

  const json = await alfy.fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: 'bearer ' + token,
    },
    body: JSON.stringify({ query, variables }),
  });
  const data = json.data;

  if (!data) {
    return alfy.log(json.errors ? json.errors : 'Unknown GraphQL Error');
  }

  // alfy.log('All good!');
  // alfy.log(data.viewer.repositories.nodes);

  const results = data.viewer.repositories.nodes.map(node => {
    return {
      title: node.name,
      subtitle: node.description || '',
      arg: node.url,
    };
  });

  alfy.output(results);
}

async function init() {
  // if (!token) {
  //   alfy.error(
  //     new Error(`Run "${command} token" with your Personal GitHub Token`)
  //   );
  //   return;
  // }

  const items = await fetchGists();

  alfy.output(items);
}

init();
