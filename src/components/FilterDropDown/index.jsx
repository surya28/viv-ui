import { Select, Alert } from 'antd';
import React, { useState, useEffect } from 'react';

const FilterDropDown = ({ setCategory }) => {
    const [error, setError] = useState(false);
    const [options, setOptions] = useState([]);

    const fetchData = async (url) => {
        try {
            const response = await fetch(url)
            const result = await response.json();
            let optionsArray = [];
            if (result?.length > 0) {
                result.forEach(option => {
                    let obj = {};
                    obj.label = option;
                    obj.value = option;
                    optionsArray.push(obj);
                });
            }
            setOptions(optionsArray);
        } catch (err) {
            setError(true);
        }
    };

    useEffect(() => {
        fetchData('https://dummyjson.com/products/categories')
    }, [])

    if (error) {
        return <Alert message="Error retrieving the categories" type="error" />
    }
    const onChange = (value) => {
        setCategory(value)
    };

    return (
        <div className='mt-8'>
            <Select
                showSearch
                allowClear
                size='large'
                onChange={onChange}
                filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                } options={options}
                placeholder='Select Category'
                className='w-72' />
        </div>
    )
}

export default FilterDropDown