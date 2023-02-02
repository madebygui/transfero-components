# 🧩 React - Transfero React Components

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

### Required libs

All libraries are installed automatically. No commands are needed.

- [Material UI - @emotion/react, @emotion/styled, @mui/material](https://mui.com/)
- [Luxon](https://moment.github.io/luxon/#/)
- [Icomoon](https://github.com/aykutkardas/react-icomoon)
- [Victory](https://formidable.com/open-source/victory/)

## Table of contents

- [React - Transfero React Components](#react-transfero-react-components)
  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
    - [Windows](#windows)
    - [Other OS](#other-os)
      - [Step 1](#step-1)
      - [Step 2](#step-2)
      - [Step 3](#step-3)
    - [Install](#install)
  - [Usage](#usage)
    - [Example](#example)
    - [Autocomplete](#autocomplete)
      - [props](#autocomplete-props)
    - [Button](#button)
      - [props](#button-props)
    - [Charts](#charts)
      - [props](#charts-props)
    - [Dropdown](#dropdown)
      - [props](#dropdown-props)
    - [Icon](#icon)
      - [props](#icon-props)
    - [Input](#input)
      - [props](#input-props)
    - [InputSelect](#inputselect)
      - [props](#inputselect-props)
    - [Loader](#loader)
      - [props](#loader-props)
    - [ModalPopup](#modalpopup)
      - [props](#modalpopup-props)
    - [Template](#template)
      - [props](#template-props)
    - [TopBar](#topbar)
      - [props](#topbar-props)
    - [Typo](#typo)
      - [props](#typo-props)
    - [New Icons](#new-icons)
  - [Authors](#authors)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

To install and set up the library:

Create a `.npmrc` file in root directory (at the same level of package.json).

Insert the bellow code:

```properties
registry=https://pkgs.dev.azure.com/transferolabs/_packaging/transfero-react-components/npm/registry/
always-auth=true
```

#### Windows:

If you're developing on Windows, we recommend using `vsts-npm-auth` to authenticate with Azure Artifacts. Run `npm install -g vsts-npm-auth` to install the package globally and then add a run script to your package.json.

```json
"scripts": {
    "refreshVSToken": "vsts-npm-auth -config .npmrc"
}
```

#### Other OS:

##### Step 1

Generate a [personal access token](https://dev.azure.com/transferolabs/_usersSettings/tokens) with _Packaging_ read and write scopes.

##### Step 2

Base64 encode the personal access token from Step 1.

One safe and secure method of Base64 encoding a string is to:

1. From a command/shell prompt run:

```
node -e "require('readline') .createInterface({input:process.stdin,output:process.stdout,historySize:0}) .question('PAT> ',p => { b64=Buffer.from(p.trim()).toString('base64');console.log(b64);process.exit(); })"
```

2. Paste your personal access token value and press Enter/Return
3. Copy the Base64 encoded value

##### Step 3

Copy the following code snippet to your `.npmrc` file (default location: `/Users/user/.npmrc`).

```properties
; begin auth token
//pkgs.dev.azure.com/transferolabs/_packaging/transfero-react-components/npm/registry/:username=tra$
//pkgs.dev.azure.com/transferolabs/_packaging/transfero-react-components/npm/registry/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
//pkgs.dev.azure.com/transferolabs/_packaging/transfero-react-components/npm/registry/:email=npm requires email to be set but doesn't use the value
//pkgs.dev.azure.com/transferolabs/_packaging/transfero-react-components/npm/:username=transferolabs
//pkgs.dev.azure.com/transferolabs/_packaging/transfero-react-components/npm/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
//pkgs.dev.azure.com/transferolabs/_packaging/transfero-react-components/npm/:email=npm requires email to be set but doesn't use the value
; end auth token
```

Replace _both_ `[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]` values in your user `.npmrc` file with your personal access token from Step 2.

### Install

Run the commands below:

```sh
$ npm install transfero-react-components --save
```

## Usage

#### Example

```js
import { Loader } from 'transfero-react-components';

const App = () => {
  return (
    <div>
      <Loader />
    </div>
  );
};
```

### Button

```jsx
import { Button } from 'transfero-react-components';

const App = () => {
  return (
    <div>
      <Button onClick={() => alert("I'm a button")}>Click me</Button>
    </div>
  );
};
```

#### Button Props

| Name         | Type                    | Default | Description                                                                                                                                                                      |
| ------------ | ----------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onClick\*    | function                |         | Action when user click.                                                                                                                                                          |
| children     | node                    |         | The content of the component.                                                                                                                                                    |
| size         | `sm` \| `md` \| `lg`    | md      | The size of the component.                                                                                                                                                       |
| icon         | [IconTypes](#icontypes) |         | Insert an icon on button. Check [available icons](#icontypes).                                                                                                                   |
| iconsize     | `sm` \| `md` \| `lg`    | 16      | The icon size of the component. _Only available with icon property._                                                                                                             |
| iconPosition | `left` \| `right`       | `right` | The icon position of the component. _Only available with icon property._                                                                                                         |
| outline      | bool                    | false   | If true, the component is styled outline.                                                                                                                                        |
| disabled     | bool                    | false   | If true, the component is disabled.                                                                                                                                              |
| theme        | `dark` \| `light`       | light   | The theme of the component. Use `dark` for dark screens ans `light` for light screens                                                                                            |
| link         | bool                    | false   | If true, the component is formatted as link.                                                                                                                                     |
| circle       | bool                    | false   | If true, the component is formatted as a circle. _Only available with icon property without children property._                                                                  |
| style        | CSSProperties           |         | The system prop that allows defining system overrides as well as additional CSS styles. See the [sx page](https://mui.com/system/getting-started/the-sx-prop/) for more details. |
| iconColor    | string                  |         | The color of the icon. _Only available with icon property._                                                                                                                      |
| textColor    | string                  |         | Override the text color of the component.                                                                                                                                        |
| className    | string                  |         | Override or extend the styles applied to the component.                                                                                                                          |

> \* Required

### New Icons

To add new icons follow the next steps:

- Access the icon repo in [Figma](#https://www.figma.com/file/vjAIRaNuxdtOFgUQEQz6cE/%C3%8Dcones-Prime-More?node-id=0%3A1&t=Fm2FSBqzBpZysqar-1)
- Create new icons
  - Create a component with 32px X 32px
  - Rename the icon component
  - Change colors to #000000
  - Remove strokes, if it's possible
- Export _all_ icons in SVG format
- Access [IcoMoon App](#https://icomoon.io/app)
- Drag all SVG images to dashboard
- Select all images
- Click in _Generate Font_
- Click in _Font Download_
- Extract the zip file content
- Replace `selection.json` in `src/components/Icon`
- Add the icon names in `src/config/types/iconTypes.types.ts`

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## Authors

- **Guilherme Miranda** - _Initial work_ - [MadeByGui](https://github.com/madebygui)
