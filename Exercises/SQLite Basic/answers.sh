"select * from students"

"select name from students"

"select * from students where age > 30"

"select name from students where age = 30 and gender = 'F'"

"select points from students where name like 'Alex' "

"insert into students values(8,`Oussama` , 22 , 'M' , 999)"

"update students
set points = 306
where name like 'Basma'"

"update students
set points = points - 10
where name like 'Alex'"


"create table graduates
(Id integer NOT NULL primary key AUTOINCREMENT,
Name varchar(255) NOT NULL unique,
Age integer,
Gender varchar(255),
Points integer,
Graduation date
);"

"insert into graduates (Name , Age , Gender , Points, Graduation)
values('Layal' , 18,'F',350,'08/09/2018')"

"delete from students where id = 4"


"select e.Name as empName, c.Name as compName, c.date as compDate 
from employees as e , companies as c
where e.company = c.name"

"select e.Name
from employees as e, companies as c
where e.Company = c.Name and c.Date < 2000"

"select e.company
from employees as e
where e.Role like 'Graphic Designer'"


"select Name , max(Points)
from students"

"select avg(Points) as AVG_OF_POINTS
from students"
 
"select count(name) as NbrOfStudentsHave500Pts
from students
where points = 500"

"select s.Name
from students as s
where s.Name like 's%'"
 
"select *
 from students as s 
 order by points DESC"
