import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

interface Data {
    foo: number;
}

function loadFooValue(): number {
    return 3;
}

export const handler: Handlers<Data> = {
    async GET(req: Request, ctx: FreshContext) {
        const value = await loadFooValue();
        return ctx.render({ foo: value });
    },
};

export default function MyPage(props: PageProps<Data>) {
    return <p>foo is: {props.data.foo}</p>;
}