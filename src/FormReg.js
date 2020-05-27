import React, {useState} from 'react' 
import * as yup from 'yup'
import Axios from 'axios'

const fromSchema = yup.object().shape({
    username: yup.string().min(2, 'Not long enough').required('Please ender your name'),
    number: yup.string().min(5, 'Not long enough').required('Please enter your number'),
    password: yup.string().min(5, 'Not long enough').required('Please ender your password'),
    confirm: yup.string().min(5, 'Not long enough').required('Please confirm your password')
})

export default function FormReg(){
    const [formReg, setFormReg] = useState({
        username: '',
        number: '',
        password: '',
        confirm: ''
    })
    const [error, setError] = useState({
        username: '',
        number: '',
        password: '',
        confirm: ''
    })
    const [post, setPost] = useState ([])

    const onSubmit = e =>{
        e.preventDefault()
        Axios.post('https://reqres.in/api/users', formReg)
             .then(res => {
                 setPost([...post, res.data])
                 setFormReg({
                     username: '',
                     number: '',
                     password: '',
                     confirm: ''
                 })
             })
             .catch(err => console.log(err.response))
    }

    const validateChange = e => {
        yup.reach(fromSchema, e.target.username)

        .then(valid => {
            setError({
                ...error, [e.target.username]: ''
            })
        })
        .catch(err => {
            setError({
                ...error, [e.target.username]: err.errors[0]
            })
        })
    }

    const handleChange = e => {
        e.persist()
        const newFormData = {
            ...formReg,
            [e.target.username]:
            '',
        }
        
        validateChange(e)
        setFormReg(newFormData)
    }

    return(
        <form onSubmit = {onSubmit}>
            <label htmlFor = 'username'>
                Username:
                <input 
                type='text'
                username='username'
                value={formReg.username}
                onChange={handleChange}
                />
                {error.username.length > 0 ? <p>{error.username}</p> : null}
            </label>
        </form>
    )
 }