import { ComponentChildren } from "preact";
import { useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";
import { Boba } from "../models/boba.ts";

interface Props {
    children?: ComponentChildren | null;
    drinks: Boba[];
    sortFlag?: sortBy
}

enum SortByVals {
    pasc = "price-asc",
    pdesc = "price-desc",
    dasc = "date-asc",
    ddesc = "date-desc"
}

type sortBy = keyof typeof SortByVals

export default function PurchaseTable({ children, drinks }: Props) {
    const [sortByVal, setSortByVal] = useState<sortBy>("ddesc")

    const sortByEnum = (e: JSX.TargetedMouseEvent<HTMLTableCellElement>) => {
        const target = e.currentTarget.textContent
        if (target == "Date") {
            if (sortByVal == "ddesc") {
                setSortByVal("dasc")
            } else {
                setSortByVal("ddesc")
            }
        } else {
            if (sortByVal == "pdesc") {
                setSortByVal("pasc")   
            } else {
                setSortByVal("pdesc")
            }
        }
    }

    return (
        <div class="table-container">
            <table class="table">
                <thead>
                    <tr>
                        <th class="table-cell">Flavor</th>
                        <th class="table-cell">Vendor</th>
                        <th class="table-cell" onClick={(e) => sortByEnum(e)}>Price</th>
                        <th class="table-cell" onClick={(e) => sortByEnum(e)}>Date</th>
                    </tr>       
                </thead>
                <DrinksList drinks={drinks} sortFlag={sortByVal} />
            </table>
        </div>
    )
}

/**
 * This is a coarse attempt to run sorting on drinks that are loaded in-memory. Still trying to
 * figure out this part of Fresh, and without the testing flow working (async ops issue)
 * it's tricky to manage regression behavior in this area.
 * 
 * Flags are bad, but we're using them to manage the state and sorted behavior of purchases on
 * the page depending on the currently active sort flag in PurchaseTable. The below is my
 * lifting-of-state into a separate data component for rendering within PurchaseTable, since
 * the table needs to manage the click behavior and the list itself should manage the sorting
 * behavior and rendering of each row.
 * 
 * @param { drinks, sortFlag } are provided by the Props type above
 * @returns 
 */
function DrinksList({ drinks, sortFlag }: Props) {
    if (sortFlag == undefined) {
        console.error("Sort flag not set for some reason");
    }

    const sortDrinks = (drinks: Boba[], sortFlag: sortBy) => {
        switch(sortFlag) {
            case "pasc":
                return drinks.sort((a, b) => a.price - b.price);
            case "pdesc":
                return drinks.sort((a, b) => b.price - a.price);
            case "dasc":
                return drinks.sort((a, b) => new Date(a.purchase_date).getTime() - new Date(b.purchase_date).getTime());
            case "ddesc":
                return drinks.sort((a, b) => new Date(b.purchase_date).getTime() - new Date(a.purchase_date).getTime());
        }
    }

    const sortedDrinks = drinks ? sortDrinks(drinks, sortFlag!) : null
 
    return (
        <tbody style={"border: none"}>
            {sortedDrinks && sortedDrinks.map((drink: Boba, idx: number) => (
                <tr key={idx}>
                    <td class="table-cell">{drink.flavor}</td>
                    <td class="table-cell">{drink.vendor}</td>
                    <td class="table-cell">${drink.price.toFixed(2)}</td>
                    <td class="table-cell">{drink.purchase_date}</td>
                </tr>
            ))}
        </tbody>
    )
}