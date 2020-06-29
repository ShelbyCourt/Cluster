select resources.title, resources.resource_url, resources.description, resources.category from resources
join userz on resources.user_id = userz.user_id
where resources.user_id = $1 and resources.category = $2;