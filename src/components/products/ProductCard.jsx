
const ProductCard = (props) => {
  const { src, title } = props.cardData
  return (
    <div className="prod-card">
      <img src={src} alt={title} />
      <h3>{title}</h3>
    </div>
  )
}

export default ProductCard
