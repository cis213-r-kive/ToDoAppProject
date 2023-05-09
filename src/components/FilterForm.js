import React from 'react';

function FilterForm({ todos }) {
    // code goes here


    return (
        <div>
            <header>
                <form className='filter-form'>
                    <input type="text" placeholder="Search Item..." className="filter-input"></input>
                </form>
            </header>
        </div>
    );
}

export default FilterForm;