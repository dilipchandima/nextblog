---
title: Markdown/MDX with Next.js
description: The project has been created to provide a new level of interaction between Mad Paws' customers and pet sitters.
author: Lee Robinson
image: https://miro.medium.com/max/720/1*FLDFa6irbp-lvYUoQBvWnw.webp
date: 12/01/2023
---

# Mad Paws Marketplace Product 🐾

Mad Paws Marketplace Product is a web application, which contains [Mad Paws’ marketplace](https://www.madpaws.com.au) landing/product, public-facing, SEO-friendly pages. Powered by [Next.js](https://nextjs.org/) project.

## Table of Contents

[TOC]

## Philosophy

The project has been created to provide a new level of interaction between Mad Paws' customers and pet sitters. The main goal of the project is to reach the best performance, speed, and accessibility for our customers.

## Contributing

### Installation

#### AWS CLI and CodeArtifact

Mad Paws npm packages, e.g. `@madpaws/tooling-config`, are hosted on [AWS CodeArtifact](https://aws.amazon.com/codeartifact/). To enable access, please follow these instructions:

1. [Install AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html).
2. Run the `aws configure` command using the credentials from **Keybase → Files → madpawstech → aws-configure.txt** (direct app link [keybase://team/madpawstech/aws-configure.txt](keybase://team/madpawstech/aws-configure.txt)).
3. If you already configured AWS for some other credentials, then you can use [few AWS profiles together](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html). For example, `aws configure --profile=marketplace`. Then you can add `--profile=marketplace` to AWS commands to use it.

Run the following console command to log in to the CodeArtifact service:

```bash
aws codeartifact login --tool npm --repository madpaws --domain madpaws --domain-owner 847799775195
```

#### Install dependencies

[Node](https://nodejs.org/en/) is a prerequisite. See the "engines" property in [`package.json`](package.json) for the version range.

To install, run the following commands:

1. `git clone git@bitbucket.org:madpaws/marketplace-product.git` _(wherever you specify, clones the repository onto your file system)_
2. `cd marketplace-product` _(enters the folder where you cloned the repository in step 1)_
3. `cp .env.example .env.local` _(sets up variables that are automatically loaded into the Next.js environment)_
4. `yarn` _(installs all dependencies)_

**Note**: sensitive values for `.env.local` (like google API key) you can find in Keybase service:

```bash
Files / team / madpawstech / marketplace-product / env.marketplace-product.example
```

Marketplace Product also uses the [Design System project](https://bitbucket.org/madpaws/design-system/src/master/), and as part of this, certain assets provided by the project, e.g., fonts. These are copied as part of the build process, however if you want to copy these files manually then run `yarn copy:design-system-assets`.

When installing new modules that are required in `next.config.js`, make sure to add them as `dependencies` and not `devDependencies` because the configuration file is loaded during `next start` as well. Since the built Docker image does not contain `devDependencies`, the app won't run when deployed if all modules in `next.config.js` are not available.

### CI/CD

This project is automatically built and deployed using [BitBucket Pipelines](https://bitbucket.org/product/features/pipelines), whose configuration is defined in the [`bitbucket-pipelines.yml`](bitbucket-pipelines.yml) file. The project has the next pipelines configured:

- `default`: the default pipeline runs on every push to the repository unless a branch-specific pipeline is defined.
- `custom`: manually triggered or scheduled.

Our current configuration executes the following tasks for both feature branches and `master`:

- Install `aws-cli` tool and project dependencies
- Runs unit tests
- Lints the source code

If any of the above fails, the build is interrupted and, in case of a feature branch, associated pull requests are not allowed to be merged.

We also have a scheduled pipeline that runs on a weekly basis and consists of the following steps:

1. `Update browsers data` - updates our browsers data as per [Browserslist](https://github.com/browserslist/browserslist#browsers-data-updating).
2. `Update Browserslist-stats.json` - downloads `browserslist-stats.json` file from `tooling-config` repo and replaces the existing one from the current project.

### Development

To run the development server:

```bash
yarn dev
```

To run the project in production mode:

```bash
yarn build && yarn start
```

To see the search you need to use link with proper service and location slug in the URL, for example [http://localhost:3000/petsitters/sydney-nsw](http://localhost:3000/petsitters/sydney-nsw)

To run [Next.js bundle analyzer](https://www.npmjs.com/package/@next/bundle-analyzer):

```bash
yarn build:analyze
```

The project uses GraphQL powered by [Apollo Framework](https://www.apollographql.com/), to run GraphQL playground:

1. Start development server by `yarn dev`.
2. Open <http://localhost:3000/api/graphql> in your browser.

The project uses [Storybook](https://storybook.js.org/) for building project-specific UI components based on [Next.js addon](https://storybook.js.org/addons/storybook-addon-next) for Storybook and [Webpack 5](https://webpack.js.org/blog/2020-10-10-webpack-5-release/).

1. Start Storybook in watch mode by `yarn storybook`.
2. Open <http://localhost:6006> in your browser.

**Note**: The best place for shareable components in Mad Paws is [Design System](https://bitbucket.org/madpaws/design-system) but some project-specific ones we have to implement here, that's why storybook is introduced for `marketplace-product` repository.

#### File structure guidelines

Given that [Next.js automatically associates](https://nextjs.org/docs/basic-features/pages) components under the `src/pages` folder to routes based on their file name, colocation of non-page modules is not possible. In order to circumvent this design choice and allow a more intuitive file structure, the project has some rules as to how page-related modules should be organised:

- Route files (pages) under `src/pages` have no code except for an `export` statement re-exporting their corresponding component from `src/components`. For instance, `src/pages/[serviceSlug]/[locationSlug].tsx` has the following line of code: `export { SearchResults as default } from '~/components/pages/SearchResults/SearchResults';`, where `SearchResults` is the component that contains the actual logic for the SearchResults page.
- Page components are hosted under `src/components/<PageComponentName/<PageComponentName>` and are not necessarily named after their associated route. For example, as per above, the `[serviceSlug]/[locationSlug].tsx` file is related to a `SearchResults` component as it maps to the `/[serviceSlug]/[locationSlug]` dynamic URL path and called "Search Results page" as per usual convention. More info about dynamic routes you can find [here](https://nextjs.org/docs/routing/dynamic-routes).
- Any modules that are exclusive to a page component must be located inside its folder. To illustrate, consider a search results page with the following characteristics and sample file structure:
  - Displays a custom search bar, header and footer
  - Executes considerable amount of logic on the server before the page loads via `getInitialProps`
  - Fetches data from 3 different GraphQL query endpoints
  - Contains substantial user interaction that is handled by several smaller functions

```
📦components
 ┣ 📂pages
 ┃ ┗ 📂SearchResults
 ┃ ┃ ┣ 📂DynamicFooter
 ┃ ┃ ┃ ┗ 📜DynamicFooter.tsx
 ┃ ┃ ┣ 📂DynamicHeader
 ┃ ┃ ┃ ┗ 📜DynamicHeader.tsx
 ┃ ┃ ┣ 📂SearchFiltersForm
 ┃ ┃ ┃ ┣ 📂 ...
 ┃ ┃ ┃ ┣ 📂 ...
 ┃ ┃ ┃ ┣ 📜constants.ts
 ┃ ┃ ┃ ┣ 📜SearchFiltersForm.module.css
 ┃ ┃ ┃ ┗ 📜SearchFiltersForm.tsx
 ┃ ┃ ┣ 📜SearchResults.test.tsx
 ┃ ┃ ┣ 📜SearchResults.tsx
 ┃ ┃ ┣ 📜initialProps.ts
 ┃ ┃ ┣ 📜queries.ts
 ┃ ┃ ┣ 📜utils.test.ts
 ┃ ┃ ┗ 📜utils.ts
```

In this scenario, `SearchResults.tsx` is the main file holding the page component. Due to its complexity, it's broken down into multiple modules:

- Private `DynamicFooter`, `DynamicHeader` and `SearchFiltersForm` to simplify the display logic (JSX)
- `initialProps.ts` abstracting the logic of `getInitialProps` into a single exported function
- `queries.ts` containing the 3 aforementioned GraphQL query strings, which are usually verbose
- `utils.ts` holding utility functions that are easily testable in isolation

The root of `src/components/pages` should **only** contain page components (one per route). Modules that are shared across different pages should be located in the root of `src/components`; "Global" components such as `Layout` or `Html` (overriding Next.js's default) are also placed in `src/components`.

This project powered by Next.js is SEO-sensitive. Therefore, each new page should contain appropriate title and meta description tags or a TODO in order to add them later on.

### Testing

For testing this project uses [Jest Framework](https://jestjs.io/) with the following libraries:

1. [React Testing Library](https://testing-library.com/docs/)
2. [React Hooks Testing Library](https://react-hooks-testing-library.com/reference/api)
3. [jest-axe](https://www.npmjs.com/package/jest-axe) - custom Jest matcher for aXe for testing accessibility.

To run all tests:

```bash
yarn test
```

To watch updated files:

```bash
yarn test:watch
```

To run specific tests:

```bash
yarn test src/components/useCounterCustomHook.test.ts
```

### Lighthouse Performance Monitoring

The project also utilises [Lighthouse](https://github.com/GoogleChrome/lighthouse) for performance monitoring. This is automatically run on project build on bitbucket as part of CI via [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci).

This can also be run locally, by following these steps in the command line:

1. Install lighthouse ci command line tools using `npm install -g @lhci/cli@0.7.x`
2. Run the following command `lhci autorun`
3. Follow the link provided by the command line output to find your report

**Note**: The generated report is only available for 7 days, after which it will be removed from google's servers. A more permanent solution using our own hosted [Lighthouse ci server](https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/server.md) is planned, see [SP-98](https://madpaws.atlassian.net/browse/SP-98) for more info.

### Git Guidelines

#### How to Commit

The project uses a toolchain ([Commitizen](http://commitizen.github.io/cz-cli/) and [commitlint](https://commitlint.js.org/)) to handle its commits; therefore, _please use the command line when making a commit_ and do not use the `-m` option, i.e., only `git commit` is required. Once triggered you will be provided with prompts for the type of commit, ticket number, commit message, body as well as some other questions.

#### Commit Message Format

On top of the Conventional Commits types: **`fix`** and **`feat`**, MPTC uses additional types according to [@commitlint/config-conventional (based on the Angular convention)](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum) which get presented when [running a commit](#how-to-commit).

- You will be prompted to write the ticket number: `CODE-###` (drastically simplifies finding original ticket for commit changes)
- Use the imperative, present tense (e.g. "fix", not "fixed" and [more examples](https://www.conventionalcommits.org/en/v1.0.0/#examples))
- Start with a verb
- Use the body/'long message' of the commit if more context is needed. - prompted after the header/'short message'

In addition to these general guidelines, all commit messages are linted via [commitlint](https://commitlint.js.org/) using the rules from [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#rules).

#### Examples

- `fix: SUP-44 add missing static class variable to IconButton and Avatar`
- `feat: SP-123 add ariaLabel prop for accessibility`
- `ci: SP-321 add performance budget tasks`
- `style: SP-10 add VSC settings and new ESLint rule`

#### Branch Format

All branches must follow this format:

```bash
[JIRA-TICKET-NO]-[JIRA-TICKET-TITLE]
```

For example:

```bash
SP-23-create-repository-for-madpaws-marketplace-product
```

### Pull Requests && Deployment

When you are finished with your task in your feature branch you need to:

- Create a Pull Request into `master` branch.
- Describe in details what exactly you did in the task in PR's description.
- Attach all necessary screenshots/screencast (if it's necessary) to help other devs to understand the output.
- Add the specific developer(s) as reviewers if you think that his/her feedback is the most relevant for this task.
- Not move your task in Jira to further steps before the approval of PR by reviewers.
- We do not have a dev or staging branch, a deployment is made automatically to staging once the branch is merged to master.
- When we are ready we manually deploy the master branch to production
- If you need to temporarily deploy your branch to staging, you need to edit pipelines file on your branch. Later we are going to have feature branch staging environments to improve this process.

### Feature Flags

We have a custom implementation for Feature Flags which uses **[GET]** `/feature_flags` API endpoint for controlling the state of each flag. React Context is used for providing access to the states of these flags, with a context provider already present in `_app.tsx` that wraps the whole app. To access context within a component a custom hook has also been created.

#### Adding a New Flag

To add a new flag:

- add a new record in `feature_flags` database table via simple SQL query.
- this record should follow these validation rules:
  - `name` should be unique for this table.
  - `value` column should be either `on` or `off`.
- this record will be automatically added to **[GET]** `/feature_flags` API endpoint's response.
- on the client-side add an appropriate constant to the features file (`src/components/FeatureFlags/constants.ts`)

```javascript
// file: src/components/FeatureFlags/constants.ts

export const EXAMPLE_FEATURE = "example feature";
```

In order to use this flag within a component file for conditional logic or rendering, first the same constant we used in the features file must be imported, along with the custom hook, `useFeatureFlags`. These can then be used together to set a boolean value for this feature which can be used in the conditions.

```javascript
// file: src/components/SomeExampleComponent.tsx

import { useFeatureFlags } from "~/components/FeatureFlags/useFeatureFlags.ts";
import { EXAMPLE_FEATURE } from "~/components/FeatureFlags/constants.ts";

const { featureFlags, isFeatureFlagEnabled } = useFeatureFlags();
const isExampleFeatureEnabled = isFeatureFlagEnabled(EXAMPLE_FEATURE);

// show all existing feature flags
console.log(featureFlags);

// conditional logic
const someFunction = () => {
  // ...
  if (isExampleFeatureEnabled) {
    handleNewFeature();
  }
  // ...
};

// conditional rendering
return (
  <div>
    {/* ... */}
    {isExampleFeatureEnabled && <ExampleFeature />}
    {/* ... */}
  </div>
);
```

#### Removing a New Flag

In order to remove a flag an appropriate record should be removed from `feature_flags` database table. Conditional logic should also be removed wherever this flag was used, removing the old code for the 'off' state of the feature flag.

## Docker Deployment

We're trialling ECS and Docker for hosting preview environments, but it could be useful to run local containers yourself. If you only want to build the marketplace-product repo, keep reading. If you want to run marketplace-product and react-v2 together, skip ahead to the `Docker-Compose` topic

### Building

Building the app requires access to our private yarn repo, so export an access token to be used by the build steps

```
export CODEARTIFACT_TOKEN=`aws codeartifact get-authorization-token --domain madpaws  --domain-owner 847799775195 --query authorizationToken --output text`
```

Build and tag a container

```
docker build --build-arg CODEARTIFACT_TOKEN=${CODEARTIFACT_TOKEN} -t marketplace-product .
```

### Running

Earlier in this README (Install dependencies) you would have created a `.env.local` file. You'll need it to submit ENV variables to the docker container at runtime.

After you've built the image, you should be able to start a container in your shell:

```
docker run -it --init -p3000:3000 --env-file .env.local -t marketplace-product
```

If you need to exit the container, pass it a **control+c**, but if you executed it without `-it` you'll need to kill it manually in another terminal.

### Debugging with Sentry

Sometimes Sentry debugging is the only option to investigate a failure's root cause, so a simple helper was implemented.

#### How to use: Import helper

```
import { sentryMessage } from '~/utils/sentryHelpers';
```

Provide a message and a payload, i.e.:

```
sentryMessage('### Pet Profile View query', {
  ...getAuthorizationHeader(req as Request),
  entityId: petDetails?.entityId,
});
```

Reproduce the failure one or more times and check related project at sentry.io. All your attempts will be grouped by the message you provided.

### Caveats

- This is a work in progress and nothing here is confirmed to be best practice.

- The login for codeartifact has poor failure mode behaviour (theres no error message, just a 401 error) and should be reviewed.

### Docker-Compose

Multiple apps are served from the same domain using some url-rewriting and proxy_pass magic in Nginx and ELB. If you want to achieve something similar to the production / staging environment on your localhost, follow these instructions to build and launch a docker-compose system

#### Building Prerequisites

Building the app requires access to our private yarn repo, so export an access token to be used by the build steps

```
export CODEARTIFACT_TOKEN=`aws codeartifact get-authorization-token --domain madpaws  --domain-owner 847799775195 --query authorizationToken --output text`
```

Unless you already have a local docker image for ReactV2, you will need to build it yourself. Once you have built ReactV2, your local docker daemon can refer to it by name/tag.

- Download the React-V2 repo
- Install dependencies

  ```
  npm install
  yarn install  # You need to install using both yarn and npm
  ```

- Execute and tag

  ```
  docker build --target ssr -t react-v2 .
  ```

#### Building local containers

At the time of writing, we're using `ReactV2`, `nginx` and this `marketplace-product`. There may be more in future. You should have built `ReactV2` in the prior step, now it's time to build `marketplace-product` and `nginx`

```
export CODEARTIFACT_TOKEN=`aws codeartifact get-authorization-token --domain madpaws  --domain-owner 847799775195 --query authorizationToken --output text`

docker-compose build
```

#### Running Docker-Compose

Start docker-compose with

```
docker-compose up
```

Stop docker-compose with a `control+c` or

```
docker-compose down
```

#### Maintaining Docker-Compose

If you change any source or configurations, you'll want to build the images again for those changes to be included

```
docker-compose build
```

If you wish to see how the routing works or make improvements to it, inspect the nginx config in `docker/nginx/nginx.conf` for `proxy_pass $ @` directives and rebuild docker-compose images after making changes.

Consider that docker-compose is for local development, so any lasting changes should also be made to ECS task definitions.

## Creating mock API data for Front End

When we are working on a task in parallel to the API-woof development, to unblock the Front End development we need to have a mock api service to fetch sample data. [Next.js API routes](https://nextjs.org/docs/api-routes/introduction) is used to implement the mock API with sample data.

Please follow the below steps to implement the mock API service

#### Add the mock api folder

under the following location `src/pages/api` create a folder named `mock` and in this folder we are going to place our implementation for the mock api. according to your requirement create the `ts` file that we need to implement the API,

ex:- if you need to API for fetch pets, you can create `pets.ts` file, then the api route will be like `http://localhost:3000/api/mock/pets` , you can read this [documentation](https://nextjs.org/docs/api-routes/introduction) for understand API routes and the implementation.

#### Implement the mock service

You can implement the mock service as shown below

```ts
import type { NextApiRequest, NextApiResponse } from "next";

// sample response
const responseJson = {
  entityId: 573681,
  isOwner: false,
  petTypeId: 1,
  profile: {
    basicDetails: {
      breeds: ["Affenpinscher"],
      energyLevel: "",
      gender: "Male",
      size: "Small",
      sizeNumbers: "1-10kg",
    },
  },
};

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json(responseJson);
};
```
