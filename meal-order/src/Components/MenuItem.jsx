import React from 'react';

const MenuItem = ({ meal, selectedDrinks, handleSelectDrink, handleSelectMeal }) => {
  return (
    <div className="py-4 flex flex-col md:flex-row duration-300 px-4 border-b border-yellow-300 bg-yellow-100 shadow-sm rounded-lg hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row w-full md:justify-between">
        <img
          className="w-full md:w-52 lg:w-60 h-36 rounded-lg object-cover mb-4 md:mb-0"
          src={meal?.img}
          alt={meal?.title}
          style={{ objectFit: 'cover' }}
        />
        <div className="flex flex-col md:ml-6 w-full md:w-auto">
          <h3 className="text-lg md:text-xl font-bold text-black-600">{meal?.title}</h3>
          <p className="mt-1 text-sm md:text-base text-gray-800">
            Starter: <span className="font-semibold">{meal?.starter}</span>
          </p>
          <p className="mt-1 text-sm md:text-base text-gray-800">
            Dessert: <span className="font-semibold">{meal?.desert}</span>
          </p>
          <p className="mt-1 text-sm md:text-base text-gray-800">
            Selected Drink: <span className="font-semibold">{selectedDrinks[meal?.id] || 'None'}</span>
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            {meal.drinks?.map((drink) => (
              <button
                key={drink?.id}
                onClick={() => handleSelectDrink(meal?.id, drink?.title, drink?.price)}
                className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-lg border-2 border-transparent hover:border-indigo-500 transition-colors cursor-pointer"
              >
                {drink?.title}
                <p className="mt-1 text-xs md:text-sm text-gray-700 font-semibold">
                  {drink?.price > 0
                    ? new Intl.NumberFormat('en-IN', {
                        style: 'currency',
                        currency: 'EUR',
                      }).format(drink?.price)
                    : ''}
                </p>
              </button>
            ))}
            <div className="ml-4 flex flex-col items-center">
              <p className="text-sm md:text-base text-gray-900 font-semibold">
                {meal?.price > 0
                  ? new Intl.NumberFormat('en-IN', {
                      style: 'currency',
                      currency: 'EUR',
                    }).format(meal?.price)
                  : ''}
              </p>
              <button
                className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                onClick={() => handleSelectMeal(meal?.id)}
              >
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
