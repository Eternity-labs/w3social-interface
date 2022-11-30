import cn from 'classnames';

type LabelListprops = {
  className?: string;
};
function labelList(props: LabelListprops) {
  const { className } = props;
  const list = ['招募开发', 'Token支付', '寻找合伙人'];
  const iconCss = '';
  return (
    <div className={cn('flex', className || '')}>
      {list.map((item, index) => {
        return (
          <div className="py-[2px] px-[6px] bg-labelBg mr-[6px] rounded-[8px] font-medium text-black text-[10px]">
            {item}
          </div>
        );
      })}
    </div>
  );
}
export default labelList;
