var url = require('../url');
var string = 'http://rob:abcd1234@www.example.co.uk/path/index.html?query1=test&silly=willy&field[0]=zero&field[2]=two#test=hash&chucky=cheese';

console.log(url('?query1', string))
