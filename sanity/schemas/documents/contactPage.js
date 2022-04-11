export default {
    //
    name: 'contactPage',
    title: 'Contact Page',
    type: 'document',
    icon: () => `📝`,
    fields: [
        {
            name: 'title',
            title: ' Page Title',
            type: 'stringObject',
        },
        {
            name: 'headline',
            title: 'Headline',
            type: 'stringObject'
        },
        {
            name: 'tel',
            title: 'Tel',
            type: 'string'
        },
        {
            name: 'mail',
            title: 'Mail',
            type: 'string'
        },
        {
            name: 'address',
            title: 'Address',
            type: 'blockModule'
        },
        {
            name: 'mailText',
            title: 'Mail Text',
            type: 'stringObject'
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