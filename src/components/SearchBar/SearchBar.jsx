import s from './style.module.css';
import {Search as SearchIcon} from 'react-bootstrap-icons'

const SearchBar = ( {placeholder, onTextChange} ) =>
{
    return (
        <div>
            <SearchIcon size={ 25 } className={ s.icon }/>
            <input
                type="text"
                className={ s.input }
                onChange={ ( e ) => onTextChange(e.target.value) }
                placeholder={ placeholder }
            />

        </div>
    );
};

export default SearchBar;