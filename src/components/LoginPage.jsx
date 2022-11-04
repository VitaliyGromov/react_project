import React from 'react';
import MyInput from "./ui/input/MyInput";
import MyButton from "./ui/button/MyButton";

const LoginPage = () => {
    return (
        <div>
            <h1>Страница для логина</h1>
            <form>
                <MyInput type={'text'} placeholder={'Введите адрес эл. почты'}/>
                <MyInput type={'password'} placeholder={'Введите пароль'}/>
                <MyButton>
                    Войти!
                </MyButton>
            </form>
        </div>
    );
};

export default LoginPage;