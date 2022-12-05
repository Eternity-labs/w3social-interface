import cn from 'classnames';
import { useRef, useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import ErrorTip from '@components/Base/ErrorTip';

interface CodeBoxProps {
  len?: number;
  onChange?: (code: string) => void;
  className?: string;
  autoFocus?: boolean;
  onRef: any;
  isCodeError: boolean;
}
function CodeBox(props: CodeBoxProps): JSX.Element {
  const {
    len = 4,
    onChange,
    className = '',
    autoFocus = false,
    onRef,
    isCodeError = false,
  } = props;
  const inputArr = new Array(len).fill('');
  const inputRefs = useRef<any>([]);
  const storageCode = '';
  const [errorText, setError] = useState('');
  const [curcode, setCode] = useState('');
  const getRef = (dom: any) => {
    if (inputRefs?.current?.length === len) {
      return;
    }
    inputRefs.current.push(dom);
  };
  const onInputKeyDown = (e: any, index: number) => {
    switch (e.key) {
      case 'Backspace':
        if (index > 0 && !e.target.value) {
          const currentInputRef = inputRefs.current[index];
          currentInputRef.value = '';
          const prevInputRef = inputRefs.current[index - 1];
          prevInputRef.focus();
          // prevInputRef.select();
          e.preventDefault();
        }
        break;
      default: {
        console.log('其他按键');
      }
    }
  };
  const onInputValueChange = (index: number, e: any) => {
    if (errorText) {
      setError('');
    }
    let code = '';
    inputRefs.current?.forEach((ref: any) => {
      if (ref?.value) {
        code += ref.value;
      } else {
        code += '';
      }
    });

    // 判断是删除操作
    if (index > 0 && !e.target.value) {
      const prevInputRef = inputRefs.current[index - 1];
      prevInputRef.focus();
    }

    // 判断是写入操作
    if (index < len - 1 && e.target.value) {
      const nextInputRef = inputRefs.current[index + 1];
      nextInputRef.focus();
    }
    setCode(code);
    onChange?.(code);
  };
  const getInputClassName = (index: number) => {
    const currentInputRef = inputRefs.current[index];
    const value = currentInputRef?.value;
    let defaultClassName =
      'w-[30px] h-[30px] border boder-black border-solid rounded-[5px] outline-none text-center outline-none caret-main';
    if (index > 0) {
      defaultClassName += ' ml-[8px]';
    }
    return value ? `${defaultClassName} has-string` : defaultClassName;
  };

  useEffect(() => {
    // 自动获取焦点的处理
    if (autoFocus) {
      inputRefs?.current[0].focus();
    }
  }, [autoFocus]);
  const check = (): string => {
    if (curcode.length < 4 || isCodeError) {
      setError('验证码错误，请确认后重新输入');
      return '';
    }
    setError('');
    return curcode;
  };
  useImperativeHandle(onRef, () => {
    // 需要将暴露的接口返回出去
    return {
      check,
    };
  });
  return (
    <>
      <div className={className ? `${className}` : 'flex '}>
        {/* 渲染每一个验证码输入框 */}
        {inputArr.map((v, index) => {
          return (
            <input
              ref={getRef}
              maxLength={1}
              className={getInputClassName(index)}
              key={index}
              type="text"
              onFocus={() => {
                inputRefs.current[index].select();
              }}
              onKeyDown={e => {
                onInputKeyDown(e, index);
              }}
              onChange={e => {
                onInputValueChange(index, e);
              }}
            />
          );
        })}
      </div>
      {errorText && <ErrorTip isShowIcon message={errorText} className="mt-[5px]" />}
    </>
  );
}
export type CodeBoxHandle = {
  check: () => string;
};

export default forwardRef<CodeBoxHandle, CodeBoxProps>(CodeBox);
