import CardFilme from "@/components/CardFilme";
import Title from "@/components/Title";
import NavBar from "@/components/navbar";

async function carregarDados(){
  const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=1e922667481ab207d642450b0efb461e&language=pt-br"
  const response = await fetch(url)
  const json = await response.json()
  return json.results
}

export default async function Home() {

  const filmes = await carregarDados()

  return ( 
    <>
      <NavBar />

      <Title>Em Alta</Title>

    <section className="flex gap-2 flex-wrap">
      {filmes.map( filme => <CardFilme filme={filme}/>)}
      </section>

      <Title>Lançamentos</Title>

    </>
  )
}
