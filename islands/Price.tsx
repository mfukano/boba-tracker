import { useState, useEffect } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";

function Price() {
    const [price, setPrice] = useState("");
    const [error, setError] = useState(false);

    /**
     * Implementation lifted from here: https://github.com/preactjs/preact/issues/2301#issuecomment-581947595
     * Something about Preact or TypeScript is preventing me from handling state updates using setPrice 
     * and using effects to update the format of the value (probably not super necessary but nice).
     * 
     * @param param0 
     */
    const handleChange = ({currentTarget}: JSX.TargetedEvent<HTMLInputElement, Event>) => {
        formatPrice(currentTarget.value)
    }

    const formatPrice = (price: string) => {
        const regex = /[A-Za-z]/g;
        const found = price.match(regex);
        price = price.replaceAll(".", "");

        if (found) {
            setError(true);
            return;
        }

        setError(false);
        let priceString = "";
        if (price.length == 1) {
            priceString = `${price}.00`;
        } else if (price.length < 4) {
            const dollar = price.split("").shift();
            priceString = `${dollar}.${price.length < 3 ? price.slice(1) + "0" : price.slice(1)}`;
        } else if (price.length >= 4) {
            const cents = price.slice(-2)
            priceString = `${price.slice(0, price.length-2)}.${cents}`
        } else {
            priceString = ""
        }

        setPrice(priceString);
    }

    return (
        <>
            <input class="bg-slate-200 rounded-sm" type="text" name="price" value={price} onChange={handleChange} required />
            {error && 
                <div class="bg-red-400 text-center p-2 font-medium rounded-sm">
                    No letters, dummy!
                </div>
            }
        </>
    )
}

export default Price;
