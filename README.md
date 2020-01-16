# Punk Beer API Filter
A search results filter application written using React JS, Reactstrap, HTML, SASS, Fonts with Webpack 4. The data is being populated from the Punk API https://punkapi.com/documentation/v2.

## Components

### Products
The product component loops through the data in the Punk API and gets the product name, the `image`, `tagline`, and `first brewed` data. 

### Search Filter
The Search Filter consists of three radio buttons. `Unordered` is the default selection which lists by `tagline.` `Name` lists all products by name (ascending order) and `Keg` will list all items available on the keg.

## Fonts
A font (Galada) is imported into the project via the head of the index.htmnl file. To avoid performance issues when running your site on Google Page Speed (Render Blocking CSS), Web Font Loader is used.

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
