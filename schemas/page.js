export default {
  name: 'page',
  title: 'Seite',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Seitentitel',
      type: 'string',
      validation: (Rule) => Rule.required().error('Pflichtfeld'),
    },
    {
      name: 'sections',
      title: 'Abschnitte',
      type: 'array',
      of: [
        { type: 'richText' },
        { type: 'image' }
      ],
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
