DROP TABLE IF EXISTS project_notes CASCADE;

CREATE TABLE project_notes (
  id SERIAL PRIMARY KEY NOT NULL,
  notes TEXT,
  date DATE,
  project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE
);