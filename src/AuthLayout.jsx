/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'

const AuthLayout = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false)
  useEffect(() => {
    // acá va la lógica para pegarla al BE
    // const user = getUser()
    // if (!user) {
    //   return redirect('/')
    // }
    setIsLogged(true)
  }, [])

  return <>{isLogged ? children : <h2>usuerio no ligueas</h2>}</>
}

export default AuthLayout
