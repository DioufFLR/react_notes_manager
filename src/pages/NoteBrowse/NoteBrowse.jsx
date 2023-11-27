import s from './style.module.css'
import TextCard from "../../components/TextCard/TextCard";

const NoteBrowse = ( props ) =>
{
    return (
        <>
            <TextCard
                title='titre'
                subtitle='asdf'
                content='asdfladf l sdla gglasd fl gjasld gladf gl '
                onClickTrash={ () => alert('Click trash') }
                onClick={ () => alert('Click') }
            />
        </>
    );
};

export default NoteBrowse;