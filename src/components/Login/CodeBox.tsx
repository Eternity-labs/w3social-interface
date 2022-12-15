import cn from 'classnames';
import { useRef, useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import ErrorTip from '@components/Base/ErrorTip';
import MuITextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const TextField = styled(MuITextField)({
  '& .MuiInputBase-root': {
    width: '30px',
    height: '30px',
  },
  '& .MuiInputBase-root input': {
    padding: '0px',
    textAlign: 'center',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#72F9B8',
    },
  },
});
interface CodeBoxProps {
  len?: number;
  onChange?: (code: string) => void;
  className?: string;
  autoFocus?: boolean;
  onRef: any;
  isCodeError: boolean;
}
function CodeBox(props: CodeBoxProps, refValue: unknown) {
  const {
    len = 4,
    onChange,
    className = '',
    autoFocus = false,
    onRef,
    isCodeError = false,
  } = props;
  const inputArr = new Array(len).fill('');
  const inputRefs = useRef<Array<HTMLInputElement>>([]);
  const [errorText, setError] = useState('');
  const [curcode, setCode] = useState('');
  const getRef = (dom: HTMLInputElement) => {
    if (inputRefs.current?.length === len) {
      return;
    }
    inputRefs.current.push(dom);
  };
  const handleCode = () => {
    let code = '';
    inputRefs.current?.forEach((ref: HTMLInputElement) => {
      if (ref?.value) {
        code += ref.value;
      } else {
        code += '';
      }
    });
    setCode(code);
  };
  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    switch (e.key) {
      case 'Backspace':
        console.log('index--->>>', index);
        if (index >= 0) {
          const currentInputRef = inputRefs.current[index];
          currentInputRef.value = '';
          if (index > 0) {
            const prevInputRef = inputRefs.current[index - 1];
            prevInputRef.focus();
          }
          e.preventDefault();
          handleCode();
        }
        break;
      default: {
        if (index < len - 1 && (e.target as HTMLInputElement).value) {
          const nextInputRef = inputRefs.current[index + 1];
          nextInputRef.focus();
        }
        handleCode();
      }
    }
  };

  const onInputValueChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (errorText) {
      setError('');
    }
    // onChange?.(newCode);
  };
  const getInputClassName = (index: number) => {
    const currentInputRef = inputRefs.current[index];
    const value = currentInputRef?.value;
    // border boder-black border-solid rounded-[5px] outline-none text-center outline-none
    let defaultClassName = 'caret-main rounded-[5px]';
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
            <TextField
              inputRef={getRef}
              key={index}
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]', maxLength: 1 }}
              className={getInputClassName(index)}
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
            // <input
            //   ref={getRef}
            //   maxLength={1}
            //   className={getInputClassName(index)}
            //   key={index}
            //   type="text"
            //   onFocus={() => {
            //     inputRefs.current[index].select();
            //   }}
            //   onKeyDown={e => {
            //     onInputKeyDown(e, index);
            //   }}
            //   onChange={e => {
            //     onInputValueChange(index, e);
            //   }}
            // />
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
