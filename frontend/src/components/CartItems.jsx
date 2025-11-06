import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const CartItems = () => {
 const { user, cart, loading, sendCart } = useContext(AppContext)

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
        <>
          <button style={{marginLeft: "2rem"}} className="like-btn" onClick={() => sendCart(user.id)}>Send cart!</button>
      <section className="section-center">
        {
          cart.items.map((singleProduct) => {
            return (
            <article key={ singleProduct.product.id } className="single-product">
              <img src={ singleProduct.product.images[0] } className="img" />
              <footer>
                <h5>{singleProduct.product.name} - { singleProduct.product.brand }</h5>
                <button className="like-btn">x{singleProduct.quantity}</button>
              </footer>
            </article>
            )
          })
        }
        
      </section>
      </>
    )
}

export default CartItems