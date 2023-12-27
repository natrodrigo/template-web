export default function Header() {
  return (
    <header className="bg-emerald-700 drop-shadow-md flex items-center px-4 py-2 font-medium text-lg flex justify-between">
      <div>Icon</div>
      <div className="space-x-4">
        <button className="px-4 py-1 transition-all duration-200 rounded hover:bg-emerald-800">Log in</button>
        <button className="px-4 py-1 rounded bg-zinc-950">Sign up</button>
      </div>
    </header>
  );
}
