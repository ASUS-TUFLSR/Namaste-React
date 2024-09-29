# Namaste React/ Ordero

# Ordero

/\*\*

- Header -
  _- Logo
  _- Nav Items
- Body -
- - Search
- - Restaurant Container-
- : Restaurant Card
-      - Img - Name - Rating - Cuisines - delivery
-
- Footer -
- - Copyright
- - Links
- - Address
- - Contact
- \*/

 <!--  -->

## Ep-13

## Setting up testing in our app

- Installed react testing library
- Installed Jest
- Installed babel dependencies
- created babel.config.js
- Parcel uses babel bts, but when we are using jest which uses babel
- so there will be conflict parcel will say i have my own babel dev-dep, but we now have added our own [babel.config.js] so it will override parcel's babel
- Created Babel config file to use babel-jest and created parcelrc file to
- disable parcel's babel config file
- Jest Configuration - npx jest --init
- install jsdom library

- installed this @babel/preset-react - to make JSX work in test cases
- Include it in babel.config.js file - @babel/preset-react
- Install npm i -D @testing-library/jest-dom
- to cheack whether our application is rendered or not we use toBeInTheDocument();
- If you don't want to specify the element then you can use (/element/) - the inside element is called regex
- we cannot make api/network call while using test cases-refer to Search.test.js- because we are not running out
  test cases on browser we are running it on our own machine. it is runnning on jsdom which browser like thing but not an actual browser
- we can use watch-test : jest --watch it would do HMR
