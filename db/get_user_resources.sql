select resources.title, resources.resource_url, resources.category, resources.id, userz.username from resources
join userz on resources.user_id = userz.user_id
where resources.user_id = $4
order by resources.title;
