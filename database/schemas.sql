-- create tables
CREATE TABLE products (
  product_id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  slogan VARCHAR(150),
  description TEXT,
  category VARCHAR(30),
  default_price INT
);

CREATE TABLE features (
  feature_id SERIAL NOT NULL PRIMARY KEY,
  product_id INT REFERENCES products(product_id),
  feature VARCHAR(50),
  value VARCHAR(50)
);

CREATE TABLE styles (
  style_id SERIAL NOT NULL PRIMARY KEY,
  product_id INT REFERENCES products(product_id),
  name VARCHAR(30) NOT NULL,
  sale_price INT,
  original_price INT,
  default_style BOOLEAN
);

CREATE TABLE photos (
  photo_id SERIAL NOT NULL PRIMARY KEY,
  style_id INT REFERENCES styles(style_id),
  url TEXT,
  thumbnail_url TEXT
);

CREATE TABLE skus (
  sku_id SERIAL NOT NULL PRIMARY KEY,
  style_id INT REFERENCES styles(style_id),
  size VARCHAR(10),
  quantity INT
);

CREATE TABLE related (
  related_id SERIAL NOT NULL PRIMARY KEY,
  current_product_id INT,
  related_product_id INT
);