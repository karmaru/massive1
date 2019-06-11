CREATE TABLE national_parks (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    image_url TEXT,
    location VARCHAR,
    date_established DATE,
    acres DECIMAL,
    description TEXT
)
