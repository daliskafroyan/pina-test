import clsx from 'clsx';
import { get } from 'lodash';
import * as React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { IconType } from 'react-icons';

import Typography from '@/components/common/typography/Typography';

export type InputProps = {
  /** Input label */
  label: string | null;
  /**
   * id to be initialized with React Hook Form,
   * must be the same with the pre-defined types.
   */
  id: string;
  /** Input placeholder */
  placeholder?: string;
  /** Small text below input, useful for additional information */
  helperText?: string;
  /**
   * Input type
   * @example text, email, password
   */
  type?: React.HTMLInputTypeAttribute;
  /** Disables the input and shows defaultValue (can be set from React Hook Form) */
  readOnly?: boolean;
  /** Disable error style (not disabling error validation) */
  hideError?: boolean;
  /** Manual validation using RHF, it is encouraged to use yup resolver instead */
  validation?: RegisterOptions;
  filled?: boolean;
  leftIcon?: IconType | string;
  rightNode?: React.ReactNode;
  leftNode?: React.ReactNode;
  containerClassName?: string;
  inputClassName?: string;
} & React.ComponentPropsWithoutRef<'input'>;

export default function Input({
  label,
  placeholder = '',
  helperText,
  id,
  type = 'text',
  disabled,
  readOnly = false,
  hideError = false,
  filled = false,
  validation,
  leftIcon: LeftIcon,
  leftNode,
  rightNode,
  containerClassName,
  inputClassName,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = get(errors, id);
  const withLabel = label !== null;

  return (
    <div className={containerClassName}>
      {withLabel && (
        <Typography as='label' variant='st2' className='block' htmlFor={id}>
          {label}
        </Typography>
      )}
      <div className={clsx('relative', withLabel && 'mt-1')}>
        {LeftIcon && (
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            {typeof LeftIcon === 'string' ? (
              <Typography variant='t1' className='text-grey-300 text-[14px]'>{LeftIcon}</Typography>
            ) : (
              <LeftIcon className='text-xl text-typo' />
            )}
          </div>
        )}

        {leftNode && (
          <div className='absolute inset-y-0 left-0 flex items-center pl-2'>
            {leftNode}
          </div>
        )}

        <input
          {...register(id, validation)}
          {...rest}
          type={type}
          name={id}
          id={id}
          readOnly={readOnly}
          disabled={disabled}
          className={clsx(
            'flex w-full rounded-lg shadow-sm',
            'min-h-[1.75rem] py-0 md:min-h-[2rem]',
            'border-gray-300 focus:border-primary-200 focus:ring-primary-200',
            (readOnly || disabled) &&
            'cursor-not-allowed border-gray-300 bg-gray-100 focus:border-gray-300 focus:ring-0',
            filled && 'border-gray-100 bg-gray-100 focus:border-gray-300 focus:ring-0',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
            LeftIcon && 'pl-10',
            rightNode && 'pr-10',
            leftNode && 'pl-10',
            inputClassName
          )}
          placeholder={placeholder}
          aria-describedby={id}
        />

        {rightNode && (
          <div className='absolute inset-y-0 right-0 flex items-center pr-2'>
            {rightNode}
          </div>
        )}
      </div>
      {!(!hideError && error) && helperText && (
        <Typography variant='st3' color='secondary' className='mt-1'>
          {helperText}
        </Typography>
      )}
      {!hideError && error && (
        <Typography variant='st3' color='danger' className='mt-1'>
          {error?.message?.toString()}
        </Typography>
      )}
    </div>
  );
}