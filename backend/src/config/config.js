import dotenv from 'dotenv'
dotenv.config()

const config = {
    port: process.env.PORT,
    mongodbUri: process.env.MONGODB_URI,
    cross_origin:process.env.CROSS_ORIGIN
}
export default config;