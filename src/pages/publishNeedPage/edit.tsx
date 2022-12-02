import Quill from 'quill';
import { useEffect } from 'react';

function Edit(props: any) {
  useEffect(() => {
    const editor = new Quill('#editor', { placeholder: '请输入' });
  }, []);
  return <div id="editor" />;
}
export default Edit;
