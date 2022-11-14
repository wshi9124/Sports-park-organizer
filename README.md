# Park-O (Park event organizer)
Park-O is a social media site where users can organize park sporting events. This website features a real time messaging system that utilizes websockets and an access system where event admins can accept or decline members to their events. 


# Technologies
######
Frontend: React, JavaScript, Material UI
######
Backend: Ruby on Rails, PostgreSQL, Action Cable (websocket API), Active Storage (to store product images), Bcrypt (to salt and hash password), Active Records Validations
######
Other: Google Maps API, Google Geocoding API

# Security
This project uses sessions to authenticate users and Bcrypt to encrypt passwords. 
There are protected routes (private routes) for any pages that require the user to login.

# Features 
######
When a user first enters the site, the Rails backend will check if there is a session. If there is, it will automatically log the user in.
######
If a user types in an incorrect username or password, an error message will appear and the inputs will clear
######
<img width="500" alt="Screen Shot 2022-11-14 at 2 29 12 PM" src="https://user-images.githubusercontent.com/104730743/201763789-8808daaf-5ddf-4bf2-929d-a49b89db4e68.png">

######
Users need to pass a number of validations to make an account or else an error message will appear.
######
<img width="500" alt="Screen Shot 2022-11-13 at 3 05 57 PM" src="https://user-images.githubusercontent.com/104730743/201763845-2eba4b14-64e3-41fe-b433-00a051f19373.png">

######
The home page shows all of the events along with their descriptions and dates posted. There is also a search bar where users can search for an event by name or description.
######
<img width="500" alt="Screen Shot 2022-11-14 at 2 30 30 PM" src="https://user-images.githubusercontent.com/104730743/201763906-576ffa13-a5da-4d45-9667-a685d4af9867.png">

######
If a user clicks on an event, a modal will appear that displays the location of the event on google maps along with the members participating in that event. Users can then request to join the event. Once the button is clicked, users will be able to see their status (pending, accepted, declined).   
######
<img width="500" alt="Screen Shot 2022-11-14 at 2 26 25 PM" src="https://user-images.githubusercontent.com/104730743/201764167-cd6308cf-14d3-448f-beb7-058c6f534f7e.png">

######
On the create new event page, users can create their own events. They can click on the format address button to format their location and pan to the location on google maps. They can also upload an event image for the event.  
######
<img width="500" alt="Screen Shot 2022-11-14 at 4 02 57 PM" src="https://user-images.githubusercontent.com/104730743/201765222-53e9672c-6fbe-4fdd-a9d9-8c39816cd309.png">

<img width="500" alt="Screen Shot 2022-11-14 at 2 26 52 PM" src="https://user-images.githubusercontent.com/104730743/201764217-50fcf691-2520-4822-b75a-ba9d602126f5.png">

<img width="500" alt="Screen Shot 2022-11-14 at 4 04 16 PM" src="https://user-images.githubusercontent.com/104730743/201765238-f0fc3256-8c2d-402e-8f82-da07d6c18862.png">

<img width="500" alt="Screen Shot 2022-11-14 at 2 32 02 PM" src="https://user-images.githubusercontent.com/104730743/201765255-6aa24379-5450-4d3c-b44c-5a0e5263f59e.png">

<img width="500" alt="Screen Shot 2022-11-14 at 2 32 24 PM" src="https://user-images.githubusercontent.com/104730743/201765270-25f72290-e014-45d0-8c17-afdcbe444308.png">

# Tables 

<img width="600" alt="Screen Shot 2022-11-14 at 3 54 11 PM" src="https://user-images.githubusercontent.com/104730743/201763757-7c1f8481-b3f9-4ae0-b2cd-6fe1d76fd5ed.png">

# System dependencies
######
Ruby: 2.7.4
######
Node: 16.17.1
######
PostgreSQL: 12.12

# Configuration:
### Install packages:
######
bundle install
######
npm install --prefix client
######
### Database creation & initialization:
######
rails db:create db:migrate
### How to run the test suite:
######
rails s
######
npm start --prefix client
######
open localhost:4000 on your browser

