const readline = require('readline')

function READ (str) {
  return str
}

function EVAL (str) {
  return str
}

function PRINT (str) {
  return str
}

function rep (str) {
  return PRINT(EVAL(READ(str)))
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'user> '
})

rl.on('line', (line) => {
  console.log(rep(line))
  rl.prompt()
})

rl.prompt()
