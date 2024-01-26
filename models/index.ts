import postgres from "https://deno.land/x/postgresjs@v3.4.3/mod.js";
import { load } from "https://deno.land/std@0.211.0/dotenv/mod.ts";

const env = await load({ envPath: "./.env.production.local" });

const host = env["POSTGRES_HOST"]
const database = env["POSTGRES_DATABASE"]
const password = env["POSTGRES_PASSWORD"]
const user = env["POSTGRES_USER"]
const url = env["POSTGRES_URL"]

console.log(`SQL URL TEST: ${url}`)

const sql = postgres(url, {
    connect_timeout: 10,
});

export default sql; 