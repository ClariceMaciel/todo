import { useState } from 'react';
import * as C from './App.styles';
/*import { Item } from './types/Item';*/
import { ListItem} from './components/ListItem';
import {AddArea} from './components/AddArea';

const App = () => {
  
  const[list, setList] = useState([
    { id: 1, name: 'Comprar pao', done: false},
    { id: 2, name: 'Comprar bolo', done: true},
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  const handleTakChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList){
      if(newList[i].id === id){
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de tarefas</C.Header>

        <AddArea onEnter={handleAddTask}/>

        {list.map((item, index) => (
          <ListItem 
            key={index} 
            item={item}
            onChange={handleTakChange}  
          />
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;