export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '632840dedf770007ea1a2735',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-final-studio-txemt6uw',
                  apiId: 'e35b955e-896f-4376-9e6b-5c138a02b92d'
                },
                {
                  buildHookId: '632840de0c930c07f938ae9f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-final-web',
                  apiId: 'be33bea8-c9fe-45f0-858c-f5fd9ef626fd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ckvgemmy/sanity-kitchen-sink-final',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-final-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
