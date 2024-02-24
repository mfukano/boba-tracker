// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $about from "./routes/about.tsx";
import * as $add from "./routes/add.tsx";
import * as $boba from "./routes/boba.tsx";
import * as $countdown from "./routes/countdown.tsx";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $html from "./routes/html.tsx";
import * as $index from "./routes/index.tsx";
import * as $page from "./routes/page.tsx";
import * as $partials_Footer from "./routes/partials/Footer.tsx";
import * as $plain from "./routes/plain.tsx";
import * as $search from "./routes/search.tsx";
import * as $Countdown from "./islands/Countdown.tsx";
import * as $Counter from "./islands/Counter.tsx";
import * as $Price from "./islands/Price.tsx";
import * as $PurchaseTable from "./islands/PurchaseTable.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/about.tsx": $about,
    "./routes/add.tsx": $add,
    "./routes/boba.tsx": $boba,
    "./routes/countdown.tsx": $countdown,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/html.tsx": $html,
    "./routes/index.tsx": $index,
    "./routes/page.tsx": $page,
    "./routes/partials/Footer.tsx": $partials_Footer,
    "./routes/plain.tsx": $plain,
    "./routes/search.tsx": $search,
  },
  islands: {
    "./islands/Countdown.tsx": $Countdown,
    "./islands/Counter.tsx": $Counter,
    "./islands/Price.tsx": $Price,
    "./islands/PurchaseTable.tsx": $PurchaseTable,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
