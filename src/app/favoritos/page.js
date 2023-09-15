import CardFilme from "@/components/CardFilme";
import Title from "@/components/Title";

async function carregarDados(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTkyMjY2NzQ4MWFiMjA3ZDY0MjQ1MGIwZWZiNDYxZSIsInN1YiI6IjVlYTA5ZTZiYmU0YjM2MDAxYzU5NWExNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vhu0pPCiIwmtrpyOHdBlQid8HJJllaHthn1MERS_ANg'
        }
      };
      
      const response = await fetch('https://api.themoviedb.org/3/account/9269654/watchlist/movies?language=pt-br&page=1&sort_by=created_at.asc', options)
      const json = await response.json()
      console.log(json)
      return json.results
}

export default async function Favoritos() {

  const filmes = await carregarDados()

  return ( 
    <>
    <nav className="bg-slate-500 p-2 flex gap-3 items-end">
      <h1 className="text-4xl text-zinc-100 font-bold uppercase">FIAP Filmes</h1>
      <a href="/favoritos">favoritos</a>
    </nav>

      <Title>Favoritos</Title>

    <section className="flex gap-2 flex-wrap">
      {filmes.map( filme => <CardFilme filme={filme}/>)}
      </section>

    </>
  )
}
