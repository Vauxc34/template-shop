import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';


/* image's */



/* image's */

export default function EverythingItems() {

    const [Products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const GetProducts = async () => {
      try {
        const res = await axios.get('https://basic-shop-apii.herokuapp.com/api/products/')
        console.log(res.data)
        setProducts(res.data)
        setLoading(true)
      } catch (err) {
        console.log(err)
      }
    }
    
  
    const location = useLocation()

    const category = location.pathname.split('/')[2]

    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("najnowsze")

    const handleFilters = (e) => {
      const value = e.target.value
      setFilters({
        ...filters,
        [e.target.name]: value
      })
    }

    useEffect(() => {
      GetProducts()
    }, [category])

    useEffect(() => {
      category && setFilteredProducts(
        Products.filter((item) => 
          Object.entries(filters).every(([key, value]) => 
            item[key].includes(value)
          )
        ) 
      )
    }, [Products, category, filters])

    useEffect(() => {

      if( sort === "najnowsze" ) {
        setFilteredProducts(prev => 
          [...prev].sort((a, b) => a.createdAt - b.createdAt)
          )
      } else if (sort === "asc") {
        setFilteredProducts(prev => 
          [...prev].sort((a, b) => a.price - b.price)
          )
      } else if (sort === "najstarsze") {
        setFilteredProducts(prev => 
          [...prev].sort((a, b) => b.createdAt - a.createdAt)
          )
      }  else {
        setFilteredProducts(prev => 
          [...prev].sort((a, b) => b.price - a.price)
          )
      } 

    }, [sort])

  return(
<>

<div className='col-12 d-flex justify-content-center bg-light'>

<label className='label-primary align-self-center'>kategorie</label>

<select onChange={handleFilters} name='category' className='form-select w-25 m-4 align-self-center'>
  <option>dziwki</option>
  <option>dragi</option>
  <option>lasery</option>
  <option>koksy</option>
  <option>kurwy z roksy</option>
</select>

<label className='label-primary align-self-center'>rozmiar</label>

<select onChange={handleFilters} name='size' className='form-select w-25 m-4 align-self-center'>
  <option>XS</option>
  <option>S</option>
  <option>M</option>
  <option>L</option>
  <option>XL</option>
  <option>XXL</option>
  <option>XXXL</option>
</select>

<label className='label-primary align-self-center'>sortowanie</label>

<select onChange={e => setSort(e.target.value)} className='form-select w-25 m-4 align-self-center' name='sortable'>
  <option value="najnowsze">Najnowsze</option>
  <option value="asc">Cenowo (w góre)</option>
  <option value="desc">Cenowo (w dół)</option>
  <option value="najstarsze">Najstarsze</option>
</select>

</div>
      <div class="single-product-area">
        <div class="zigzag-bottom"></div>
        <div class="container">

            <div class="row">


            {filteredProducts.map((product, pId) => (
                <div 
                category={category}
                filters={filters} 
                sort={sort}
                key={pId} class="col-md-3 col-sm-6">
                    <div class="single-shop-product">
                        <div class="product-upper">
                            <img className=' img-thumbnail' style={{ width: '250px' }} src={product.img} alt=""/>
                        </div>
                        <h2>{product.title}</h2>
                        <div class="product-carousel-price">
                            <ins>{product.price} zł</ins> 
                            <del>{product.price} zł</del>
                        </div>  
                        
                        <div class="product-option-shop">
                            <Link className="add_to_cart_button text-decoration-none" to={`/product/${product._id}`}>Sprawdź Produkt</Link>
                        </div>                       
                    </div>
                </div>
            ))}

            </div>

            <div className='col-12 d-flex justify-content-center'>
            <ReactPaginate
            pageCount={12}
            className="d-flex col-12 justify-content-evenly "
            previousLabel="<"
            breakLabel="..."
            />
            </div>

        </div>
        
        

    </div>
    

      </>
  );
}
