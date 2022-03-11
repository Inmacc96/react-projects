module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        host: env("DATABASE_HOST", "cluster0.s1sf4.mongodb.net"),
        srv: env.bool("DATABASE_SRV", true),
        port: env.int("DATABASE_PORT"),
        database: env("DATABASE_NAME", "guitarLA_strapi"),
        username: env("DATABASE_USERNAME", "root"),
        password: env("DATABASE_PASSWORD", "jY3L8H3OuIgmXm7j"),
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", "admin"),
        ssl: env.bool("DATABASE_SSL", true),
      },
    },
  },
});
