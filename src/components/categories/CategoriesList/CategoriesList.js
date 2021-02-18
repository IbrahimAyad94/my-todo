import React from 'react'
import style from './CategoriesList.module.css';
import { FaTrash, FaRegEdit } from "react-icons/fa";

const categoriesList = (props) => {
    console.log('[categoriesList.js]', props);
    return (
        <div className="container">
            <ul>
                {
                    (props.list && props.list.length > 0) ? props.list.map(it => {
                        return (
                            <div key={it.id} className={style.Card}>
                                <div className={style.CatName}>
                                    {it.name}
                                </div>
                                <div className={style.Actions}>
                                    <button onClick={() => props.remove(it.id)}>
                                        <FaTrash color="#E91E63" className={[style.icon, style.edit].join('')} />
                                    </button>
                                    <button onClick={() => props.edit(it.id)}>
                                        <FaRegEdit color="#2398db" className={[style.icon, style.delete].join('')} />
                                    </button>
                                </div>

                            </div>
                        )
                    }) : null
                }
            </ul>
        </div>
    )
}

export default categoriesList;