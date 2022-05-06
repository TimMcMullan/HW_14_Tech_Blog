const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/config");

class User extends Model {
    // set up a method to run on instance data (per user) to check passwords
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
};

User.init(
    { 
        // Finish the user model
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataType.STRING,
            allowNull: false
        },
        password: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                len: [6]
            }
        },
    },
    {
    hooks: {
        // set up beforeCreate lifecycle "hook"
        // beforeCreate: async () => {},
        // beforeUpdate: async () => {}
            beforeCreate: async (newUserData) => {
              newUserData.password = await bcrypt.hash(newUserData.password, 10);
              return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
              updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
              return updatedUserData;
            },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscore: true,
    modelName: "User"
    }
);

module.exports = User;