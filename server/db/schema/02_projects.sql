DROP TABLE IF EXISTS projects CASCADE;

CREATE TABLE projects (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  number SERIAL NOT NULL,
  start_date DATE,
  end_date DATE,
  assigned_to VARCHAR(255),
  type VARCHAR(255),
  project_stage TEXT,
  payment_received TEXT,
  payment_date DATE,
  client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE,
  project_status TEXT DEFAULT 'A',
  courses_number INTEGER,
  project_value FLOAT

);