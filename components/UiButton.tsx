import { Button, ButtonProps } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

interface IUiButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  variant?: ButtonProps['variant'];
  type?: ButtonProps['type'];
}

const UiButton: React.FC<PropsWithChildren<IUiButtonProps>> = ({
  children,
  disabled = false,
  onClick,
  variant,
  type,
}) => {
  return (
    <Button variant={variant} disabled={disabled} onClick={onClick} type={type}>
      {children}
    </Button>
  );
};

export default UiButton;
