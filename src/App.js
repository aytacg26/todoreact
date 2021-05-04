import './App.css';
import { Provider } from 'react-redux';
import appStore from './store/store';
import Todo from './components/Layout/Todo/Todo';

/**
 *
 * @TODO :
 *        -- Add Modal, if user does not enter anything to required fields, user should be warned with the help of modal
 *         - Add warning css to Input, for required fields, Input border and background should warn user
 *         - Add lazyloading to AddToDo for filter window, and add lazyloading for details in TodoItem
 *
 */

const App = () => {
  return (
    <Provider store={appStore}>
      <div className='container'>
        <Todo />
      </div>
    </Provider>
  );
};

export default App;
