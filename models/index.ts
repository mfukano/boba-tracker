import postgres from "https://deno.land/x/postgresjs@v3.4.3/mod.js";

const url = await Deno.env.get("POSTGRES_URL")!;

console.log(`check PG_URL: ${url}`)

const sql = postgres(url, {
    connect_timeout: 10,
});

export default sql; 