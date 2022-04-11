export default {
    name: 'imageType',
    title: 'Image',
    options: {
        hotspot: true // <-- Defaults to false
      },
    type: 'image',
    fields: [
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: 'altEn',
          type: 'string',
          title: 'Alternative Text English',
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: 'altEs',
          type: 'string',
          title: 'Texto Alternativo en Español',
        },
      ]
}