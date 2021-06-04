import React, { FC } from 'react';

interface ErrorComponentProps {
  errorMessage: string | undefined;
}

const ErrorComponent: FC<ErrorComponentProps> = ({ errorMessage }) => {
  return (
    <>
      <div className="alert alert-danger">{errorMessage}</div>
    </>
  );
};

export default ErrorComponent;
