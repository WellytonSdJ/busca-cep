import React from 'react';
import Buscador from './../src/components/buscador/index';
import Login from '../src/components/loginComponents/index';

export default function Home() {
  const [auth, setAuth] = React.useState(false);

  const getContent = () => {//renderização condicional
    if (auth === false)
      return <Login setAuth={setAuth} />
    else
      return <Buscador setAuth={setAuth} />
  }
  return (
    <div>
      {getContent()}
    </div>
  )
}
