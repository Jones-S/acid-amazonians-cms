import { MdDashboard } from 'react-icons/md'

export default {
  name: 'game',
  title: 'Game',
  type: 'document',
  icon: MdDashboard,
  fields: [
    {
      name: 'title',
      title: 'Seitentitel',
      type: 'string',
      validation: (Rule) => Rule.required().error('Pflichtfeld'),
    },
    {
      title: 'Tracks',
      name: 'tracks',
      type: 'array',
      of: [{type: 'track'}]
    },
    {
      name: 'description',
      title: 'Kurze Beschreibung von der Seite',
      description: 'Wird im Suchresultat von Google angezeigt',
      validation: (Rule) => [
        Rule.max(300).warning(
          'Die Beschreibung sollte kürzer als 300 Zeichen sein'
        ),
      ],
      type: 'text',
      rows: 1,
    },
  ],
}