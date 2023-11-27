import s from './style.module.css'
import {useParams, useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";

const Note = ( props ) =>
{
    const {noteId} = useParams();
    const [searchParams] = useSearchParams();
    const note = useSelector(( store ) =>
        store.NOTE.noteList.find(( note ) => note.id === noteId))

    return (
        <>
            Note
        </>
    );
};

export default Note;