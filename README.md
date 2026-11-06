# Audio A–B Loop Studio

Practice a selected section of a local recording with A–B markers, playback speed, and pitch preservation.

**Language:** TypeScript · **License:** MIT · **Data:** Local by default

## What it does

- Local file playback and A–B markers
- Half to one-and-a-half speed
- Pitch-preservation request and loop validation

## Requirements

Node.js 22+ and npm; Python 3 for the optional local HTTP server.

## Install, validate, and run

```sh
npm install --ignore-scripts
npm test
npm start
```

Open http://127.0.0.1:8080 in a modern browser. TypeScript source compiles to `dist/` when running `npm test` or `npm run build`. Start audio with an explicit button click.

## Usage and examples

See [docs/usage.md](docs/usage.md) for a walkthrough and [docs/architecture.md](docs/architecture.md) for implementation details. Tests are deterministic and do not require an exchange, paid API, external model, microphone, or private data.

## Boundaries

Loop precision and pitch preservation depend on browser media implementation.

## Privacy

No analytics or accounts are built in. Local file tools process only the paths you supply. For model-server and weather apps, the interface and usage guide identify the destination and the data sent. Do not commit personal input files, model credentials, or generated recordings.

## Development

Run the validation commands above before submitting changes. GitHub Actions runs these checks on pushes and pull requests. See the workflow for the reproducible toolchain. A successful workflow verifies the tested paths; manual audio-device behavior is documented separately.
