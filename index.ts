const numberOne: number = 1; // number type variable
const isActive: boolean = true; // boolean type variable
const name: string = "Reian Berina"; // string type variable
const numbers: number[] = [1, 2, 3, 4, 5]; // array of numbers

function greet(person: string): string {
    return `Hello, ${person}`;
}

// Conditional types below
type IsString<T> = T extends string ? "Yes" : "No";

type Test1 = IsString<string>; // "Yes"
type Test2 = IsString<number>; // "No"

console.log(numberOne);
console.log(isActive);
console.log(name);
console.log(numbers);

console.log(greet(name)); // greet function 
// ================================================================
// ACTIVITY 2: TYPESCRIPT BASICS
// ================================================================


// ================================================================
// Part 1: Variables and Types
// ================================================================

// 1. Declare itemName (string), price and quantity (numbers).
const itemName: string = "Burger";
const price: number = 150;
const quantity: number = 2;

console.log("Item:", itemName);
console.log("Price: ₱" + price);
console.log("Quantity:", quantity);


// 2. Compute total and print it: Total: ₱${total}.
const total: number = price * quantity;

console.log(`Total: ₱${total}`);


// 3. Try quantity = "two". Why does TypeScript reject it?

// Uncomment the line below to see the TypeScript error:
// quantity = "two";

// TypeScript rejects it because quantity was declared as a number.
// A string such as "two" cannot be assigned to a variable
// that is supposed to contain a number.


// 4. Declare a string[] menu and a typed object { name: string; price: number }.

const menu: string[] = [
    "Burger",
    "Adobo",
    "Fried Chicken",
    "Juice"
];

const menuItem: { name: string; price: number } = {
    name: "Burger",
    price: 150
};

console.log("Menu:", menu);
console.log("Menu Item:", menuItem);


// 5. Add let discount: number | null = null.

let discount: number | null = null;

console.log("Discount:", discount);


// ================================================================
// Part 2: Conditionals
// ================================================================

const isStudent: boolean = true;


// 1. If isStudent is true, apply a 10% discount.

let discountedTotal: number = total;

if (isStudent) {
    discountedTotal = total * 0.90;
}

console.log(`Student Total: ₱${discountedTotal}`);


// 2. Print "Small order" (under ₱100),
//    "Regular order" (₱100-₱299),
//    or "Big order" (₱300+).

if (total < 100) {
    console.log("Small order");
} else if (total >= 100 && total <= 299) {
    console.log("Regular order");
} else {
    console.log("Big order");
}


// 3. Rewrite the discount using a ternary ? :.

const ternaryDiscountedTotal: number =
    isStudent ? total * 0.90 : total;

console.log(`Ternary Discounted Total: ₱${ternaryDiscountedTotal}`);


// ================================================================
// Part 3: Loops
// ================================================================

const cart = [
    { name: "Adobo", price: 60, qty: 2 },
    { name: "Juice", price: 25, qty: 1 },
];


// 1. Use for...of to print each item as "Adobo - ₱60".

console.log("\nCart Items:");

for (const item of cart) {
    console.log(`${item.name} - ₱${item.price}`);
}


// 2. Compute the cart subtotal with a loop.

let cartSubtotal: number = 0;

for (const item of cart) {
    cartSubtotal += item.price * item.qty;
}

console.log(`Cart Subtotal: ₱${cartSubtotal}`);


// 3. Use a while loop to count down from 5 to 1.

console.log("\nCountdown:");

let count: number = 5;

while (count >= 1) {
    console.log(count);
    count--;
}


// ================================================================
// Part 4: Functions
// ================================================================


// 1. getLineTotal(price: number, qty: number): number

function getLineTotal(price: number, qty: number): number {
    return price * qty;
}


// 2. applyDiscount(total: number, isStudent: boolean): number

function applyDiscount(total: number, isStudent: boolean): number {
    if (isStudent) {
        return total * 0.90;
    }

    return total;
}


// 3. getCartTotal(cart) using getLineTotal

function getCartTotal(
    cart: { name: string; price: number; qty: number }[]
): number {

    let total: number = 0;

    for (const item of cart) {
        total += getLineTotal(item.price, item.qty);
    }

    return total;
}


// 4. printReceipt(customer, cart, isStudent): void
//    showing each line, discount, and final total.

function printReceipt(
    customer: string,
    cart: { name: string; price: number; qty: number }[],
    isStudent: boolean
): void {

    console.log("\n==============================");
    console.log("          RECEIPT");
    console.log("==============================");

    console.log(`Customer: ${customer}`);
    console.log("------------------------------");

    for (const item of cart) {
        const lineTotal: number = getLineTotal(item.price, item.qty);

        console.log(
            `${item.name} x${item.qty} - ₱${lineTotal}`
        );
    }

    console.log("------------------------------");

    const subtotal: number = getCartTotal(cart);
    const finalTotal: number = applyDiscount(subtotal, isStudent);

    const discountAmount: number =
        isStudent ? subtotal * 0.10 : 0;

    console.log(`Subtotal: ₱${subtotal}`);
    console.log(`Discount: ₱${discountAmount}`);
    console.log(`Final Total: ₱${finalTotal}`);

    console.log("==============================");
}


// Test the functions

console.log("\nFunction Tests:");

console.log(
    "Line Total:",
    getLineTotal(60, 2)
);

console.log(
    "Discounted Total:",
    applyDiscount(145, true)
);

console.log(
    "Cart Total:",
    getCartTotal(cart)
);


// Print the complete receipt

printReceipt("Reian", cart, true);