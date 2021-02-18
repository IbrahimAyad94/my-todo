import React from 'react'
import style from './CategoryForm.module.css';
import Button from '../../UI/Buttons/Buttons';

 const categoryForm = (props) =>  {

    return (
        <div className="container">
            <input 
                className={style.input}
                value={props.categoryName}
                onChange={props.changeValue}
                name="name"
                placeholder="Type Category Name "
            />
            <Button btnType="danger" onClick={props.onSave}>Save</Button>
        </div>
    )
}

export default categoryForm;