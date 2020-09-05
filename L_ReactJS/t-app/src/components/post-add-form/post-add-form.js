import React from 'react';

import './post-add-form.css';

const PostAddForm = ({onAdd}) => {
    return (
        <div action="" className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="Про що ви думаєте на даний момент?"
                className="form-control new-post-label"
            />
            <button 
                type="submit"
                className="btn btn-outline-secondary"
                onClick={()=> onAdd('Я кохаю Яну <3')}>
                Добавити</button>
        </div>
    )
}

export default PostAddForm;