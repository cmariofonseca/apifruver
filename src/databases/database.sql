CREATE DATABASE products;
/* \l => para listar databases */

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
/* \c products => para conectarme a la tabla */
/* \dt => para listar las tablas */

INSERT INTO products(id_product, name, measure, category, price, amount, description) VALUES
    (01, 'brocoli', 'kilos', 'verduras', 5300, 20, ''),
    (02, 'cebolla', 'kilos', 'verduras', 2000, 15, ''),
    (03, 'coco', 'kilos', 'frutas', 3000, 18, ''),
    (04, 'coliflor', 'kilos', 'verduras', 5700, 20, ''),
    (05, 'durazno', 'kilos', 'frutas', 3900, 20, ''),
    (06, 'kiwi', 'kilos', 'frutas', 1300, 20, ''),
    (07, 'lechuga', 'kilos', 'verduras', 1900, 20, ''),
    (08, 'limon', 'kilos', 'frutas', 2900, 24, ''),
    (09, 'maiz', 'kilo', 'verduras', 2500, 25, ''),
    (10, 'mango', 'kilos', 'frutas', 1500, 35, ''),
    (11, 'Manzana', 'kilos', 'frutas', 7000, 9, ''),
    (12, 'patata', 'kilos', 'verduras', 3000, 20, ''),
    (13, 'piña', 'kilos', 'frutas', 3700, 15, ''),
    (14, 'platano', 'kilos', 'verduras', 600, 50, ''),
    (15, 'tomate', 'kilos', 'verduras', 4000, 15, ''),
    (16, 'zanahoria', 'kilos', 'verduras', 2200, 12, '');
/* SELECT * FROM products; => para listar los datos */
