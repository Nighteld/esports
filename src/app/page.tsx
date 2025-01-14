import { PlayerTable } from "@/components/components_player-table";
const Homepage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-cyan-900 to-blue-900 py-12 px-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/circuit-pattern.png')] opacity-10"></div>
    <div className="container mx-auto relative z-10">
      <h1 className="text-center text-5xl font-bold mb-8 text-cyan-300 animate-pulse">
         Dota 2 Player Lists Searching for Team
      </h1>
      <PlayerTable />
    </div>
  </main>
  );
};

export default Homepage;
