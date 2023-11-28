import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Note from "../pages/Note/Note";

const ComponentPreviews = () =>
{
    return (
        <Previews palette={ <PaletteTree/> }>
            <ComponentPreview path="/Note">
                <Note/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews