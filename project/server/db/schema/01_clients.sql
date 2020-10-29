DROP TABLE IF EXISTS clients CASCADE;
CREATE TABLE clients(
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255),
  client_type TEXT,
  work_type TEXT,
  email VARCHAR(255) NOT NULL,
  department VARCHAR(255),
  region VARCHAR(255),
  tweeter_username VARCHAR(255),
  position_title VARCHAR(255),
  initial_contact_made TEXT,
  client_status TEXT DEFAULT 'A'
);