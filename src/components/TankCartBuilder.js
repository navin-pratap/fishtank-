import React, { useState } from 'react';
import MyTank from './MyTank';
import TankAccessories from './TankAccessories';
import PopUpWindow from './PopUpWindow';
import SelectedProductDetails from './SelectedProductDetails';

const testData = {
  title: 'Choose A Tank',
  subtitle: 'Please choose a tank size',
  filter: [
    {
      id: 1,
      name: 'small tank',
      description: '1 - 10 gallon',
      isActive: true,
    },
    {
      id: 2,
      name: 'medium tank',
      description: '10+ - 50 gallon',
      isActive: false,
    },
    {
      id: 3,
      name: 'large tank',
      description: '50+ gallon',
      isActive: false,
    },
  ],
  pageInfo: {
    additionalInfo: 'Know which fish you want?',
    filterInfo: 'Filter by fish to find them the right home.',
  },
  listOfProducts: [],
};

function TankCartBuilder(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSelectedProduct, setIsOpenSelectedProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const handleChoseProduct = (event, selectedProduct) => {
    console.log(event, selectedProduct);
    setSelectedProduct(selectedProduct);
    handleSelectedProductPopupOpenClose();
  };
  const handleSelectedProductPopupOpenClose = () => {
    setIsOpen(!isOpen);
    setIsOpenSelectedProduct(!isOpenSelectedProduct);
  };

  return (
    <div className="tankCartBuilder">
      <MyTank />
      <input
        className="chooseButton"
        type="button"
        value="choose tank"
        onClick={togglePopup}
      />
      {isOpen && (
        <PopUpWindow
          handleClose={togglePopup}
          pageDetails={testData}
          handleChoseProduct={handleChoseProduct}
        />
      )}
      {isOpenSelectedProduct && (
        <SelectedProductDetails
          {...props}
          selectedProduct={selectedProduct}
          handleSelectedProductPopupOpenClose={
            handleSelectedProductPopupOpenClose
          }
        />
      )}
    </div>
  );
}

export default TankCartBuilder;
