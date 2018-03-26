# Reaction with Relay Modern

## How to use

Install it:

```bash
npm install
```

Download schema introspection data from configured Relay endpoint 

```bash
npm run schema
```

Run Relay ahead-of-time compilation (should be re-run after any edits to components that query data with Relay)
```bash
npm run relay
```

Run the project
```bash
npm run dev -- -p 4000
```