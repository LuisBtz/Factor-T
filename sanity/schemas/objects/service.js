export default {
    name: 'service',
    title: 'Service',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Name',
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
        }
    ],
    preview: {
        select: {
          title: 'name.en',
          subtitle: 'description.en',
          media: 'image'
        }
      }
}