import postgres from "https://deno.land/x/postgresjs@v3.4.3/mod.js";

const url = Deno.env.get("POSTGRES_URL");

const sql = postgres(url, {
    connect_timeout: 10,
});

export default sql; 