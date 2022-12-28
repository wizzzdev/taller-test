## Initial Setup
This project was built using expp. So you should install expo cli first. Check: https://docs.expo.dev/


... or run it using npx expo start

## Running the project
Install the dependencies using yarn (I'm using yarn v1.22.19 and node v14.20.1)

1. run: `yarn`
2. run: expo start | npx expo start | yarn start

## Quick walkthrough
I used the following key dependencies for this project:
1. expo
2. react-navigation

I decided to use expo, since it's really easy to start a react-native app with almost 0 effort and I decided to use react-navigation because it's kind of the standard across the communitiy to handle navigation when using react-native, plus is 100% compatible with expo.

This project structure is really simple. It has 2 main directories:
/components
/screens

Each one contains:
* /components: this one should contain components that are reused between screens or other components
* /screens: as its name on its own says, this one contains screens. Each folder should represent a single screens, we want our screen components to be stateful components, so they should contain all the business logic (api calls, redux state) and pass final values to the components they render via props


Note: Maybe it is a better practice to have entry files for each major folder, for example:
/components
    /index.js

But I was too lazy to do it for this test, hehe.

Key files:
* App.js: This one contains the "Drawer", it's not an actual Drawer, it's actually a set of overlayed views, one of them contains the actual navigation and takes care of rendering the screens. I used Animated api to achieve a similar animation effect as the one of the gift that was provided on the test description: https://geraldtech.notion.site/Frontend-Mobile-Developer-39041bcc5a0a4eb79963dae2516970ce

* TabsNavigator: This screen a tab navigator with both screens
    * HomeScreen
    * ContactScreen

* HomeScreen: This screen contains a stack navigator with 2 arbitrary screens


