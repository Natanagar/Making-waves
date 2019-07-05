# Test task for Making waves
Make an audio player using html and Vanilla JS/TypeScript (TS will be a plus). The player should play your favorite free music and contain at least functionalities like play, stop and music visualizer (using the html canvas element). It doesn’t have to be a very fancy player. 
We will evaluate your player in terms of the architectural solution, performance, and readability. Build system will be a plus. Use your imagination and have fun!

## How can I use this app?
You have to create work directory in the terminal with mkdir. Next you'll change work directory in the terminal with command cd. Later you'll clone this project to work directory use [__git clone__ ](https://github.com/Natanagar/Making-waves.git). In the end you'll fire the app with __yarn install__ and __yarn start__ in the terminal and open address http://localhost:3000/ or http://localhost:3001/ (if your port 3000 is busied). 

## How it works? 

App uses spotify API. You have to create account in Spotify. It's very common because every day you can listen music with Spotify. Next step will be fetching your playlist from Spotify to the app. You can upload tracks from your computer. This option works if you click on link __player__. If you want to listen tracks from Spotify firstly you'll need to login to Spotify and after them use link __spotify__.
 

### API
__Spotify__ API is implemented to app. I use Implicit flow when I created OAuth2 authentification. App was created with React-Redux(redux-thunk).

##### Contrubution
This is test task.