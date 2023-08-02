import dotenv from "dotenv"

dotenv.config({ path: '.env' })

const dev = {
    app: {
        port: process.env.SERVER_PORT
    },
    db: {
        url: process.env.MONGODB_URI
    }
}

export default dev