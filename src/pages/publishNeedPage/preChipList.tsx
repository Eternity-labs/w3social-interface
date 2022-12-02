interface PrechipProps {
  addLabel: () => void;
}
function prechip(props: PrechipProps) {
  const { addLabel } = props;
  return (
    <div className="flex">
      <div className="w-[18px] h-[18px] rounded-full bg-[#72F9B8] flex items-center justify-center">
        <div className="text-[16px]  font-bold">#</div>
      </div>
      <div className="ml-[18px] mr-[5px] text-[12px] text-black" onClick={addLabel}>
        添加标签
      </div>
      <div />
    </div>
  );
}
export default prechip;
