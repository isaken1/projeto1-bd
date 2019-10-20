import pg from "pg";

const client = new pg.Client();

var connection = {
  host: "localhost",
  port: 5432,
  user: "postgres",
  database: "empresa",
  password: ""
};

export default {
  query: (text, params, callback) => {
    return client.query(text, params, callback);
  },
  close: () => {
    client.close();
  },
  open: () => {
    client.connect(connection);
  }
};
