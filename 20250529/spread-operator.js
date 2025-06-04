// Fake data representing an online marketplace
const marketplace = {
  items: [
    { id: "i1", name: "Headphones", price: 50 },
    { id: "i2", name: "Mouse", price: 20 }
  ],
  sellers: {
    s1: { name: "TechTrend", rating: 4.5 },
    s2: { name: "GadgetHub", rating: 4.0 }
  },
  tags: ["electronics", "accessories"]
};

// 1. Copying an array
console.log();
console.log("1. Copying an array");
const itemsCopy = [...marketplace.items];

// Logging results
console.log(`itemsCopy`, itemsCopy); // Output: "[{\"id\":\"i1\",\"name\":\"Headphones\",\"price\":50},{\"id\":\"i2\",\"name\":\"Mouse\",\"price\":20}]"

// 2. Merging arrays
console.log();
console.log("2. Merging arrays");
const newItems = [{ id: "i3", name: "Keyboard", price: 30 }];
const allItems = [...marketplace.items, ...newItems];

// Logging results
console.log(`allItems`, allItems); // Output: "[{\"id\":\"i1\",\"name\":\"Headphones\",\"price\":50},{\"id\":\"i2\",\"name\":\"Mouse\",\"price\":20},{\"id\":\"i3\",\"name\":\"Keyboard\",\"price\":30}]"

// 3. Copying an object
console.log();
console.log("3. Copying an object");
const sellerCopy = { ...marketplace.sellers.s1 };

// Logging results
console.log(`sellerCopy`, sellerCopy); // Output: "{\"name\":\"TechTrend\",\"rating\":4.5}"

// 4. Merging objects
console.log();
console.log("4. Merging objects");
const extraInfo = { location: "USA" };
const mergedSeller = { ...marketplace.sellers.s1, ...extraInfo, rating: 4.7 };

// Logging results
console.log(`mergedSeller`, mergedSeller); // Output: "{\"name\":\"TechTrend\",\"rating\":4.7,\"location\":\"USA\"}"

// 5. Spreading elements as function arguments
console.log();
console.log("5. Spreading elements as function arguments");
function calculateTotal(price1, price2, price3) {
  return price1 + price2 + price3;
}
const prices = [50, 20, 30];
const totalPrice = calculateTotal(...prices);

// Logging results
console.log(`totalPrice`, totalPrice); // Output: "100"

// 6. Using spread with rest parameters in functions
console.log();
console.log("6. Using spread with rest parameters in functions");
function listItems(first, ...rest) {
  return `First: ${first.name}, Rest: ${JSON.stringify(rest)}`;
}
const itemList = listItems(...marketplace.items);

// Logging results
console.log(`itemList`, itemList); // Output: "First: Headphones, Rest: [{\"id\":\"i2\",\"name\":\"Mouse\",\"price\":20}]"

// 7. Spreading a string into characters
console.log();
console.log("7. Spreading a string into characters");
const tagString = "tech";
const tagChars = [...tagString];

// Logging results
console.log(`tagChars`, tagChars); // Output: "[\"t\",\"e\",\"c\",\"h\"]"

// 8. Spreading in array destructuring
console.log();
console.log("8. Spreading in array destructuring");
const [firstTag, ...otherTags] = marketplace.tags;

// Logging results
console.log(`firstTag`, firstTag);     // Output: "electronics"
console.log(`otherTags`, otherTags);   // Output: "[\"accessories\"]"

// 9. Handling sparse arrays with spread
console.log();
console.log("9. Handling sparse arrays with spread");
const sparseArray = ["a", , "c"];
const sparseCopy = [...sparseArray];

// Logging results
console.log(`sparseCopy`, sparseCopy); // Output: "[\"a\",null,\"c\"]"

// 10. Spreading nested arrays
console.log();
console.log("10. Spreading nested arrays");
const nestedTags = [["tech", "audio"], ["input", "device"]];
const flatTags = [...nestedTags[0], ...nestedTags[1]];

// Logging results
console.log(`flatTags`, flatTags); // Output: "[\"tech\",\"audio\",\"input\",\"device\"]"

// 11. Spreading in object destructuring
console.log();
console.log("11. Spreading in object destructuring");
const { s1, ...otherSellers } = marketplace.sellers;

// Logging results
console.log(`s1`, s1);               // Output: "{\"name\":\"TechTrend\",\"rating\":4.5}"
console.log(`otherSellers`, otherSellers); // Output: "{\"s2\":{\"name\":\"GadgetHub\",\"rating\":4.0}}"

// 12. Combining spread with array methods
console.log();
console.log("12. Combining spread with array methods");
const uniqueTags = [...new Set([...marketplace.tags, "electronics", "portable"])];

// Logging results
console.log(`marketplace.tags`, marketplace.tags); // Output: [ 'electronics', 'accessories' ]
console.log(`new Set Object`, new Set([...marketplace.tags, "electronics", "portable"])); 
// Output: Set(3) { 'electronics', 'accessories', 'portable' }
console.log(`uniqueTags`, uniqueTags); // Output: "[\"electronics\",\"accessories\",\"portable\"]"

// 13. Spreading iterables (e.g., Set)
console.log();
console.log("13. Spreading iterables (e.g., Set)");
const tagSet = new Set(["electronics", "accessories"]);
const tagArray = [...tagSet];

// Logging results
console.log(`tagSet Object`, tagSet); // Output: "Set(2) { 'electronics', 'accessories' }"
console.log(`tagArray`, tagArray); // Output: "[\"electronics\",\"accessories\"]"

// 14. Handling edge case: spreading non-iterable
console.log();
console.log("14. Handling edge case: spreading non-iterable");
let nonIterableResult;
try {
  nonIterableResult = [...null];
} catch (e) {
  nonIterableResult = "Error: Not iterable";
}

// Logging results
console.log(`nonIterableResult`, nonIterableResult); // Output: "Error: Not iterable"

// 15. Deep copying limitations with spread
console.log();
console.log("15. Deep copying limitations with spread");
const deepCopy = [...marketplace.items];
deepCopy[0].price = 60; // Modifies original items[0].price due to shallow copy

// Logging results
console.log(`deepCopy`, deepCopy); // Output: "[{\"id\":\"i1\",\"name\":\"Headphones\",\"price\":60},{\"id\":\"i2\",\"name\":\"Mouse\",\"price\":20}]"
console.log(`marketplace.items`, marketplace.items); // Output: "[{\"id\":\"i1\",\"name\":\"Headphones\",\"price\":60},{\"id\":\"i2\",\"name\":\"Mouse\",\"price\":20}]"