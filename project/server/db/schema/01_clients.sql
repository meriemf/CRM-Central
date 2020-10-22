DROP TABLE IF EXISTS clients CASCADE;
CREATE TABLE clients(
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  potential_client BOOLEAN,
  current_client BOOLEAN,
  educational_institution BOOLEAN,
  business BOOLEAN,
  email VARCHAR(255) NOT NULL,
  department VARCHAR(255),
  region VARCHAR(255),
  tweeter_username VARCHAR(255),
  position_title VARCHAR(255),
  initial_contact_made BOOLEAN
);