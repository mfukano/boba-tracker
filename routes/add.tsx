import { Handlers } from "$fresh/server.ts";
import Price from "../islands/Price.tsx";
import { Boba } from "../models/boba.ts";
import { insertDrink } from "../api/boba.ts";

export const handler: Handlers = {
    async GET(_req, ctx) {
        return await ctx.render();
    },
    async POST(req, _ctx) {
        const form = await req.formData();
        const flavor = form.get("flavor")!.toString()
        const vendor = form.get("vendor")!.toString()
        const price = parseFloat(form.get("price")!.toString())
        const purchase_date = form.get("purchase_date")!.toString()

        const boba: Boba = {
            flavor: flavor,
            vendor: vendor,
            price: price.toString(),
            purchase_date: purchase_date
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
                            What flavor did you get? 
                        </label>
                        <input class="form-input" type="text" name="flavor" value="" required />
                    </div>
                    <div className="form-item">
                        <label htmlFor="vendor">
                            Where'd you get it? 
                        </label>
                        <input class="form-input" type="text" name="vendor" value="" required />
                    </div>
                    <div className="form-item">
                        <label htmlFor="Price">
                            What was the price?
                        </label>
                        <Price />
                    </div>
                    <div className="form-item">
                        <label htmlFor="Date">
                            When did you get it?
                        </label>
                        <input class="form-input" type="text" name="purchase_date" value="today" required />
                    </div>
                    <button class="add-drink" type="submit">Add Drink</button>
                </form>
            </div>
        </div>
    )
}