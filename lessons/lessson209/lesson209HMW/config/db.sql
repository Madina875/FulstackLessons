-- Active: 1745582598363@@127.0.0.1@3306@fn21

drop DATABASE n21;
CREATE DATABASE n21;
USE n21;

CREATE TABLE user(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `phone_number` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL
);
CREATE TABLE adress(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` BIGINT NOT NULL,
    `region` ENUM('north', 'south', 'east', 'west') NOT NULL,
    `street` VARCHAR(255) NOT NULL,
    `house_number` BIGINT NOT NULL,
    `intercom_number` TINYINT NOT NULL,
    `intercom_code` VARCHAR(255) NOT NULL,
    `home_num` BIGINT NOT NULL,
    `location` VARCHAR(255) NOT NULL
);
CREATE TABLE phone(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `adress_id` BIGINT NOT NULL,
    `number` BIGINT NOT NULL,
    `owner_name` VARCHAR(255) NOT NULL
);

drop table `orders`;
CREATE TABLE `orders`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` BIGINT NOT NULL,
    `deliver_id` BIGINT NOT NULL,
    `water_count` BIGINT NOT NULL,
    `total_price` DECIMAL(8, 2) NOT NULL,
    `date` DATETIME NOT NULL,
    `promised_time` BIGINT NOT NULL,
    `status` ENUM(
        "pending",
        "confirmed",
        "delivered",
        "cancelled"
    ) NOT NULL
);
CREATE TABLE deliver(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `phone_number` VARCHAR(255) NOT NULL,
    `car_model` VARCHAR(255) NOT NULL,
    `current_location` VARCHAR(255) NOT NULL
);
drop TABLE payment;
CREATE TABLE payment(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `orders_id` BIGINT not NULL,
    `type` ENUM('cash', 'card') NOT NULL,
    `status` ENUM("pending","completed","failed") NOT NULL
);

--


INSERT INTO user (first_name, last_name, phone_number, email, password) VALUES
('John', 'Doe', '555-1234', 'john.doe@example.com', 'password123'),
('Jane', 'Smith', '555-5678', 'jane.smith@example.com', 'password123'),
('Alice', 'Johnson', '555-4321', 'alice.johnson@example.com', 'password123'),
('Bob', 'Brown', '555-8765', 'bob.brown@example.com', 'password123'),
('Charlie', 'Davis', '555-1111', 'charlie.davis@example.com', 'password123'),
('Diana', 'Moore', '555-2222', 'diana.moore@example.com', 'password123'),
('Ethan', 'Taylor', '555-3333', 'ethan.taylor@example.com', 'password123'),
('Fiona', 'Clark', '555-4444', 'fiona.clark@example.com', 'password123'),
('George', 'Lewis', '555-5555', 'george.lewis@example.com', 'password123'),
('Hannah', 'Walker', '555-6666', 'hannah.walker@example.com', 'password123'),
('Ivan', 'Hall', '555-7777', 'ivan.hall@example.com', 'password123'),
('Julia', 'Allen', '555-8888', 'julia.allen@example.com', 'password123'),
('Kevin', 'Young', '555-9999', 'kevin.young@example.com', 'password123'),
('Laura', 'King', '555-0000', 'laura.king@example.com', 'password123'),
('Mike', 'Wright', '555-1010', 'mike.wright@example.com', 'password123'),
('Nina', 'Scott', '555-2020', 'nina.scott@example.com', 'password123'),
('Oscar', 'Green', '555-3030', 'oscar.green@example.com', 'password123'),
('Paula', 'Adams', '555-4040', 'paula.adams@example.com', 'password123'),
('Quentin', 'Baker', '555-5050', 'quentin.baker@example.com', 'password123'),
('Rachel', 'Campbell', '555-6060', 'rachel.campbell@example.com', 'password123');

