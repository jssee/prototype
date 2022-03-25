import { defineConfig } from "wmr";

export default defineConfig({
  // ...configuration
  alias: {
    react: "preact/compat",
    "react-dom": "preact/compat",
  },
  middleware: [
    (req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      next();
    },
  ],
});
