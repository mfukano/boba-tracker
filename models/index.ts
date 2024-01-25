import postgres from "postgres";
import { load } from "https://deno.land/std@0.211.0/dotenv/mod.ts";

const env = await load({ envPath: "./.env.production.local" });

const host = env["POSTGRES_HOST"]
const database = env["POSTGRES_DATABASE"]
const password = env["POSTGRES_PASSWORD"]
const user = env["POSTGRES_USER"]
const url = env["POSTGRES_URL"]

console.log(`SQL URL TEST: ${url}`)

const sql = postgres(url, {
    user,
    password,
    host,
    database,
    connect_timeout: 10,
});

export default sql; 