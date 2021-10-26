import React from 'react';
import { useForm } from "react-hook-form";
import {
    useParams
} from "react-router-dom";


const UpdateService = () => {

    let { id } = useParams();


    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const updateService = {
            name: data.name,
            img: data.img,
            shortDescription: data.shortDescription,
            detailDescription: data.detailDescription,
            price: data.price,
        }

        fetch(`http://localhost:5000/updateService/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateService),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                reset();
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }


    return (
        <div>
            <h2>Welcome to Update Service</h2>
            <div className="mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input  {...register("name")} placeholder="enter service name" />
                    <br />
                    <input  {...register("img")} placeholder="enter service img url" />
                    <br />
                    <input  {...register("shortDescription")} placeholder="enter service short description" />
                    <br />
                    <input  {...register("detailDescription")} placeholder="enter service detail description" />
                    <br />

                    <input type="number" {...register("price")} placeholder="enter service price" />
                    <br />

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default UpdateService;