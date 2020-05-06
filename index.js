const Mysql = require('sync-mysql')

const connection = new Mysql({
    host:'localhost',
    user:'root',
    password:'password',
    database:'demo'
})

var result = connection.query('SELECT NOW()')

console.log(result)