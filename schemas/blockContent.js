import React from 'react'

const icon = () => {
  return <img src="/static/recipe.png" height="30" />
}

const Title1Style = (props) => (
  <span style={{ fontSize: '2.25rem', fontWeight: '700' }}>
    {props.children}
  </span>
)

const Title2Style = (props) => (
  <span style={{ fontSize: '1.25rem', fontWeight: '600' }}>
    {props.children}
  </span>
)

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // corrensponds with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: 'Normal', value: 'normal' },
        {
          title: 'Titel 1',
          value: 'h2',
          blockEditor: {
            render: Title1Style,
          },
        },
        {
          title: 'Titel 2',
          value: 'h3',
          blockEditor: {
            render: Title2Style,
          },
        },
      ],
      /*  lists: [{ title: 'Bullet', value: 'bullet' }], */
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Underline', value: 'underline' }
        ],
      },
    },
  ],
}
