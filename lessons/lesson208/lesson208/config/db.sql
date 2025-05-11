-- Active: 1745582598363@@127.0.0.1@3306

CREATE DATABASE rent_stadium;
use rent_stadium;

SHOW TABLES;

drop TABLE users;



CREATE TABLE `users`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `role` ENUM('owner','customer','admin') NOT NULL,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(15) NOT NULL
);

INSERT INTO users (`role`, first_name, last_name, email, password, `phone`) VALUES
('owner', 'Ali', 'Karimov', 'ali.karimov@example.com', 'pass123Ali', '998901234567'),
('customer', 'Laylo', 'Yusupova', 'laylo.yusupova@example.com', 'pass456Lay', '998911234567'),
('admin', 'Jasur', 'Ismoilov', 'jasur.ismoilov@example.com', 'adminPass', '998931112233'),
('customer', 'Malika', 'Toshpulatova', 'malika.tosh@example.com', 'Malika2024!', '998901112233'),
('owner', 'Bobur', 'Rasulov', 'bobur.rasulov@example.com', 'Bobur@321', '998939876543'),
('admin', 'Dilnoza', 'Bekmurodova', 'dilnoza.bek@example.com', 'D!lnoza2024', '998998765432'),
('customer', 'Sardor', 'Nazarov', 'sardor.nazarov@example.com', 'sardor_456', '998977654321'),
('owner', 'Zilola', 'Shukurova', 'zilola.shukurova@example.com', 'zilolaPass1', '998901199887'),
('admin', 'Shahboz', 'Jalilov', 'shahboz.jalilov@example.com', 'shahbozPass', '998931100221'),
('customer', 'Nilufar', 'Soliyeva', 'nilufar.soliyeva@example.com', 'nilufar123', '998911100223');

CREATE TABLE `stadium`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `location` VARCHAR(50) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `description` TEXT,
    `price` DECIMAL(15,2) NOT NULL,
    `owner_id` INT NOT NULL
);
INSERT INTO `stadium` (`name`, `location`, `address`, `description`, `price`, `owner_id`) VALUES
('Sunrise Arena', 'Los Angeles', '1234 Sunset Blvd, Los Angeles, CA', 'A modern stadium with retractable roof.', 2500000.00, 1),
('Victory Field', 'Dallas', '5678 Victory Ln, Dallas, TX', 'Known for hosting championship games.', 1800000.00, 2),
('Oceanview Stadium', 'Miami', '7890 Beach Dr, Miami, FL', 'Beachside stadium with scenic views.', 2200000.00, 3),
('Summit Park', 'Denver', '1357 Mountain Rd, Denver, CO', 'High-altitude stadium for winter sports.', 1750000.00, 4),
('Royal Grounds', 'New York', '2468 Queen St, New York, NY', 'Historic site for major sports events.', 3000000.00, 5),
('Emerald Field', 'Seattle', '3579 Greenway, Seattle, WA', 'Eco-friendly stadium surrounded by parks.', 2100000.00, 6),
('Falcon Stadium', 'Atlanta', '4680 Peachtree Ave, Atlanta, GA', 'Home to major football matches.', 1950000.00, 7),
('Liberty Arena', 'Philadelphia', '5791 Freedom Blvd, Philadelphia, PA', 'Multi-purpose indoor arena.', 1600000.00, 8),
('Golden Dome', 'Las Vegas', '6802 Goldrush St, Las Vegas, NV', 'Futuristic stadium with golden dome.', 2700000.00, 9),
('Iron Fortress', 'Chicago', '7913 Steel Rd, Chicago, IL', 'Large stadium famous for concerts and games.', 2400000.00, 10);
SELECT * FROM stadium;
use rent_stadium;

DROP table stadium;
--------------------------------------
SELECT s.name , u.first_name, u.last_name , b.booking_date  from booking b
LEFT JOIN stadium s ON b.stadion_id=s.id
left JOIN users u On b.user_id = u.id
where b.booking_date BETWEEN '2025-01-01' and '2025-06-01' AND s.name like '%ARENA%';
--------------------------------------

SELECT name from booking b
LEFT JOIN stadium s ON b.id = s.owner_id
where booking_date BETWEEN '2025-01-01' and '2025-05-01'




