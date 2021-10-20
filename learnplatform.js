var colors=["red","blue","green"];
for (let i = 0; i < colors.length; i++) { 
  console.log(colors[i]);
}

const posts = [
  { id: 1, title: "Sample Title 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
  { id: 2, title: "Sample Title 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
  { id: 3, title: "Sample Title 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
];

const createArray = (posts) => {
  // Create new array of post IDs. I.e. [1,2,3]
  const postIds = posts.map((post) => post.id);
  console.log(postIds)
  // Create new array of post objects. I.e. [{ id: 1, title: "Sample Title 1" }]
  const postSummaries = posts.map((post) => ({ id: post.id, title: post.title }));
  console.log(postSummaries)
  
  const array = []
  posts.map(post => {
    var obj = {}
    obj[post.title] = post.description
    array.push(obj)
  })
  console.log(array)
}
// ES2016+

createArray(posts)

//////

class Authorization {
  constructor(permissions, users) {
    this.permissions = permissions
    this.users = users
  }
  
  listPermissions(userId) {
    // TODO: fill this out!
    users.map()
    return
  }

  checkPermitted(permissionName, userId) {
    // TODO: fill this out!
    return
  }
}

// tests from qualified
let expect = require("chai").expect

describe("Authorization", () => {
  beforeEach(() => {
    const permissions = [
      { role: "superuser", name: "lock user account", active: true },
      { role: "superuser", name: "unlock user account", active: true },
      { role: "superuser", name: "purchase widgets", active: false },
      { role: "charger", name: "view pick up locations", active: true },
      { role: "rider", name: "view my profile", active: true },
      { role: "rider", name: "scooters near me", active: true },
    ]

    const users = [
      { id: 1, name: "Anna Administrator", roles: ["superuser"] },
      { id: 2, name: "Charles N. Charge", roles: ["charger", "rider"] },
      { id: 7, name: "Ryder", roles: ["rider"] },
      { id: 11, name: "Unregistered Ulysses", roles: [] },
      { id: 18, name: "Tessa Tester", roles: ["beta tester"] },
    ]

    this.authorization = new Authorization(permissions, users)
  })

  it("listPermissions returns correct permission names when there is one role", () => {
    const result = this.authorization.listPermissions(7)
    expect(result, "view my profile").to.include("view my profile")
    expect(result, "scooters near me").to.include("scooters near me")
    expect(result.length).to.equal(2)
  })

  it("checkPermitted returns true for all of the permissions that exist for the user", () => {
    expect(this.authorization.checkPermitted("view pick up locations", 2), "view pick up locations").to.equal(true)
    expect(this.authorization.checkPermitted("view my profile", 2), "view my profile").to.equal(true)
    expect(this.authorization.checkPermitted("scooters near me", 2), "scooters near me").to.equal(true)
  })
})
