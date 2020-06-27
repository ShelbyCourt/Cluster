insert into resources 
(title, resource_url, description, notes, category, language, user_id)
values ($1, $2, $3, $4, $5, $6, $7);
select * from resources;