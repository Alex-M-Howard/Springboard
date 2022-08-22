CREATE TABLE planets
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  orbital_period_in_years FLOAT NOT NULL,
  orbits_around TEXT NOT NULL,
  galaxy TEXT NOT NULL,
  moons TEXT[]
);

galaxies (
    id
    name
)

planets (
    id
    name
    orbital_period_in_years
    orbits_around
)

moons (
    id,
    name
)


galaxies_planets (
    galaxy_id,
    planet_id
)

planet_moons (
    planet_id,
    moon_id
)