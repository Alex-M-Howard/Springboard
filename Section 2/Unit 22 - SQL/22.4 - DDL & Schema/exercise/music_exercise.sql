CREATE TABLE songs
(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  duration_in_seconds INTEGER NOT NULL,
  release_date DATE NOT NULL,
  artists TEXT[] NOT NULL,
  album TEXT NOT NULL,
  producers TEXT[] NOT NULL
);


artists (
    id,
    name
)

producers (
    id,
    name
)

albums (
    id,
    name
)

songs (
    id,
    name,
    release_date,
    duration_in_seconds
)

album_songs (
    id,
    song_id
)

song_collab (
    song_id,
    artist_id
)
