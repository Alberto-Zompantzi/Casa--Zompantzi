const productos = [
  { img: "Images/bolsaaguinaldo.jpg", alt: "Producto 1" },
  { img: "Images/bolsaaguinaldoplas.jpg", alt: "Producto 2" },
  { img: "Images/LuzDeBengala.jpg", alt: "Producto 3" },
  { img: "Images/dmantelnew.jpeg", alt: "Producto 5" },
  { img: "Images/manteles.jpg", alt: "Producto 6" },
  { img: "Images/mantelmascota.jpg", alt: "Producto 7" },
  { img: "Images/Bolsa Celofán.jpg", alt: "Producto 8" },
  { img: "Images/Cortinas Cumple.jpg", alt: "Producto 9" },
  { img: "Images/Cortinas cumple 2.jpg", alt: "Producto 10" },
  { img: "Images/Cortinas Cumple 3.jpg", alt: "Producto 11" },
  { img: "Images/Impermeables.jpg", alt: "Producto 12" },
  { img: "Images/Palo Brocheta.jpg", alt: "Producto 13" },
  { img: "Images/Rompecabezas Teziutlán.jpg", alt: "Producto 14" },
  { img: "Images/Rompecabezas Chignautla.jpg", alt: "Producto 15" },
  { img: "Images/Sticker Chignautla.jpg", alt: "Producto 16" },
  { img: "Images/Sticker Teziutlán 3.jpg", alt: "Producto 17" },
  { img: "Images/Sticker Teziutlán.jpg", alt: "Producto 18" },
  { img: "Images/Stickers Teziutlán 2.jpg", alt: "Producto 19" },
  { img: "Images/Tazas Chignautla.jpg", alt: "Producto 20" },
  { img: "Images/Tazas Teziután.jpg", alt: "Producto 21" },
  { img: "Images/Tazas Teziutlán 2.jpg", alt: "Producto 22" },
  { img: "Images/Festón Bodega.jpg", alt: "Producto 23" },
  { img: "Images/01.jpg", alt: "Producto 24" },
  { img: "Images/charomesamadera-encino-2.jpg", alt: "Producto 25" },
  {
    img: "Images/D_NQ_NP_624337-MLM50870179266_072022-O.webp",
    alt: "Producto 26",
  },
  {
    img: "Images/D_NQ_NP_701133-MLM79556296842_102024-O.webp",
    alt: "Producto 27",
  },
  {
    img: "Images/D_NQ_NP_796687-MLM72064389052_102023-O.webp",
    alt: "Producto 28",
  },
  {
    img: "Images/D_NQ_NP_827216-MLM83286165725_032025-O-bolsa-de-plastico-poliseda-camiseta-reyma-chica-25x40-25-kg.webp",
    alt: "Producto 29",
  },
  {
    img: "Images/D_NQ_NP_883443-MLM32520172015_102019-O.webp",
    alt: "Producto 30",
  },
  {
    img: "Images/D_NQ_NP_941205-MLM70193516116_062023-O.webp",
    alt: "Producto 31",
  },
  {
    img: "Images/D_NQ_NP_956197-MLM54246666357_032023-O.webp",
    alt: "Producto 32",
  },
  {
    img: "Images/Gemini_Generated_Image_apciteapciteapci.png",
    alt: "Producto 33",
  },
  {
    img: "Images/Gemini_Generated_Image_fo416dfo416dfo41.png",
    alt: "Producto 34",
  },
  {
    img: "Images/Gemini_Generated_Image_oxip4uoxip4uoxip.png",
    alt: "Producto 36",
  },
  { img: "Images/OIP (1).jpeg", alt: "Producto 37" },
  { img: "Images/OIP (2).jpeg", alt: "Producto 38" },
  { img: "Images/OIP (3).jpeg", alt: "Producto 39" },
  { img: "Images/OIP.jpeg", alt: "Producto 40" },
  {
    img: "Images/rollo-de-plastico-de-polietileno-negro-3x100m-calibre-600-peso-aprox-50-55kg.jpg",
    alt: "Producto 41",
  },
  { img: "Images/rollos-de-plastico-1.jpg", alt: "Producto 42" },
  { img: "Images/velas2.jpg", alt: "Producto 43" },
  { img: "Images/vasosdesechables.jpg", alt: "Producto 44" },
  { img: "Images/platos2.jpg", alt: "Producto 45" },
  { img: "Images/pirotecnia.jpg", alt: "Producto 46" },
  { img: "Images/papelpicado.jpg", alt: "Producto 47" },
  { img: "Images/mantelnavideño.jpg", alt: "Producto 48" },
  { img: "Images/mantelnavideño2.jpg", alt: "Producto 49" },
  { img: "Images/mantelnavideño3.jpg", alt: "Producto 50" },
  { img: "Images/luz_pastel.jpeg", alt: "Producto 51" },
  { img: "Images/cucharasop.jpg", alt: "Producto 52" },
  { img: "Images/cucharapas.jpg", alt: "Producto 53" },
  { img: "Images/bolasderafia.jpg", alt: "Producto 55" },
];

// Selecciona el div que ya existe en el HTML
const contenedor = document.querySelector(".productos-container");

// Limpia los elementos del HTML (por si aún tienes los estáticos)
contenedor.innerHTML = "";

// Inserta los productos dinámicamente
productos.forEach((p) => {
  const div = document.createElement("div");
  div.classList.add("producto-item");

  div.innerHTML = `
    <img src="${p.img}" alt="${p.alt}">
  `;

  contenedor.appendChild(div);
});
