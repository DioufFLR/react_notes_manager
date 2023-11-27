import s from './style.module.css';
import {useSelector} from "react-redux";
import TextCard from "../../components/TextCard/TextCard";
import {useNavigate} from "react-router-dom";

const NoteList = ( props ) =>
{

    const noteList = useSelector(( store ) => store.NOTE.noteList)
    const navigate = useNavigate()

    return (
        <div className='row justify-content-center'>
            {
                noteList.map(note =>
                {
                    return (
                        <div className={ s.card_container }>
                            <TextCard
                                title={ note.title }
                                subtitle={ note.subtitle }
                                content={ note.content }
                                onClick={ () => navigate('/note/' + note.id) }
                                onClickTrash={ () => alert('Click trash') }
                            />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default NoteList;