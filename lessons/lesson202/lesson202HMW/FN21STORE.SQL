CREATE DATABASE IF NOT EXISTS store;

CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT ,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE products;

----------------------------------------------------------------

INSERT INTO products(name,category,price,stock) VALUES
("iPhone 13", "Electronics",900.00,10),
("Samsung TV 55" , "Electronics",1200.00,5),
("Niko Shoes", "Fashion",150.00,20),
("Adidas T-shirt","Fashion",40.00,30),
("HP Laptop","Electronics",700.00,7);


SELECT name,category,price FROM products;

-----------------------------------------------------------

SELECT * FROM products WHERE price>500;

----------------------------------------------------------

select * FROM products ORDER BY price DESC;

----------------------------------------------------------

UPDATE products
SET price = 170
WHERE name = 'Nike Shoes';

---------------------------------------------------------

DELETE FROM products where name ="Adidas T-shirt";

SELECT *FROM products;

--------------------------------------------------------

SELECT * FROM products WHERE name LIKE "S%";

------------------------------------------------------

SELECT COUNT(*)  FROM products;

--------------------------------------------------------
--ENG ARZONI:
SELECT * FROM products ORDER BY price LIMIT 1;

--ENG QIMMATI:
SELECT * FROM products ORDER BY price DESC LIMIT 1;

-----------------------------------------------------

SELECT sum(price) from products;

-----------------------------------------------------

SELECT AVG(price) from products;