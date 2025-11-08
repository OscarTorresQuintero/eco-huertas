import Header from "./components/Header";
import Card from "./components/Card";
import Counter from "./components/Counter";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 flex flex-col items-center gap-6">
      <Header title="EcoHuerta 🌿" subtitle="Learn sustainable crops" />

      <section className="grid md:grid-cols-3 gap-4 w-full max-w-5xl">
        <Card title="Albahaca" description="Una planta aromática perfecta para las pastas, además mantiene lejos a los mosquitos." />
        <Card title="Fresa" description="Dulce, jugosa y llena de vitamina C. Ideal para postres o comer directo del huerto." />
        <Card title="Cilantro" description="Infaltable en las sopas y guisos, aunque hay quienes dicen que sabe a jabón ." />
      </section>

      <Counter />
    </main>
  );
}
