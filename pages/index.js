export default function Home() {
  return (
    <main className="bg-zinc-800 text-gray-100 h-screen">
      <div class="mx-auto max-w-screen-lg px-3 py-6">
        <div class="flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between">
          <a href="/">
            <div class="flex items-center bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
              <svg class="mr-1 h-10 w-10 stroke-cyan-600" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M0 0h24v24H0z" stroke="none"></path>
                <rect x="3" y="12" width="6" height="8" rx="1"></rect>
                <rect x="9" y="8" width="6" height="12" rx="1"></rect>
                <rect x="15" y="4" width="6" height="16" rx="1"></rect>
                <path d="M4 20h14"></path>
              </svg>
              Dannie
            </div>
          </a>
          <nav>
            <ul class="flex gap-x-3 font-medium text-gray-200">
              <li class="hover:text-white">
                <a href="https://github.com/felurye" target="_blank">GitHub</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <section className="mx-auto max-w-screen-lg px-3 py-6">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
          <div>
            <h1 className="text-3xl font-bold">Hi there, I'm
              <span class="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent"> Dannie</span>
              👋
            </h1>
            <p className="mt-6 text-xl leading-9">
              Esta página está em construção...</p>
          </div>
          <div class="shrink-0">
            <img class="w-64" src="https://raw.githubusercontent.com/felurye/felurye/main/.github/capa-character-2.png" alt="Avatar image" loading="lazy" />
          </div>
        </div>
      </section>
    </main>
  );
}
