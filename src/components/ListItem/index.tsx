import { useState } from 'react';
import * as C from './style';
import {Item} from '../../types/Item';

type  Props = {
    item: Item
    name: string
    done: boolean
}

export const ListItem = ({item}:Props) => {

    const [isChecked, setIsChecked] = useState(item.done);

    return (
        <C.Container done={isChecked}>
            <input 
                type="checkbox" 
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
            />
            <label>{item.name}</label>
        </C.Container>
    );
}