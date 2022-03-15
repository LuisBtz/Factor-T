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
}