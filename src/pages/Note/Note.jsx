import s from './style.module.css'
import {useParams, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import NoteForm from "../../components/NoteForm/NoteForm";
import {useState} from "react";
import {NoteApi} from "../../api/note-api";
import {updateNote} from 'store/note/note-slice';


const Note = ( props ) =>
{
    const [isEditable, setIsEditable] = useState(false);
    const dispatch = useDispatch();
    const {noteId} = useParams();
    const [searchParams] = useSearchParams();
    const note = useSelector(( store ) =>
        store.NOTE.noteList.find(( note ) => note.id === noteId)
    )

    async function submit(formValues) {
        const updatedNote = await NoteApi.update({...formValues, id: note.id});
        dispatch(updateNote(updatedNote));
        setIsEditable(false);
    }

    return (
        <>
            { note && (
                <NoteForm
                    isEditable={ isEditable }
                    title={ isEditable ? 'Edit note' : note.title }
                    note={ note }
                    onClickEdit={ () => setIsEditable(!isEditable) }
                    onClickTrash={ () => '' }
                    onSubmit={isEditable && submit}
                />
            ) }
        </>
    );
};

export default Note;