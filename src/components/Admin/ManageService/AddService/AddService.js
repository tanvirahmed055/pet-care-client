import React from 'react';
import { useForm } from "react-hook-form";


const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        const newService = {
            name: data.name,
            img: data.img,
            shortDescription: data.shortDescription,
            detailDescription: data.detailDescription,
            price: data.price,
        }

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newService),
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
            <h2>Welcome to Add service</h2>
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

export default AddService;