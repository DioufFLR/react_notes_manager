import s from './style.module.css'

const ButtonPrimary = ( {children , onClick, isDisabled}) =>
{
    return (
        <button
            disabled={isDisabled}
            onClick={onClick}
            type='button'
            className={ `btn btn-primary ${ s.button }` }
        >
            { children }
        </button>
    );
};

export default ButtonPrimary;