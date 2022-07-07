import React from 'react';
import { render } from 'react-dom'
import Chips from 'react-chips'

let items = ['albert',
'Roy',
'Peter',
'Jack',
'Sarina',
'Cooper',
'Dine',
'Obaman',
'George']

render(<Chips autoCompleteData={items}/>, document.getElementById("root"));
