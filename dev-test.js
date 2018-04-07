const Block = require('./block');

const block = new Block('01/01/2018','lastHash','newHash','info');

console.log(block.toString());

console.log(Block.genesis().toString());