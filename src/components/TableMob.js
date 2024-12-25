import React, { useEffect, useState } from 'react'

const TableMob = () => {
    const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await fetch("https://mindler-dashboard.s3.us-east-2.amazonaws.com/products.json")
      const json = await response.json()
      const productsArray = Object.values(json.products)
      console.log(productsArray)
      console.log(json)
      setProducts(productsArray)
      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Products</h1>
          <table border={1}>
            <thead>
              <tr>
                <th>Subcategory</th>
                <th>Title</th>
                <th>Price</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.subcategory}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.popularity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  )
}

export default TableMob
