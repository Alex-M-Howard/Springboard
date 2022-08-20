-- write your queries here
--1
SELECT * 
    FROM owners 
    FULL JOIN vehicles 
    ON owners.id = vehicles.owner_id;


--2
SELECT o.first_name, o.last_name, COUNT(v.owner_id) AS count
    FROM owners o
    JOIN vehicles v
    ON o.id = v.owner_id
    GROUP BY o.first_name, o.last_name
    ORDER BY count;

--3
SELECT o.first_name, o.last_name, ROUND(AVG(v.price)::numeric, 0) AS average_price, COUNT(v.owner_id) AS count
    FROM owners o
    JOIN vehicles v
    ON o.id = v.owner_id
    GROUP BY o.first_name, o.last_name
    HAVING COUNT(v.owner_id) > 1 AND AVG(v.price) > 10000
    ORDER BY count DESC;
