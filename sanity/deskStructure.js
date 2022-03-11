// deskStructure.js
import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Pages')
    .items([
        S.listItem()
          .title('Ajustes')
          .icon(() => '⚙️')
          .child(
            S.document()
              .schemaType('settingsPage')
              .documentId('settingsPage')
        ),
        S.divider(),
        S.listItem()
        .title('Inicio')
        .icon(() => '🏡')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')
        ),
        ...S.documentTypeListItems().filter(listItem => !['settingsPage', 'homePage'].includes(listItem.getId()))
    ])