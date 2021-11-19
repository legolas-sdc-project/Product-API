-- load database with data from CSV files
COPY products(product_id, name, slogan, description, category, default_price)
FROM '/home/eunjiroh/Coding/Hack Reactor/rfp56/Senior Project/SDC/Product-API/database/data/product.csv'
DELIMITER ','
CSV HEADER;

COPY features(feature_id, product_id, feature, value)
FROM '/home/eunjiroh/Coding/Hack Reactor/rfp56/Senior Project/SDC/Product-API/database/data/features.csv'
DELIMITER ','
CSV HEADER;

COPY styles(style_id, product_id, name, sale_price, original_price, default_style)
FROM '/home/eunjiroh/Coding/Hack Reactor/rfp56/Senior Project/SDC/Product-API/database/data/styles.csv'
DELIMITER ','
NULL AS 'null'
CSV HEADER;

COPY photos(photo_id, style_id, url, thumbnail_url)
FROM '/home/eunjiroh/Coding/Hack Reactor/rfp56/Senior Project/SDC/Product-API/database/data/photos.csv'
DELIMITER ','
CSV HEADER;

COPY skus(sku_id, style_id, size, quantity)
FROM '/home/eunjiroh/Coding/Hack Reactor/rfp56/Senior Project/SDC/Product-API/database/data/skus.csv'
DELIMITER ','
CSV HEADER;

COPY related(related_id, current_product_id, related_product_id)
FROM '/home/eunjiroh/Coding/Hack Reactor/rfp56/Senior Project/SDC/Product-API/database/data/related.csv'
DELIMITER ','
CSV HEADER;