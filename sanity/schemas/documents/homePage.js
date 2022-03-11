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
            name: 'principalTexto',
            title: 'Texto Principal',
            type: 'blockModule'
        },
        {
            name: 'principalImagenDeFondo',
            title: 'Imagen de fondo principal',
            type: 'imageType',
        },
    ],
}