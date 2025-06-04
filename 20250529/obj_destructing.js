// Fake data representing a user profile
const userProfile = {
  id: "john_doe",
  city: "HK",
  details: {
    firstName: "John",
    lastName: "Doe",
    preferences: {
      theme: "dark",
      notifications: true
    }
  },
  fullName: "John Doe",
};

// Advanced destructuring with multiple techniques
const {
  id: userID = "guest_user", // Rename with default value
  city: userCity = "Unknown", // Rename with default value
  age = 18, // Default value for missing property
  details: {
    firstName, // Simple destructuring
    lastName = "Smith", // Default value
    preferences: { theme = "light", notifications = false } = {} // Nested destructuring with defaults
  } = {},
  ...otherProps // Rest properties to capture remaining fields
} = userProfile;


// Logging results
console.log(`userID`, userID);          // Output: "john_doe"
console.log(`userCity`, userCity);      // Output: "HK"
console.log(`age`, age);                // Output: "18"
console.log(`firstName`, firstName);    // Output: "John"
console.log(`lastName`, lastName);      // Output: "Doe"
console.log(`theme`, theme);            // Output: "dark"
console.log(`notifications`, notifications); // Output: "true"
console.log(`otherProps`, otherProps);  // Output: "{ fullName: 'John Doe' }"

// Use case: Handling incomplete data
const incompleteProfile = { id: "jane_smith" }; // Missing city, details, age

const {
  id: newUserID = "guest_user",
  city = "Unknown",
  age: newUserAge = 18,
  details: {
    firstName: newFirstName = "Anonymous",
    preferences: { theme: newTheme = "light" } = {}
  } = {}
} = incompleteProfile;

console.log(`newUserID`, newUserID);    // Output: "jane_smith"
console.log(`city`, city);              // Output: "Unknown"
console.log(`newUserAge`, newUserAge);  // Output: "18"
console.log(`newFirstName`, newFirstName); // Output: "Anonymous"
console.log(`newTheme`, newTheme);      // Output: "light"


// Use case: Function parameter destructuring
function displayUser({
  id: userID = "guest_user",
  city = "Unknown",
  details: { firstName = "Anonymous" } = {}
} = {}) {
  return `User: ${userID}, City: ${city}, First Name: ${firstName}`;
}

console.log(`displayUser(userProfile)`, displayUser({
  id: "john_doe",
  city: "HK",
  details: {
    firstName: "John",
    lastName: "Doe",
    preferences: {
      theme: "dark",
      notifications: true
    }
  },
  fullName: "John Doe",
})); // Output: "User: john_doe, City: HK, First Name: John"
console.log(`displayUser({})`, displayUser({}));                  // Output: "User: guest_user, City: Unknown, First Name: Anonymous"

console.log(`displayUser({})`, displayUser({
  id: "john_doe",
  city: "HK"
})); // Output: "User: john_doe, City: HK, First Name: Anonymous"