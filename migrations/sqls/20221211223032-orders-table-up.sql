CREATE TABLE IF NOT EXISTS "orders" (
  "id" SERIAL,
  "user_id" INT NOT NULL,
  "status" VARCHAR(255) NOT NULL,
  "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY("id"),
  FOREIGN KEY("user_id") REFERENCES users("id")
);