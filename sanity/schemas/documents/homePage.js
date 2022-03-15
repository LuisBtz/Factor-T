export default {
    //
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    icon: () => `🏡`,
    fields: [
        {
            name: 'title',
            title: ' Site Title',
            type: 'string',
        },
        {
            name: 'homeTexto',
            title: 'Home Headline',
            type: 'blockModule'
        },
        {
            name: 'homeSlider',
            title: 'Home Slider',
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