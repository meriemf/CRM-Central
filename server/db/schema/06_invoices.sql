DROP TABLE IF EXISTS invoices CASCADE;

CREATE TABLE invoices (
  id SERIAL PRIMARY KEY NOT NULL,
  number SERIAL,
  subtotal FLOAT,
  invoice_link TEXT,
  project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE
);