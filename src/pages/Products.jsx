import { useState } from "react";
import Seo from "../components/Seo/Seo";
import "../styles/pages/products.css";
import { categories } from "../features/catalog/catalog.data";
import ProductCard from "../components/ProductCard/ProductCard";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      <Seo title="Productos | Casa Zompantzi" />

      <section className="products-section">
        {/* GRID DE CATEGORÍAS (Estilo Reyma) */}
        <div className="category-block">
          {categories.map((category) => (
            <div
              key={category.id}
              className="category-header"
              onClick={() => setSelectedCategory(category)}
            >
              <img src={category.image} alt={category.title} />
              <h3>{category.id.toUpperCase()}</h3> {/* Muestra PP, EU, etc */}
              <button className="view-products-btn">Ver Más</button>
            </div>
          ))}
        </div>

        {/* VENTANA REACTIVA (MODAL) */}
        {selectedCategory && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedCategory(null)}
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="close-modal"
                onClick={() => setSelectedCategory(null)}
              >
                X
              </button>

              <h2>{selectedCategory.title}</h2>
              <hr />

              <div className="products-grid">
                {selectedCategory.products.length === 0 ? (
                  <p>Próximamente más productos...</p>
                ) : (
                  selectedCategory.products.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      category={selectedCategory.title}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
