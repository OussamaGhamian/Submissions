problem 0: 
select * from students
problem 1:
select name from students
problem 2:
select * from students where age > 30
problem 3:
select name from students where age = 30 and gender = 'F'
problem 4:
select points from students where name like 'Alex' 
problem 5:
insert into students values(8,"Oussama" , 22 , 'M' , 999)
problem 6:
update students
set points = 306
where name like 'Basma'
problem 7:
update students
set points = points - 10
where name like 'Alex'

//creating a table
create table graduates
(Id integer NOT NULL primary key AUTOINCREMENT,
Name varchar(255) NOT NULL unique,
Age integer,
Gender varchar(255),
Points integer,
Graduation date
);
//problem 1&2:
insert into graduates (Name , Age , Gender , Points, Graduation)
values('Layal' , 18,'F',350,'08/09/2018')
//problem 3:
delete from students where id = 4

//joins:
//problem 1:
select e.Name as empName, c.Name as compName, c.date as compDate 
from employees as e , companies as c
where e.company = c.name
//problem 2:
select e.Name
from employees as e, companies as c
where e.Company = c.Name and c.Date < 2000
problem 3:
select e.company
from employees as e
where e.Role like 'Graphic Designer'

//Count and Filter:
problem1 : 
select Name , max(Points)
from students
problem2 : 
select avg(Points) as AVG_OF_POINTS
from students
problem3 : 
select count(name) as NbrOfStudentsHave500Pts
from students
where points = 500
problem4 :
select s.Name
from students as s
where s.Name like 's%'
problem5 : 
select *
 from students as s 
 order by points DESC
