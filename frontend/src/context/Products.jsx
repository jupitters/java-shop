import React, { useContext } from 'react'
import { AppContext } from './AppContext'

const Products = () => {
    const { products, loading } = useContext(AppContext)

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
            console.log(singleProduct)
          return (
          <article key={ singleProduct.id } className="single-product">
            <img src={ singleProduct.images[0] } className="img" onClick={() => selectProduct(singleProduct.id)} />
            <footer>
              <h5>{singleProduct.name} - { singleProduct.brand }</h5>
              <button className="like-btn" onClick={() => addToFavorites(singleProduct.id)}>Add</button>
            </footer>
          </article>
          )
        })
      }
    </section>
  )
}

export default Products