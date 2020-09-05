import React from 'react';
import { Button } from 'reactstrap';

import './post-status-filter.css';

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <Button color="info">Усі</Button>
            <Button outline color="primary">Сподобались</Button>
        </div>
    )
}

export default PostStatusFilter;