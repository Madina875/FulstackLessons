-- Active: 1745324501722@@127.0.0.1@3306@fn21
USE fn21;
SHOW TABLES;

SHOW DATABASES;

CREATE DATABASE IF NOT EXISTS fn2121;

DROP DATABASE fn2121; 

CREATE TABLE department (id INT(11) , name VARCHAR(100))

SHOW TABLES

DESCRIBE department

INSERT INTO department(id,name) VAL
ES (1,"DIZAYN")

INSERT INTO department (id,name) VALUES (5,"Dasturlash")

INSERT INTO department(id , name) VALUES (null,"Sotuv")


SELECT * FROM department


DROP TABLE department;

CREATE TABLE department (
    id INT(11) UNSIGNED AUTO_INCREMENT ,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY(id)
);

DELETE FROM department;

////////////////////////////////

DROP TABLE workers;


CREATE TABLE workers (id INT, name VARCHAR(100), role VARCHAR(100), salary INT, birthday DATE);

DESCRIBE workers;

INSERT INTO workers (id,name,role,salary,birthday)
 VALUES 
    (1,"Malik","Dasturchi",2000,'2000-03-05'),
    (2,"Sabriddin","Dizayner",1000,'1995-05-15'),
    (3,"Kamol","Dasturchi",1500,'2002-10-14'),
    (4,"Zafar","HR",800,'2005-11-22')
;

SELECT * FROM workers;

SELECT name as ism , role FROM workers;

SELECT name,role,(salary*1.1) as new_salary FROM workers;

SELECT name,role,(salary*1.1) as new_salary FROM workers WHERE role="Dasturchi";

--  // ichida shu harf borligini chiqarib beradi;
SELECT name,role,(salary*1.1) as new_salary FROM workers WHERE name LIKE "m%";

SELECT id, name,role as new_salary FROM workers WHERE id IN (1,3);

SELECT id,name,role,salary from workers where salary>500 AND salary<1600;

SELECT id,name,role,salary,birthday from workers
 WHERE birthday BETWEEN '2000-01-01' AND '2004-01-01';


-- // barcha kml larni chiqqarish :
SELECT id, name,role as new_salary FROM workers WHERE name LIKE "K_m_l";


SELECT * FROM workers ORDER BY salary;
SELECT * FROM workers ORDER BY salary DESC;


SELECT * FROM workers ORDER BY role, salary DESC;


SELECT * FROM workers LIMIT 2;

-- 2ta tashlab ketib keyin chiqarish:
SELECT * FROM workers LIMIT 2 OFFSET 2; 


-- SELECT * FROM workers LIMIT 2 OFFSET 2 

-- LIMIT N OFFSET (PAGE-1)*N
-- LIMIT 10 OFFSET (5-1)*10


SELECT COUNT(*) FROM workers; 

SELECT MAX(salary) FROM workers;

SELECT CONCAT ('ism: ',name,'Lavozimi: ',role) as DESCRIPTION FROM `workers`;

-- ichida shunaqa bolsa shunaqaga ozgartirish :
SELECT REPLACE (REPLACE(name,' ',''),'*','') as new_name from `workers`; 

show TABLES;