# Park-O (Sports-park-organizer)
Park-O is a social media site where users can organize park sporting events. This website features a real time messaging system that utilizes websockets and an access system where event admins can accept or decline members to their events. 

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

