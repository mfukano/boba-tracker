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
    `

    const bobaItemDrinks = drinks.map((drink: Boba) => {
        const src = {...drink};
        const dateString = drink
            .purchase_date
            .toString()
            .split(" ")
            .slice(0, 4)
            .join(" ");
        src.purchase_date = dateString;
        src.price = parseFloat(drink.price).toFixed(2);
        return src; 
    })

    return bobaItemDrinks;
}

export async function getAllDrinksFromMonth(month: string) {

}

export async function insertDrink(drink: Boba) {
    const inserted = await sql`
        insert into purchases(flavor, price, vendor, purchase_date)
        values (${drink.flavor}, ${parseFloat(drink.price)}, ${drink.vendor}, ${drink.purchase_date})
        returning *
    `
    return inserted;
}

export async function getAverageCost() {
    const drinks = await sql`
        select price from purchases
    `;

    const total = drinks.reduce((acc: number, drink: Boba) => {
        return acc + +drink.price
    }, 0);
    const avg = (total / drinks.length).toFixed(2)

    return avg;
}