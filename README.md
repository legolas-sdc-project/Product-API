# Product-API

## Set up database
 - start postgres

  ```bash
  sudo service postgresql start
  ```

 - check if postgres is connected and running

  ``` bash
  pgrep -u postgres -fa -- -D
  ```

 - to log into postgres server, enter shell, and access atelierproducts database

  ```bash
  sudo -u postgres psql -d atelierproducts
  ```