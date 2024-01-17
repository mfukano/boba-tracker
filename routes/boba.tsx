import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { getAllDrinks, getAverageCost } from "./api/boba.ts";
import { Boba } from "../models/boba.ts";

export const handler: Handlers<Boba> = {
    async GET(req: Request, ctx: FreshContext) {

        // -- DEBUG -- 
        console.log(`ctx: `);
        console.log(ctx);

        console.log(`req: `);
        console.log(req);

        // -- END DEBUG
        
        const drinks = await getAllDrinks();
        const avgPrice = await getAverageCost();
        return ctx.render({ drinks, avgPrice });
    }
}

export default function Page(props: PageProps) {
    const { drinks, avgPrice } = props.data;
    return (
        <div class="grid grid-cols-6 gap-4">
            <table class="border-collapse table-auto w-full text-sm col-start-2 col-span-4">
                <thead>
                    <tr>
                        <th class="border border-slate-600 p-4">Flavor</th>
                        <th class="border border-slate-600 p-4">Vendor</th>
                        <th class="border border-slate-600 p-4">Price</th>
                    </tr>       
                </thead>
                <tbody>
                    {drinks.map((drink: Boba, idx: number) => (
                        <tr key={idx}>
                            <td class="border border-slate-600 p-4">{drink.flavor}</td>
                            <td class="border border-slate-600 p-4">{drink.vendor}</td>
                            <td class="border border-slate-600 p-4">${drink.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="container col-span-1 col-start-5 p-4 text-center"  >
                <p class="rounded-lg rounded-b-none border-slate-950 bg-green-300 font-medium border-2 ml-3 p-1">Average price: </p>
                <p class="text-lg font-medium rounded-t-none rounded-md border-slate-950 border-r-2 border-l-2 border-b-2 border-t-0 ml-3 p-1">
                    ${avgPrice}
                </p>
            </div>
        </div>
    );
}