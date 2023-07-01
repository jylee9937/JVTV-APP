import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";

import "@stackflow/plugin-basic-ui/index.css";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import ProcessPage from "@/pages/ProcessPage";

export const { Stack, useFlow } = stackflow({
    transitionDuration: 350,
    activities: {
        MainPage,
        DetailPage,
        ProcessPage
    },
    plugins: [
        basicRendererPlugin(),
        basicUIPlugin({
            theme: "cupertino",
        }),
    ],
    initialActivity: () => "MainPage",
});
