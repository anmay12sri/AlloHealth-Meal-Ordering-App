import { useState } from 'react';
import labelsData from '../../Dataset.json';

const TagList = ({ onLabelSelect }) => {
  const [selectedLabel, setSelectedLabel] = useState('all'); 

//this function will handle the label selection from the TagList component on the basis of labelId and update the selectedLabel state 
  const handleLabelClick = (labelId) => {
    setSelectedLabel(labelId);
    onLabelSelect(labelId); 
  };

  return (
    <div className='flex flex-wrap justify-center gap-4'>
  {/* this map function will display the list of labels from the Dataset.json file and 
  also handle the label selection and update the selectedLabel state */}
      {labelsData.labels.map((label) => (
        <div
          key={label.id}
          className={`text-md font-semibold border rounded-xl border-black px-3 py-1 cursor-pointer text-center ${
            selectedLabel === label.id ? 'bg-indigo-400 text-white' : ''
          }`}
          onClick={() => handleLabelClick(label.id)}
        >
          {label.label}
        </div>
      ))}
    </div>
  );
};

export default TagList;