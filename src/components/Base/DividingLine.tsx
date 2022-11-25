import cn from 'classnames';

type DividingLineProps = {
  text: string;
  lineWidth?: string;
  className?: string;
};

function DividingLine(props: DividingLineProps) {
  const { lineWidth = 'w-[80px]', text, className } = props;
  const baseLineCss = 'h-px w-[80px] bg-[#878787]';
  return (
    <div className={cn('flex h-[16px] items-center justify-center', className || '')}>
      <div className={cn(baseLineCss, lineWidth)} />
      <p className="h-[8px] ml-[19px] leading-[8px] mr-[19px] text-slimgray text-[8px] ">{text}</p>
      <div className={cn(baseLineCss, lineWidth)} />
    </div>
  );
}
export default DividingLine;
