import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Hero />

      {/* Stats Section */}
      <section className="min-h-screen bg-gray-200 flex flex-col justify-center items-center gap-10 p-10">
        
        <div className="bg-lime-400 p-10 rounded-2xl w-96">
          <h2 className="text-5xl font-bold">58%</h2>
          <p>Increase in pick up point use</p>
        </div>

        <div className="bg-gray-800 text-white p-10 rounded-2xl w-96">
          <h2 className="text-5xl font-bold">27%</h2>
          <p>Increase in pick up point use</p>
        </div>

        <div className="bg-sky-400 p-10 rounded-2xl w-96">
          <h2 className="text-5xl font-bold">23%</h2>
          <p>Decreased in customer phone calls</p>
        </div>

        <div className="bg-orange-500 p-10 rounded-2xl w-96">
          <h2 className="text-5xl font-bold">40%</h2>
          <p>Decreased in customer phone calls</p>
        </div>

      </section>
    </>
  );
}

export default App;