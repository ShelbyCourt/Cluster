select resources.title, resources.resource_url, resources.description, resources.notes, resources.category, userz.username from resources
join userz on resources.user_id = userz.user_id
where resources.user_id = $5;
