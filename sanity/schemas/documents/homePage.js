export default {
    //
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    icon: () => `🏡`,
    fields: [
        {
            name: 'title',
            title: ' Page Title',
            type: 'stringObject',
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
          title: 'title.en',
        }
      }
}