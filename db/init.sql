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

create table resources (
resource_url text,
title varchar (45),
description varchar (120),
notes text,
category varchar (25),
id serial, 
user_id integer,
language varchar(40),
primary key (resource_id),
foreign key ( user_id ) references userz ( user_id ) ,
foreign key ( language ) references language ( language_id)
);

create table language (
language_id serial,
language varchar (60)
);