Managing User Permissions
Background
Our app recently started supporting multiple types of users, so we needed to add the concept of user authorization. When users are logged in, we want them to only be able to view certain pages on our web and mobile apps according to the roles they have.

We'd like you to write two functions, which are stubbed out in your code already. First, we'll talk about the functions, and then give some example input and output.

1. List Permissions
We want to be able to get a list of all permissions that a particular user has. A user has any permission that matches one of the roles that they have.

Write a function that takes a user id and returns the list of strings matching the names of permissions that the user has. If the user or role cannot be found or the user has no permissions, then return an empty list.

Additionally, each permission is either active or inactive, and we should not return permissions that are inactive.

You can assume that the ids of all users are unique. The order in which the permission names are returned is not important.

2. Check Permitted
We also want to be able to ensure that users aren't trying to use permissions they don't have.

Write a function that takes a user id and a permission name and returns true if the user has that permission. Return false otherwise. The rules for whether a user has a permission are the same as the List Permissions function (including active/inactive handling). If the user or permission cannot be found, return false.

Examples
Here are some examples that are partially replicated in the provided tests. The data may change, so do not hardcode your solutions to the examples.

Users:

id: 1,  name: "Anna Administrator",   roles: ["superuser"]
id: 2,  name: "Charles N. Charge",    roles: ["charger", "rider"]
id: 7,  name: "Ryder",                roles: ["rider"]
id: 11, name: "Unregistered Ulysses", roles: []
id: 18, name: "Tessa Tester",         roles: ["beta tester"]
Permissions:

role: "superuser", name: "lock user account",      active: true
role: "superuser", name: "unlock user account",    active: true
role: "superuser", name: "purchase widgets",       active: false
role: "charger",   name: "view pick up locations", active: true
role: "rider",     name: "view my profile",        active: true
role: "rider",     name: "scooters near me",       active: true
Some examples for listing permissions:

```listPermissions(7) ==> ["view my profile", "scooters near me"]```
User 7 has the "rider" role. Because of this, they have the permissions "view my profile" and "scooters near me" as these both belong to role “rider”.

`listPermissions(2) ==> ["view pick up locations", "view my profile", "scooters near me"]`
User 2 has the "charger" and "rider" roles. Since the "charger" role has "view pick up locations" and the "rider" role has "view my profile" and "scooters near me", they should have all of those permissions.
listPermissions(1) ==> ["lock user account", "unlock user account"]
User 1 has the "superuser" role and so they should get the "superuser"-related permissions. However, "purchase widgets" is not currently active, so that should not be in the final list.
Some examples for seeing if user has permission:

checkPermitted("lock user account", 1) ==> true
checkPermitted("scooters near me", 1) ==> false
checkPermitted("view pick up locations", 2) ==> true
checkPermitted("purchase widgets", 1) ==> false
permission is inactive even though it matches the user's role
Testing
The automated tests we provide only cover a few key cases, so you should plan to add some of your own tests or modify the existing ones to ensure that your solution handles any edge cases. You should be able to follow the existing patterns for naming and constructing tests to add your own.

Notes
The names of the following functions might vary slightly based on what language you choose. In this prompt, we will use the word "list", but you should defer to the signature of the provided functions for the exact type for your language (vector, array, ArrayList, etc.) You should not change the name, arguments, or return types of the provided functions since our test cases depend on those not changing.

Feel free to add additional functions beyond those provided if they can improve the structure of your solution.

Time guidance
Aim to take between 30-40 minutes for this challenge. Set a timer now for 40 minutes to gauge the time you have spent on this challenge.

If you have spent 40 or more minutes:

STOP
Document where you are at in the "Your Notes" section in the upper right corner
Go on to the next challenge. It is independent from any solution you got on this challenge
You can return to any incomplete challenges if you have time left over at the end