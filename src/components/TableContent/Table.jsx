import '../TableContent/Table.scss'
import Modal from '../Modals/Modal'
import App from '../../App'
import Data from '../../Data.json'
import React, { useState } from 'react'


export default function Table(props) {
    const [inputValue, setSearchTerm] = useState("")
    const [currentCartoon, setCurrentCartoon] = useState(true)
    const [show,setShow]=useState(false)


    const clickCartoon = (item) => {
        setCurrentCartoon(item)
        setShow(true)
    }
    // if (!currentCartoon) return 'Loading...'
    return (

        
        <div className="table-container" >
            <button onClick={()=>setShow(true)}>Show modal</button>
      <Modal
      title={currentCartoon.title}
      year={currentCartoon.year}
      genre={currentCartoon.genre}
      rating={currentCartoon.rating}
      episodes={currentCartoon.episodes}
      creator={currentCartoon.creator}
      image = {currentCartoon.image}
      
      onClose={()=>setShow(false)}show={show}/>

            
        <input className="search" type="text" placeholder="Search..." onChange={(event) => {
            setSearchTerm(event.target.value)
        }} />


        <div className='table-row header'>
            <div className='table-column rank'>Title</div>
            <div className='table-column club'>Year</div>
            <div className='table-column crest'>Genre</div>
            <div className='table-column points'>Image</div>
        </div>


        {Data.filter((item) => {
            if (inputValue == "") {
                return item
            } else if (item.title.toLowerCase().includes(inputValue.toLowerCase())) {
                return item
            }
        }).map(item => (
            <div   key={item.id} className='table-row' onClick={event => clickCartoon(item)}>
                <div className='table-column rank'>{item.title}</div>
                <div className='table-column club'>{item.year}</div>
                <div className='table-column points'>{item.genre}</div>
                <div className='table-column crest'><img className='logo' src={item.image} alt="" width="200" height="250"/></div>
            </div>
        ))
        }

    </div>

    )
}