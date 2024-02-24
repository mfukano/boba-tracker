import { createHandler, ServeHandlerInfo } from "$fresh/server.ts";
import manifest from "../fresh.gen.ts";
import config from "../fresh.config.ts";
import { assertEquals } from "$std/assert/assert_equals.ts";

const CONN_INFO: ServeHandlerInfo = {
    remoteAddr: { hostname: "127.0.0.1", port: 53496, transport: "tcp" }
};

Deno.test("HTTP assert test.", async (t) => {
    const handler = await createHandler(manifest, config);

    /**!SECTION 
        TODO! This test currently fails because of an issue with leaky async ops
        There might be a test framework we can slot in here instead (Jest, Puppeteer, Cypress) 
        to complete behavior and unit testing but the default from the example doesn't work
        https://fresh.deno.dev/docs/examples/writing-tests
    */ 
    await t.step("#1 GET /", async () => {
        const resp = await handler(new Request("http://127.0.0.1/"), CONN_INFO);
        assertEquals(resp.status, 200);
    });
});
