import sql from "../models/index.ts";
import { Boba } from "../models/boba.ts";

export async function getAllDrinks() {
    const drinks = await sql`
        select
            flavor,
            vendor,
            price,
            purchase_date
        from purchases 
        order by purchase_date desc;
    `

    const bobaItemDrinks: Boba[] = drinks.map((drink) => {
        const src = {...drink as Boba};
        const dateString = drink
            .purchase_date
            .toString()
            .split(" ")
            .slice(0, 4)
            .join(" ");
        src.purchase_date = dateString;
        src.price = parseFloat(drink.price.toFixed(2));
        return src; 
    })

    return bobaItemDrinks;
}

export async function insertDrink(drink: Boba) {
    const inserted = await sql`
        insert into purchases(flavor, price, vendor, purchase_date)
        values (${drink.flavor}, ${drink.price}, ${drink.vendor}, ${drink.purchase_date})
        returning *
    `

    return inserted;
}

function getAverageCost(drinks: Boba[]) {
    const total = drinks.reduce((acc: number, drink: Boba) => {
       return acc + drink.price
    }, 0);
    const avg = (total / drinks.length).toFixed(2)

    return avg;
}

export async function getBobaPageProps() {
    const drinks: Boba[] = await getAllDrinks();
    const avgCost = getAverageCost(drinks);

    return { drinks, avgCost };
}
/* 
 TODO: add missing handler functions 
 This is missing handler functions and is being badly imported by the test 
 manifest as a result. An example can be found here, where they utilize generic
 handler functions for each example (PUT for all GQL queries, GET for product inquiries)
 https://github.com/denoland/merch/tree/main/routes/products

*/