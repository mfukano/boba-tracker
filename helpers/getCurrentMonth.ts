export default function getCurrentMonth() {
    let now = new Date();
    console.log(`now: ${now}`)
    const year = now.getFullYear();
    const month = now.getMonth() < 10 ? `0${now.getMonth()+1}` : now.getMonth() + 1;
    console.log(`now formatted: ${year}-${month}-02`)
    const thisMonthDateString = new Date(`${year}-${month}-02`);    
    console.log(`now: ${thisMonthDateString}`) 
    return thisMonthDateString; 
}