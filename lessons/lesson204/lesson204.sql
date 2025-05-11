-- Union - bir hill boʻlsa bittasini chiqaradi ,
-- Union all- esa jami qoshib chiqaradi .
-- Ustunlar soni birhil boʻlishi kk.

SELECT * from workers;

-- ochirish:
delete from workers WHERE id=4;



CREATE TABLE old_workers (id INT AUTO_INCREMENT PRIMARY KEY ,
    name VARCHAR(50),
    role VARCHAR(50),
    old_salary INT,
    birthday DATE)

INSERT INTO old_workers (name, role, old_salary, birthday) VALUES ( "Rahimov Sardor", "Director", 50000, '1985-09-21'),
    ("Malik", "Dasturchi", 40000, "2000-03-05"),
    ("Sabriddin", "Dizayner", 10000, "1995-04-12"),
    ("Ali", "Marketolog", 15000, "2002-12-06"),
    ("Vali", "Mobilograf", 20000, "2003-04-30"),
    ("Solih", "Dasturchi", 20000, "2005-08-18")

SELECT * FROM old_workers

SELECT id, name, salary FROM workers WHERE salary>5000
UNION ALL
SELECT id, name, old_salary FROM old_workers WHERE old_salary>10000 

SELECT * FROM department

CREATE TABLE employees (id INT AUTO_INCREMENT PRIMARY KEY ,
    name VARCHAR(50),
    salary DECIMAL(10,2),
    birthday DATE,
    department_id INT(11) UNSIGNED DEFAULT 1, 
    Foreign Key (department_id) REFERENCES department(id) 
    ON DELETE SET DEFAULT
    ON UPDATE SET DEFAULT
)

DROP TABLE employees

INSERT INTO employees (name, salary, birthday, department_id) 
VALUES 
    ( "Rahimov Sardor", 50000, '1985-09-21', 1),
    ("Malik", 40000, "2000-03-05", 2),
    ("Sabriddin", 10000, "1995-04-12", 1),
    ("Ali", 15000, "2002-12-06", 2),
    ("Vali", 20000, "2003-04-30", 2),
    ("Solih", 20000, "2005-08-18", 1)

SELECT * FROM workers

TRUNCATE TABLE employees

SELECT * FROM department

DELETE FROM employees WHERE id=6

DELETE FROM department WHERE id=3    --(SET DEFAULT) O'CHIROLMAYDI CHUNKI POSTGRESS SQL DA ISHLAYDI 

DESCRIBE workers

ALTER TABLE workers ADD COLUMN email VARCHAR(50) FIRST  --yangi column qo'shish

ALTER TABLE workers MODIFY email TEXT   -- typeni o'zgartirish

ALTER TABLE workers CHANGE email phone VARCHAR(15)  -- columnni o'zgartirish

ALTER TABLE workers DROP phone   --columnni o'chirish

SELECT DISTINCT salary FROM workers -- DISTINCT duplicatlerni bitta qiladi


SELECT role FROM workers GROUP BY role

SELECT role, AVG(salary) AS AVG_salary FROM workers GROUP BY role

SELECT role, MAX(salary) AS MAX_salary FROM workers GROUP BY role

SELECT role, COUNT(salary) AS ROLE_WORKERS_COUNT FROM workers GROUP BY role

SELECT role, SUM(salary) AS sum
 FROM workers
 WHERE salary>11000
 GROUP BY role

SELECT role, SUM(salary) AS sum
 FROM workers
 GROUP BY role
 HAVING sum<31000

SELECT e.id, d.name FROM employees e, Department d

SELECT * FROM employees JOIN Department

SELECT * FROM employees CROSS JOIN Department

SELECT * FROM employees e
INNER JOIN Department d
ON d.id = e.department_id

SELECT * FROM Department d 
LEFT JOIN employees e
ON d.id = e.department_id

------------------  AMALIYOT --------------------------
CREATE TABLE projects (
 id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(30),
 project_client VARCHAR(100)
)

