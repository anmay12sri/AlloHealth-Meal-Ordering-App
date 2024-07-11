import { Link } from 'react-router-dom';
import FoodPage from '../assets/food.jpg';

const HomePage = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${FoodPage})` }}
    >
      {/* Overlay for opacity */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl p-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Welcome to <span className="text-red-400">HighFlyDining</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">
          Experience culinary excellence in the skies with HighFlyDining.
          Discover an exquisite selection of meals and beverages tailored for
          your in-flight enjoyment. Navigate through our menu and embark on
          a gastronomic adventure before you take off.
        </p>
        <Link to="/meals">
          <button className="mt-8 px-6 py-2 bg-yellow-500 hover:bg-yellow-800 rounded-lg text-lg font-medium">
            Order Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="inline-block ml-2 w-6 h-6"
            >
              <path
                d="M22.94,16.31a1,1,0,0,0,0-.25V16a.85.85,0,0,0-.06-.31h0a.85.85,0,0,0-.19-.3l0,0-5-5a1,1,0,0,0-1.42,1.42L19.59,15H10a1,1,0,0,0,0,2h9.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.19-.30A.30.30,0,0,0,22.94,16.31Z"
                data-name="right arrow"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
