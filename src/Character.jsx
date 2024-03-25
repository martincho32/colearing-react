/* eslint-disable react/prop-types */
const Character = (props) => {
// const Character = ({character}) => {
  return (
    <div className="text-center my-4">
      <h5>{props.character.name}</h5>
      <img
        className="img-fluid rounded-circle"
        src={props.character.image}
        alt={props.character.name}
      />
    </div>
  )
}

export default Character
