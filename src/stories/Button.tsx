/* eslint-disable react/destructuring-assignment */
import MuiButton from '@mui/material/Button';
import type { ButtonProps } from '@mui/material/Button';

// interface ButtonProps {}
export function Button(props: ButtonProps) {
  return (
    // eslint-disable-next-line react/destructuring-assignment, react/jsx-props-no-spreading
    <MuiButton className="rounded-full" {...props}>
      {props.children}
    </MuiButton>
  );
}
