import s from './style.module.css'
import NoteForm from "../../components/NoteForm/NoteForm";
import {NoteApi} from "../../api/note-api";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {addNote} from "../../store/note/note-slice";

const NoteCreate = ( props ) =>
{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function createNote( formValues ) {
        const createdNote = await NoteApi.create({
            ...formValues,
            created_at: new Date().toLocaleDateString(),
        })
        dispatch(addNote(createdNote));
        navigate('/');
    }

    return (
        <>
            <NoteForm
                title='Create a note'
                onSubmit={ createNote }
            />
        </>
    );
};

export default NoteCreate;