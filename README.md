# PLAYTOMIC FRONTEND TEST

The application is developed with React and TypeScript using webpack.

**Live version:** https://nachomirsol.github.io || https://defiant-twig.surge.sh/

## MAIN STACK

- React
- Redux
- Typescript
- Firestore (login)
- Webpack
- React testing library + Jest
- Cypress

## RUN THE APP LOCALLY

1. Clone the repo
2. Execute **npm install** to get all the node_modules dependencies
3. Create .env file at the root of the project with the environment variables below
4. Execute **npm run dev** to run the app local

### Env Variables

<pre><code>REACT_APP_API_ACCESS_KEY=KlC0ZA-aUyU9p2NE-Vp1S_2zUkUf-xntB-SvDmZM4A0
REACT_APP_API_SECRET_KEY=jxjDqJkVtCRMbx_39E3sbF-1QNA-BHXd2v1OzpBCrMw
REACT_APP_FIREBASE_API_KEY=AIzaSyDxCHH04W3mdM-Wa-tPM_hMkq1nfOTyd4s</code></pre>

## RUN TESTS

- Unit and integration tests: <pre><code>npm run test</code></pre>
- End to End tests tests: <pre><code>npm run test:e2e"</code></pre> Important executing this tests with the app running (it depends on connection network).

## LOGIN CREDENTIALS

- email: nachoplaytomic@gmail.com
- password: nacho123
