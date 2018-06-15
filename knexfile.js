// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postsql://localhost/knex-1'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }
}
