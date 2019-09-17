--run in console: sqlite3 test.db < keywords.sql

DROP TABLE cats;
DROP TABLE dogs;
DROP TABLE owners;
DROP TABLE parks;
DROP TABLE owner_parks;

CREATE TABLE cats (id INTEGER PRIMARY KEY, name TEXT);

INSERT INTO cats (name) VALUES ('Garfield'), ('Morris'), ('Roxy');

CREATE TABLE dogs (id INTEGER PRIMARY KEY, name TEXT, age INTEGER, breed TEXT);

INSERT INTO dogs (name, age, breed) VALUES ('Pumpkin', 5, 'Yellow Lab');
INSERT INTO dogs (name, age, breed) VALUES ('Dude', 10, 'Beagle');
INSERT INTO dogs (name, age, breed) VALUES ('Beau', 8, 'Black Lab');
INSERT INTO dogs (name, age, breed) VALUES ("Santa's Little Helper", 3, 'Greyhound');
INSERT INTO dogs (name, age, breed) VALUES ('Malta', 1, 'Mutt');

SELECT id, name, age, breed FROM dogs;

SELECT * FROM dogs; --selects all values

SELECT DISTINCT name FROM dogs; --selects only unique values

SELECT * FROM dogs WHERE name = 'Beau'; --selects all columns for specified row
SELECT * FROM dogs WHERE age > 7;

UPDATE dogs SET name = 'Mighty P' WHERE name = 'Pumpkin';

INSERT INTO dogs (name, age, breed) VALUES ('Fido', 15, 'Mutt');
DELETE FROM dogs WHERE name = 'Fido';

ALTER TABLE dogs ADD COLUMN owner_id INTEGER;

UPDATE dogs SET owner_id = 1; --if you exclude WHERE, it will updates all rows!

UPDATE dogs SET owner_id = 2 WHERE name = 'Malta';
UPDATE dogs SET owner_id = 3 WHERE name = 'Dude';
UPDATE dogs SET owner_id = 3 WHERE name = "Santa's Little Helper";

SELECT * FROM dogs ORDER BY age;
SELECT * FROM dogs ORDER BY age DESC; --descending, ASC also option

SELECT * FROM dogs ORDER BY age DESC LIMIT 1; --by limiting results to one, selects the oldest

SELECT name FROM dogs WHERE age BETWEEN 4 and 6;

SELECT cats.name FROM cats UNION SELECT dogs.name FROM dogs;

--querying NULL
INSERT INTO dogs (name) VALUES ('Rover');
SELECT name FROM dogs WHERE breed IS NULL;
DELETE FROM dogs WHERE name = 'Rover';

--aggregate function: COUNT

SELECT COUNT(owner_id) FROM dogs WHERE owner_id = 1;

SELECT owner_id, COUNT(owner_id) FROM dogs GROUP BY owner_id;

SELECT cats.name, dogs.name FROM cats, dogs;

--aggregate function: AVG

SELECT AVG(age) FROM dogs;

--other aggregates: SUM, MIN, MAX

--Table relations
CREATE TABLE owners (id INTEGER PRIMARY KEY, name TEXT);
INSERT INTO owners (name) VALUES ('Alan'), ('Brian'), ('Chris');
INSERT INTO dogs (name, age, breed) VALUES ('Solo', 7, 'Boxer'); --creating dog w/o an owner to illustrate JOIN types

SELECT dogs.name, owners.name AS owner FROM dogs INNER JOIN owners ON dogs.owner_id = owners.id;
--only dogs with foreign ids will be included in this list

SELECT dogs.name, owners.name AS owner FROM dogs LEFT OUTER JOIN owners ON dogs.owner_id = owners.id;
--LEFT JOIN (LEFT OUTER JOIN) will return all rows on left side, and matching rows on right side
--in this case, 'Solo', the dog w/o an owner_id, will still be returned

--sqlite3 doesn't support RIGHT OUTER JOIN or FULL OUTER JOIN, but works the same in principle
--RIGHT OUTER JOIN will return ALL owners, and only matching dogs
--FULL OUTER JOIN will return all matches, and all orphans on either side

CREATE TABLE parks (id INTEGER PRIMARY KEY, name TEXT);

--let's make a table of parks that owners visit (many to many)
INSERT INTO parks (name) VALUES ('Central Park'), ('Prospect Park'), ('Flushing Meadows');

CREATE TABLE owner_parks (owner_id INTEGER, park_id INTEGER);
INSERT INTO owner_parks (owner_id, park_id) VALUES (1, 2);
INSERT INTO owner_parks (owner_id, park_id) VALUES (1, 3);
INSERT INTO owner_parks (owner_id, park_id) VALUES (2, 1);
INSERT INTO owner_parks (owner_id, park_id) VALUES (3, 1);
INSERT INTO owner_parks (owner_id, park_id) VALUES (3, 3);

--list owners who vist park id = 3
SELECT owners.name
FROM owners
INNER JOIN owner_parks
ON owners.id = owner_parks.owner_id
WHERE owner_parks.park_id = 3;

--ORDER BY, GROUP BY, LIMIT, HAVING (add examples later)

--PROPER ORDERING OF KEYWORDS:

-- SELECT
-- FROM
-- JOIN
--   ON
-- WHERE
-- GROUP BY
-- HAVING
-- ORDER BY
-- LIMIT

SELECT dogs.name, dogs.owner_id, owner_parks.park_id
FROM dogs
INNER JOIN owners
  ON dogs.owner_id = owners.id
INNER JOIN owner_parks
  ON dogs.owner_id = owner_parks.owner_id
WHERE owner_parks.park_id = 3;

--something to keep in mind when working with multiple joins is that each join is working
--off of an intermediate derived table that was created just before it

--example below traverses several tables to arrive at a where statement from the final join

SELECT dogs.name, owners.name, owner_parks.park_id, parks.name
FROM dogs
INNER JOIN owners
  ON dogs.owner_id = owners.id
INNER JOIN owner_parks
  ON dogs.owner_id = owner_parks.owner_id
INNER JOIN parks
  ON owner_parks.park_id = parks.id
WHERE parks.name = 'Central Park';

--returns a list of parks and the total number of visiting dogs

SELECT parks.name AS Park, COUNT(dogs.id) AS 'Visiting Dogs'
FROM dogs
INNER JOIN owners
  ON dogs.owner_id = owners.id
INNER JOIN owner_parks
  ON dogs.owner_id = owner_parks.owner_id
INNER JOIN parks
  ON owner_parks.park_id = parks.id
GROUP BY parks.name;
