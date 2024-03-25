import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const CharacterDetail = () => {
  const [character, setCharacter] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        )
        const data = await response.json()
        setCharacter(data)
      } catch (error) {
        console.log('error: ', error)
      } finally {
        // setLoading(false)
      }
    }
    
    getCharacters()
  }, [])
  
  useEffect(() => {
    console.log('character: ', character)
  }, [character])
  

  return (
    <h1>{ character?.name }</h1>
  )
}

export default CharacterDetail