import * as React from 'react';
import ProductTeasersDisplay from './ProductTeasersDisplay';
const ProductListMock = require('./ProductList.json');

function PopUpWindow(props) {
  const { productsList } = ProductListMock;
  const [filterdProductList, setFilterdProductList] = React.useState(
    productsList,
  );
  const [isActive, setIsActive] = React.useState(0);

  const selectFilter = (event, filter) => {
    if (filter.id === 1) {
      if (isActive === 1) {
        setIsActive(0);
        setFilterdProductList(productsList);
      } else {
        setIsActive(1);
        setFilterdProductList(
          productsList.filter((item) => item.tankSize === 'small'),
        );
      }
    } else if (filter.id === 2) {
      if (isActive === 2) {
        setIsActive(0);
        setFilterdProductList(productsList);
      } else {
        setIsActive(2);
        setFilterdProductList(
          productsList.filter((item) => item.tankSize === 'medium'),
        );
      }
    } else if (filter.id === 3) {
      if (isActive === 3) {
        setIsActive(0);
        setFilterdProductList(productsList);
      } else {
        setIsActive(3);
        setFilterdProductList(
          productsList.filter((item) => item.tankSize === 'large'),
        );
      }
    }
  };
  const PopUpWindowProductsSection = ({ content, productsList }) => {
    return (
      <div className="popUpWindowProductsSection">
        <div className="productPagination">
          <div style={{ width: '205px', float: 'left' }}>
            items per page:
            {[9, 12, 24, 36].map((num) => (
              <span key={`perpage_${num}`} style={{ marginLeft: 5 }}>
                {num}
              </span>
            ))}
          </div>
          <div style={{ marginRight: 5, float: 'right' }}>Next </div>
        </div>
        <ProductTeasersDisplay
          listOfProcucts={content}
          productsList={productsList}
        />
      </div>
    );
  };

  return (
    <div className="popup-box">
      <div className="box">
        <div className="close-icon">
          <span onClick={props.handleClose}>close X</span>
        </div>
        <div className="productDetailWindowTitle">
          {props.pageDetails.title}
        </div>
        <div className="productDetailWindowSubTitle">
          {props.pageDetails.subtitle}
        </div>
        {props.pageDetails.filter.map((filter) => (
          <div key={filter.id}>
            <div
              className={`productDetailsWindowButton ${
                isActive === filter.id ? 'active' : 'inactive'
              }`}
              onClick={(e) => selectFilter(e, filter)}
            >
              <div className="productDetailsWindowButtonText">
                {filter.name}
              </div>
              <div className="productDetailsWindowButtonDesc">
                {filter.description}
              </div>
            </div>
          </div>
        ))}
        <div className="productDetailsWindowAdditionInfo">
          {props.pageDetails.pageInfo.additionalInfo}
        </div>
        <div className="productDetailsWindowFilterInfo">
          {props.pageDetails.pageInfo.filterInfo}
          <span className="show">Show</span>
        </div>
        <PopUpWindowProductsSection
          content={props}
          productsList={filterdProductList}
        />
      </div>
    </div>
  );
}

export default PopUpWindow;
