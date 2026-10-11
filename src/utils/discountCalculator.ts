let taxRate = 4.75;

function calculateDiscount(price: number, discountPercentage: number) : string {
    return "$" + ((discountPercentage / 100) * price);
};

function calculateTax (price: number, category: string) : string {
    if (category === "groceries") {
        taxRate = 3;
    }
    return "$" + ((taxRate / 100) * price);
};