import React from 'react'
// import PropTypes from 'prop-types';
import './Keyboard.css'

const keys = ['a','z','e','r','t','y','u','i','o','p','q','s','d','f','g','h','j','k','l','m','w','x','c','v','b','n'];


const Keyboard = ({usedLetters, onClick}) => (
  <div className="row">
    {keys.map((key) => (      
      <button 
        type="button" 
        className={(usedLetters.includes(key) ? 'used' : '')} 
        key={key} 
        onClick={() => onClick(key)}
      >
          {key.toUpperCase()}
      </button>
    ))}
  </div>
)

// Card.propTypes = {
//   card: PropTypes.string.isRequired,
//   feedback: PropTypes.oneOf([
//     'hidden',
//     'justMatched',
//     'justMismatched',
//     'visible',
//   ]).isRequired,
//   index: PropTypes.number.isRequired,
//   onClick: PropTypes.func.isRequired,
// }

export default Keyboard