require('babel-polyfill')
require('babel-register')({
  presets: ['env', 'react', 'stage-2'],
})

require('css-modules-require-hook')({
  prepend: [
    require('autoprefixer')(),
    require('precss')({
      import: { disable: true },
      mixins: { disable: true },
    }),
  ],
  generateScopedName: '[name]__[local]___[hash:base64:5]',
  extensions: ['.scss'],
})

const express = require('express')

const app = express()

app.use(express.static('public'))

app.use(require('./routes'))

app.listen(process.env.PORT || 3000)
