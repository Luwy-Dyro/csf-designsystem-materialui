
module.exports = {
  source: ['tokens.clean.json'],
  platforms: {
 
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      files: [{
        destination: 'variables.css',
        format: 'css/variables',
        options: {
          selector: ':root'
        }
      }]
    },
    // Genera objetos JS/TS para usar en código
    js: {
      transformGroup: 'js',
      buildPath: 'dist/js/',
      files: [{
        format: 'javascript/es6',
        destination: 'index.js'
      }]
    }
  }
};