import getCurrentMonth from "../helpers/getCurrentMonth.ts";
import { dateStringToMonth, monthToDateString } from "../helpers/monthToDateString.ts";


export default function Month() {
    const month = getCurrentMonth();
    let monthString = dateStringToMonth(month);

    if (monthString) {
        monthString = monthString.slice(0, 1).toUpperCase() + monthString.slice(1)
        const ds = monthToDateString(monthString);
    }


    return (
        <div>
            <h1>{monthString}</h1>
        </div>
    )

}