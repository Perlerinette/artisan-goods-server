module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('product', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        availability: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        photoURL: {
            type: DataTypes.STRING,
            allowNull: false
        },
        adminDisplay: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    })
    return Product;
}