select resources.title, resources.resource_url, resources.description, resources.notes, resources.category, resources.id, userz.username from resources
join userz on resources.user_id = userz.user_id
where resources.id = $1;