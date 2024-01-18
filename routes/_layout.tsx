import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component }: PageProps) {
  return (
    <div className="layout">
      <header>
        <h1 class="branding">Maggie's Boba Tracker</h1>
      </header>

      <Component />

      <div className="navigation">
        <ul class="links">
          <a class="nav-link" href="/boba">
            <li>Home</li>
          </a>
          <a class="nav-link" href="/add">
            <li>Add</li>
          </a>
          <a class="nav-link" href="">
            <li>Stats</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
