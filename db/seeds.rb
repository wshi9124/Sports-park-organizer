# puts "Seeding Events"

# e1=Event.create!(name: "Happy Hoops", location:"60 Chelsea Piers, New York, NY", sport:"basketball", description:"All divisions will be scheduled for three (3) regular season games. Teams will play two games on the nights they play, when applicable. All teams will require a Sporting Behavior rating of at least 3.0 to be eligible for playoffs. For playoffs, teams will be placed in a single elimination bracket at the end of the regular season. Games cancelled due to weather will be attempted to make up. ")
# e2=Event.create!(name: "Rival Tennis", location:"526 Baltic St, New York, NY", sport:"tennis", description:" Teams must meet the minimum player requirements in order to be scheduled for the regular season. A minimum of four (4) eligible players is required for a game to start for single gendered teams and at least three males and three females for Co-Rec. ")
# e3=Event.create!(name: "Krazy Kickball", location:"601 West 52nd Street New York, NY", sport:"kickball", description:"Co-Rec Competitive, Men's Competitive, Open Recreational (No Playoffs), Open Competitive, and Women's Competitive leagues are available. ")
# e4=Event.create!(name: "Ultimate Frisbee", location:"334 Furman St, New York, NY", sport:"frisbell", description:"Co-Rec Competitive, Men's Competitive, Open Recreational (No Playoffs), Open Competitive, and Women's Competitive leagues are available. ")
# e5=Event.create!(name: "Forever Chess", location:"450 Flatbush Ave, New York, NY", sport:"Chess", description:" Teams must meet the minimum player requirements in order to be scheduled for the regular season. A minimum of four (4) eligible players is required for a game to start for single gendered teams and at least three males and three females for Co-Rec. ")

# puts "Events Seeded"

# puts "Seeding Users"

# u1=User.create!(email:"rubyonrails@gmail.com", username:"RestAndRelaxation", password:"1123", password_confirmation:"1123")
# u2=User.create!(email:"fiveonfive@yahoo.com", username:"ArmyOfOne", password:"1123", password_confirmation:"1123")
# u3=User.create!(email:"leftthenright@aol.com", username:"BlindFury", password:"5567", password_confirmation:"5567")
# u4=User.create!(email:"upordown@gmail.com", username:"LostAndFound", password:"7789", password_confirmation:"7789")
# u5=User.create!(email:"cuphalfempty@aol.com", username:"Thirsty", password:"8890", password_confirmation:"8890")
# u6=User.create!(email:"wshi@gmail.com", username:"Willie", password:"1234567", password_confirmation:"1234567")
# puts "Users Seeded"

# puts "Seeding User Events"

# UserEvent.create!(user_id: u1.id, event_id: e3.id, admin: true, status:"accepted")
# UserEvent.create!(user_id: u2.id, event_id: e2.id, admin: true, status:"accepted")
# UserEvent.create!(user_id: u3.id, event_id: e1.id, admin: true, status:"accepted")
# UserEvent.create!(user_id: u4.id, event_id: e4.id, admin: true, status:"accepted")
# UserEvent.create!(user_id: u5.id, event_id: e5.id, admin: true, status:"accepted")
# UserEvent.create!(user_id: u6.id, event_id: e2.id, admin: false, status:"pending")
# UserEvent.create!(user_id: u6.id, event_id: e3.id, admin: false, status:"pending")
# UserEvent.create!(user_id: u6.id, event_id: e4.id, admin: false, status:"pending")
# UserEvent.create!(user_id: u6.id, event_id: e5.id, admin: false, status:"accepted")

# puts "User Events Seeded"


