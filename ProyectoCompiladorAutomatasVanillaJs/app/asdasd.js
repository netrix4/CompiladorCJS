// Función para generar un número aleatorio entre un rango
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Función para generar una fecha aleatoria en el año actual
  function getRandomDate() {
    const year = new Date().getFullYear();
    const month = getRandomNumber(1, 12);
    const day = getRandomNumber(1, 28); // Limitado a 28 para simplificar
    return new Date(`${year}-${month}-${day}`);
  }
  
  // Función para generar una tabla de ventas con información aleatoria
  function generateSalesTable(rows) {
    const salesTable = [];
  
    for (let i = 0; i < rows; i++) {
      const sale = {
        ID: i + 1,
        Product: `Product ${i + 1}`,
        Quantity: getRandomNumber(1, 10),
        Price: getRandomNumber(10, 100),
        Date: getRandomDate().toLocaleDateString(),
        Total: 0, // Se calculará más adelante
      };
  
      sale.Total = sale.Quantity * sale.Price; // Calcular el total
  
      salesTable.push(sale);
    }
  
    return salesTable;
  }
  
  // Generar una tabla de ventas con 5 filas (puedes ajustar según sea necesario)
  const ventasAleatorias = generateSalesTable(500);
  
  // Mostrar la tabla en la consola
  console.table(ventasAleatorias);
  