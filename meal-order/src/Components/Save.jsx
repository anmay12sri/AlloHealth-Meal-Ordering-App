// this file contains helper functions that are used in the MenuCard.js file to
//  save and retrieve the selected meal and drink data to and from the localStorage 

// Function to save selected meal data to localStorage
export const saveSelectedMealToLocalStorage = (passenger, mealId) => {
    localStorage.setItem(`selectedMeal_${passenger}`, mealId);
  };
  
  // Function to retrieve selected meal data from localStorage
  export const getSelectedMealFromLocalStorage = (passenger) => {
    const storedMealId = localStorage.getItem(`selectedMeal_${passenger}`);
    return storedMealId || null;
  };
  
  // Function to save selected drink data to localStorage
  export const saveSelectedDrinkToLocalStorage = (passenger, mealId, drinkTitle, drinkPrice) => {
    localStorage.setItem(`selectedDrink_${passenger}_${mealId}`, JSON.stringify({ drinkTitle, drinkPrice }));
  };
  
  // Function to retrieve selected drink data from localStorage
  export const getSelectedDrinkFromLocalStorage = (passenger, mealId) => {
    const storedDrinkData = localStorage.getItem(`selectedDrink_${passenger}_${mealId}`);
    return storedDrinkData ? JSON.parse(storedDrinkData) : null;
  };