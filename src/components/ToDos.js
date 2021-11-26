import { useState, useEffect } from 'react';
import '../components/style.css'


function ToDos() {
       const [DataInput, setInput] = useState("")
       const [ToDoList, setToDoList] = useState([])
        const [FilterEd, setFilter] = useState([])


    const onChangeInput = (e) => {

        setInput(e.target.value)
    }

    const onClickSubmit = () => {
        if (!(DataInput === "")) {
            setToDoList([...ToDoList, { name: DataInput, checked: false }])
            setFilter([...FilterEd, { name: DataInput, checked: false }])
            setInput("")

        }

    }

    const onClickDelete = (e) => {
        let arr = [...ToDoList]
        arr.forEach((element, i) => {
            if (element.name === e.target.parentNode.parentNode.parentNode.childNodes["0"].childNodes[0].innerText) {
                arr.splice(i, 1)
            }
        })
        setToDoList(arr)
        setFilter(arr)

    }

    const onChecked = (e) => {
        let arr = []
        ToDoList.map((e) => !(e.name === "") && arr.push(e))
        arr.forEach((element) => {
            if (element.name === e.target.parentNode.parentNode.parentNode.childNodes["0"].childNodes[1].innerText) {
                (element.checked) ? element.checked = false : element.checked = true
            }
        })
        setFilter(arr)
        setToDoList(arr)
    }

    const onClickFilter1 = () => {
        setFilter([...ToDoList])
    }

    const onClickFilter2 = () => {
        const a = ToDoList.filter(element => element.checked === true)
        setFilter(a)
    }

    const onClickFilter3 = () => {
        const a = ToDoList.filter(element => element.checked === false)
        setFilter(a)
    }

    return (
        <div>
            <div className="contain">
                <h1 className="title">'To Do' Listesi</h1>
                <p className="subtitle">Üşenme, erteleme, vazgeçme..</p>
                <input
                    name="input"
                    className="new-todo"
                    placeholder="Yapılacak görev giriniz."
                    value={DataInput}
                    onChange={onChangeInput}
                    autoFocus
                />
                <button id="button" onClick={onClickSubmit}>Ekle</button>
            </div>

            <ul>
                <br />
                {FilterEd.map((item, i) =>
                    <li className="list" key={item.name + i}>
                        <div className="li-container">
                            <span>
                                <span className="round">
                                    <input onClick={onChecked} type="checkbox" id={item.name + i} defaultChecked={item.checked} />
                                    <label htmlFor={item.name + i}></label>
                                </span>
                                <span className="textSub">
                                    {item.name}
                                </span>
                            </span>

                            <span className="buttonHolder">
                                <button className="deleteBtn" onClick={onClickDelete}> 🗸</button>
                            </span>
                        </div>

                    </li>)}
            </ul>

            <div className="filterMenu">
                <button onClick={onClickFilter1} id="filter1" className="filterButton">
                   Hepsi
                </button>

                <button onClick={onClickFilter2} id="filter2" className="filterButton">
                    Tamamlananlar
                </button>

                <button onClick={onClickFilter3} id="filter3" className="filterButton">
                    Tamamlanmayanlar
                </button>
            </div>


        </div>
    )
}


export default ToDos;