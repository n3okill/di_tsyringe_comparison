# Comparison between [@dymexjs/di][] and tsyringe

[![Released under the MIT license.](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Code of Conduct][coc-badge]][coc]

A simple comparison between the use of [@dymexjs/di][] and tsyringe.

The code for tsyringe already existed see [credits](#credits) and [@dymexjs/di][] implementation was almost a one-to-one implementation form that code to show how easy it is to work with [@dymexjs/di][]

## Table of Contents

- [Comparison between @dymexjs/di and tsyringe](#comparison-between-dymexjsdi-and-tsyringe)
  - [Table of Contents](#table-of-contents)
  - [Usage](#usage)
  - [Info](#info)
  - [Credits](#credits)
  - [Code of Conduct](#code-of-conduct)
  - [License 📝](#license-)

## Usage

- Clone the repo
  > git clone <https://github.com/n3okill/di_tsyringe_comparison.git>

- Run
  > npm run run

- Build and run
  > npm run build:run

## Info

Inside `src/tsyringe/index.ts` or `src/dymejs_di/index.ts` the `InMemmoryCatsRepository` is commented to show how you can easily change the object being injected in either system.

## Credits

The tsyringe code was written by [Matheus Hofstede](https://github.com/hofstede-matheus) and is available in [this repository](https://github.com/hofstede-matheus/di-node-ts-tsyringe) as well as in [this article](https://hofstede-matheus.medium.com/achieve-dependency-inversion-with-nodejs-typescript-and-tsyringe-8b956bc3254c)

## Code of Conduct

We expect everyone to abide by our [**Code of Conduct**](./CODE_OF_CONDUCT.md). Please read it.

## License 📝

Licensed under the [MIT License](./LICENSE).

[coc]: <./CODE_OF_CONDUCT.md>
[coc-badge]: <https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square>
[@dymexjs/di]: <https://github.com/dymexjs/di>
