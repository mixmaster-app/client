# Mixmaster unofficial client

This is a template project to build an angular/electron application. The aim of this repository is to build a replacement application to the already existing [mixmaster-hub](https://github.com/mixmaster-app/mixmaster-hub)

But this can also be used to build other angular/electron application

## How to ?

Here are some help if you want to use the project and build your own angular electron application

### Download required package

To work on the project you'll first need to install global packages

```shell
npm install --global @angular/cli electron wait-on npm-run-all
```

and the the ones required by the application

```
npm install
```

### Launch the project locally

To launch the project manually you need to execute the `npm run start` command. It will launch the application both in the browser and encapsulated in an electron application

### Publish the project

The publication of the project is configured in `electron-builder.json` file under `publish`

You firstly need to manually configure the Github token that will be used to publish the release

```
set GH_TOKEN=ghp_***
```

Once done you can use the following command to publish a new release

```
npm run electron:publish
```

Electron will create a new release with the version number provided in the package.json file, by default it will create a new draft release.
