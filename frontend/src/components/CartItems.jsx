import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const CartItems = () => {
 const { cart, loading, selectProduct } = useContext(AppContext)
 console.log(cart.items)
      if (loading) {
          return <section className='section'>
                  <h4>Loading...</h4>
              </section>
      }
      if (cart.items.length < 1) {
          return <section className="section">
          <h4>No items in cart.</h4>
          </section>
      }
  
    return (
      <section className="section-center">
        {
          cart.items.map((singleProduct) => {
            return (
            <article key={ singleProduct.id } className="single-product">
              <img src={ singleProduct.product.images[0] } className="img" onClick={() => selectProduct(singleProduct.id)} />
              <footer>
                <h5>{singleProduct.name} - { singleProduct.brand }</h5>

              </footer>
            </article>
            )
          })
        }
        
      </section>
    )
}

export default CartItems