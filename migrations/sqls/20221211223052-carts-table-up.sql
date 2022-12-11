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