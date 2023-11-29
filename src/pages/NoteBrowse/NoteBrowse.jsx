import s from './style.module.css'
import NoteList from "../../containers/NoteList/NoteList";
import SearchBar from "../../components/SearchBar/SearchBar";
import {useState} from "react";
import {useSelector} from "react-redux";
import {store} from "../../store";
import note from "../Note/Note";
import {Link} from "react-router-dom";

const NoteBrowse = ( props ) =>
{

    const [searchText, setSearchText] = useState('');
    const noteList = useSelector(( store ) => store.NOTE.noteList)

    const filteredList = noteList.filter((note) => {
        const containsTitle = note.title
            .toUpperCase()
            .includes(searchText.trim().toUpperCase());

        const containsContent = note.content
            .toUpperCase()
            .includes(searchText.trim().toUpperCase());

        return containsTitle || containsContent;
    });

    return (
        <>
            <div className='row justify-content-center mb-5'>
                <div className="col-sm-12 col-md-4">
                    <SearchBar
                        onTextChange={ setSearchText }
                        placeholder='Search your notes...'
                    />
                </div>

                {
                    noteList?.length === 0 && (
                        <div className='d-flex justify-content-center'>
                            <span className='m-3'>
                                You don't have note, do you want <Link to='/note/new'>create</Link> one ?
                            </span>
                        </div>
                    )
                }
                <NoteList noteList={ filteredList }/>
            </div>
        </>
    );
};

export default NoteBrowse;