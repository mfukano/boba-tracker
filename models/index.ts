import { load } from "$std/dotenv/mod.ts";
import postgres from "https://deno.land/x/postgresjs@v3.4.3/mod.js";

const isDev = Deno.env.get("ENVIRONMENT") || null;
let url = Deno.env.get("POSTGRES_URL") || null;
let env = null;

/** 
    I'm trying to be tricky here and set environment flags to bifurcate
    data sources between `dev` and `prod` but this isn't working so I'll
    do something bad and operate off of production data for now.

if (isDev) {
    console.log(Deno.env.toObject());
    env = await load({ envPath: "./.env.local" });
    url = env["POSTGRES_URL"]; 
}
 */

console.log(`sql url: ${url}`)
console.log(`env: ${JSON.stringify(env)}`)

const sql = postgres(url, {
    connect_timeout: 10,
});

export default sql; 