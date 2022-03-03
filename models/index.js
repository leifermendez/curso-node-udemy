const engine = process.env.DB_ENGINE || null;

const pathModel = engine === "mysql" ? "./sql" : "./nosql"

const models = {
  userModel: require(`${pathModel}/users`),
  storageModel: require(`${pathModel}/storage`),
  tracksModel: require(`${pathModel}/tracks`),
};


module.exports = models;
