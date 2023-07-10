import React from 'react'
import { Carrusel } from '../components/Carrusel'
import { GridHome } from '../components/GridHome'



export const Home = () => {
  return (
  <main>
    <Carrusel aria-label="Carrusel de apuntes"/>
    <GridHome aria-label="Apuntes populares"/>
  </main>
  )
}
