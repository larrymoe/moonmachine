const pgp = require('pg-promise')();
const	db 	= pgp(process.env.DATABASE_URL
						|| 'postgres://neuromancer@localhost:5432/reddit');

module.exports = db;

