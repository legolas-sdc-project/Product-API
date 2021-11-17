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

 - to log into postgres server and enter shell

  ```bash
  sudo -u postgres psql
  ```
- to access database
  ```bash
  \c <database name>
  ```

when you make an index - 0(n) look up
index whatever you are querying the data
index based on that key
make a leaf nodes in key
grab the leaf nodes (the columns you want) and get data constant time