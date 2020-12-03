# news-finder

Made as part of the Advanced Object Oriented Programming course, at the Federal University of São Carlos, Brazil. It was designed to follow the Single Responsability and Open-Closed Principles from S.O.L.I.D.

## How to run

1. clone this repo
2. run `yarn`
3. run `yarn dev`

You can also build it:

1. `yarn build`
2. `node dist/Main.js`

## How to extend

### Add new site

Just create a class that extends sites/SiteFetcher and implement its fetch() method. To add the new site to the execution, go to Main.insertSite and add a line like: `this.sfs.push(new SiteFetcherMysite());`

### Add new processor

Just create a class that extends processors/NewsProcessor and implement its process() method. To execute the new processor in all fetched news, go to Main.insertProcessor and add a line like: `this.nps.push(new NewsProcessorMyProcessor());`
