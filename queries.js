// use mongo_exercises
// db.movies.insert({ <insert all the movies> })

// QUERY / FIND DOCUMENTS

/*
1. get all documents
db.movies.find({}).pretty()

2. get all documents with writer set to "Quentin Tarantino"
db.movies.find({ writer: { $eq: "Quentin Tarantino" } }).pretty()

3. get all documents where actors include "Brad Pitt"
db.movies.find({ actors: "Brad Pitt" }).pretty()

4. get all documents with franchise set to "The Hobbit"
db.movies.find({ franchise: "The Hobbit"}).pretty()

5. get all movies released in the '90s
db.movies.find({ year: { $gt: 1989, $lt: 2000 } })

6. get all movies released before the year 2000 or after 2010
db.movies.find({ $or: [ { year: { $lt: 2000 } }, { year: { $gt: 2010 } } ] })
*/

// UPDATE DOCS

/* 
1. add a synopsis to "The Hobbit: An Unexpected Journey"
db.movies.update({ title: "The Hobbit: An Unexpected Journey" },{ $set: { "synopsis": "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug." } })

2. add an actor named "Samuel L. Jackson" to the movie "Pulp Fiction"
db.movies.update({ title: "Pulp Fiction"},{ $push: { actors: "Samuel L. Jackson"} })
*/

// TEXT SEARCH

/*
1. find all movies that have a synopsis that contains the word "Bilbo"
db.movies.createIndex( { synopsis: "text" } )
db.movies.find({ $text: { $search: "Bilbo" } }).pretty()

2. find all movies that have a synopsis that contains the word "Gandalf"
db.movies.find({ $text: { $search: "Gandalf" } }).pretty()

3. find all movies that have a synopsis that contains the word "Bilbo" and not the word "Gandalf"
db.movies.find({ $text: { $search: "Bilbo -Gandalf" }}).pretty()

4. find all movies that have a synopsis that contains the word "dwarves" or "hobbit"
db.movies.find({ $text: { $search: "dwarves hobbit" } }).pretty()

5. find all movies that have a synopsis that contains the word "gold" and "dragon"
db.movies.find({ $text: { $search: "\"gold\" \"dragon\""}}).pretty()

*/

// DELETE (REMOVE)

/*
1. delete the movie "Pee Wee Herman's Big Adventure"
db.movies.remove({ "title": "Pee Wee Herman's Big Adventure" })
*/

// RELATIONSHIPS

/*
db.comments.insert({"username":"SallySmith","comment":"Hope you got a good deal!","post":ObjectId("5fd569b96a6a60bb36cd3fd3") })

db.comments.insert({"username":"SallySmith","comment":"What's mine is yours!","post": ObjectId("5fd569e26a6a60bb36cd3fd4") })

db.comments.insert({"username":"SallySmith","comment":"Don't violate the licensing agreement!","post": ObjectId("5fd56a156a6a60bb36cd3fd5") })

db.comments.insert({"username":"JimmyHagen","comment":"It still isn't clean","post": ObjectId("5fd569126a6a60bb36cd3fd0") })

db.comments.insert({"username":"JimmyHagen","comment":"Denied your PR cause I found a hack","post": ObjectId("5fd5698d6a6a60bb36cd3fd2") })
*/

// QUERYING RELATED CONDITIONS

/*
1. find all users
db.users.find({})

2. find all posts
db.posts.find({})

3. find all posts authored by "SallySmith"
db.posts.find({"username":"SallySmith"}).pretty()

4. find all posts authored by "JimmyHagen"
db.posts.find({"username":"JimmyHagen"}).pretty()

5. find all comments
db.comments.find({}).pretty()

6. find all comments authored by "SallySmith"
db.comments.find({"username":"SallySmith"}).pretty()

7. find all comments authored by "JimmyHagen"
db.comments.find({"username":"JimmyHagen"}).pretty()

8. find all comments belonging to the post "Reports a bug in your code"
db.comments.find({"post": ObjectId("5fd5698d6a6a60bb36cd3fd2")})
*/


