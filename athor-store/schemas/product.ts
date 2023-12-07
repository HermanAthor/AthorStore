export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {name: 'name', type: 'string', title: 'name of product'},
    {name: 'images', type: 'array', title: 'product images', of: [{type: 'image'}]},
    {name: 'description', type: 'text', title: 'Description of product'},
    {name: 'slug', type: 'slug', title: 'product Slug', options: {source: 'name'}},
    {name: 'price', type: 'number', title: 'Price'},
    {name: 'price_id', type: 'number', title: 'Price ID from stripe'},
    {name: 'ratingCount', type: 'number', title: 'Rating count'},
    {name: 'ratingRate', type: 'number', title: 'Rating rate'},
    {name: 'brand', type: 'string', title: 'Brand'},
    {name: 'category', title: 'Product category', type: 'reference', to: [{type: 'category'}]},
  ],
}
