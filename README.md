# Park-O (Park event organizer)
Park-O is a social media site where users can organize park sporting events. This website features a real time messaging system that utilizes websockets and an access system where event admins can accept or decline members to their events. 


# Technologies
######
Frontend: TypeScript, React, JavaScript, Tailwind CSS, Local Storage (to store cart items)
######
Backend: Ruby on Rails, PostgreSQL, Active Storage (to store product images), Action Mailer (to send out greeting emails), Bcrypt (to salt and hash password), Active Records Validations
######
Other: Google Maps API, Google Geocoding API, Amazon Web Services (EC2)

# Security
This project uses sessions to authenticate users and Bcrypt to encrypt passwords. 
There are protected routes (private routes) for any pages that require the user to login.

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

