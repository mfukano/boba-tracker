import postgres from "postgres";
import { load } from "https://deno.land/std@0.211.0/dotenv/mod.ts";

const env = await load();

const host = env["POSTGRES_HOST"];  
const database = env["POSTGRES_DB"];
const user = env["POSTGRES_USER"];
const password = env["POSTGRES_PWD"];
const port = env["POSTGRES_PORT"];

const url = `postgres://${user}:${password}@${host}:${port}/${database}`

console.log(`SQL URL TEST: ${url}`)

// const sql = postgres({
    // host: host,
    // port: port, 
    // database: database,
    // password: password,
    // user: user,
// });

const sql = postgres(url);

export default sql; 