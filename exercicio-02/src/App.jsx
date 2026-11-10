import Card from "./components/Card"
import swPosterImg from "./assets/sw-image.jpg"
import esbPosterImg from "./assets/esb-poster.jpg"
import rotjPosterImg from "./assets/rotj-poster.jpg"
import Button from "./components/Button"

export default function App() {
  return (
    <>
      <h1>Meus Pôsteres de Star Wars</h1>
      <Card title="Pôster: Star Wars (1977)" posterImg={swPosterImg} />
      <Card title="Pôster: Empire Strikes Back (1980)" posterImg={esbPosterImg} />
      <Card title="Pôster: Return of the Jedi (1983)" posterImg={rotjPosterImg} />
    </>
  )
}