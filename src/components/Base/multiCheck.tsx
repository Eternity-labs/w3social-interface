import CheckItem from './CheckItem';

interface MultiCheckprops {
  onChange: (value: any, index: number) => void;
  selectList: Array<any>;
  className?: string;
}
function MultiCheck(props: MultiCheckprops) {
  const { selectList, onChange, className } = props;

  const handleChange = (value: boolean, index: number) => {
    onChange(value, index || 0);
  };
  return (
    <div className={className || ''}>
      {selectList.map((item, index) => {
        return (
          <div key={index} className="mr-[5px] mb-[5px]">
            <CheckItem {...item} onChange={handleChange} index={index} />
          </div>
        );
      })}
    </div>
  );
}
export default MultiCheck;
