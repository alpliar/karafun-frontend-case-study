import { Button, ButtonProps, StyleProps } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

interface IUiButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  variant?: ButtonProps['variant'];
  type?: ButtonProps['type'];
}

export const buttonStyle: ButtonProps | StyleProps = {
  colorScheme: 'facebook',
  rounded: 'full',
  //   maxW: { sm: 32 },
  paddingX: 12,
};

const UiButton: React.FC<PropsWithChildren<IUiButtonProps>> = ({
  children,
  disabled = false,
  onClick,
  variant,
  type,
}) => {
  return (
    <Button variant={variant} disabled={disabled} onClick={onClick} type={type} {...buttonStyle}>
      {children}
    </Button>
  );
};

export default UiButton;
