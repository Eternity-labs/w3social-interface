import Quill, { QuillOptionsStatic } from 'quill';
import { useEffect } from 'react';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import 'quill/dist/quill.snow.css';

type EditProps = {
  className?: string;
};
// eslint-disable-next-line import/no-mutable-exports
let quill: Quill;
function Edit(props: EditProps) {
  const { className } = props;
  useEffect(() => {
    const options: QuillOptionsStatic = {
      theme: 'snow',
      modules: {
        toolbar: false,
      },
      formats: [],
      placeholder: '请输入.....',
    };
    quill = new Quill('#editor', { ...options });
    quill.focus();
  }, []);
  return (
    <>
      <div
        id="editor"
        className="h-[calc(100%-100px)] overflow-auto caret-main  pt-[10px] border-none"
      />
      <div className="h-[50px] fixed z-auto bottom-[70px]">
        <div className="bg-black bg-opacity-60 w-[40px] h-[40px] rounded-[9px] flex items-center justify-center">
          <CameraAltOutlinedIcon className="text-white w-[24px]" />
        </div>
      </div>
    </>
  );
}
export default Edit;
export { quill };
