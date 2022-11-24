import * as React from 'react';
import Card from '@mui/material/Card';
import Labels from '@components/Base/Labels';
import UserInfo from '../Base/UserInfo';

function DidCard() {
  return (
    <Card className="p-4 h-120px shadow-none rounded-[12px] bg-gradient-to-r from-green-400 to-blue-500">
      <UserInfo />
      <div className="flex justify-between items-center">
        <Labels labels={['asdf', 'sdhof']} />
        <span className="text-[10px] text-gray-700">两周前</span>
      </div>
    </Card>
  );
}

export default DidCard;
