import {useState} from 'react';
import TagList from './TagList';
import MenuCard from './MenuCard';
import mealData from '../../Dataset.json';

const MealPage = () => {

  const [selectedLabel, setSelectedLabel] = useState('all'); 
   
  //this function will handle the label selection from the TagList component and update the selectedLabel state
  const handleLabelSelect = (labelId) => {
    setSelectedLabel(labelId);
  };

  return (
    <div className = "mt-10">
      <TagList onLabelSelect={handleLabelSelect}/>
      <MenuCard selectedLabel={selectedLabel} mealList={mealData.meals} />  
      {/* This menu card will display the display a list of meal items based on the 
      currently (selectedLabel) and the mealData loaded  as (mealList) from 'Dataset.json */}
     </div>
  )
}

export default MealPage