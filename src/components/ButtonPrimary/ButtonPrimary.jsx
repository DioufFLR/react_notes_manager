import s from './style.module.css'

const ButtonPrimary = ( {children , onClick}) =>
{
    return (
        <button
            onClick={onClick}
            type='button'
            className={ `btn btn-primary ${ s.button }` }
        >
            { children }
        </button>
    );
};

export default ButtonPrimary;