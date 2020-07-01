insert into resources 
(title, resource_url, category, language, user_id)
values ($1, $2, $3, $4, $5);
select * from resources;