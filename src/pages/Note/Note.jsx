import s from './style.module.css'
import {useParams, useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";
import NoteForm from "../../components/NoteForm/NoteForm";

const Note = ( props ) =>
{
    const {noteId} = useParams();
    const [searchParams] = useSearchParams();
    const note = useSelector(( store ) =>
        store.NOTE.noteList.find(( note ) => note.id === noteId))

    return (
        <>
            { note && <NoteForm
                isEditable={false}
                title={ note.title }
                note={note}
                onClickEdit={() => ''}
                onClickTrash={() => ''}
            /> }
        </>
    );
};

export default Note;