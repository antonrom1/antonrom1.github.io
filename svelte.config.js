import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        paths: {
            base: "",
        },
        files: {
            assets: "static",
        }
    },
};

export default config;
