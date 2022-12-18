import * as React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalMallIcon from '@mui/icons-material/LocalMall';

type Props = {
  city: string;
};

function LocalFooter({ city }: Props) {
  return (
    <div className="flex items-center justify-between">
      <span className="flex items-center">
        <LocationOnIcon className="text-fSelect mr-[8px]" />
        {city}
      </span>
      <span className="flex items-center">
        <LocalMallIcon className="text-fSelect mr-[8px]" />
        开发者
      </span>
    </div>
  );
}

export default LocalFooter;
