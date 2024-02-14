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
        let purchase_date = form.get("purchase_date")!.toString()

        // IF the purchase date is a human string rather than a datestring
        if (!purchase_date.valueOf().match(/[0-9]/)) {
            if (purchase_date.valueOf() == "today") {
                purchase_date = new Date().toJSON().slice(0, 10)
            }
            if (purchase_date.valueOf() == "yesterday") {
                const date = new Date();
                date.setDate(date.getDate() - 1);
                purchase_date = date.toJSON().slice(0, 10);
            }
        }

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
                            What drink did you get? 
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
                            When did you get it? (today, yesterday, yyyy-mm-dd)
                        </label>
                        <input class="form-input" type="text" name="purchase_date" value="today" required />
                    </div>
                    <button class="add-drink" type="submit">Add Drink</button>
                </form>
            </div>
        </div>
    )
}