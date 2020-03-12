# Houselog - The Property Management App

[Martin Schmal](https://github.com/martinschmal), [Jonathan Saudhof](https://github.com/jonathansaudhof), and me created this 
app as our final project at Ironhack. 

## Getting started

To get this app up and running on your server follow the instructions below.

### Prerequisites

This is an MERN app. So, you need to have Node and MongoDB be installed. Furthermore, 
***you need a cloudinary account ([here](https://cloudinary.com/))***.

```
git clone https://github.com/sha-hinya/finalProject-MaJoSha.git
cd finalProject-MaJoSha
```

### Installation

Install all the packages

```
npm install 
```

Setup your .env file

```
PORT=5555
MONGODB_URI=XXXXX
CLOUDINARY_NAME=XXXXX
CLOUDINARY_KEY=XXXXX
CLOUDINARY_SECRET=XXXXX
```

### Run the development server & client


To run the backend server:

```
npm run dev
```

Open another terminal and run:
```
cd client
npm start
```



