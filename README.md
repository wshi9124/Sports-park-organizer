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
<img width="500" alt="Screen Shot 2022-11-14 at 2 29 12 PM" src="https://user-images.githubusercontent.com/104730743/201763789-8808daaf-5ddf-4bf2-929d-a49b89db4e68.png">

<img width="500" alt="Screen Shot 2022-11-13 at 3 05 57 PM" src="https://user-images.githubusercontent.com/104730743/201763845-2eba4b14-64e3-41fe-b433-00a051f19373.png">

<img width="500" alt="Screen Shot 2022-11-14 at 2 30 30 PM" src="https://user-images.githubusercontent.com/104730743/201763906-576ffa13-a5da-4d45-9667-a685d4af9867.png">

<img width="500" alt="Screen Shot 2022-11-14 at 2 26 25 PM" src="https://user-images.githubusercontent.com/104730743/201764167-cd6308cf-14d3-448f-beb7-058c6f534f7e.png">

<img width="500" alt="Screen Shot 2022-11-14 at 2 31 41 PM" src="https://user-images.githubusercontent.com/104730743/201764121-69fc9c39-396d-4444-a600-fe5e7d4fc424.png">

<img width="500" alt="Screen Shot 2022-11-14 at 2 26 52 PM" src="https://user-images.githubusercontent.com/104730743/201764217-50fcf691-2520-4822-b75a-ba9d602126f5.png">



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

