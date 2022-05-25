import { Sequelize } from "sequelize";
 
const db = new Sequelize('epiz_31807406_adupi', 'epiz_31807406', 'N21tgl1310**', {
    host: "sql309.epizy.com",
    dialect: "mysql"
});
 
export default db;
