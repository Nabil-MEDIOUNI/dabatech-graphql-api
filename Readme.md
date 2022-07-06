<h1 align="center">DabaTech GraphQL API</h1>

<div align="center">
   Solution for a challenge from  <a href="https://investondaba.notion.site/Fullstack-Intermediate-Test-2-c911eab2a18446d4a87eb5ca938f13ad" target="_blank">daba full stack intermediate coding exercise</a>.
</div>

<div align="center">
  <h3>
    <a href="https://drive.google.com/file/d/1UehdxsmD-HK-vPgj7Wft4oVucewPAh8z/view">
      Demo
    </a>
    <span> | </span>
    <a href="https://dabatech-graphql-api.herokuapp.com/graphql">
      Solution
    </a>
    <span> | </span>
    <a href="https://investondaba.notion.site/Fullstack-Intermediate-Test-2-c911eab2a18446d4a87eb5ca938f13ad">
      Exercise
    </a>
  </h3>
</div>

## Table of Contents

- [Overview](#overview)
- [Built With](#built-with)
- [Features](#features)
- [Essential rules](#essential-rules)
- [How to use](#how-to-use)
- [Linting and formatting](#linting-and-formatting)
- [Committing code](#committing-code)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## Overview

![screenshot](https://user-images.githubusercontent.com/16707738/92399059-5716eb00-f132-11ea-8b14-bcacdc8ec97b.png)

Introduce your projects by taking a screenshot, video recordings or a gif. Try to tell us about the solution you built by answering the following:

- Where can I see your demo?
- What was your experience building it.

### Built With

- [GraphQL](https://graphql.org/)
- [Apollo-Server](https://www.apollographql.com/docs/apollo-server/)
- [Cloudinary](https://cloudinary.com/)

## Features

- **User story:** I can register a new account
- **User story:** I can log in
- **User story:** I can sign out
- **User story:** After I log in, I can see my profile details - photo, user name, bio, email, full name, email address and last sign in date
- **User story:** I can edit my details including: `photo`, `name`, `bio`, `phone`, `email` and `password`
- **User story:** I can upload a new photo or provide an image URL

# Essential rules

- Code must be linted and formatted
- Do not leave irrelevant trailing comments or commented code blocks
- Do not leave unused files or assets
- Don't use `eslint-disable` nor change config files for linting and formatting (except for rare agreed exceptions)
- Code must be pushed whenever possible, at least once every worked days

# Setup

## Prerequisites

- Make sure you have an up-to-date NodeJS version (an LTS)
- Yarn installed globally
- Preferably VSCode with recommended extensions supplied in `.vscode/extensions`

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [yarn](https://yarnpkg.com/) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/DabaTech-NabilMediouni/dabatech-graphql-api.git

# Install dependencies
$ yarn

# Run the app
$ yarn start
```

**Important note** When adding dependencies or updating them, use `yarn` and not `npm`

**Important note** Create a **nodemon.json** file and add the credentials I sent you via email.

```bash
# Create a **nodemon.json** file and add credentials
{
  "env": {
    **..check email**
  }
}
```

# Linting and formatting

- Uses ESLint and Prettier working in pair together
- Linting and formatting are enforced (won't compile unless addressed)
- Formatting/Linting is automatically processed on saving files. If linting errors remain unresolved, commit won't go through
- In fact, linting and formatting tasks are also installed as a pre-commit hook through Husky

# Committing code

- Follows the [_Conventional Committing_](https://www.conventionalcommits.org/en/v1.0.0/) standard

- Feature example: `git commit -m "feat: Closes ISS-1. Ability to login with Apple"`
- Patch example: `git commit -m "fix: Closes ISS-2 and corrects scrolling bug"`
- Major/Breaking change example: `git commit -m "BREAKING CHANGE: Updated website version"`
- Combines feature and breaking change:
- Major/Breaking change example:

  `git commit -m "feat: Closes ISS-1. Ability to login with Apple BREAKING CHANGE"`

- Commits not impacting versioning:

  - Regular / casual example: `git commit -m "chore: ISS-4 Installed dependencies"`
  - Refactoring example: `git commit -m "refactoring: Refactored component"`
  - Other commit types: _build:, chore:, ci:, docs:, style:, refactor:, perf:, test_

- The standard is linted and Husky will prevent commits from going through if it's not compliant
- Project managers/owners can release satisfying updates and issue version bumps thanks to [standard-version](https://github.com/conventional-changelog/standard-version) by running `yarn release`. This will generate:
- Appropriate tags based on the conventional commit history
- An aggregated `CHANGELOG.md` file update.

# Contact

Nabil MEDIOUNI
Fullstack JS Developer

- **Email:** nabilmediouni8@gmail.com
- **WhatsApp:** +21693612372
- **Portfolio:** https://nabil-mediouni-portfolio.netlify.app

# Acknowledgements

I would like to express my special thanks of gratitude to **dabafinance** as well as **Boum III Jr** who gave me the golden opportunity to do this wonderful Task, which also helped me in doing a lot of Research and I came to know about so many new things. I am really thankful.
