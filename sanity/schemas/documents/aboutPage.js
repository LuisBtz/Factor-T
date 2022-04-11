export default {
    //
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',
    icon: () => `📝`,
    fields: [
        {
            name: 'title',
            title: ' Page Title',
            type: 'stringObject',
        },
        {
            name: 'descriptionAbout',
            title: 'Description About',
            type: 'blockModule'
        },
        {
            name: 'ourServicesText',
            title: 'Our Services Text',
            type: 'stringObject'
        },
        {
            name: 'services',
            title: 'Services',
            type: 'array',
            of: [
                {type: 'service'}
            ]
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo'
        }
    ],
    preview: {
        select: {
          title: 'title.en',
        }
      }
}