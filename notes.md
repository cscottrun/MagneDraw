how to build a canvas of elements that change color accoring to the state of xyz
  built pixxel art maker
  
keep array of coordinates that have been touched, until state is cleared. 

instead of keeping track of coordinate points, I only need to know the difference from the starting position

++++++++++++++++++++++++
socket.io
+++++++++++++++++++
npm install socket.io-client --save
put window.navigator.userAgent = 'react-native' in App
import io from  'socket.io-client/socket.io'  < --- look out because it may be in dist          'socket.io-client/dist/socket.io'

in your constructor assign this.socket = io('localhost:3001', {jsonp: false});

Create SErver file
  app.js
    get the starter code for express https://socket.io/docs (break out express into 2 diff variables)
  index.html
