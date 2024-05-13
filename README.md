# Bald Bible
# Project Overview 

Our final group project while at Makers. Our team consited of 4 software developers and 2 quality engineers and we were given 8 days to reach MVP building anything we liked which we would then present to a live auidence at the end of our course. We decided on to build Bald Bible to try and create a positive place on the internet for those suffering with hairloss. One of our team pitched the idea drawing from his own experiance of losing his hair where all you see online when you google hair loss are websites selling you products to try prevent hair loss rather than encoraging you to embrace it. 
- 8 days to MVP
- Main Language: Javascript - React frontend & Node.js Backend
- Database: MongoDB
- Testing: Backend: Jest , Frontend: Cypress
- Other Tech: Express, Cloudinary - for image storing, Bycrypt, CSS, Vite

![bc526d91-e66b-44b8-8663-e5c43669010e](https://github.com/Mike-W00d/Bald-Bible/assets/142504641/d248c569-93bf-4391-90ea-d6de90c6e189)

Myself and a couple of my team presenting the tech functionality demo linked below live at our demo day event. 

# Project Functionality Demo

[![Video](https://img.youtube.com/vi/aNzYTEQ8lqk/0.jpg)](https://www.youtube.com/watch?v=aNzYTEQ8lqk)

## Run Bald Bible in dev mode
Start the frontend and backend servers together.
```
cd backend
npm start
```
Start the frontend server only.
```
npm run dev
```
Start the backend server only.
```
npm run backend
```

## MongoDB database password
Add a `config.js` file in the backend and add this to `.gitignore`.
Add the MongoDB password to `config.js`.
```
module.exports = {
  password: 'db-user-password' 
} 
```
