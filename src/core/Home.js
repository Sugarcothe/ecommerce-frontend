import React, {useState, useEffect} from 'react';
import Layout from './Layout';
import {getProducts} from './apiCore';
import Card from './Card'

const Home = () => {

  const [productsBysell, setProductBySell] = useState([])
  const [productsByArrival, setProductByArrival] = useState([])
  const [error, setError] = useState(false)

  const loadProductBysell = () => {
    getProducts('sold').then(data => {
      if(data.error) {
        setError(data.error)
      } else {
        setProductBySell(data)
      }
    })
  }

  const loadProductByArrival = () => {
    getProducts('sold').then(data => {
      if(data.error) {
        setError(data.error)
      } else {
        setProductByArrival(data)
      }
    })
  }

  useEffect(() => {
    loadProductByArrival()
    loadProductBysell()
  }, [])

  return (
    <Layout className="container-fluid" title ="Home Page" description="Node React E-commerce App">
    

      <h2 className="mb-4">Most Demands</h2>
        <div className="row">
          {productsBysell.map((product, i) => 
          (<Card key={i} product={product}/>))}
        </div>
        
        <h2 className="mb-4">Fresh Arrivals</h2>
          <div className="row">
          {productsByArrival.map((product, i) => 
          (<Card key={i} product={product}/>))}
          </div>
   
    
    </Layout>
    
  )
}

export default Home 