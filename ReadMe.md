# Itunes Album Viewer

Demo: http://itunes-react-app.herokuapp.com/

The api is called on each keystroke, though there is a 20ish call limit per minute. The calls are cancellable using the axios cancel token functionality, though a refactor would add caching to address the limit further.

To run:
1. git clone git@github.com:robertastic/itunes-album-viewer.git
2. cd itunes-album-viewer
3. npm install
4. npm run start:dev

Libraries used: Ant Design, React, axios, moment


