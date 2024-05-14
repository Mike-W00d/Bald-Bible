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

# Project Timeline

## Planning 

As a team we quickly agreed upon using the MERN stack, this was because we all had experiance building using the stack but there were still plenty of learning oppotunities and optimisations we could do by creating another project in the same stack especially as we had a limited timeline. 

Once decided between ourselves on building the Bald Bible when then had to decide what functionality we hoped to achive and what MVP of Bald Bible looked like. To do this we created user stories of what as a user we wanted to be able to achieve on the site. Using the user stories we then created wire frame pages of what we wanted the site to look like and from this drew up a component tree using Excalidraw. 

![image](https://github.com/Mike-W00d/Bald-Bible/assets/142504641/f5b001ab-6a6f-4c98-a5d9-ba17e17dc7fd)

As a team we followed AGILE working principles and used a trello board to break down the tasks which needed doing and make sure we got the most out of each sprint. This also made sure each team member knew what tasks to needed completing and we were able to track the progress we were making.  

![image](https://github.com/Mike-W00d/Bald-Bible/assets/142504641/081149ec-d75c-4266-bc98-56ff891b4fc8)


## My Responsiblities

- Converting our user stories and wireframe component tree into managable trello tickets with an accurate time estimate for each.
- Seting up the MongoDB database model classes and creating a seed script to put test data into the database.
- Configuring Cloudinary to resize uploaded images to make it easier to get the correct pintrest stlye look on the UI.
- The routing to send the image data from the UI to the backend and upload it into cloudinary.
- Creating the image controller to create new Image instances for each upload and then storing user and image data into the MongoDB database.
- Using Bycrypt to Hash all user passwords in the database for user security.
- Project managing - we rotated the responsibility to lead standups/retros between the group throughout the project.
- Locking the Upload page so only logged in users can upload images to the site.
- Pair programming with team members to help with CSS styling on the frontend and debugging.

## Achived MVP 

- Login: Must be unique email and correct password
- Signup: All fields must be completed, email must be correct format, password must be certain length and contain special character
- Password Security: Passwords are bcrypt hashed on signup before being stored in database
- Dynamic page elements - buttons, login/signup, Feed Page
- Image Feed - Each picture is clickable to see content
- Security - User cannot comment/like without being logged in
- Responsive - Whole web app is responsive to different screen sizes
- Image Upload - Cloudinary Image upload and storage, images automatically display on the feed on upload
- Comments - conditionally render on button click, can also be deleted if user matches comment UserI
- Likes - User can like/unlike an image
- Testing - Test database setup and connected, frontend and api tests in place

## Challenges/ What I learned 

### Image Upload 

This was the first time any of us on the team had working with handling images. I took charge of the ticket for image upload as I knew for us to acheive MVP before the demo day having a relient and fast way of handling images would be essential. I knew I wanted to try out a cloud store for our images and after some research online I found cloudinary was a fast and free way of storing images for the project and it also had good SDK documentation I could work from. 



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
