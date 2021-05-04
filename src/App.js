import './App.css';
import { Provider } from 'react-redux';
import appStore from './store/store';
import Todo from './components/Layout/Todo/Todo';

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
