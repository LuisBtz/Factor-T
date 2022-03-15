export default {
    name: 'seo',
    title: 'SEO',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'stringObject'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'textObject'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'imageType'
        },
    ]
}