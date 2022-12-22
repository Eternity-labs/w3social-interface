import { NotifyDialogProps } from '@type/index';
import { useState } from 'react';
import { useImmer } from './common/useImmer';

const useButtonActions = () => {
  const [modelProps, setModelProps] = useImmer({
    open: false,
    type: 'WARNING',
    confirmText: '发送星愿邮件',
    cancelText: '我知道了',
    contentText: '对方暂未公布社交账户，可向对方发送星愿邮件添加好友',
    handleConfirm: () => {},
    handleCancel: () => {
      setModelProps({
        ...modelProps,
        open: false,
      });
    },
  });

  const handleCheckArticle = () => {
    setModelProps({ ...modelProps, open: true });
  };

  const handleGetUserInfo = () => {
    setModelProps({ ...modelProps, open: true });
  };

  return {
    modelProps,
    handleCheckArticle,
    handleGetUserInfo,
  };
};

export default useButtonActions;
