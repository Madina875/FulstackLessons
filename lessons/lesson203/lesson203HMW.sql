CREATE DATABASE University;
USE University;

CREATE TABLE department(id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT , name VARCHAR(50));
INSERT INTO department(name) VALUES ("Informatika"),("Matematika ta'lim");

CREATE TABLE City(id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,name VARCHAR(100));
INSERT INTO City(name) VALUES
("Toshkent"),
("Samarqand"),
("Buxoro"),
("Farg'ona"),
("Andijon");

CREATE TABLE IF NOT EXISTS Course_Group(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT ,
  name VARCHAR(100),
  department_id INT unsigned,
  Foreign Key(department_id) REFERENCES department(id)
);
INSERT INTO Course_Group(name, department_id) VALUES
("Web Dasturlash", 1),
("Mobil Dasturlash", 2),
("Tizimlar", 1);

CREATE TABLE IF NOT EXISTS Student(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT ,
  name VARCHAR(100),
  city_id INT unsigned,
  Foreign Key(city_id) REFERENCES City(id),
  course_group_id INT UNSIGNED,
  FOREIGN KEY(course_group_id) REFERENCES Course_Group(id),
  department_id INT unsigned,
  Foreign Key(department_id) REFERENCES department(id)
);

INSERT INTO Student(name, city_id, course_group_id, department_id) VALUES
("Anvar", 1,1,2),
("Anvar", 1,1,1),
("Anvar", 1,1,1),
("Anvar", 2,1,1),
("Anvar", 1,1,1),
("Shodibek",2,2,1),
("Anvar", 1,1,1),
("Anvar", 1,1,1),
("Shodibek",2,2,1),
("Xursand", 3,3,1);

SELECT name FROM Student WHERE name LIKE "A%";


SELECT name from student where city_id=2 and department_id=1;