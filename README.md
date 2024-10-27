# Mixmaster unofficial client

[Download & release][release-github-link] 

## About

This is an unofficial client to launch the game [mixmaster](https://mixmaster-online.fr)

## Installing and running mixmaster hub

Requirements
 - Windows 7 or higher

### Via Github with EXE [Recommended]

Go to the [release section of mixmaster hub][release-github-link], click on `Assets` and download the last avaible `exe` file.

### Build the project yourself

#### Download required package

```shell
# Download packages required to work on the client
npm install --global @angular/cli electron wait-on npm-run-all

# Download packages to build the client
npm install
```

#### Launch the client in dev mode

To launch the client in dev mode you need to execute the `npm run start` command. It will launch the application both in the browser and encapsulated in an electron application

#### Build the project

To build the project you can execute the following command `npm run electron:build`.

This will create a `dist` folder in which the setup will be located.

## Issue or Improvement

If you have any trouble or want to submit improvement for the client feel free to [open an issue][issue-github-link] on Github.

[release-github-link]: https://github.com/mixmaster-app/client/releases
[issue-github-link]: https://github.com/mixmaster-app/client/issues/new