import React from 'react'
import { useForm } from 'react-hook-form'

export default function FormReg2(){
    const{register, handleSubmit, errors} = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' placeholder='Username' name='username' ref={register({required: true, minLength:4})}/>
            <input type='text' placeholder='Phone Number' name='number' ref={register({required: true, minLength:5})}/>
            <input type='password' placeholder='Password' name='password' ref={register({required: true, minLength:5})}/>
            {errors.username && <p>Username must be 4 characters</p>}
            {errors.number && <p>Number must be 5 characters</p>}
            {errors.password && <p>Password must be 5 characters</p>}
            <input type='submit'/>
        </form>
    )
}