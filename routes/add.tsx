import { Handlers } from "$fresh/server.ts";
import Price from "../islands/Price.tsx";
import { Boba } from "../models/boba.ts";
import { insertDrink } from "./api/boba.ts";

export const handler: Handlers = {
    async GET(req, ctx) {
        return await ctx.render();
    },
    async POST(req, ctx) {
        const form = await req.formData();
        const flavor = form.get("flavor")!.toString()
        const vendor = form.get("vendor")!.toString()
        const price = parseFloat(form.get("price")!.toString())

        const boba: Boba = {
            flavor: flavor,
            vendor: vendor,
            price: price,
        }

        console.log(`submitted form: ${JSON.stringify(form)}`)

        const result = await insertDrink(boba);
 
        /**
         * Is there a way to render a popup from the handler?
         * I want to add an "Added your drink successfully!" pop-up
         */

        const headers = new Headers();
        headers.set("location", "/boba");
        return new Response(JSON.stringify(result), {
            status: 303,
            headers,
        });
    },
};

export default function Add() {
    return(
        <div>
            <div className="form-container">
                <form method="post" className="boba-form">
                    <div className="form-item">
                        <label htmlFor="flavor">
                            Flavor
                        </label>
                        <input class="bg-slate-200 rounded-sm" type="text" name="flavor" value="" required />
                    </div>
                    <div className="form-item">
                        <label htmlFor="vendor">
                            Vendor
                        </label>
                        <input class="bg-slate-200 rounded-sm" type="text" name="vendor" value="" required />
                    </div>
                    <div className="form-item">
                        <label htmlFor="Price">
                            Price
                        </label>
                        <Price />
                    </div>
                    <button class="bg-teal-700 text-slate-50 p-6 text-xl rounded-md" type="submit">Add Drink</button>
                </form>
            </div>
        </div>
    )
}