import { useEffect, useState } from 'react'
import Character from './Character'
import { Link } from 'react-router-dom'

const CharactersList = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await fetch(
          'https://rickandmortyapi.com/api/character'
        )
        const data = await response.json()
        setCharacters(data.results)
      } catch (error) {
        console.log('error: ', error)
      } finally {
        setLoading(false)
      }
    }

    getCharacters()
  }, [])

  return (
    <>
      <h1>CharactersList</h1>
      {loading ? (
        <h1>Carganding...</h1>
      ) : (
        <div className="mt-4 d-flex flex-wrap gap-3 container">
          {!characters.length ? (
            <h1>No hay data</h1>
          ) : (
            characters.map((character) => {
              return (
                <Link key={character.id} to={`/characters/${character.id}`}>
                  <Character character={character}  />
                </Link>
                )
            })
          )}
        </div>
      )}
    </>
  )
}

export default CharactersList
