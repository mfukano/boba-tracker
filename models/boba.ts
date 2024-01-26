/** 
    For handling numbers as it pertains to money within the browser, it's
    far easier and more predictable to use strings than it is to parse floats
    to given decimal points for some reason. Thus, we'll create float strings
    to represent the price for each drink.
 */
export interface Boba {
    flavor: string;
    price: string;
    vendor: string;
    purchase_date: string; 
}