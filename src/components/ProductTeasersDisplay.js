import * as React from 'react';

function ProductTeasersDisplay(props) {
  const { productsList } = props;

  return (
    <div>
      {productsList.map((product) => (
        <div key={product.productTitle} className="productTraser">
          <img className="productTraserImage" src={product.imageUrl} />
          <div className="productTraserTitle">{product.productTitle}</div>
          <div className="productTraserPrice">${product.price}</div>
          <div className="productTraserRating">{product.rating}</div>
          <button className="productTraserChooseButton">
            <div className="productTraserChooseButtonText">Choose</div>
          </button>
        </div>
      ))}
      ;
    </div>
  );
}

export default ProductTeasersDisplay;
