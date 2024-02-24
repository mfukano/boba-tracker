import { ComponentChildren } from "preact";

interface Props {
    children: ComponentChildren;
}

export default function PurchaseTable({ children }: Props) {
    return (
        <div class="table-container">
            <table class="table">
                <thead>
                    <tr>
                        <th class="table-cell">Flavor</th>
                        <th class="table-cell">Vendor</th>
                        <th class="table-cell">Price</th>
                        <th class="table-cell" >Date</th>
                    </tr>       
                </thead>

                {children}    
            </table>
        </div>
    )
}