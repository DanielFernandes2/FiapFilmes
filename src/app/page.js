import CardFilme from "@/components/CardFilme";
import Title from "@/components/Title";

export default function Home() {
  //mock
  const filmes = [
    {
      id: 1,
      titulo: "Star Wars",
      nota: 9.5,
      poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/dw7X9YPjjAfIxKHW04V64Bb9TB0.jpg"
    },
    {
      id: 2,
      titulo: "The Mandalorian",
      nota: 9.0,
      poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg"

    },
    {
      id: 3,
      titulo: "Interstellar",
      nota: 10,
      poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg"
    }

  ] 

  return ( 
    <>
    <nav className="bg-slate-500 p-2 flex gap-3 items-end">
      <h1 className="text-4xl text-zinc-100 font-bold uppercase">FIAP Filmes</h1>
      <ul>
        <li>
          <a href="#">favoritos</a>
        </li>
      </ul>
    </nav>

      <Title>Em Alta</Title>

    <section className="flex gap-2 flex-wrap">
      {filmes.map( filme => <CardFilme filme={filme}/>)}
      </section>

      <Title>Lançamentos</Title>

    </>
  )
}
