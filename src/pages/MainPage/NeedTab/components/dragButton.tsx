import AddIcon from '@mui/icons-material/Add';

type DragButtonprops = {
  onClick?: () => void;
};
function dragButton(props: DragButtonprops) {
  const { onClick } = props;
  const defaultPosition = {
    x: document.documentElement.clientWidth - 45,
    y: 0,
  };
  const publishNeed = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <div onClick={publishNeed}>
      <div className="fixed bottom-[100px] right-[20px] text-white bg-opacityButton w-[50px] h-[50px] rounded-full flex items-center justify-center">
        <AddIcon className="text-[40px]" />
      </div>
    </div>
  );
}
export default dragButton;
