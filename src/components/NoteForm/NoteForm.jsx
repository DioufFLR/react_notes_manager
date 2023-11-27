import s from './style.module.css';
import {PencilFill, TrashFill} from "react-bootstrap-icons";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import {useState} from "react";
import {ValidatorService} from "../../services/form-validators";
import FieldError from "../FieldError/FieldError";

const VALIDATORS = {
    title: ( value ) =>
    {
        return ValidatorService.min(value, 3) || ValidatorService.max(value, 20);
    },
    content: ( value ) =>
    {
        return ValidatorService.min(value, 3);
    },
}

const NoteForm = ( {title, onClickEdit, onClickTrash, onSubmit} ) =>
{

    const [formValues, setFormValues] = useState({title: '', content: ''});
    const[formErrors, setFormErrors] = useState({title: undefined, content: undefined});

    function updateFormValues( e ) {
        setFormValues({...formValues, [e.target.name]: e.target.value})
        validate(e.target.name, e.target.value)
    }


    function validate(fieldName, fieldValue) {
        setFormErrors({...formErrors, [fieldName]:VALIDATORS[fieldName](fieldValue)})
    }

    const actionIcons = (
        <>
            <div className='col-1'>
                { onClickEdit && <PencilFill onClick={ onClickEdit } className={ s.icon }/> }
            </div>
            <div className='col-1'>
                { onClickTrash && <TrashFill onClick={ onClickTrash } className={ s.icon }/> }
            </div>
        </>
    )


    const titleInput = (
        <div className='mb-5'>
            <label className='form-label'>Title</label>
            <input
                onChange={ updateFormValues }
                type="text"
                name='title'
                className="form-control"
            />
            <FieldError msg={formErrors.title} />
        </div>
    )

    const contentInput = (
        <div className='mb-5'>
            <label className='form-label'>Content</label>
            <textarea
                onChange={ updateFormValues }
                type="text"
                name='content'
                className="form-control"
                row='5'
            />
            <FieldError msg={formErrors.content} />
        </div>
    );

    const submitInput = (
        <div className={ s.submit_btn }>
            <ButtonPrimary onClick={ () => onSubmit(formValues) }>Submit</ButtonPrimary>
        </div>
    );

    return (
        <form className={ s.container }>
            <div className='row justify-content-space-between'>
                <div className='col-10'>
                    <h2 className='mb-3'>{ title }</h2>
                </div>
                { actionIcons }
            </div>
            <div className={ `mb-3 ${ s.title_input_container }` }>{ titleInput }</div>
            <div className={ `mb-3 ${ s.content_input_container }` }>{ contentInput }</div>
            { onSubmit && submitInput }
        </form>
    );
};

export default NoteForm;