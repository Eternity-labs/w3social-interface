import Draggable from 'react-draggable';

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
      {/* <Draggable axis="y" defaultPosition={defaultPosition} bounds="parent"> */}
      <div>
        <div className="fixed bottom-[80px] right-[0px] text-white bg-black w-[45px] h-[45px] rounded-full text-center">
          发帖
        </div>
      </div>
      {/* </Draggable> */}
    </div>
  );
}
export default dragButton;
