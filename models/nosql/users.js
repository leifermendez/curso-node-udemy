const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const mongoosePaginateAggregate = require("mongoose-aggregate-paginate-v2");
const mongoseDelete = require("mongoose-delete");

const UserScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    role: {
      type: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
UserScheme.index({ email: 1 });
UserScheme.plugin(mongoosePaginate);
UserScheme.plugin(mongoosePaginateAggregate);
UserScheme.plugin(mongoseDelete, { overrideMethods: true, deletedAt: true });
module.exports = mongoose.model("users", UserScheme);
