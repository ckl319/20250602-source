// Fake data representing an e-commerce store
const store = {
  products: [
    {
      id: "p1",
      name: "Laptop",
      tags: ["electronics", "computers", "portable"],
      orders: [
        { customer: "Alice", quantity: 1 },
        { customer: "Bob", quantity: 2 }
      ]
    },
    {
      id: "p2",
      name: "Book",
      tags: ["literature", "education"],
      orders: [
        { customer: "Charlie", quantity: 3 }
      ]
    },
    {} // Sparse product with no data
  ]
};

// 1. Basic array destructuring
console.log();
console.log("1. Basic array destructuring");
const { products } = store;
const [firstProduct, secondProduct, thirdProduct] = products;

// Logging results
console.log(`firstProduct`, firstProduct);   // Output: "{\"id\":\"p1\",\"name\":\"Laptop\",\"tags\":[\"electronics\",\"computers\",\"portable\"],\"orders\":[{\"customer\":\"Alice\",\"quantity\":1},{\"customer\":\"Bob\",\"quantity\":2}]}"
console.log(`secondProduct`, secondProduct); // Output: "{\"id\":\"p2\",\"name\":\"Book\",\"tags\":[\"literature\",\"education\"],\"orders\":[{\"customer\":\"Charlie\",\"quantity\":3}]}"
console.log(`thirdProduct`, thirdProduct);   // Output: "{}"

// 2. Skipping elements
console.log();
console.log("2. Skipping elements");
const { tags: [primaryTag, , lastTag] = [] } = firstProduct;

// Logging results
console.log(`primaryTag`, primaryTag); // Output: "electronics"
console.log(`lastTag`, lastTag);       // Output: "portable"

// 3. Swapping variables
console.log();
console.log("3. Swapping variables");
let tag1 = "new";
let tag2 = "sale";
[tag1, tag2] = [tag2, tag1];

// Logging results
console.log(`tag1`, tag1); // Output: "sale"
console.log(`tag2`, tag2); // Output: "new"

// 4. Nested array destructuring with defaults and rest
console.log();
console.log("4. Nested array destructuring with defaults and rest");
const {
  products: [
    {
      name: firstProductName,
      tags: [mainTag = "generic", ...otherTags] = [],
      orders: [
        { quantity: firstOrderQuantity = 0 } = {},
        ...otherOrders
      ] = []
    } = {},
    ...remainingProducts
  ] = []
} = store;

// Logging results
console.log(`firstProductName`, firstProductName);     // Output: "Laptop"
console.log(`mainTag`, mainTag);                       // Output: "electronics"
console.log(`otherTags`, otherTags);                   // Output: "[\"computers\",\"portable\"]"
console.log(`firstOrderQuantity`, firstOrderQuantity); // Output: "1"
console.log(`otherOrders`, otherOrders);               // Output: "[{\"customer\":\"Bob\",\"quantity\":2}]"
console.log(`remainingProducts`, remainingProducts);   // Output: "[{\"id\":\"p2\",\"name\":\"Book\",\"tags\":[\"literature\",\"education\"],\"orders\":[{\"customer\":\"Charlie\",\"quantity\":3}]},{}]"

// 5. Handling incomplete or undefined arrays
console.log();
console.log("5. Handling incomplete or undefined arrays");
const incompleteStore = { products: [{}] }; // Sparse product
const undefinedStore = {}; // No products

const {
  products: [
    {
      tags: [firstTag = "unknown"] = [],
      orders: [firstOrder = { customer: "Guest", quantity: 0 }] = []
    } = {}
  ] = []
} = incompleteStore;

const {
  products: [firstProductUndefined = { name: "None" }] = []
} = undefinedStore;

// Logging results
console.log(`firstTag`, firstTag);         // Output: "unknown"
console.log(`firstOrder`, firstOrder);     // Output: "{\"customer\":\"Guest\",\"quantity\":0}"
console.log(`firstProductUndefined`, firstProductUndefined); // Output: "{\"name\":\"None\"}"

// 6. Function parameter destructuring
console.log();
console.log("6. Function parameter destructuring");
function describeProduct({
  name = "Unknown",
  tags: [primaryTag = "general"] = [],
  orders: [firstOrder = { quantity: 0 }] = []
} = {}) {
  return `Product: ${name}, Tag: ${primaryTag}, First Order Qty: ${firstOrder.quantity}`;
}

// Logging results
console.log(`describeProduct(firstProduct)`, describeProduct(firstProduct)); // Output: "Product: Laptop, Tag: electronics, First Order Qty: 1"
console.log(`describeProduct({})`, describeProduct({})); // Output: "Product: Unknown, Tag: general, First Order Qty: 0"

// 7. Destructuring in loops
console.log();
console.log("7. Destructuring in loops");
const productSummaries = products.map(({
  name = "Untitled",
  orders: [firstOrder = { quantity: 0 }] = []
}, index) => `Product ${index + 1}: ${name}, First Order: ${firstOrder.quantity}`);

// Logging results
console.log(`productSummaries`, productSummaries); // Output: "[\"Product 1: Laptop, First Order: 1\",\"Product 2: Book, First Order: 3\",\"Product 3: Untitled, First Order: 0\"]"

// 8. Destructuring with computed indices
console.log();
console.log("8. Destructuring with computed indices");
const index = 1;
const { products: { [index]: selectedProduct } } = store;
const { tags: { [0]: dynamicTag } } = firstProduct;

// Logging results
console.log(`selectedProduct`, selectedProduct); // Output: "{\"id\":\"p2\",\"name\":\"Book\",\"tags\":[\"literature\",\"education\"],\"orders\":[{\"customer\":\"Charlie\",\"quantity\":3}]}"
console.log(`dynamicTag`, dynamicTag);           // Output: "electronics"

// 9. Destructuring sparse arrays
console.log();
console.log("9. Destructuring sparse arrays");
const sparseArray = ["item1", , "item3"];
const [firstItem, secondItem = "missing", thirdItem] = sparseArray;

// Logging results
console.log(`firstItem`, firstItem);     // Output: "item1"
console.log(`secondItem`, secondItem);   // Output: "missing"
console.log(`thirdItem`, thirdItem);     // Output: "item3"

// 10. Destructuring with rest in function return
console.log();
console.log("10. Destructuring with rest in function return");
function getProductInfo() {
  return ["Smartphone", ["tech", "gadget"], { customer: "Dave", quantity: 4 }];
}
const [productName, [firstProductTag, ...otherProductTags], firstProductOrder] = getProductInfo();

// Logging results
console.log(`productName`, productName);           // Output: "Smartphone"
console.log(`firstProductTag`, firstProductTag);   // Output: "tech"
console.log(`otherProductTags`, otherProductTags); // Output: "[\"gadget\"]"
console.log(`firstProductOrder`, firstProductOrder); // Output: "{\"customer\":\"Dave\",\"quantity\":4}"