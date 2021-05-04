import './App.css';
import { Provider } from 'react-redux';
import appStore from './store/store';
import Todo from './components/Layout/Todo/Todo';

import Modal from './components/UI/Modal/Modal';

/**
 *
 * @TODO :
 *        -- Some parts of the app are not responsive, they must be corrected
 *
 */

const App = () => {
  return (
    <Provider store={appStore}>
      <Modal />
      <div className='container'>
        <Todo />
      </div>
    </Provider>
  );
};

export default App;
