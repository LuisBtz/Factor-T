export default {
    //
    name: 'settingsPage',
    title: 'Settings',
    type: 'document',
    icon: () => `⚙️`,
    fields: [
        {
            name: 'title',
            title: ' Site Title',
            type: 'string',
        },
        {
            name: 'logoBlanco',
            title: 'Logo Blanco',
            type: 'imageType',
        },
        {
            name: 'copyright',
            title: 'Copyright',
            type: 'string',
        },
        {
            name: 'insta',
            title: 'Instagram',
            type: 'url',
        },
    ],
}