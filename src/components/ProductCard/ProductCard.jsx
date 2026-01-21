export default function ProductCard({ product, category }) {
  const handleWhatsapp = (e) => {
    e.stopPropagation();
    const phone = "5212311337700";
    const message = `Hola, me interesa cotizar el producto: "${product.name}" de la categoría: ${category}.`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <article className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} />
      </div>
      <h4>{product.name}</h4>
      <button className="product-cta" onClick={handleWhatsapp}>
        Cotizar por WhatsApp
      </button>
    </article>
  );
}
