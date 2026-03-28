export function parseCSV(csvText) {
  if (!csvText || csvText.trim() === "") return [];
  const lines = csvText.trim().split(/\r\n|\n/);
  if (lines.length === 0) return [];

  const firstLine = lines[0];
  const separator = firstLine.includes(",") ? "," : ";";
  const headers = firstLine
    .split(separator)
    .map((h) => h.trim().toLowerCase().replace(/^"|"$/g, ""));

  const headerMap = {
    titulo: "title",
    precio: "price",
    ubicacion: "location",
    tipo: "propertyType",
    categoria: "category",
    sanitarios: "baths",
    habitaciones: "beds",
    medidas: "sqft",
    descripcion: "description",
    imagen1: "image1",
    imagen2: "image2",
    imagen3: "image3",
    imagen4: "image4",
    imagen5: "image5",
    imagen6: "image6",
    destacada: "featured",
  };

  const properties = [];

  for (let i = 1; i < lines.length; i++) {
    const currentLine = lines[i];
    const values = [];
    let inQuotes = false;
    let currentValue = "";

    for (const char of currentLine) {
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === separator && !inQuotes) {
        values.push(currentValue.replace(/^"|"$/g, "").trim());
        currentValue = "";
      } else {
        currentValue += char;
      }
    }
    values.push(currentValue.replace(/^"|"$/g, "").trim());

    if (values.length < 2) continue;

    const obj = {
      id: `prop-${i}`,
      beds: 0,
      sqft: "Consultar",
      images: [],
      isFeatured: false,
    };

    headers.forEach((header, index) => {
      const mappedKey = headerMap[header];
      if (mappedKey && values[index]) {
        obj[mappedKey] = values[index];
      }
    });

    if (obj.title) {
      const rawImages = [obj.image1, obj.image2, obj.image3, obj.image4, obj.image5, obj.image6];
      obj.images = rawImages.filter((img) => img && img.trim() !== "");

      if (obj.images.length === 0) {
        obj.images = [];
      }
      obj.image = obj.images[0];

      if (obj.price) {
        const numericPrice = parseFloat(obj.price.replace(/[^0-9.]/g, ""));
        if (!isNaN(numericPrice)) {
          const isUSD = obj.price.toUpperCase().includes("USD");
          const isMonthly =
            obj.price.toLowerCase().includes("/mes") ||
            obj.title.toLowerCase().includes("renta");
          const formatted = numericPrice.toLocaleString("es-MX", {
            style: "currency",
            currency: isUSD ? "USD" : "MXN",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          });
          obj.priceFormatted = `${formatted} ${isUSD ? "USD" : "MXN"}${isMonthly ? "/Mes" : ""}`;
        } else {
          obj.priceFormatted = obj.price;
        }
      }

      const titleLower = obj.title.toLowerCase();
      const priceLower = (obj.price || "").toLowerCase();
      if (titleLower.includes("renta") || priceLower.includes("/mes")) {
        obj.operationType = "Renta";
      } else {
        obj.operationType = "Venta";
      }

      if (obj.category) {
        obj.category = obj.category.toLowerCase().trim();
      } else {
        if (
          titleLower.includes("local") ||
          titleLower.includes("oficina") ||
          titleLower.includes("bodega")
        ) {
          obj.category = "comercial";
        } else {
          obj.category = "residencial";
        }
      }

      if (obj.sqft) {
        const sqftNum = obj.sqft.match(/(\d+[\.,]?\d*)/);
        if (sqftNum) {
          obj.sqftDisplay = sqftNum[0];
          obj.sqftFull = obj.sqft;
        } else {
          obj.sqftDisplay = obj.sqft;
          obj.sqftFull = obj.sqft;
        }
      }

      if (
        obj.featured &&
        (obj.featured.toLowerCase() === "true" ||
          obj.featured.toLowerCase() === "verdadero" ||
          obj.featured === "1")
      ) {
        obj.isFeatured = true;
      }

      properties.push(obj);
    }
  }
  return properties;
}