INSERT INTO projects (name, project_client) 
VALUES
('MedCRM', 'Abdullayev.A'),
('GreenGo', 'Xoshimov.F'), 
('ToshBus', 'Begimov.Q')

CREATE TABLE projects_worker (
    worker_id INT,
    Foreign Key (worker_id) REFERENCES workers(id),
    project_id INT UNSIGNED,
    Foreign Key (project_id) REFERENCES projects(id)
)

SELECT * FROM projects_worker 

SELECT * FROM projects

SELECT * FROM workers

SELECT w.name as Name, p.project_client as Project
FROM workers w 
JOIN projects_worker pw
ON w.id = pw.workers_id
JOIN projects p
ON p.id = pw.project_id
WHERE w.name LIKE "%l%"

-- Active: 1745317107782@@127.0.0.1@3306@fn21
SHOW TABLES

SHOW DATABASES

CREATE DATABASE IF NOT EXISTS fn2121;

DROP DATABASE fn212

SHOW TABLES

CREATE TABLE Department (id INT(11), name VARCHAR(100))

SHOW TABLES

DESCRIBE Department

INSERT INTO Department (id, name) VALUES (1, "Dasturlash")

INSERT INTO Department (id, name) VALUES (2, "Dizayn")

SELECT * FROM Department

DROP TABLE Department

CREATE TABLE Department (id INT(11) UNSIGNED AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY(id)
)

DESCRIBE Department

INSERT INTO Department (id, name) VALUES (3, "Dasturlash");

SELECT * FROM Department

INSERT INTO Department (id, name) VALUES (null, "Dizayn")

INSERT INTO Department (id, name) VALUES (2, "O'quv bo'limi")

DELETE FROM Department 

TRUNCATE Department

CREATE TABLE workers (id INT AUTO_INCREMENT PRIMARY KEY ,
    name VARCHAR(50),
    role VARCHAR(50),
    salary INT,
    birthday DATE)

INSERT INTO workers (name, role, salary, birthday) VALUES ( "Rahimov Sardor", "Director", 50000, '1985-09-21'),
    ("Malik", "Dasturchi", 40000, "2000-03-05"),
    ("Sabriddin", "Dizayner", 10000, "1995-04-12"),
    ("Ali", "Marketolog", 15000, "2002-12-06"),
    ("Vali", "Mobilograf", 20000, "2003-04-30"),
    ("Solih", "Dasturchi", 20000, "2005-08-18")

SELECT * FROM workers

SELECT name, role FROM workers

SELECT name as ism, role FROM workers

SELECT name as ism, role, (salary*1.1) as new_salary FROM workers WHERE role ="Dasturchi"

SELECT name as ism, role, (salary*1.1) as new_salary FROM workers WHERE name like "M%"

--ilike --> postgress uchun
SELECT name as ism, role, (salary*1.1) as new_salary FROM workers WHERE id IN (1, 3)

SELECT * FROM workers WHERE salary>500 AND salary<1600

SELECT * FROM workers WHERE birthday BETWEEN '2000-01-01' AND '2025-01-01'

SELECT * FROM workers ORDER BY salary DESC

SELECT * FROM workers ORDER BY role, salary ASC

SELECT * FROM workers LIMIT 2 OFFSET 2
--limit N OFFSET(Page-1)*N

SELECT COUNT(*) FROM workers

SELECT Min(salary) FROM workers

SELECT Max(salary) FROM workers

SELECT CONCAT('Ismi: ', name, '; Lavozimi: ', role) as description FROM workers

SELECT REPLACE(REPLACE(name, ' ', ''), '*', '') as new_name FROM workers
--mysql functions

SELECT * FROM workers ;
-------------------------------------------------------------------------------------------------
-- UNION 2 yoki undan ortiq so'rovalar natijasini birlashtiradi (vertikal)

CREATE TABLE old_workers (id INT AUTO_INCREMENT PRIMARY KEY ,
    name VARCHAR(50),
    role VARCHAR(50),
    old_salary INT,
    birthday DATE)

