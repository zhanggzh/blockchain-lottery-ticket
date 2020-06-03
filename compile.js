let fs = require('fs')
let sourceFile = fs.readFileSync('./contracts/ticket.sol','utf-8')
let solc = require('solc')
let res = solc.compile(sourceFile,1)
module.exports = res['contracts'] [':Ticket']