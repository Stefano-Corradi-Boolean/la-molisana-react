import ProductCard from "./ProductCard"
import products from '../../data/products'

const ProductsList = () => {
  return (
    <section id="products">
      <h2>Lista Prodotti</h2>
      <div className="container card-container">

        {products.map(product => (
          <ProductCard key={product.id} cardData={product} />
        ))}

      </div>

    </section>
  )
}

export default ProductsList
