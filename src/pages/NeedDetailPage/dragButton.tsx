import Draggable from 'react-draggable';

function dragButton() {
  const defaultPosition = {
    x: document.documentElement.clientWidth,
    y: document.documentElement.clientHeight,
  };
  return (
    <div className="ss">
      <Draggable axis="y" defaultPosition={...defaultPosition}>
        <div>
          <div className="text-white bg-black w-[45px] h-[45px] rounded-full text-center">发帖</div>
        </div>
      </Draggable>
    </div>
  );
}
export default dragButton;
