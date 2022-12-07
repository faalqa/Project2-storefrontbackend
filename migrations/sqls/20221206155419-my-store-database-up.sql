CREATE TABLE IF NOT EXISTS "users" (
  "id" SERIAL,
  "firstname" VARCHAR(255) NOT NULL,
  "lastname" VARCHAR(255) NOT NULL,
  "email" VARCHAR(255) NOT NULL UNIQUE,
  "password" TEXT NOT NULL,
  "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "orders" (
  "id" SERIAL,
  "user_id" INT NOT NULL,
  "status" VARCHAR(255) NOT NULL,
  "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY("id"),
  FOREIGN KEY("user_id") REFERENCES users("id")
);
CREATE TABLE IF NOT EXISTS "products" (
  "id" SERIAL,
  "name" VARCHAR(255) NOT NULL,
  "price" FLOAT NOT NULL,
  "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "carts" (
  "id" SERIAL,
  "order_id" INT NOT NULL,
  "product_id" INT NOT NULL,
  "quantity" INT NOT NULL,
  "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY("id"),
  FOREIGN KEY("order_id") REFERENCES orders("id"),
  FOREIGN KEY("product_id") REFERENCES products("id")
);