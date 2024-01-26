const MONTHS: Record<string, number> = { 
    "january": 0,
    "february": 1,
    "march": 2,
    "april": 3,
    "may": 4,
    "june": 5,
    "july": 6,
    "august": 7,
    "september": 8,
    "october": 9,
    "november": 10,
    "december": 11,
}

export function monthToDateString(month: keyof typeof MONTHS) {
    let selectedMonth = MONTHS[month.toLowerCase()]; 
    let dateString = new Date(2024, selectedMonth, 1);

    console.log(`current month: ${dateString}`);
}

export function dateStringToMonth(date: Date) {
    let input = date.getUTCMonth();
    console.log(`input: ${input}`)
    let returnedMonth = Object.entries(MONTHS).filter(month => {
        console.log(`month: ${JSON.stringify(month)}`)
        return month[1] == input
    }).flat().shift()?.toString();

    /**
        Object.entries() returns a 2D array of objects that it matches,
        so we need to flatten it since we always expect only one item.
    */ 
    
    return returnedMonth;
}