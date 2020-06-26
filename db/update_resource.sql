update resources
set title = $1,
resource_url = $2,
description = $3,
notes = $4,
category = $5
where resource_id = $6
returning *;