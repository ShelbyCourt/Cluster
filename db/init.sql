create table userz (
username varchar (20),
email varchar (45),
password text,
user_id serial,
languages varchar (60),
profile_pic text,
primary key ( user_id ),
unique (username)
);

create table userz (
username varchar (20),
email varchar (45),
password text,
user_id serial,
languages varchar (60),
profile_pic text,
primary key ( user_id ),
unique (username)
);

create table language (
language_id serial,
language varchar (60)
);