INSERT INTO adress (user_id, region, street, house_number, intercom_number, intercom_code, home_num, location) VALUES
(1, 'north', 'Oak Street', 12, 1, 'A101', 1001, 'Near the market'),
(2, 'south', 'Maple Avenue', 7, 2, 'B202', 1002, 'Beside the bakery'),
(3, 'east', 'Pine Road', 15, 3, 'C303', 1003, 'Across from school'),
(4, 'west', 'Cedar Lane', 9, 4, 'D404', 1004, 'Next to the clinic'),
(5, 'north', 'Elm Street', 21, 5, 'E505', 1005, 'Near the church'),
(6, 'south', 'Birch Boulevard', 14, 6, 'F606', 1006, 'Behind city hall'),
(7, 'east', 'Spruce Way', 10, 7, 'G707', 1007, 'Close to supermarket'),
(8, 'west', 'Ash Drive', 18, 8, 'H808', 1008, 'Corner of Pine and 1st'),
(9, 'north', 'Cherry Street', 6, 9, 'I909', 1009, 'Opposite the pharmacy'),
(10, 'south', 'Magnolia Road', 11, 10, 'J010', 1010, 'Near the stadium'),
(11, 'east', 'Olive Court', 23, 11, 'K111', 1011, 'Next to coffee shop'),
(12, 'west', 'Juniper Trail', 19, 12, 'L212', 1012, 'Top of the hill'),
(13, 'north', 'Poplar Path', 4, 13, 'M313', 1013, 'Near lake entrance'),
(14, 'south', 'Fir Avenue', 16, 14, 'N414', 1014, 'Main square corner'),
(15, 'east', 'Larch Road', 17, 15, 'O515', 1015, 'Near hardware store'),
(16, 'west', 'Willow Lane', 3, 16, 'P616', 1016, 'Old town district'),
(17, 'north', 'Sycamore Blvd', 8, 17, 'Q717', 1017, 'Bus terminal side'),
(18, 'south', 'Beech Street', 20, 18, 'R818', 1018, 'Opposite the park'),
(19, 'east', 'Palm Drive', 13, 19, 'S919', 1019, 'Behind fire station'),
(20, 'west', 'Hickory Hill', 5, 20, 'T020', 1020, 'Next to gas station');


INSERT INTO deliver (first_name, last_name, phone_number, car_model, current_location) VALUES
('Adam', 'Lee', '555-1010', 'Toyota Prius', 'Downtown'),
('Eva', 'Wong', '555-1020', 'Ford Transit', 'Uptown'),
('Tom', 'Hill', '555-1030', 'Nissan Vanette', 'East Side'),
('Sara', 'Ray', '555-1040', 'Honda Fit', 'West End'),
('Nick', 'Stone', '555-1050', 'Hyundai H1', 'City Center'),
('Linda', 'May', '555-1060', 'Chevy Spark', 'Green Zone'),
('Rob', 'Cruz', '555-1070', 'Mazda Bongo', 'Blue Area'),
('Anna', 'Fox', '555-1080', 'Suzuki Carry', 'North Edge'),
('Jake', 'Gale', '555-1090', 'Kia Carnival', 'South Bay'),
('Mona', 'Zane', '555-1100', 'Renault Kangoo', 'Central Park'),
('Kyle', 'Chen', '555-1111', 'Ford Ranger', 'Riverfront'),
('Nina', 'Kim', '555-1122', 'Peugeot Partner', 'Lakeside'),
('Leo', 'Tang', '555-1133', 'Citroen Berlingo', 'Market Street'),
('Olga', 'Ben', '555-1144', 'Volkswagen Caddy', 'Harbor Point'),
('Phil', 'Luo', '555-1155', 'Mercedes Sprinter', 'Old Town'),
('Beth', 'Yin', '555-1166', 'Opel Combo', 'University District'),
('Zack', 'Xu', '555-1177', 'Fiat Doblo', 'Warehouse Area'),
('Tina', 'Zhao', '555-1188', 'Ram ProMaster', 'Delivery Hub'),
('Rick', 'Ng', '555-1199', 'GMC Savana', 'Depot Area'),
('Judy', 'Park', '555-1200', 'Isuzu N-Series', 'West Hills');

