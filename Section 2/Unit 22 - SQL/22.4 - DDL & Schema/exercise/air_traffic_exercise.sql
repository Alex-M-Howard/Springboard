--current schema:

tickets (
    id SERIAL INTEGER
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    seat TEXT NOT NULL,
    departure TIMESTAMP NOT NULL,
    arrival TIMESTAMP NOT NULL,
    airline TEXT NOT NULL,
    from_city TEXT NOT NULL,
    to_city TEXT NOT NULL,
    to_country TEXT NOT NULL,
)




new:

person (
    first_name,
    last_name,
    seat?
)

airlines (
    id,
    name
)

flights (
    airline_id
    departure,
    arrival
    from_country,
    to_country
    from_city,
    to_city
)

cities (
    name
)

countries (
    name
)