import React from 'react';
import { render } from 'react-dom'
import Chips from 'react-chips'

let items = ["lorens", "Ruby", "marks", "sam", "Arnold"]

render(<Chips autoCompleteData={items}/>, document.getElementById("root"));