INSERT INTO phone (adress_id, number, owner_name) VALUES
(1, 1000000001, 'John Doe'),
(2, 1000000002, 'Jane Smith'),
(3, 1000000003, 'Alice Johnson'),
(4, 1000000004, 'Bob Brown'),
(5, 1000000005, 'Charlie Davis'),
(6, 1000000006, 'Diana Moore'),
(7, 1000000007, 'Ethan Taylor'),
(8, 1000000008, 'Fiona Clark'),
(9, 1000000009, 'George Lewis'),
(10, 1000000010, 'Hannah Walker'),
(11, 1000000011, 'Ivan Hall'),
(12, 1000000012, 'Julia Allen'),
(13, 1000000013, 'Kevin Young'),
(14, 1000000014, 'Laura King'),
(15, 1000000015, 'Mike Wright'),
(16, 1000000016, 'Nina Scott'),
(17, 1000000017, 'Oscar Green'),
(18, 1000000018, 'Paula Adams'),
(19, 1000000019, 'Quentin Baker'),
(20, 1000000020, 'Rachel Campbell');

INSERT INTO `orders` (user_id, deliver_id, water_count, total_price, date, promised_time, status) VALUES
(1, 1, 2, 8.00, NOW(), 60, 'pending'),
(2, 2, 4, 16.00, NOW(), 90, 'confirmed'),
(3, 3, 3, 12.00, NOW(), 45, 'delivered'),
(4, 4, 5, 20.00, NOW(), 60, 'pending'),
(5, 5, 1, 4.00, NOW(), 30, 'cancelled'),
(6, 6, 2, 8.00, NOW(), 75, 'confirmed'),
(7, 7, 6, 24.00, NOW(), 90, 'delivered'),
(8, 8, 4, 16.00, NOW(), 50, 'pending'),
(9, 9, 2, 8.00, NOW(), 60, 'confirmed'),
(10, 10, 5, 20.00, NOW(), 70, 'delivered'),
(11, 11, 3, 12.00, NOW(), 60, 'confirmed'),
(12, 12, 1, 4.00, NOW(), 30, 'cancelled'),
(13, 13, 4, 16.00, NOW(), 60, 'pending'),
(14, 14, 2, 8.00, NOW(), 40, 'delivered'),
(15, 15, 6, 24.00, NOW(), 90, 'confirmed'),
(16, 16, 2, 8.00, NOW(), 55, 'delivered'),
(17, 17, 3, 12.00, NOW(), 50, 'pending'),
(18, 18, 5, 20.00, NOW(), 75, 'confirmed'),
(19, 19, 4, 16.00, NOW(), 60, 'delivered'),
(20, 20, 1, 4.00, NOW(), 30, 'pending');


INSERT INTO payment ( orders_id, type, status) VALUES
(1, 'cash', 'completed'),
(2, 'card', 'pending'),
(3, 'cash', 'completed'),
(4, 'card', 'failed'),
(5, 'cash', 'completed'),
(6, 'card', 'completed'),
(7, 'cash', 'pending'),
(8, 'card', 'completed'),
(9, 'cash', 'failed'),
(10, 'card', 'completed'),
(11, 'cash', 'completed'),
(12, 'card', 'pending'),
(13, 'cash', 'completed'),
(14, 'card', 'completed'),
(15, 'cash', 'failed'),
(16, 'card', 'completed'),
(17, 'cash', 'pending'),
(18, 'card', 'completed'),
(19, 'cash', 'completed'),
(20, 'card', 'pending');



SHOW TABLES;

use n21;

SELECT * FROM adress;
SELECT * FROM user;
SELECT * FROM payment;
SELECT * FROM deliver;
SELECT * FROM phone;
SELECT * FROM orders;

-- //1

-- SELECT o.date, u.id, u.first_name, u.last_name, u.phone_number,
-- u.email, u.password, o.promised_time, o.status
-- from user u 
-- LEFT JOIN orders o ON u.id = o.user_id WHERE o.date  BETWEEN '2025-05-01 22:09:46' AND CURRENT_DATE ;

-- -- //2
SELECT o.date, u.id, u.first_name, u.last_name, u.phone_number,
u.email, u.password, o.promised_time, o.status , d.first_name as "deliver_name"
from user u 
left JOIN deliver d on u.id = d.id
LEFT JOIN orders o ON u.id = o.user_id where u.first_name = "John" ;



SELECT * from user u 
LEFT JOIN orders o ON u.id = o.user_id where u.first_name = "John" ;


