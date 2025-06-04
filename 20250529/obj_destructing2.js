// Fake data representing a team with array focus
const team = {
  members: [
    {
      id: "m1",
      name: "Alice",
      details: {
        tasks: ["API", "Database", "UI"]
      }
    },
    {
      id: "m2",
      name: "Bob",
      details: {
        tasks: ["Wireframe", "Mockup"]
      }
    }
  ]
};

// Advanced destructuring with arrays
const {
  members: [
    {
      id: firstMemberId, // Simple destructuring
      name: firstMemberName = "Unknown", // Default value
      details: {
        tasks: [firstTask = "None", ...otherTasks] = [] // Nested array destructuring with default and rest
      } = {}
    } = {},
    ...otherMembers // Rest for remaining array elements
  ] = []
} = team;

// Logging results
console.log(`firstMemberId`, firstMemberId);      // Output: "m1"
console.log(`firstMemberName`, firstMemberName);  // Output: "Alice"
console.log(`firstTask`, firstTask);              // Output: "API"
console.log(`otherTasks`, otherTasks);            // Output: "["Database","UI"]"
console.log(`otherMembers`, otherMembers);        // Output: "[{"id":"m2","name":"Bob","details":{"tasks":["Wireframe","Mockup"]}}]"

// Use case: Handling incomplete data
const incompleteTeam = {}; // Missing members

const {
  members: [
    {
      id: newMemberId = "unknown_id",
      details: {
        tasks: [newFirstTask = "None"] = []
      } = {}
    } = {}
  ] = []
} = incompleteTeam;

console.log(`newMemberId`, newMemberId);      // Output: "unknown_id"
console.log(`newFirstTask`, newFirstTask);    // Output: "None"

// Use case: Function parameter destructuring
function displayTeam({
  members: [
    {
      name: firstMemberName = "Anonymous"
    } = {}
  ] = []
} = {}) {
  return `Lead: ${firstMemberName}`;
}

console.log(`displayTeam(team)`, displayTeam(team)); // Output: "Lead: Alice"
console.log(`displayTeam({})`, displayTeam({})); // Output: "Lead: Anonymous"