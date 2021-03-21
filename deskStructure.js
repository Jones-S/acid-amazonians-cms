import S from '@sanity/desk-tool/structure-builder'
import { IoMdDocument } from 'react-icons/io'

export default () =>
  S.list()
    .title('Seiten')
    .items([
      S.listItem()
        .title('Show')
        .icon(IoMdDocument)
        .child(
          S.document()
            .schemaType('page')
            .documentId('show')
        ),
      S.listItem()
        .title('Game')
        .icon(IoMdDocument)
        .child(
          S.document()
            .schemaType('game')
            .documentId('game')
        ),
      S.listItem()
        .title('Info')
        .icon(IoMdDocument)
        .child(
          S.document()
            .schemaType('page')
            .documentId('info')
        ),
      ...S.documentTypeListItems()
        .filter(listItem => !['game'].includes(listItem.getId()))
        .filter(listItem => !['page'].includes(listItem.getId()))
    ])

