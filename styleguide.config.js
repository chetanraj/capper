const path = require('path');

module.exports = {
  require: [path.join(__dirname, 'src/App.scss')],
  skipComponentsWithoutExample: true,
  theme: {
    fontFamily: {
      base: '"Roboto", sans-serif'
    }
  },
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto'
        }
      ]
    }
  },
  ignore: ['src/components/**/index.js'],
  getComponentPathLine() {
    return ``;
  }
};
