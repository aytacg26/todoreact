import './App.css';
import AddToDo from './components/Layout/AddToDo/AddToDo';
import Input from './components/UI/Input/Input';
import Search from './components/UI/Search/Search';

function App() {
  return (
    <div className='container'>
      <AddToDo />
      <Search />
      <Input type='text' name='addTodo' placeholder='Add New Todo' />
    </div>
  );
}

export default App;
