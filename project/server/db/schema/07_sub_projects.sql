DROP TABLE IF EXISTS sub_projects CASCADE;

CREATE TABLE sub_projects (
  id SERIAL PRIMARY KEY NOT NULL,
  date DATE,
  comment TEXT,
  project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE
);