export default {
  name: 'heroData',
  type: 'document',
  title: 'Hero Data',
  fields: [
    {name: 'bannerText', type: 'string', title: 'Banner Text'},
    {name: 'bannerImage', type: 'image', title: 'Banner Image'},
    {
      name: 'collections',
      type: 'array',
      title: 'Collections',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'collectionCategory', type: 'string', title: 'Collection Category'},
            {name: 'collectionImage', type: 'image', title: 'Collection Image'},
          ],
        },
      ],
    },
  ],
}
