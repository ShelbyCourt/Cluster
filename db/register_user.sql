insert into userz (username, email, password, languages)
values ($1, $2, $3, $4);

select * from userz
where username = $1;