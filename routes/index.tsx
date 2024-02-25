import { FreshContext } from "$fresh/server.ts";
import { getBobaPageProps } from "../api/boba.ts";
import PurchaseTable from "../islands/PurchaseTable.tsx";

/**
 * This page renders components related to purchased line items and a simple aggregate display.
 * Fresh uses mixed static (server) and dynamic (client) content to add interactivity to 
 * specific elements, but I don't know that there's a particular style guide for component
 * markup templating.
 * 
 * 
 * @param props 
 * - props destructures into 
 * @param props.drinks      see models/boba.ts for model shape
 * @param props.avgCost    calculated in api/boba.ts
 * @returns 
 */
// export default async function Page(props: PageProps) {
export default async function Page(_req: Request, _ctx: FreshContext) {
    const { drinks, avgCost } = await getBobaPageProps()
    return (
        <div className="wrapper">
            {drinks && <PurchaseTable drinks={drinks!} />}
            <div className="container col-span-full w-3/4 m-auto p-4 text-center"  >
                <p class="rounded-lg rounded-b-none border-slate-950 bg-green-300 font-medium border-2 ml-3 p-1">Average cost: </p>
                <p class="text-lg font-medium rounded-t-none rounded-md border-slate-950 border-r-2 border-l-2 border-b-2 border-t-0 ml-3 p-1">
                    ${avgCost}
                </p>
            </div>
        </div>
    );
}