const dbUser = process.env.DB_USER;
const dbPassWord = process.env.DB_PASS;

export default{
    port: 3000,
    dbUri: `mongodb+srv://${dbUser}:${dbPassWord}@cluster0.mmujfxq.mongodb.net/?retryWrites=true&w=majority`,
    env: "development",
}