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


