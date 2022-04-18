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
            name: 'iconoBlanco',
            title: 'Icono Blanco',
            type: 'imageType',
        },
        {
            name: 'copyright',
            title: 'Copyright',
            type: 'stringObject',
        },
        {
            name: 'insta',
            title: 'Instagram',
            type: 'url',
        },
        {
            name: 'instaIcon',
            title: 'Instagram Icon',
            type: 'imageType',
        },
    ],
}