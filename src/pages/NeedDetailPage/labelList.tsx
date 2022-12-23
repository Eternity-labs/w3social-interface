import cn from 'classnames';

type LabelListprops = {
  className?: string;
  tag: string[];
};
function labelList(props: LabelListprops) {
  const { className, tag = [] } = props;
  const iconCss = '';
  return (
    <div className={cn('flex', className || '')}>
      {tag?.map((item, index) => {
        return (
          <div
            key={item + index}
            className="py-[2px] px-[6px] bg-labelBg mr-[6px] rounded-[8px] font-medium text-black text-[10px]"
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}
export default labelList;
