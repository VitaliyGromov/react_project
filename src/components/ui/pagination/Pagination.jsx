import React from 'react';
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages, pageNumber, changePageNumber}) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <div className={'page__wrapper'}>
            {pagesArray.map(p =>
                <span
                    onClick={() => changePageNumber(p)}
                    key={p}
                    className={pageNumber === p ? 'page page__current':'page'}
                >{p}
                    </span>
            )}
        </div>
    );
};

export default Pagination;