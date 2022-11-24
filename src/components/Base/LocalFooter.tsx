import * as React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalMallIcon from '@mui/icons-material/LocalMall';

function LocalFooter() {
  return (
    <div className="flex items-center justify-between">
      <span className="flex items-center">
        <LocationOnIcon className="text-fSelect mr-[8px]" />
        北京
      </span>
      <span className="flex items-center">
        <LocalMallIcon className="text-fSelect mr-[8px]" />
        开发者
      </span>
    </div>
  );
}

export default LocalFooter;
