import { expressions as exp } from '3xpr'

const result = exp.eval('5*(7+9)==(5*7)+(5*9)')
console.log(result) // true