CREATE TABLE `booking`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `stadion_id` INT NOT NULL,
    `user_id` INT UNSIGNED NOT NULL,
    `booking_date` DATE NOT NULL,
    `start_time` VARCHAR(10) NOT NULL,
    `end_time` VARCHAR(10) NOT NULL,
    `total_price` DECIMAL(15,2) NOT NULL,
    `status` ENUM('PENDING','CANCELLED','CONFIRMED','PAID') NOT NULL
);



INSERT INTO `booking` (`stadion_id`, `user_id`, `booking_date`, `start_time`, `end_time`, `total_price`, `status`) VALUES
(1, 101, '2025-05-01', '10:00', '12:00', 500.00, 'PENDING'),
(2, 102, '2025-05-02', '14:00', '16:00', 600.00, 'CONFIRMED'),
(3, 103, '2025-05-03', '09:00', '11:00', 550.00, 'PAID'),
(4, 104, '2025-05-04', '13:00', '15:00', 450.00, 'CANCELLED'),
(5, 105, '2025-05-05', '17:00', '19:00', 700.00, 'CONFIRMED'),
(6, 106, '2025-05-06', '08:00', '10:00', 400.00, 'PAID'),
(7, 107, '2025-05-07', '15:00', '17:00', 620.00, 'PENDING'),
(8, 108, '2025-05-08', '11:00', '13:00', 480.00, 'PAID'),
(9, 109, '2025-05-09', '12:00', '14:00', 500.00, 'CONFIRMED'),
(10, 110, '2025-05-10', '16:00', '18:00', 750.00, 'CANCELLED');

CREATE TABLE `payment`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `booking_id` BIGINT UNSIGNED NOT NULL,
    `amount` DECIMAL(15,2) NOT NULL,
    `payment_time` DATETIME NOT NULL,
    `payment_method` ENUM('CARD','CASH','ONLINE') NOT NULL
);
INSERT INTO `payment` (`booking_id`, `amount`, `payment_time`, `payment_method`) VALUES
(1, 500.00, '2025-05-01 09:30:00', 'CARD'),
(3, 550.00, '2025-05-03 08:50:00', 'ONLINE'),
(6, 400.00, '2025-05-06 07:45:00', 'CASH'),
(8, 480.00, '2025-05-08 10:20:00', 'CARD'),
(9, 500.00, '2025-05-09 11:15:00', 'ONLINE');

CREATE TABLE `review`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `stadion_id` INT UNSIGNED NOT NULL,
    `user_id` INT UNSIGNED NOT NULL,
    `rating` SMALLINT NOT NULL ,
    `comment` VARCHAR(255) NOT NULL
);
INSERT INTO `review` (`stadion_id`, `user_id`, `rating`, `comment`) VALUES
(1, 101, 5, 'Amazing experience!'),
(3, 103, 4, 'Very good, but a bit crowded.'),
(5, 105, 3, 'Average service.'),
(7, 107, 5, 'Fantastic atmosphere!'),
(9, 109, 2, 'Needs better facilities.');

CREATE TABLE `images`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `stadion_id` INT UNSIGNED NOT NULL,
    `image_url` VARCHAR(255) NOT NULL
);
INSERT INTO `images` (`stadion_id`, `image_url`) VALUES
(1, 'https://example.com/images/stadium1.jpg'),
(2, 'https://example.com/images/stadium2.jpg'),
(3, 'https://example.com/images/stadium3.jpg'),
(4, 'https://example.com/images/stadium4.jpg'),
(5, 'https://example.com/images/stadium5.jpg');


SHOW TABLES;

SELECT * from users;


SELECT * from users u 
LEFT JOIN stadium s ON u.id = s.owner_id
LEFT JOIN images i ON s.id = i.stadion_id
where first_name="Laylo" and last_name="Yusupova";

--------------------------------------------------------------------------------------------------------------------
SELECT * from users;
use rent_stadium;

show TABLES;

DROP PROCEDURE IF EXISTS getUser;

--
CREATE PROCEDURE IF NOT EXISTS getAllUsers()
BEGIN
    SELECT * FROM users;
END
--
CALL getAllUsers;
--/


--
----------------------------------
/*
in , out, inout - olish usullari 
*/
----------------------------------

