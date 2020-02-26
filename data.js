const user = {
    _id: "",
    lastName: String,
    firstName: String,
    email: String,
    password: String,
    phone: Number ("0049 30 123456789"),
    accessRole: ["client", "registered", "moderator", "admin"],
    property: [id,id],
    upvotes: "",
}

// tickets
const post = {
    author: "" ,
    image: "",
    dueDate: "",
    content: "",
    title: "",
    status: ["open", "in_progress", "closed", "denied", "done" ] ,
    archived: Boolean,
    private: Boolean,
    createdAt: Date,
    updatedAt: Date,
    closedAt: Date,
    voteCount: Number ,
    property: "_id",
},

// posts
const announcement = {
    author: userId,
    title: String,
    content: String,
    createdAt: Date,
    updatedAt: Date,
    closedAt: Date,
    image: url,
    property: "id"
}

//
const document = {
    title: String,
    url: String,
    category: String,
    userId: [{userId}],
    property: "id"
}
const property = {
    _id: "###",
    street: "",
    city: "",
    country:"",
    staff: [{}]
}