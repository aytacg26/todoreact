# TODO App in React

For Auto Expanding TextArea check : (I just try to present AutoExpanding TextArea with MaxLength and Placeholder attributes in codesandbox.io)
[Auto Expanding TextArea Component in SandBOX](https://codesandbox.io/s/facebook-style-autoexpanding-text-area-with-maxlength-placeholder-and-remaining-characters-76s8e?fontsize=14&hidenavigation=1&theme=dark)

## Redux Boilerplate Steps :

### A- Folder Structure

    * create a store folder
    	inside store folder
    		* create Reducers folder (for rootReducer add index.js to Reducers folder)
    		* create Actions folder
    		* create store.js file
    		* create types.js file for constants

### B-Create Store in store.js file : (npm install redux react-redux redux-thunk redux-devtools-extension)

    * import {createStore, applyMiddleware} from “redux”
    * import {composeWithDevTools} from “redux-devtools-extension”
    * import thunk from “redux-thunk”
    * import rootReducer from “./reducers” (because of index.js no need to write file, just folder)


    ````
         const initialState = {};
         const middleware = [thunk] (we can add more other middlewares to array)

         const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware));


         export default store;
    ````

### C- Create rootReducer inside Reducers folder index.js file

    * import {combineReducers} from “redux”;
    * after this we will import our reducers to add combineReducers function
    * ex : import logReducer from “./logReducer”;

    ````
    export default combineReducers({

    	log:logReducer

    });
    ````
    combineReducers() function takes an object argument and each key will take our reducer as value.

### D- Wrap App with <Provider store={store}></Provider>

    * import Provider from “react-redux”;
    * import appStore from from “./store”;

    ````
    <Provider store={appStore}>
    	<App/>
    </Provider>
    ````

### E- create required reducers inside Reducers folder,

we may create seperate folder for each reducer or a file for each reducer. For the case of any helper functions file possibility for each reducer, it will be better to create seperate folder for each reducer.

#### A Reducer Example :

    * Import type constants from types.js
    Ex : export const ADD_TODO = 'ADD_TODO';
         export const DELETE_TODO = 'DELETE_TODO';
         export const SET_STATUS = 'SET_STATUS';


    ````
    Const initialExampleState = {
    	example1:””,
    	example2:[],
    	example3:{}

    }

    	const exampleReducer =  (state=initialExampleState, action)=>{


    			const {type, payload} = action;

    			switch(type){

    				cases...

    			}


    	}

    ````

### Create Actions for the reducer in Actions Folder, actions file of target reducer

Ex : Actions for todoReducer inside Actions folder, todoActions file :
types constants should be imported to use in actions.

    ````
            export const addTodo = (newTodo) => {
            return {
                type: ADD_TODO,
                payload: newTodo,
            };
            };

            export const deleteTodo = (todoId) => {
            return {
                type: DELETE_TODO,
                payload: todoId,
            };
            };

            export const setStatus = (todoId) => {
            return {
                type: SET_STATUS,
                payload: todoId,
            };
            };

    ````
