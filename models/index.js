const engine = process.env.DB_ENGINE || null;
const modelsNotSql = {
  tracksModel: require("./nosql/tracks"),
  storageModel: require("./nosql/storage"),
  userModel: require("./nosql/user"),
};

module.exports = engine === "mysql" ? modelsNotSql : modelsNotSql;
