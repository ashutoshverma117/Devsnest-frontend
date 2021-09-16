import React from 'react';

interface NewNoteInputProps{
    addNote(note: string): void;
}
export const NewNoteInput=()=>{
    return(
        <div>
      <input type="text" name="note" placeholder="Note"/>
      <button>Add note</button>
     </div>
    );
}