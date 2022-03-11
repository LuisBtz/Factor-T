export default {
    title: 'Block Module',
    name: 'blockModule',
    type: 'object',
      fields: [
          {
              name: 'en',
              title: 'English',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'H3', value: 'h3' },
                  ],
                  lists: [], // no lists, thanks
                  // Marks let you mark up inline text in the block editor.
                  marks: {
                    decorators: [
                      { title: 'Strong', value: 'strong' },
                      { title: 'Emphasis', value: 'em' },
                    ],
                  },
                },
              ],
          },
          {
              name: 'es',
              title: 'Español',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'H3', value: 'h3' },
                  ],
                  lists: [], // no lists, thanks
                  // Marks let you mark up inline text in the block editor.
                  marks: {
                    decorators: [
                      { title: 'Strong', value: 'strong' },
                      { title: 'Emphasis', value: 'em' },
                    ],
                  },
                },
              ],
          }
      ]
  }