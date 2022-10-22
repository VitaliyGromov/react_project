import React from 'react';
import MyInput from "./ui/input/MyInput";
import MySelect from "./ui/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Что ищем?"
            />
            <MySelect
                value={filter.sortType}
                onChange={selectedSort => setFilter({...filter, sortType: selectedSort})}
                defaultValue="Сортировка по"
                options={[
                    {value: 'title', name: 'Сортировка по названию'},
                    {value: 'body', name: 'Сортировка по описанию'},
                ]}
            />
        </div>
    );
};

export default PostFilter;