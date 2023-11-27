import s from './style.module.css';
import {PencilFill, TrashFill} from "react-bootstrap-icons";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import {useState} from "react";

const NoteForm = ( {title, onClickEdit, onClickTrash, onSubmit} ) =>
{

    const [formValues, setFormValues] = useState({title: '', content: ''});

    function updateFormValues( e ) {
        setFormValues({...formValues, [e.target.name]: e.target.value})
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
        <>
            <label className='form-label'>Title</label>
            <input
                onChange={ updateFormValues }
                type="text"
                name='title'
                className="form-control"
            />
        </>
    )

    const contentInput = (
        <>
            <label className='form-label'>Content</label>
            <textarea
                onChange={ updateFormValues }
                type="text"
                name='content'
                className="form-control"
                row='5'
            />
        </>
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