import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { getBobaPageProps } from "../api/boba.ts";
import PurchaseTable from "../islands/PurchaseTable.tsx";
import { Boba } from "../models/boba.ts";

export const handler: Handlers<Boba> = {
    async GET(req: Request, ctx: FreshContext) {

        // -- DEBUG -- 
        // console.log(`ctx: `);
        // console.log(ctx);

        // console.log(`req: `);
        // console.log(req);
        // -- END DEBUG
        
        const { drinks, avgCost } = await getBobaPageProps();
        return ctx.render({ drinks, avgCost });
    }
}

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
export default function Page(props: PageProps) {
    const { drinks, avgCost } = props.data;
    return (
        <div className="wrapper">
            <PurchaseTable>
                <tbody style={"border: none"}>
                    {drinks.map((drink: Boba, idx: number) => (
                        <tr key={idx}>
                            <td class="table-cell">{drink.flavor}</td>
                            <td class="table-cell">{drink.vendor}</td>
                            <td class="table-cell">${drink.price.toFixed(2)}</td>
                            <td class="table-cell">{drink.purchase_date}</td>
                        </tr>
                    ))}
                </tbody>

            </PurchaseTable>
            <div className="container col-span-full w-3/4 m-auto p-4 text-center"  >
                <p class="rounded-lg rounded-b-none border-slate-950 bg-green-300 font-medium border-2 ml-3 p-1">Average cost: </p>
                <p class="text-lg font-medium rounded-t-none rounded-md border-slate-950 border-r-2 border-l-2 border-b-2 border-t-0 ml-3 p-1">
                    ${avgCost}
                </p>
            </div>
        </div>
    );
}