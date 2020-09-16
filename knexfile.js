module.exports = {
development: {
    client: 'sqlite3',
    connection: {
      filename: './database/auth2.db3'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: {
      directory: "./database/migrations",
    }
  }
};
