import { createContext } from "react";


const ChangeColor = createContext({
    color: '',
    changeColorFn: () => {},
    fontColor: '',
    changeFontColorFn: () => {}
})

export default ChangeColor