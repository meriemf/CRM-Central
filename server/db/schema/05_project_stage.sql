DROP TABLE IF EXISTS project_stage CASCADE;

CREATE TABLE project_stage (
  id SERIAL PRIMARY KEY NOT NULL,
  date DATE,
  stage VARCHAR(255),
  project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE
);