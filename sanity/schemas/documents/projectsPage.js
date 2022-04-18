export default {
    //
    name: 'projectsPage',
    title: 'Projects Page',
    type: 'document',
    icon: () => `💐`,
    fields: [
        {
            name: 'title',
            title: ' Site Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
            },
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'imageType'
        },
        {
            name: 'location',
            title: 'Location',
            type: 'stringObject'
        },
        {
            name: 'event',
            title: 'Event',
            type: 'stringObject'
        },
        {
            name: 'projectSlider',
            title: 'Project Slider',
            type: 'array',
            options: {
                layout: 'grid',
              },
            of: [
                {type: 'imageType'}
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
          title: 'title',
          subtitle: 'event.en',
          media: 'thumbnail'
        }
      }
}