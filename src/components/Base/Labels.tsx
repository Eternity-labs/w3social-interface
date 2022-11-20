import * as React from 'react';

function Labels({ labels }: { labels: string[] }) {
  console.log(labels);
  return (
    <div className="flex">
      {labels.map(label => (
        <span
          key={label}
          className="bg-black text-white text-[10px] rounded-full py-[3px] px-[6px] ml-[6px] first:ml-[0] flex justify-center align-center"
        >
          {label}
        </span>
      ))}
    </div>
  );
}

export default Labels;
