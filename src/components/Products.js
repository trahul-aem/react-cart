import React, {useState} from 'react';

function Products({addToCart}) {

    const [products] = useState([
        {
          name: 'Tesla Model 3',
          cost: '$35,000',
          image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tesla-1605542727.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*'
    
        },
        {
          name: 'Tesla Model y',
          cost: '$55,000',
          image: 'https://www.cstatic-images.com/car-pictures/xl/usd00tss021a021001.png'
    
        },
        {
          name: 'Tesla Model X',
          cost: '$150,000',
          image: 'https://95octane.com/wp-content/uploads/2020/10/2020_tesla_model_x_black_1.jpg'
    
        },
        {
          name: 'Tesla Model S',
          cost: '$100,000',
          image: 'https://www.ateq-tpms.com/wp-content/uploads/2019/06/Tesla-model-s-0.jpg'
    
        }
      ]);

return  (
    <>
        <h1>Products</h1>
        <div className='products'>
        {products.map((product, idx) => (
            <div className='product' key={idx}>
                <h3>{product.name}</h3>
                <h4>{product.cost}</h4>
                <img src={product.image} alt={product.name} />
                <button onClick={() => addToCart(product)}>Add to cart</button>
            </div>
        ))}
        </div>
    </>
  )
}

export default Products;
