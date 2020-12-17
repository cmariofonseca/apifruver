CREATE DATABASE apifruver;
/* \l => para listar databases */
/* \c apifruver => para conectarme a la base de datos */

CREATE TABLE products (
    id_product INTEGER NOT NULL,
    name VARCHAR(30) NOT NULL,
    measure VARCHAR(30),
    category VARCHAR(30),
    price INTEGER NULL,
    amount INTEGER NOT NULL,
    description VARCHAR(255) NULL,
    PRIMARY KEY ( id_product)
);
/* \dt => para listar las tablas */

INSERT INTO products(id_product, name, measure, category, price, amount, description) VALUES
    (01, 'Brocoli', 'kilos', 'verduras', 5300, 20, ''),
    (02, 'Cebolla', 'kilos', 'verduras', 2000, 15, ''),
    (03, 'Coco', 'kilos', 'frutas', 3000, 18, ''),
    (04, 'Coliflor', 'kilos', 'verduras', 5700, 20, ''),
    (05, 'Durazno', 'kilos', 'frutas', 3900, 20, ''),
    (06, 'Kiwi', 'kilos', 'frutas', 1300, 20, ''),
    (07, 'Lechuga', 'kilos', 'verduras', 1900, 20, ''),
    (08, 'Limon', 'kilos', 'frutas', 2900, 24, ''),
    (09, 'Maiz', 'kilo', 'verduras', 2500, 25, ''),
    (10, 'Mango', 'kilos', 'frutas', 1500, 35, ''),
    (11, 'Manzana', 'kilos', 'frutas', 7000, 9, ''),
    (12, 'Patata', 'kilos', 'verduras', 3000, 20, ''),
    (13, 'Piña', 'kilos', 'frutas', 3700, 15, ''),
    (14, 'Platano', 'kilos', 'verduras', 600, 50, ''),
    (15, 'Tomate', 'kilos', 'verduras', 4000, 15, ''),
    (16, 'Zanahoria', 'kilos', 'verduras', 2200, 12, '');
/* SELECT * FROM products; => para listar los datos */

CREATE TABLE providers (
    id_provider INTEGER NOT NULL,
    name VARCHAR(30) NOT NULL,
    address VARCHAR(30) NULL,
    telephone INTEGER NULL,
    PRIMARY KEY (id_provider)
);

INSERT INTO providers(id_provider, name, address, telephone) VALUES 
    (1, 'Legumbres Yurani', 'Calle 34 N 20 Medellin', 4446521),
    (2, 'Naranjas Don Juan', 'Vrda La Primavera Marinilla', 4446539),
    (3, 'Frutas frecas', 'Carrera 23 Medellin', 4423554),
    (4, 'Central de legumbres', 'Calle 30 Medellin', 5447521),
    (5, 'Legumbreria mas barata', 'Calle 78N 76A-15 Medellin', 5494231);
