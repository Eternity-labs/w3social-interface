import cn from 'classnames';
import { useRef, useEffect } from 'react';

interface CodeBoxProps {
  len?: number;
  onChange?: (code: string) => void;
  className?: string;
  autoFocus?: boolean;
}
function CodeBox(props: CodeBoxProps): JSX.Element {
  const { len = 4, onChange, className = '', autoFocus = false } = props;
  const inputArr = new Array(len).fill('');
  const inputRefs = useRef<any>([]);
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
    let code = '';
    inputRefs.current?.forEach((ref: any) => {
      if (ref?.value) {
        code += ref.value;
      } else {
        code += ' ';
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

    onChange?.(code);
  };
  const getInputClassName = (index: number) => {
    const currentInputRef = inputRefs.current[index];
    const value = currentInputRef?.value;
    let defaultClassName =
      'w-[30px] h-[30px] border boder-black solid rounded-[5px] outline-none text-center';
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

  return (
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
  );
}

export default CodeBox;
