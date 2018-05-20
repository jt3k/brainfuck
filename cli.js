#!/usr/bin/env node

const bf = require('.');
const input = process.argv.slice(2).join('');
const output = bf(input);

console.log(output);
