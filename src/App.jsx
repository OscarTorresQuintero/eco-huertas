import Header from "./components/Header";
import Card from "./components/Card";
import Counter from "./components/Counter";
export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 flex flex-col items-center gap-6">
      <Header title="EcoHuerta 🌿" subtitle="Learn sustainable crops" />

      <section className="grid md:grid-cols-3 gap-4 w-full max-w-5xl">
        <Card title="Tomate" description="una delicia en las ensaldas , aunque hay gente que la come sin sal, que locos." />
        <Card title="Lechuga" description="lechuga,las favoritas de los morrocoy, y tambien es muy silenciosa" />
        <Card title="Zanahoria" description="Me viste cara de conejo ?, na mentiras es rica y ayuda en la visión...una elegancia." />
      </section>

      <Counter />
   
    </main>


  );
}