import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component }: PageProps) {
  return (
    <div class="layout-container">
        <div className="header-content-layout">
            <div class="flex items-center flex-1">
                <img class="boba-header-icon" src="assets/boba_inv_bg.png" alt="" />
                <h1 class="branding">Boba Budget</h1>
            </div>

            <Component />

        </div>

        {/* message container could go here
            We have a lot of free space to draw here and it would be easier to create a transparent component here
            In fact, we could even have a modal container here for drawing various overlay messages instead of
            trying to bake them into individual pages. The higher up on the view hierarchy, the easier it is to 
            perform that action instead of trying to do it within the view hierarchy. 
        */}
        <div className="footer-container">
            <div className="message-container">
                {/* TODO: message component extraction */}
                <p class="bg-yellow-300 p-4 rounded-md m-2">
                    Hi I'm a message!
                </p>
            </div>
            <div className="navigation">
                <ul class="links">
                <a class="nav-link bg-blue-400" href="/">
                    <li>Home</li>
                </a>
                <a class="nav-link bg-green-300" href="/add">
                    <li>Add</li>
                </a>
                {/* <a class="nav-link bg-yellow-300" href="">
                    <li>Stats</li>
                </a> */}
                </ul>
            </div>
        </div>
    </div>
  );
}
