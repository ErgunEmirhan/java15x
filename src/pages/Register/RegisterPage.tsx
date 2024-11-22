import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { XDispatch } from '../../store';
import { fetchRegister } from '../../store/feature/authSlice';

function Register() {
    const dispatch = useDispatch<XDispatch>();
    const [userName,setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);
    const [isWrong, setIsWrong] = useState(false);
    const [user, setUser] = useState({
        'userName': '',
        'password': '',
        'rePassword': '',
        'age': 0
    });
    const kaydet = ()=>{
        console.log(userName, password, rePassword, email)
        dispatch(fetchRegister({userName, password, rePassword, email}))
    }

  return (
    <div className="contanier">
        <div className="row mt-4">
            <div className="col-4"></div>
            <div className="col-4">
                <h1 className='text-center mb-3 text-success'>Register Form</h1>
                <div className="mb-3">
                    <input onChange={evt=>{setUserName(evt.target.value)}} className='form-control' type="text" placeholder='kullanıcı adı' />
                </div>
                <div className="mb-3">
                    <input onChange={evt=>{setPassword(evt.target.value)}} className='form-control' type="password" placeholder='şifre'/>
                </div>
                <div className="mb-3">
                    <input onChange={evt=>{
                        setRePassword(evt.target.value);
                        // DİKKAT!!!!
                        // set işlemi bir dizi fonksiyon tetiklediği için zaman alır bu nedenle
                        // ilgili deği hemen aktif etmez yani set ettiğiniz değer altta hemen kullanılamaz
                        if(evt.target.value === password) setIsWrong(false);
                        else setIsWrong(true);
                       // setIsWrong(!(evt.target.value === password)) // eğer şifreler uyuşmuyor ise TRUE
                        }} className='form-control' type="password" placeholder='şifre doğrula' />
                    {
                        isWrong ? <label className='text-danger'>* şifreler uyuşmuyor</label> : null
                    }
                    
                </div>
                <div className="mb-3">
                    <input onChange={evt=>{setEmail((evt.target.value))}} className='form-control' type="text" placeholder='email'/>
                </div>
                <div className="mb-3 d-grid">
                    <button onClick={kaydet} className='btn btn-secondary'>Yeni Üye</button>
                </div>
                <div className="mb-3 d-grid">
                    <NavLink to={'/login'} className='btn btn-success'>
                        Giriş yap
                    </NavLink>
                </div>
                
            </div>
            <div className="col-4"></div>
        </div>
    </div>
  )
}

export default Register