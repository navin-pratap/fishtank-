import React from 'react';

const ProductCompatableImages = [
  { image: 'https://picsum.photos/100/100', name: 'Tetra' },
  { image: 'https://picsum.photos/100/100', name: 'Goldfish' },
  { image: 'https://picsum.photos/100/100', name: 'Molly' },
];
const ProductCompatableImages2 = [
  { image: 'https://picsum.photos/100/100', name: 'Cichild' },
  { image: 'https://picsum.photos/100/100', name: 'Guppy' },
  { image: 'https://picsum.photos/100/100', name: 'And more' },
];
const SelectedProductDetails = (props) => {
  const { handleSelectedProductPopupOpenClose, selectedProduct } = props;

  return (
    <div className="popup-selected-product-box">
      <div className="selected-product-box">
        <div className="selected-product-close-icon">
          <div
            style={{
              cursor: 'pointer',
            }}
            onClick={handleSelectedProductPopupOpenClose}
          >
            <span className="prevousIcon">{'<'}</span>
            <span>Back</span>
          </div>
        </div>
        <div className="product-detail">
          <h5 style={{ textAlign: 'center', margin: 0 }}>
            {selectedProduct.productTitle ? selectedProduct.productTitle : ''}
          </h5>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <span className="selectedProductFonts">by </span>
              <span className="selectedProductOwner">
                {selectedProduct.owner}
              </span>
            </div>
            <div>
              <span className="selectedProductFonts">item</span>
              <span className="selectedProductFonts">{`#${selectedProduct.itemId}`}</span>
            </div>
          </div>
          <div>
            {/* selectedProduct.productImages */}
            <img
              style={{ height: 250, width: '100%' }}
              src={selectedProduct.imageUrl}
              alt={selectedProduct.productTitle}
            />
          </div>
          <b className="selectedProductFontColor">{`$${selectedProduct.price}`}</b>
          <div>
            <b className="selectedProductFonts">{selectedProduct.rating}</b>
          </div>
          <div>
            <span className="selectedProductFonts">Size: </span>
            <span className="selectedProductFontColor">
              {selectedProduct.size}
            </span>
          </div>
          <div>
            <span className="selectedProductFonts">Color: </span>
            <span className="selectedProductFontColor">
              {selectedProduct.color}
            </span>
          </div>
          <div>
            <button className="choose-selected-product-button">
              choose this tank
            </button>
          </div>
          <div>
            <span className="compatible-fish-text">
              This tank is compatible with the following fish:
            </span>
            <div className="fish-icon-box">
              {Boolean(ProductCompatableImages) &&
              ProductCompatableImages.length ? (
                ProductCompatableImages.map((item) => (
                  <div>
                    <div className="fish-icon">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="fish-name">{item.name}</div>
                  </div>
                ))
              ) : (
                <> </>
              )}
            </div>

            <div className="fish-icon-box">
              {Boolean(ProductCompatableImages2) &&
              ProductCompatableImages2.length ? (
                ProductCompatableImages2.map((item) => (
                  <div>
                    <div className="fish-icon">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="fish-name">{item.name}</div>
                  </div>
                ))
              ) : (
                <> </>
              )}
            </div>
          </div>
          <div>
            <div className="accordian-selected-product">
              <div>Description</div>
              <div> {' >'}</div>
            </div>
            <div className="accordian-selected-product">
              <div>Directions</div>
              <div> {' >'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProductDetails;
