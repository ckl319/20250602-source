async function processPayment(totalAmount) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const formattedAmount = totalAmount.toFixed(2);
            resolve(`Payment of $${formattedAmount} processed successfully.`);
        }, 1000);
    });
}

// Example usage (Method 1)
async function main() {
    const message = await processPayment(150.75);
    console.log(message);
}
main();


// Using IIFE (Immediately Invoked Function Expression) to call the async function directly
// IIFE Syntax: (function)();

 (async function() {
     const message = await processPayment(150.75);
     console.log(message);
 })();


// // Example usage (Method 2) - IIFE
 (async () => {
     const message = await processPayment(150.75);
     console.log(message);
 })();


