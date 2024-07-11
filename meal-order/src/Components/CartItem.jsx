 

import React from 'react';

const CartItem = ({
  selectedMeals,
  selectedDrinks,
  calculateSubtotal,
  activeButton,
  handleSelectPassenger,
  mealList,
  handleRemoveMeal,
}) => {
  const passengerHasMeal = (passengerNumber) => selectedMeals[passengerNumber];

  const renderPassengerSection = (passengerNumber) => (
    <div
      className={`flex flex-col sm:flex-row border-b border-black ${
        activeButton === passengerNumber ? 'bg-blue-400' : ''
      }`}
      onClick={() => handleSelectPassenger(passengerNumber)}
    >
      <button className="text-md font-semibold md:mr-4 p-4">
        Add Passenger {passengerNumber}
      </button>
      {passengerHasMeal(passengerNumber) ? (
        <div className="md:flex md:flex-row py-4">
          <div>
            <p className="text-sm font-semibold">
              Selected Meal:{' '}
              {mealList.find((m) => m.id === selectedMeals[passengerNumber])
                ?.title}
            </p>
            {selectedMeals[passengerNumber] && selectedDrinks[passengerNumber] && (
              <div>
                <p className="text-sm font-semibold">
                  Selected Drink:{' '}
                  {selectedDrinks[passengerNumber]
                    ? selectedDrinks[passengerNumber].drinkTitle
                    : 'None'}
                </p>
              </div>
            )}
            <p className="text-md font-semibold">
              Subtotal:{' '}
              {new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'EUR',
              }).format(calculateSubtotal(passengerNumber))}
            </p>
          </div>
          <button
            className="text-md font-semibold md:ml-8 pr-4"
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveMeal(passengerNumber);
            }}
          >
            Remove
          </button>
        </div>
      ) : (
        <button
          className="text-md font-semibold md:mr-4"
          onClick={(e) => {
            e.stopPropagation();
            handleSelectPassenger(passengerNumber);
          }}
        >
          Select Meal
        </button>
      )}
    </div>
  );

  return (
    <div className="flex flex-col px-4 md:px-0 rounded-lg border border-blue-400 bg-gradient-to-r from-blue-200 to-blue-100 md:w-full">
      {renderPassengerSection(1)}
      {renderPassengerSection(2)}
    </div>
  );
};

export default CartItem;
