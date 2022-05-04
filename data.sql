

.headers ON
.mode csv

DROP TABLE IF EXISTS Cars;
DROP TABLE IF EXISTS Owners;

CREATE TABLE Cars(
  Car_ID INT PRIMARY KEY,
  Year INT,
  Make TEXT,
  Model TEXT,
  Racer_Turbo INT,
  Racer_Supercharged INT,
  Racer_Performance INT,
  Racer_Horsepower INT,
  Car_Overall INT,
  Engine_Modifications INT,
  Engine_Performance INT,
  Engine_Chrome INT,
  Engine_Detailing INT,
  Engine_Cleanliness INT,
  Body_Frame_Undercarriage INT,
  Body_Frame_Suspension INT,
  Body_Frame_Chrome INT,
  Body_Frame_Detailing INT,
  Body_Frame_Cleanliness INT,
  Mods_Paint INT,
  Mods_Body INT,
  Mods_Wrap INT,
  Mods_Rims INT,
  Mods_Interior INT,
  Mods_Other INT,
  Mods_ICE INT,
  Mods_Aftermarket INT,
  Mods_WIP INT,
  Mods_Overall INT
);

CREATE TABLE Owners(

  Car_ID INT PRIMARY KEY,
  Name TEXT,
  Email TEXT
);

CREATE TEMP TABLE CSVData(
    Timestamp DATETIME,
    Email TEXT,
    Name TEXT,
    Year INT,
    Make TEXT,
    Model TEXT,
    Car_ID INT,
    Judge_ID TEXT,
    Judge_Name TEXT,
    Racer_Turbo INT,
    Racer_Supercharged INT,
    Racer_Performance INT,
    Racer_Horsepower INT,
    Car_Overall INT,
    Engine_Modifications INT,
    Engine_Performance INT,
    Engine_Chrome INT,
    Engine_Detailing INT,
    Engine_Cleanliness INT,
    Body_Frame_Undercarriage INT,
    Body_Frame_Suspension INT,
    Body_Frame_Chrome INT,
    Body_Frame_Detailing INT,
    Body_Frame_Cleanliness INT,
    Mods_Paint INT,
    Mods_Body INT,
    Mods_Wrap INT,
    Mods_Rims INT,
    Mods_Interior INT,
    Mods_Other INT,
    Mods_ICE INT,
    Mods_Aftermarket INT,
    Mods_WIP INT,
    Mods_Overall INT

);

.import data_lab4/data.csv CSVData

INSERT INTO Cars (Car_ID, Year, Make, Model,Racer_Turbo, Racer_Supercharged, Racer_Performance, Racer_Horsepower,
Car_Overall,Engine_Modifications, Engine_Performance, Engine_Chrome, Engine_Detailing, Engine_Cleanliness,
Body_Frame_Undercarriage, Body_Frame_Suspension, Body_Frame_Chrome, Body_Frame_Detailing, Body_Frame_Cleanliness,
Mods_Paint, Mods_Body, Mods_Wrap, Mods_Rims, Mods_Interior, Mods_Other, Mods_ICE, Mods_Aftermarket, Mods_WIP,Mods_Overall)
SELECT Car_ID, Year, Make, Model,Racer_Turbo, Racer_Supercharged, Racer_Performance, Racer_Horsepower,Car_Overall,Engine_Modifications, Engine_Performance, Engine_Chrome, Engine_Detailing, Engine_Cleanliness,Body_Frame_Undercarriage, Body_Frame_Suspension, Body_Frame_Chrome, Body_Frame_Detailing, Body_Frame_Cleanliness,Mods_Paint, Mods_Body, Mods_Wrap, Mods_Rims, Mods_Interior, Mods_Other, Mods_ICE, Mods_Aftermarket, Mods_WIP,Mods_Overall
FROM CSVData WHERE 1;
DELETE FROM Cars WHERE Car_ID='Car_ID';

INSERT INTO Owners (Car_ID, Name, Email) SELECT Car_ID, Name, Email
FROM CSVData WHERE 1;

DELETE FROM Owners WHERE Car_ID='Car_ID';

DROP TABLE CSVData;
