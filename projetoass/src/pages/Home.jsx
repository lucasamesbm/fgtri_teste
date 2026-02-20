import MainLayout from "../layouts/MainLayout"
import Hero from "../components/home/Hero"
import Highlights from "../components/home/Highlights"
import Federacao from "../components/home/Federacao"
import Provas from "../components/home/Provas"
import Parceiros from "../components/home/Parceiros"

function Home() {
  return (
    <MainLayout>
      <Hero />
      <Highlights />
      <Federacao />
      <Provas />
      <Parceiros />
    </MainLayout>
  )
}

export default Home
