const Block = require('./block');

const myBlock = Block.mineBlock(Block.genesis(),'info');
console.log(myBlock.toString());