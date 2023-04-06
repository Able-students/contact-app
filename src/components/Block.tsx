import React, { useRef, useState } from "react"

interface BlockPropsType
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  index?: number
  description?: string
  children?: React.ReactNode
}

const Block = (props : BlockPropsType) => {
    const {index, title, description, children, ...others} : BlockPropsType = props
    const [count,setCount] = useState<string|number>(1)
    const refDiv = useRef<HTMLButtonElement>(null)

    const onClick = (event : React.MouseEvent) => {
        console.log(refDiv.current);
        alert('Alert')
    }

    const onChange = (event : React.ChangeEvent<HTMLInputElement>, text?: string) => {
        console.log(event.target.checked)
    }

    const onSelectChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value)
    }

    const onFocus = (event : React.FocusEvent<HTMLInputElement>) => {
        event.target.style.backgroundColor = 'grey'
    }

    const onKeyDown = (event : React.KeyboardEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value)
        console.log(event.key)
    }

    return(
    <div {...others}>
        {index}
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
        <h1>{count}</h1>
        <button ref={refDiv} onClick={() => setCount(+count + 1)}>+1</button>
        <button onClick={onClick}>Click me</button>
        <input onChange={onChange} onFocus={onFocus} />
        <input onKeyDown={onKeyDown} />
        <input type="checkbox" onChange={onChange}/>
        <input type="radio" name="grob" onChange={onChange}/>
        <input type="radio" name="grob" onChange={onChange}/>
        <select onChange={onSelectChange} defaultValue={2}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
    </div>)
}

export default Block;