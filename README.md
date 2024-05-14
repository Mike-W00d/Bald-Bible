# Bald Bible
# Project Overview 

Our final group project while at Makers. Our team consisted of 4 software developers and 2 quality engineers, and we were given 8 days to reach MVP building anything we liked which we would then present to a live audience at the end of our course. We decided on to build Bald Bible to try and create a positive place on the internet for those suffering with hair loss. One of our team pitched the idea drawing from his own experience of losing his hair where all you see online when you google hair loss are websites selling you products to try preventing hair loss rather than encouraging you to embrace it. 
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

As a team we quickly agreed upon using the MERN stack, this was because we all had experience building using the stack but there were still plenty of learning opportunities and optimisations, we could do by creating another project in the same stack especially as we had a limited timeline. 

Once decided between us on building the Bald Bible when then had to decide what functionality we hoped to achieve and what MVP of Bald Bible looked like. To do this we created user stories of what as a user we wanted to be able to achieve on the site. Using the user stories, we then created wire frame pages of what we wanted the site to look like and from this drew up a component tree using Excalidraw. 

![image](https://github.com/Mike-W00d/Bald-Bible/assets/142504641/f5b001ab-6a6f-4c98-a5d9-ba17e17dc7fd)

As a team we followed AGILE working principles and used a trello board to break down the tasks which needed doing and make sure we got the most out of each sprint. This also made sure each team member knew what tasks to needed completing and we were able to track the progress we were making.  

![image](https://github.com/Mike-W00d/Bald-Bible/assets/142504641/081149ec-d75c-4266-bc98-56ff891b4fc8)


## My Responsibilities

- Converting our user stories and wireframe component tree into manageable Trello tickets with an accurate time estimate for each.
- Setting up the MongoDB database model classes and creating a seed script to put test data into the database.
- Configuring Cloudinary to resize uploaded images to make it easier to get the correct pintrest style look on the UI.
- The routing to send the image data from the UI to the backend and upload it into cloudinary.
- Creating the image controller to create new Image instances for each upload and then storing user and image data into the MongoDB database.
- Using Bycrypt to Hash all user passwords in the database for user security.
- Project managing - we rotated the responsibility to lead standups/retros between the group throughout the project.
- Locking the Upload page so only logged in users can upload images to the site.
- Pair programming with team members to help with CSS styling on the frontend and debugging.

## Achieved MVP 

- Login: Must be unique email and correct password
- Signup: All fields must be completed, email must be correct format, password must be certain length and contain special character
- Password Security: Passwords are bcrypt hashed on signup before being stored in database
- Dynamic page elements - buttons, login/signup, Feed Page
- Image Feed - Each picture is clickable to see content
- Security - User cannot comment/like without being logged in
- Responsive - Whole web app is responsive to different screen sizes
- Image Upload - Cloudinary Image upload and storage, images automatically display on the feed on upload
- Comments - conditionally render on button click, can also be deleted if user matches comment UserID 
- Likes - User can like/unlike an image
- Testing - Test database setup and connected, frontend and api tests in place

## Challenges/ What I learned 

### Image Upload 

This was the first time any of us on the team had working with handling images. I took charge of the ticket for image upload as I knew for us to achieve MVP before the demo day having a reliant and fast way of handling images would be essential. I knew I wanted to try out a cloud store for our images and after some research online I found cloudinary was a fast and free way of storing images for the project and it also had good SDK documentation I could work from. Although it took me longer than I would have hoped to get the upload working and connected to the database it was a good experience working out on something completely new to me.

### Version Control

Working in a team of 4 developers all on the same project led to a few issues with merge conflicts. We had a clear system in place to try and mitigate the risk of this happening which was - all working on our own individual separate branches away from the main, regular commits and needing 1 other members approval before merging into main on GitHub. We did however run into some issues with package.lock.json but all were sorted by using vscodes merge editor. I have since learned more about rebasing which would have been helpful when working on this project. 

### Environment Variables 

Using both MongoDB Atlas and Cloudinary we had quite a lot of local environment variables which you would not get added to your local device when pull down the latest version from GITHUB. This caused some issues for some of our team who struggled with running their local version as they had the incorrect .ENV values. This was a quick fix once discussed with the rest of our team but it highlights the importance of communicating when you add values into .ENV / config.

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
