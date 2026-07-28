/*
-- 1. Escribe una consulta que recupere los Vuelos (flights) 
y su identificador que figuren con status On Time.
*/
SELECT 
	flight_id   AS id_vuelo, 
	status      AS estado
FROM flights
WHERE status = 'On Time';

/* 
2. Escribe una consulta que extraiga todas las columnas de la tabla bookings y refleje todas las reservas 
que han supuesto una cantidad total mayor a 1.000.000 (Unidades monetarias).
Nota: las tablas son públicas de Rusia, por tanto son Rublos sus unidades monetarias
*/

SELECT 
	*
FROM bookings
WHERE total_amount > 1000000
ORDER BY total_amount DESC;

-- No hay ninguna reserva con una cantidad superior al millón. 
-- Si eliminamos la cláusula WHERE, ordenados de mayor a menor, vemos que el TOP de rublos son 992225.00

/*
3. Escribe una consulta que extraiga todas las columnas de los datos de los modelos de aviones 
disponibles (aircraft_data). Puede que os aparezca en alguna actualización como "aircrafts_data", 
revisad las tablas y elegid la que corresponda.
*/

SELECT
	*
FROM airplanes_data
ORDER BY range DESC;

-- Elijo el rango para darles una ordenación

/*
4. Con el resultado anterior visualizado previamente, escribe una consulta que extraiga los 
identificadores de vuelo que han volado con un Boeing 737. (Código Modelo Avión = 733)
*/

-- No se si es una errata, porque el codigo 733 no corresponde a ningún avión. El código del 737 es 7M7

-- Cruzamos los datos con la tabla de las rutas, que contiene los códigos de los aviones
SELECT
	f.flight_id 	AS id_vuelo,
	r.airplane_code AS codigo_avion
FROM flights		AS f
INNER JOIN routes	AS r
	ON f.route_no = r.route_no
GROUP BY f.flight_id, r.airplane_code
HAVING r.airplane_code = '7M7'
ORDER BY f.flight_id DESC;

-- Aquí pongo la consulta con el código fuese 733, que no devuelve resultados

SELECT
	f.flight_id 	AS id_vuelo,
	r.airplane_code AS codigo_avion
FROM flights		AS f
INNER JOIN routes	AS r
	ON f.route_no = r.route_no
GROUP BY f.flight_id, r.airplane_code
HAVING r.airplane_code = '733'
ORDER BY f.flight_id DESC;

/*
5. Escribe una consulta que te muestre la información detallada de los tickets que han comprado 
las personas que se llaman Irina.
*/

SELECT
	*
FROM tickets
WHERE passenger_name LIKE '%Irina%';

-- Uso % por delante y por detrás por si hay algun tipo de nombre compuesto tipo Maria Irina o algo así 
-- (no creo siendo rusos pero nunca se sabe)

/*
6. Mostrar las ciudades con más de un aeropuerto.
*/

SELECT 
	COUNT(city)		AS numero_aeropuertos,
	ad.city			AS ciudad
FROM airports_data	AS ad
GROUP BY ad.city
HAVING COUNT(city) > 1
ORDER BY COUNT(city) DESC;

-- Comprobamos que la consulta está bien hecha, por ejemplo viendo si hay 6 aeropuertos en Chicago

SELECT
	*
FROM airports_data
WHERE city ->> 'en' = 'Chicago';

/*
7. Mostrar el número de vuelos por modelo de avión.
*/

SELECT
    ad.model		 		AS modelo_avion,
    COUNT(*) 				AS numero_vuelos
FROM flights 				AS f
INNER JOIN routes			AS r
    ON f.route_no = r.route_no
    -- Si no comprobamos que la fecha del vuelo esté dentro del periodo
    -- de validez de la ruta con <@, al cruzar las tablas nos salen vuelos duplicados
	-- y se infla artificialmente la cantidad total de vuelos
    AND f.scheduled_departure <@ r.validity
INNER JOIN airplanes_data 	AS ad
    ON r.airplane_code = ad.airplane_code
GROUP BY ad.model 
ORDER BY numero_vuelos DESC;

-- Igual se podía hacer más facil, no se, me he rallado mucho

/*
8. Reservas con más de un billete (varios pasajeros).
*/

SELECT
	COUNT(ticket_no),
	book_ref	AS reserva				
FROM tickets
GROUP BY book_ref
HAVING COUNT(ticket_no) > 1
ORDER BY COUNT(ticket_no) DESC;

/*
9. Vuelos con retraso de salida superior a una hora.
*/

SELECT
    flight_id								AS id_vuelo,
    route_no								AS ruta,
    scheduled_departure						AS salida_esperada,
    actual_departure						AS salida_real,
    actual_departure - scheduled_departure 	AS retraso
FROM flights
-- Filtramos por si acaso hay nulos
WHERE actual_departure IS NOT NULL
    AND actual_departure - scheduled_departure > INTERVAL '1 hour'
ORDER BY retraso DESC;
