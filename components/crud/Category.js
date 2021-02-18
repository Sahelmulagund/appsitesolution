import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { getCookie } from '../../actions/auth';
import { create, getCategories, removeCategory } from '../../actions/category';

const Category = () => {
    const [values, setValues] = useState({
        name: '',
        error: false,
        success: false,
        categories: [],
        removed: false,
        reload: false
    });

    const { name, error, success, categories, removed, reload } = values;
    const token = getCookie('token');

    useEffect(() => {
        loadCategories();
    }, [reload]);

    const loadCategories = () => {
        getCategories().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, categories: data });
            }
        });
    };

    const showCategories = () => {
        return categories.map((c, i) => {
            return (
                <button
                    onDoubleClick={() => deleteConfirm(c.slug)}
                    title="Double click to delete"
                    key={i}
                    className="btn btn-outline-danger mr-1 ml-1 mt-3"
                >
                    {c.name}
                </button>
            );
        });
    };

    const deleteConfirm = slug => {
        let answer = window.confirm('Are you sure you want to delete this category?');
        if (answer) {
            deleteCategory(slug);
        }
    };

    const deleteCategory = slug => {
        // console.log('delete', slug);
        removeCategory(slug, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, error: false, success: false, name: '', removed: !removed, reload: !reload });
            }
        });
    };

    const clickSubmit = e => {
        e.preventDefault();
        // console.log('create category', name);
        create({ name }, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({ ...values, error: false, success: true, name: '', reload: !reload });
            }
        });
    };

    const handleChange = e => {
        setValues({ ...values, name: e.target.value, error: false, success: false, removed: '' });
    };

    const showSuccess = () => {
        if (success) {
            return <p className="text-success">Category is created</p>;
        }
    };

    const showError = () => {
        if (error) {
            return <p className="text-danger">Category already exist</p>;
        }
    };

    const showRemoved = () => {
        if (removed) {
            return <p className="text-danger">Category is removed</p>;
        }
    };

    const mouseMoveHandler = e => {
        setValues({ ...values, error: false, success: false, removed: '' });
    };

    const newCategoryFom = () => (
        <form onSubmit={clickSubmit}>
        <div className="container">
            <div className="form-group">
                <label className="text-muted">Category Name</label>
                <input type="text" className="form-control" onChange={handleChange} value={name} required />
            </div>
            <div>
                <button type="submit" className="btn">
                    Create
                </button>
                
            </div>
            <style jsx>{`
            
                    

                     .btn{
                        display: block;
                        margin: 20px auto;
                        border: none;
                        outline: none;
                        background-color: #00bcd4;
                        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.1);
                        border-radius: 10px;
                        font-size: 16px;
                        color: white;
                        width: 100%;
                     }
                     .btn:hover{
                        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                  
                     }

            
                    

                     .container{
                        display: block;
                        margin: 20px auto;
                        border: none;
                        outline: none;
                        padding: 8px;
                        border-style: groove;
                        border-width: 2px;
                        border-color: #F8F8F8;
                        background-color: white;
                        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.1);
                        border-radius: 10px;

                        font-size: 16px;
                        color: white;
                        width: 18.375rem;
                        height: 14.375rem;
                     }
                     .container:hover{
                        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                  
                     }
               
                `}</style>
            </div>
        </form>
    );

    return (
        <React.Fragment>
            {showSuccess()}
            {showError()}
            {showRemoved()}
            <div onMouseMove={mouseMoveHandler}>
                {newCategoryFom()}
                {showCategories()}
            </div>
        </React.Fragment>
    );
};

export default Category;