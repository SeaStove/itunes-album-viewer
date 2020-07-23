# Itunes Album Viewer

https://itunes-react-app.herokuapp.com/

The api was originally called on each keystroke, though there is a 20ish call limit per minute. The calls are cancellable using the axios cancel token functionality, though found even that would lead to many 403s. Changed to requiring pressing the Enter button to search.

To run:
1. git clone git@github.com:robertastic/itunes-album-viewer.git
2. cd itunes-album-viewer
3. npm install
4. npm run start:dev

Libraries used: Ant Design, OverlayScrollBars, React, axios, moment


