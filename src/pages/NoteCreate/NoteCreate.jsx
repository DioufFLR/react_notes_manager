import s from './style.module.css'
import NoteForm from "../../components/NoteForm/NoteForm";

const NoteCreate = ( props ) =>
{
    return (
        <>
            <NoteForm title='Create a note' />
        </>
    );
};

export default NoteCreate;