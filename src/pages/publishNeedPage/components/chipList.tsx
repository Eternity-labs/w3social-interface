import Chip from '@components/Base/Chip';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { TagInfo } from '@apis/model/SquareModel';

interface ChipListProps {
  preChip?: JSX.Element;
  tagList: Array<TagInfo>;
  handleDelete: (isAll: boolean, index?: number) => void;
}
function chipList(props: ChipListProps) {
  const { preChip, tagList = [], handleDelete } = props;
  const deleteItem = (index: any) => {
    handleDelete(false, index);
  };
  const deleteAll = () => {
    handleDelete(true);
  };
  return (
    <div className="flex border-[#ccc] border-b border-x-0 border-t-0 border-solid pb-[10px]">
      <div className="flex-1 flex  flex-wrap">
        {preChip}
        {tagList.map((item, index) => {
          return (
            item.checked && (
              <Chip
                size="small"
                label={item.label}
                deleteIcon={<CloseIcon className="text-[#0DCE71]" />}
                onDelete={e => {
                  deleteItem(index);
                }}
                className="mr-[8px] mb-[8px]"
                key={index}
              />
            )
          );
        })}
      </div>
      <div className="text-[#0DCE71] w-[50px] text-[12px]" onClick={deleteAll}>
        清除全部
      </div>
    </div>
  );
}
export default chipList;
