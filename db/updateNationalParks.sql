update national_parks set name = ${name}, image_url = ${image_url}, location = ${location}, date_established = ${date_established}, acres = ${acres}, description = ${description}
where id = ${id};

select * from national_parks;