import { Link } from "react-router-dom"

export const Movies = () => {
  const movie = '191245'
  return (<div>
    <form type='submit'>
    <input type="search"></input>
    <button type='button'>Search</button>
  </form>
  <Link to={`${movie}`}>Hi</Link>
  </div>
  )
}