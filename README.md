# LCBO Beer Filter
A search results filter application written using React JS, Reactstrap, HTML, CSS, Fonts with Webpack 4. The data being populated from LCBO's API.

## Components

### Products
The product component loops through the data in the LCBO API and gets the product name, the image, the price, the package units, the category and the serving suggestion. The price is converted from cents to a 2 decimal dollar amount. A limited offer message is displayed only to products that have a limited time offer.

### Search Filter
The Search Filter consists of two radio buttons that can be selected to filter products by name (ascending order) or by price (highest first). Name is selected by default.

## Fonts
A font (Galada) is imported into the project via the head of the index.htmnl file. To avoid performance issues when running your site on Google Page Speed, Web Font Loader is used.

## Quick Start

``` bash
# Install dependencies
npm install

# Serve on localhost:3000
npm run dev

# Build for production
npm run build
```
### Author

Kyri Kyriacou

### Version

1.0.0

### License

This project is licensed under the MIT License
