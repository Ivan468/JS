const path = require('path');

module.exports = {
  entry:  {main: './src/index.js', 
  // pageOne : './hw1/main.js' 
},
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};