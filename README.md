# Storefront Backend Project

## Getting Started

### 1. Install Dependencies
After Cloning the project, head inside the project folder and run
```
npm install
```

### 2.  DB Creation and Migrations
```
postgres database is running on the default port 5432

create dev database and test database


ex: 

CREATE DATABASE store_database;


CREATE DATABASE test_database;


cp .env.example .env
```

**Note that BCRYPT_PASSWORD, SALT_ROUNDS, and JWT_KEY values in .env.example 

**affect the authorization token used in the test

Now, replace .env with your credentials and then run

``` 
db-migrate up
```

### 3. Starting the project
```
npm run start
```

### 4. Running the tests
```
npm run test
```

Now you should be able to go to `localhost:3000` to test that everything is working as expected.

