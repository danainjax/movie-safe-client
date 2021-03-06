Build notes:
[1] Edit reviews working on rendering the edit review form
[2] Implement a search bar feature
[3] Pull through more movie data on the show page. (addtl fetch with ttId)

# Requirements [ 11/12 ]

[X] The code should be written in ES6 as much as possible

- Arrow syntax =>
- Destructuring - destructure your variables (props)

[X] Use the create-react-app generator to start your project.

[X] Follow the instructions on this repo to setup the generator: create-react-app (Links to an external site.)

[X] Your app should have one HTML page to render your react-redux application

- Single Page Application
- Page should not refresh
- URL can change using router

[X] There should be 2 container components
[X] 1-MovieList connected to Redux store
[X]-2-ReviewList connected to Redux store

[X] There should be 5 stateless components- the idea here is to use redux for your state, 5 components connected to your redux store for your state
[X] 1-MovieCard - connected to MovieList
[X] 2-ReviewCard - connected to ReviewList
[X] 3-MovieShow
[X] 4-ReviewForm
[ ] 5-SearchBar
[X] 6-Navbar
[X] 7-Auth
[X] 9-User

[ ] There should be 3 routes, good rule for back end and your front end
[X] /movies
[X] /movies/:id
[ ] /me set up this account route
[X] /users/${username}

[X] The Application must make use of react-router and proper RESTful routing (should you choose to use react-router v3 please refer to the appropriate docs (Links to an external site.); docs for v4 can be found here (Links to an external site.)) \*see restular.com

[X] Use Redux middleware to respond to and modify state change

[X] Make use of async actions and redux-thunk middleware to send data to and receive data from a server. Put fetches in your action creators. Components should not be doing your fetch, your props that you get from map dispatch to props should be doing your fetch, can only be done with thunk.

[X] Your Rails API should handle the data persistence with a database. You should be using fetch() within your actions to GET and POST data from your API - do not use jQuery methods.

[X] Your client-side application should handle the display of data with minimal data manipulation. (Serializers and backend should do almost all of the work of getting data. model methods, waiter should not be platng your food. Use serializers.)

[X] Your application should have some minimal styling: feel free to stick to a framework (like react-bootstrap), but if you want to write (additional) CSS yourself, go for it!
