import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Products = () => {
    const { products, loading, addToCart, selectProduct } = useContext(AppContext)
    const token = localStorage.getItem("token")
    const apiUrl = "http://localhost:9191"

    if (loading) {
        return <section className='section'>
                <h4>Loading...</h4>
            </section>
    }
    if (products.length < 1) {
        return <section className="section">
        <h4>No products matched your search term. Please try again.</h4>
        </section>
    }

  return (
    <section className="section-center">
      {
        products.map((singleProduct) => {
          return (
          <article key={ singleProduct.id } className="single-product">
            <img src={ apiUrl + singleProduct.images[0]?.downloadUrl } className="img" onClick={() => selectProduct(singleProduct.id)} />
            <footer>
              <h5>{singleProduct.name} - { singleProduct.brand }</h5>
                <button className="like-btn" onClick={() => addToCart(singleProduct.id, token)}>Add to  Cart</button>
            </footer>
          </article>
          )
        })
      }
      
    </section>
  )
}

export default Products