export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-5xl font-bold text-black dark:text-white">
          Hello World
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400">
          A simple Next.js website powered by Bun
        </p>
      </main>
    </div>
  );
}
