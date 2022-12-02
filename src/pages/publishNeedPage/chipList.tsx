import Chip from '@components/Base/Chip';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';

interface ChipListProps {
  preChip?: JSX.Element;
}
function chipList(props: ChipListProps) {
  const { preChip } = props;
  const mockselectList = [
    {
      id: 1,
      label: 'token',
      checked: true,
    },
    {
      id: 1,
      label: 'web3人类',
      checked: true,
    },
    {
      id: 1,
      label: 'web3人类',
      checked: true,
    },
  ];
  const handleDelete = () => {};
  return (
    <div className="flex border-[#ccc] border-b border-x-0 border-t-0 border-solid pb-[10px]">
      <div className="flex-1 flex  flex-wrap">
        {preChip}
        {mockselectList.map((item, index) => {
          return (
            item.checked && (
              <Chip
                size="small"
                label={item.label}
                deleteIcon={<CloseIcon className="text-[#0DCE71]" />}
                onDelete={handleDelete}
                className="mr-[8px] mb-[8px]"
                key={index}
              />
            )
          );
        })}
      </div>
      <div className="text-[#0DCE71] w-[50px] text-[12px]">清除全部</div>
    </div>
  );
}
export default chipList;