INSERT INTO old_workers (name, role, old_salary, birthday) VALUES ( "Rahimov Sardor", "Director", 50000, '1985-09-21'),
    ("Malik", "Dasturchi", 40000, "2000-03-05"),
    ("Sabriddin", "Dizayner", 10000, "1995-04-12"),
    ("Ali", "Marketolog", 15000, "2002-12-06"),
    ("Vali", "Mobilograf", 20000, "2003-04-30"),
    ("Solih", "Dasturchi", 20000, "2005-08-18")

SELECT * FROM old_workers

SELECT id, name, salary FROM workers WHERE salary>5000
UNION ALL
SELECT id, name, old_salary FROM old_workers WHERE old_salary>10000 

SELECT * FROM department

CREATE TABLE employees (id INT AUTO_INCREMENT PRIMARY KEY ,
    name VARCHAR(50),
    salary DECIMAL(10,2),
    birthday DATE,
    department_id INT(11) UNSIGNED DEFAULT 1, 
    Foreign Key (department_id) REFERENCES department(id) 
    ON DELETE SET DEFAULT
    ON UPDATE SET DEFAULT
);

DROP TABLE employees;

INSERT INTO employees (name, salary, birthday, department_id) 
VALUES 
    ( "Rahimov Sardor", 50000, '1985-09-21', 1),
    ("Malik", 40000, "2000-03-05", 2),
    ("Sabriddin", 10000, "1995-04-12", 1),
    ("Ali", 15000, "2002-12-06", 2),
    ("Vali", 20000, "2003-04-30", 2),
    ("Solih", 20000, "2005-08-18", 1)

SELECT * FROM workers

TRUNCATE TABLE employees

SELECT * FROM department

DELETE FROM employees WHERE id=6

DELETE FROM department WHERE id=3    --(SET DEFAULT) O'CHIROLMAYDI CHUNKI POSTGRESS SQL DA ISHLAYDI 

DESCRIBE workers

ALTER TABLE workers ADD COLUMN email VARCHAR(50) FIRST;  --yangi column qo'shish


ALTER TABLE workers MODIFY email TEXT ;  -- typeni o'zgartirish

ALTER TABLE workers CHANGE email phone VARCHAR(15)  ;-- columnni o'zgartirish

ALTER TABLE workers DROP phone ;  --columnni o'chirish

SELECT DISTINCT salary FROM workers ;-- DISTINCT duplicatlerni bitta qiladi


SELECT role FROM workers GROUP BY role;

SELECT role, AVG(salary) AS AVG_salary FROM workers GROUP BY role;

SELECT role, MAX(salary) AS MAX_salary FROM workers GROUP BY role;

SELECT role, COUNT(salary) AS ROLE_WORKERS_COUNT FROM workers GROUP BY role;

SELECT role, SUM(salary) AS sum
 FROM workers
 WHERE salary>11000
 GROUP BY role;

SELECT role, SUM(salary) AS sum
 FROM workers
 GROUP BY role
 HAVING sum<31000;

SELECT e.id, d.name FROM employees e, Department d;

SELECT * FROM employees JOIN Department;

SELECT * FROM employees CROSS JOIN Department;

SELECT * FROM employees e
INNER JOIN Department d
ON d.id = e.department_id;

SELECT * FROM Department d 
LEFT JOIN employees e
ON d.id = e.department_id;

------------------  AMALIYOT --------------------------
CREATE TABLE projects (
 id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(30),
 project_client VARCHAR(100)
)

INSERT INTO projects (name, project_client) 
VALUES
('MedCRM', 'Abdullayev.A'),
('GreenGo', 'Xoshimov.F'), 
('ToshBus', 'Begimov.Q')

CREATE TABLE projects_worker (
    worker_id INT,
    Foreign Key (worker_id) REFERENCES workers(id),
    project_id INT UNSIGNED,
    Foreign Key (project_id) REFERENCES projects(id)
)

