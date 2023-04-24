import React, { useRef, useState } from 'react';
import './App.css';
import stra from './fruit/red.jpg';
import ana from './fruit/ana.jpg';
import ban from './fruit/ban.jpg';
import ora from './fruit/ora.jpg';
import mango from './fruit/green.jpg';

function App() {
  const images = [
    { src: stra, categories: ['promoFruit'] },
    { src: ana, categories: ['exotischFruit'] },
    { src: ban, categories: ['exotischFruit', 'promoFruit', 'goedkoopFruit'] },
    { src: ora, categories: ['goedkoopFruit', 'promoFruit'] },
    { src: mango, categories: ['exotischFruit'] },
  ];

  const categories = [
    { name: 'All Fruits', filter: () => true },
    { name: 'Goedkoop', filter: (image) => image.categories.includes('goedkoopFruit') },
    { name: 'Exotisch', filter: (image) => image.categories.includes('exotischFruit') },
    { name: 'Promo', filter: (image) => image.categories.includes('promoFruit') },
  ];

  const [currentCategory, setCurrentCategory] = useState(categories[0].name);
  const selectedCategoryRef = useRef(currentCategory);

  const handleCategoryChange = (category) => {
    selectedCategoryRef.current = category;
    setCurrentCategory(category);
  };

  const filteredImages = images.filter((image) => {
    const category = categories.find((cat) => cat.name === currentCategory);
    return category.filter(image);
  });

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.name}>
            <button
              onClick={() => handleCategoryChange(category.name)}
              className={currentCategory === category.name ? 'active' : ''}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
      <h2>Items in {currentCategory}</h2>
      <ul>
        {filteredImages.map((image, index) => (
          <li key={index}>
            <img src={image.src} alt="" className="pics" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// https://www.w3schools.com/JSREF/tryit.asp?filename=tryjsref_filter

// This is a React component that displays a list of fruit images with categories, and allows the user to filter them by category.

// The images array contains an object for each fruit image, with its src and an array of categories. The categories array contains an object for each category, with its name and a filter function that returns true for images that belong to that category.

// The component has a useState hook that initializes the current category to the first category in the categories array, and a useRef hook that keeps a reference to the current category. The handleCategoryChange function updates the selectedCategoryRef and the current category when the user clicks on a category button.

// The filteredImages array is created by filtering the images array based on the filter function of the current category.

// The component renders a list of category buttons and a list of fruit images. The category buttons are created by mapping over the categories array and rendering a button for each category. The onClick event of each button calls the handleCategoryChange function with the category name as the argument. The active category button is highlighted by adding the active class to its className.

// The fruit images are created by mapping over the filteredImages array and rendering an img tag for each image. The src attribute of each img tag is set to the src property of the image object. The alt attribute is left empty, and the className is set to pics.

// Overall, this component provides a simple and intuitive way for users to filter fruit images by category.