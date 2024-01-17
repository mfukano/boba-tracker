import sql from "../../models/index.ts";
import { Boba } from "../../models/boba.ts";

export async function getAllDrinks() {
    const drinks = await sql`
        select
            flavor,
            vendor,
            price
        from purchases 
    `

    return drinks
}

export async function insertDrink(drink: Boba) {
    const inserted = await sql`
        insert into purchases(flavor, price, vendor)
        values (${drink.flavor}, ${drink.price}, ${drink.vendor})
        returning *
    `

    return inserted;
}

export async function getAverageCost() {
    const drinks = await sql`
        select price from purchases
    `;

    const total = drinks.reduce((acc, drink) => {
       return acc + parseFloat(drink.price)
    }, 0);
    const avg = (total / drinks.length).toFixed(2)

    return avg;
}
/* 
 TODO: add missing handler functions 
 This is missing handler functions and is being badly imported by the test 
 manifest as a result. An example can be found here, where they utilize generic
 handler functions for each example (PUT for all GQL queries, GET for product inquiries)
 https://github.com/denoland/merch/tree/main/routes/products

*/