import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";

export default function AlbumForm() {
    const schema = yup.object().shape({
        userId: yup.number().max(4).required("User ID required"),
        id: yup.number().max(4).required("ID is required"),
        title: yup.string().min(4).max(30).required("Title is required")
    })
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            userId: 1,
            title: ""
        }
    })
    const onSubmit = (formData: { userId: number, id: number, title: string }) => {
        axios.post('https://jsonplaceholder.typicode.com/albums', {
            title: formData.title
        })
        alert("Form submitted")
        console.log(formData)
    }
    const formKeys: {id: string, name: "userId" | "id" | "title"}[] = [{
        id: "a",
        name: "userId"
    }, {id: "b", name: "id"}, {id: "c", name: "title"}]

    return (
        <div className="App">
            <header className="App-header"></header>
            <h2 className="header">Add Album</h2>
            <label>User ID</label>
            <select id="a">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
            </select>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <>
                        <input placeholder="title" id="c"/>
                    </>
                <button className="button">Submit</button>
            </form>
            {/*<AlbumForm/>*/}
        </div>
    )
}
