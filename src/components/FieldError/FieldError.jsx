import s from './style.module.css';

const FieldError = ( {msg}) =>
{
    return (
        <span className={s.container}>{msg}</span>
    );
};

export default FieldError;