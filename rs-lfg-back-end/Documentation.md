Server runs on port 4000

To Run:
nodemon run server.js

To Debug: 
run "Launch RSLFG" configuration in debugger for VSCode

How to use POST methods from Postman:
use x-www-form-urlencoded with desired key value pairs. 

########## User Manipulation ##########

Get all users:
GET localhost:4000/users

get a user:
GET localhost:4000/user/{user_id}

create a user:
use localhost:4000/form.html (does not work when debugging)
            or
PUT localhost:4000/user using JSON values:
{
    "username": <desired-username>,
    "combat_level": <desired-combat-level>
}

update a user:
user_id cannot be null
POST localhost:4000/update/user using JSON values:
{
    "user_id": <existing-user-id>,
    "username": <desired-username>,
    "combat_level": <desired-combat-level>
}

delete a user:
DELETE locahost:4000/user/{user_id}

#######################################

########## Group Manipulation ##########

Get all groups:
GET localhost:4000/groups

get a user:
GET localhost:4000/group/{group_id}

create a group:
PUT localhost:4000/group using JSON values:
{
    "host_username": <desired-host-username>,
    "name": <desired-name-of-group>
}

update a group:
group_id cannot be null
POST localhost:4000/update/group using JSON values:
{
    "group_id": <existing-group-id>,
    "host_username": <desired-host-username>,
    "name": <desired-name-of-group>
}

delete a group:
DELETE locahost:4000/group/{group_id}

########################################
