import React from 'react'
import './Modal.css'

const Modal =(props)=>{
    if(!props.show)
    return null
    
    return(
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e=>e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">{props.title}</h4>
                </div>
                <div className="modal-body">
                
                <div>
                    <h2>Title:{props.title}</h2>
                    <h2>Year:{props.year}</h2>
                    <h2>Genre:{props.genre}</h2>
                    <h2>Rating:{props.rating}</h2>
                    <h2>Episodes:{props.episodes}</h2>
                    <h2>Creator:{props.creator}</h2>
                    <img src={props.image} alt="" width="200" height="250" />
                </div>
            
                </div>
                <div className="modal-footer">
                    <button  onClick={props.onClose}className="button">Close</button>
                </div>
            </div>
        </div>
    )
    }

export default Modal