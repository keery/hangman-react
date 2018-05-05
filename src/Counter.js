import React from 'react'

const hangLetters = ['P','E','N','D','U']
const Counter = ({tries}) => (
  <div className="row">
    {hangLetters.slice(0, tries)}
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

export default Counter