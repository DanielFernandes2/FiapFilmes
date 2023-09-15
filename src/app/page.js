import CardFilme from "@/components/CardFilme";
import Title from "@/components/Title";

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
    <nav className="bg-slate-500 p-2 flex gap-3 items-end">
      <h1 className="text-4xl text-zinc-100 font-bold uppercase">FIAP Filmes</h1>
      <a href="/favoritos">favoritos</a>
    </nav>

      <Title>Em Alta</Title>

    <section className="flex gap-2 flex-wrap">
      {filmes.map( filme => <CardFilme filme={filme}/>)}
      </section>

      <Title>Lançamentos</Title>

    </>
  )
}