--------------------------------------------------------------------------
CREATE PROCEDURE IF NOT EXISTS getUserById(IN userId INT)
BEGIN
 SELECt id, first_name, phone FROM users WHERE id=userId;
END

call getUserById(5);

drop procedure getUserById;
------------------------------------------------------------------------------/

--------------------------------------------------------------------------------
CREATE PROCEDURE IF NOT EXISTS getUserName(IN userId Int,OUT userName VARCHAR(50))
BEGIN 
  SELECT first_name into userName from users where id=userId;
END

--indeks kiritildi:
call getUserName(7,@userName);

--nomini chiqarib beradi :
SELECT @userName; 

-------------------------------------------------------------------------------------/

-----------------------------------------------------berilgan qiymatdan olish (ayirish)
CREATE PROCEDURE IF NOT EXISTS res_out(INOUT res INT)
BEGIN 
set res=res-10; 
END

--asosiy qiymat beriladi:
set @res=100; 

--protseduraga yoziladi:
call res_out(@res);

--chaqiriladi:
SELECT @res;

------------------------------------------------------------------------------------/

show TABLES;

select * from stadium;


CREATE PROCEDURE IF NOT EXISTS res_out(IN userId Int,INOUT res INT)
BEGIN 
select s.userId , s.price from stadium s where s.userId.price-res ;
END

set @res=1000.02; 
call res_out(@res);
SELECT @res;



/*
CREATE PROCEDURE GetOfficeByCountry(
	IN countryName VARCHAR(255)
)
BEGIN
	SELECT * 
 	FROM offices
	WHERE country = countryName;
END 
*/



-- CREATE PROCEDURE IF NOT EXISTS getUserPrice(IN userId Int,OUT price decimal(15,2), IN answerPrice DECIMAL(15,2))
-- BEGIN 
--   SELECT price into price from stadium where id=userId && price-answerPrice;
-- END


-- call getUserPrice(1,)
-- drop PROCEDURE getUserPrice;

---
show PROCEDURE STATUS where db="rent_stadium";


----

--oracle my teacher wrote 15years

-- drop FUNCTION myFunc1;

CREATE Function IF not EXISTS myFunc1() RETURNS INT DETERMINISTIC
BEGIN
  DECLARE sum int DEFAULT 0;
  SELECT count(*) into sum from stadium;
  RETURN sum;
END

SELECT myFunc1();

----------------------------------------------------------------------------------------------------/


-- trigger_name — trigger nomi 
-- trigger_time — triggerni ishga tushish vaqti: 
--      BEFORE — xodisadan oldin.  
--      AFTER — xodisadan keyin. 
-- trigger_event — Xodisa: 
--     insert — quyidagi xodisalardan keyin insert, data load, replace 
--     update — quyidagi xodisalardan keyin  update 
--     delete — quyidagi xodisalardan keyin  delete, replace.  
--      DROP TABLE va TRUNCATE triggerni aktivlashtirmaydi 
-- tbl_name — table nomi 
-- trigger_stmt - triggerni ichki kodi


---------------------------------

USE rent_stadium;
show TABLES;

CREATE TABLE IF NOT EXISTS stadium_logs(
    id INT AUTO_INCREMENT PRIMARY KEY,
    log_message VARCHAR(255) NOT NULL,
    log_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    row_id INT not null
);
----

CREATE TRIGGER IF NOT EXISTS insert_stadium
AFTER INSERT ON stadium
for EACH ROW
BEGIN
 INSERT INTO stadium_logs 
 set log_message = "New Stadium inserted", 
 row_id=NEW.id;
End
SELECT * FROM stadium_logs;
----

 CREATE TRIGGER IF NOT EXISTS delete_stadium
 BEFORE DELETE ON stadium
 FOR EACH ROW
 BEGIN
    INSERT INTO stadium_logs
    SET log_message = "Stadium deleted",
    row_id = OLD.id;
 END

SELECT * FROM stadium_logs;
----

CREATE TRIGGER update_stadium_trigger
AFTER UPDATE ON stadium
FOR EACH ROW
BEGIN
    INSERT INTO stadium_logs (log_message, row_id, old_name, new_name)
    VALUES (
        NEW.id,
        OLD.name,
        NEW.name
    );
END;

-----

