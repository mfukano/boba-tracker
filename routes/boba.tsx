import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { getAllDrinks, getAverageCost } from "../api/boba.ts";
import { Boba } from "../models/boba.ts";

export const handler: Handlers<Boba> = {
    async GET(req: Request, ctx: FreshContext) {

        // -- DEBUG -- 
        // console.log(`ctx: `);
        // console.log(ctx);

        // console.log(`req: `);
        // console.log(req);
        // -- END DEBUG
        
        const drinks = await getAllDrinks();
        const avgPrice = await getAverageCost();
        return ctx.render({ drinks, avgPrice });
    }
}

export default function Page(props: PageProps) {
    const { drinks, avgPrice } = props.data;
    return (
        <div className="wrapper">
            <div class="table-container">
                <table class="table">
                    <thead>
                        <tr>
                            <th class="table-cell">Flavor</th>
                            <th class="table-cell">Vendor</th>
                            <th class="table-cell">Price</th>
                            <th class="table-cell">Date</th>
                        </tr>       
                    </thead>
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
                </table>
            </div>
            <div className="container col-span-full w-3/4 m-auto p-4 text-center"  >
                <p class="rounded-lg rounded-b-none border-slate-950 bg-green-300 font-medium border-2 ml-3 p-1">Average price: </p>
                <p class="text-lg font-medium rounded-t-none rounded-md border-slate-950 border-r-2 border-l-2 border-b-2 border-t-0 ml-3 p-1">
                    ${avgPrice}
                </p>
            </div>
        </div>
    );
}