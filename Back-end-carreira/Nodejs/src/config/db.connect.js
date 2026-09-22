import "dotenv/config"
import mongoose, {mongo} from "mongoose"

async function connect(){
    mongoose.connect(process.env.DB_CONECTION)

console.log(process.env.DB_CONECTION)

    return mongoose.connection;
}

export default connect;