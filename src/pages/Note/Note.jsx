import s from './style.module.css'
import {useParams, useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";
import NoteForm from "../../components/NoteForm/NoteForm";
import {useState} from "react";

const Note = ( props ) =>
{
    const [isEditable, setIsEditable] = useState(false);
    const {noteId} = useParams();
    const [searchParams] = useSearchParams();
    const note = useSelector(( store ) =>
        store.NOTE.noteList.find(( note ) => note.id === noteId)
    )

    function submit() {
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