# AGENTS.md

## Cursor Cloud specific instructions

This is a single Vue 2 + Vue CLI 4.2 SPA (an ECharts COVID-19 map dashboard for China). npm is the package manager (`package-lock.json`). Standard commands live in `README.md` / `package.json` scripts (`serve`, `build`, `lint`).

Non-obvious caveats:

- Node here is v22, but the toolchain is Vue CLI 4.2 / webpack 4, which fails with `ERR_OSSL_EVP_UNSUPPORTED` on modern Node. You MUST set `NODE_OPTIONS=--openssl-legacy-provider` when running `build` and `serve`. Example: `NODE_OPTIONS=--openssl-legacy-provider npm run serve`. `npm run lint` does not need the flag.
- Dev server runs at `http://localhost:8080/`.
- `npm run lint` currently reports pre-existing errors in `src/main.js` (undefined globals `designWidth`/`rem` etc.). This is existing code, not an environment issue.
- The dashboard fetches all live numbers from a hardcoded third-party API (`tianqiapi.com`, in `src/components/HelloWorld.vue`). That host is unreachable from this VM, so the stat boxes and province shading stay empty even though the app and the ECharts China map render/hover correctly. This is expected; it is not a bug in setup.
