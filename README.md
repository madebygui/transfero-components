# 🧩 React - Transfero Components

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

> <b style="color: #00CCCC">Material UI</b> @emotion/react, @emotion/styled, @mui/material
> <br> [Homepage](https://mui.com/) <br><br> <b style="color: #00CCCC">Luxon</b> <br> [Homepage](https://moment.github.io/luxon/#/) <br><br> <b style="color: #00CCCC">Icomoon</b> react-icomoon <br> [Homepage](https://github.com/aykutkardas/react-icomoon) <br><br> <b style="color: #00CCCC">Victory</b> <br> [Homepage](https://formidable.com/open-source/victory/)

## Table of contents

- [React - Transfero Components](#react-transfero-components)
  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Example](#example)
    - [Button](#button)
      - [props](#button-props)
    - [Charts](#charts)
      - [props](#charts-props)
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
  - [Authors](#authors)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

To install and set up the library, run:

```sh
$ npm install transfero-components --save
```

Or if you prefer using Yarn:

```sh
$ yarn add transfero-components
```

## Usage

#### Example

```js
import { Loader } from 'transfero-components';

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
import { Button } from 'transfero-components';

const App = () => {
  return (
    <div>
      <Button onClick={() => alert("I'm a button")}>Click me</Button>
    </div>
  );
};
```

#### Button Props

| Name      | Type                    | Default | Description                                                                                                                                                                      |
| --------- | ----------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onClick\* | function                |         | Action when user click.                                                                                                                                                          |
| children  | node                    |         | The content of the component.                                                                                                                                                    |
| size      | `sm` \| `md` \| `lg`    | md      | The size of the component.                                                                                                                                                       |
| icon      | [IconTypes](#icontypes) |         | Insert an icon on button. Check [available icons](#icontypes).                                                                                                                   |
| iconsize  | `sm` \| `md` \| `lg`    | 16      | The icon size of the component. _Only available with icon property._                                                                                                             |
| outline   | bool                    | false   | If true, the component is styled outline.                                                                                                                                        |
| disabled  | bool                    | false   | If true, the component is disabled.                                                                                                                                              |
| theme     | `dark` \| `light`       | light   | The theme of the component. Use `dark` for dark screens ans `light` for light screens                                                                                            |
| link      | bool                    | false   | If true, the component is formatted as link.                                                                                                                                     |
| circle    | bool                    | false   | If true, the component is formatted as a circle. _Only available with icon property without children property._                                                                  |
| style     | CSSProperties           |         | The system prop that allows defining system overrides as well as additional CSS styles. See the [sx page](https://mui.com/system/getting-started/the-sx-prop/) for more details. |
| iconColor | string                  |         | The color of the icon. _Only available with icon property._                                                                                                                      |
| textColor | string                  |         | Override the text color of the component.                                                                                                                                        |
| className | string                  |         | Override or extend the styles applied to the component.                                                                                                                          |

> \* Required

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