SELECT * FROM projects_worker 

SELECT * FROM projects

SELECT * FROM workers

SELECT w.name as Name, p.project_client as Project
FROM workers w 
JOIN projects_worker pw
ON w.id = pw.workers_id
JOIN projects p
ON p.id = pw.project_id
WHERE w.name LIKE "%l%"

----------------------------------------------------------------------------------------

show TABLES;

SELECT *from workers;
SELECT *from Department;

SELECT * from departments;

SELECT salary , avg(salary)  from departments  WHERE salary > AVG(salary);


SELECT AVG(salary) as avg_salary FROM Departments;

---------------------------------------------------------

SELECT *from `workers` WHERE `department_id` =(
    SELECT `department_id` from `workers` WHERE `salary` =(
        SELECT MAX(`salary`) FROM `workers`
    )
);

----------------------------------------------------------


SELECT *,(
    SELECT AVG(`salary`) FROM `workers` 
    WHERE `workers` `department_id` = `Departments`.`id` and `salary` > 20000
);


ALTER Table employees ADD INDEX name_ind(name);

SHOW INDEX FROM employees;
EXPLAIN SELECT * from employees;

ALTER Table employees DROP INDEX name_ind;

SHOW TABLES;

SELECT *FROM workers;

SET AUTOCOMMIT =0;

START TRANSACTION;

DELETE from workers WHERE id=2;

ROLLBACK;

COMMIT;
SET AUTOCOMMIT = 1;


CREATE TABLE accounts (
    id INT PRIMARY KEY,
    name VARCHAR(30),
    balance DECIMAL(15,2)
)

INSERT INTO accounts(id,name,balance) VALUES
(1,"Nodir",20000),
(2,"Karim",15000),
(3,"Salim",25000),
(4,"Qodir",30000);

SELECT * FROM accounts;

start TRANSACTION ;

UPDATE accounts 
SET balance=balance - 1000 WHERE id=1;

SAVEPOINT AFTER_NODIR_UPDATEC

UPDATE accounts 
SET balance=balance + 1000 WHERE id=2;
SAVEPOINT AFTER_KARIM_UPDATE
ROLLBACK;
ROLLBACK TO AFTER_NODIR_UPDATE;
COMMIT;



-- SHOW TABLES;
-- SELECT *FROM departmentS;
-- SELECT *FROM department;
-- SELECT *FROM employees;
-- -- SELECT *FROM old_workers;
-- SELECT *FROM products;

-- SELECT category , COUNT(*) AS 'PROJECTS' FROM products GROUP BY category;
CREATE TABLE workers (
  id int(11) unsigned AUTO_INCREMENT,
  name VARCHAR(128),
  PRIMARY KEY(id)
)

INSERT INTO workers (name) VALUES
("Rahimov Sardor"),
("Komilov Mansur"),
("Salimov Botir"),
("Davronov Sobir")

CREATE TABLE projects_workers (
  worker_id int(11),
  project_id int(11)
)

INSERT INTO projects_workers (worker_id, project_id) VALUES
(1, 1),
(1, 2),
(2, 1),
(3, 2),
(4, 1),
(4, 2);

CREATE TABLE projects (
  id int(11) unsigned AUTO_INCREMENT,
  name varchar(255) DEFAULT NULL,
  project_client VARCHAR(64),
  PRIMARY KEY (id)
);

INSERT INTO projects (name, project_client) VALUES
("MedCRM",  "Abdullayev A."),
("GreenGo", "Xoshimov F"),
("Toshbus", "Begimov Q.")

SELECT W.id, W.name, COUNT(PW.project_id) AS 
PROJECT_COUNT FROM workers W JOIN projects_workers PW ON W.id=PW.worker_id GROUP BY W.ID, NAME HAVING project_count > 1

/*
union vertikal  holatda qoshib beradi odatda
 foydalanganda column lar soni bir hil bolishi kk



*/


