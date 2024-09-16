/* This code snippet is a React component using the Tiptap editor library for building a rich text
editor in a React application. Here's a breakdown of what the code is doing: */
import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';


const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
    ],
    content: '<h1>Hello, World</h1>',
  });

  const addImage = () => {
    const url = prompt('Enter the image URL');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    
    <div>
      <button onClick={addImage}  style={{ marginBottom: '10px', padding: '5px 10px', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff', border: 'none' }}>Add Image</button>
      <EditorContent editor={editor} style={{ minHeight: '200px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#fff' }}/>
    </div>
  );
};

export default Tiptap;
