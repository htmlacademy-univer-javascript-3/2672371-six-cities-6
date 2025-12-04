import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSorting } from "../store/action";
import { State } from "../types/state";

function SortingOptions() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Получаем текущую сортировку из Redux
  const currentSorting = useSelector((state: State) => state.offers.currentSorting);

  const sortingOptions = [
    'Popular',
    'Price: low to high',
    'Price: high to low',
    'Top rated first'
  ];

  // Закрытие dropdown при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: string) => {
    // Отправляем действие в Redux
    dispatch(changeSorting(option));
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="places__sorting" ref={dropdownRef}>
      <span className="places__sorting-caption">Sort by </span>
      <span 
        className="places__sorting-type" 
        tabIndex={0}
        onClick={toggleDropdown}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleDropdown();
          }
        }}
      >
        {currentSorting}
        <svg 
          className="places__sorting-arrow" 
          width="7" 
          height="4"
          style={{ 
            transform: isOpen ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.3s ease'
          }}
        >
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      
      {isOpen && (
        <ul className="places__options places__options--custom places__options--opened">
          {sortingOptions.map((option) => (
            <li 
              key={option}
              className={`places__option ${option === currentSorting ? 'places__option--active' : ''}`}
              tabIndex={0}
              onClick={() => handleOptionClick(option)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOptionClick(option);
                }
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SortingOptions;