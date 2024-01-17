import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
    async GET(_req: Request, ctx: FreshContext) {
        const resp = await ctx.render(); 
        resp.headers.set("X-Custom-Header", `${Date.now()}`);
        return resp;
    }
}

export default function Page(props: PageProps) {
    return (
        <div>
            <p>
                You are on the page '{props.url.href}'.
            </p>
        </div>);
}