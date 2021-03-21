import { MdTextFields } from 'react-icons/md'

export default {
  title: 'Text', 
  name: 'richText',
  type: 'object', 
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      blocks: 'text',
    },
    prepare(value) {
      const block = (value.blocks || []).find(
        (block) => block._type === 'block'
      )
      return {
        title: block
          ? block.children
              .filter((child) => child._type === 'span')
              .map((span) => span.text)
              .join('')
          : 'No title',
      }
    },
  },
}
