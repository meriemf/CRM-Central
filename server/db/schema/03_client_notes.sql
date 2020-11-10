DROP TABLE IF EXISTS client_notes CASCADE;

CREATE TABLE client_notes (
  id SERIAL PRIMARY KEY NOT NULL,
  notes TEXT,
  date DATE,
  client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE
);