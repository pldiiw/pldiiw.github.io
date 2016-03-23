'use strict';

const atomicpug = require('atomicpug')({
  source: './patterns',
  endpoint: './public'
});

atomicpug.compileAll();
