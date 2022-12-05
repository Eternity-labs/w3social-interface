import { NotifyDialogProps } from '@type/index';
import { useState } from 'react';
import { useImmer } from './common/useImmer';

const useButtonActions = () => {
  const [modelProps, setModelProps] = useImmer({
    open: false,
    type: 'WARNING',
    confirmText: '发送星愿邮件',
    cancelText: '我知道了',
    contentText: '阿吉豆丝方尽安排的水井坊哈迪斯金佛爱迪生厚啊水浇地of',
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
