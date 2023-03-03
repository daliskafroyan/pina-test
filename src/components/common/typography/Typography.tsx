import * as React from 'react';

import clsxm from '@/lib/clsxm';

const TypographyVariant = [
  't1',
  't2',
  't3',
  't4',
  't5',
  'st1',
  'st2',
  'st3',
] as const;

const TypographyColor = ['primary', 'secondary', 'tertiary', 'danger'] as const;

type TypographyProps<T extends React.ElementType> = {
  /** @default <p> tag */
  as?: T;
  className?: string;
  color?: (typeof TypographyColor)[number];
  variant: (typeof TypographyVariant)[number];
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

/** @see https://www.benmvp.com/blog/forwarding-refs-polymorphic-react-component-typescript/ */
type TypographyComponent = <T extends React.ElementType = 'p'>(
  props: TypographyProps<T>
) => React.ReactElement | null;

const Typography: TypographyComponent = React.forwardRef(
  <T extends React.ElementType = 'p'>(
    {
      as,
      children,
      className,
      variant,
      ...rest
    }: TypographyProps<T>,
    ref?: React.ComponentPropsWithRef<T>['ref']
  ) => {
    const Component = as || 'p';
    return (
      <Component
        ref={ref}
        className={clsxm(
          //#region  //*=========== Variants ===========
          // title -> card emitent title / total pembelian title / dialog title / dialog content title 16px w400 lh19px
          // title -> navbar info 15px w400 lh18px
          // title  -> pills / dana tersedia kolom / tombol beli / table stats / tab jual beli  14px w400 lh16.8px
          // title -> label sector / performance 12px w400 lh15px
          // title -> label scale time 12px w350 lh16px
          // subtitle -> navbar subtitle 13px w350 lh16px
          // subtitle -> card emitent subtitle / total pembelian / dialog subtitle /dialog content sub 12px w350 lh14px
          // subtitle -> table statssubtitle / subtitle jual beli 10px  w350 lh12px
          [
            variant === 't1' && ['font-medium text-[16px] text-black'],
            variant === 't2' && ['font-medium text-[15px] text-black'],
            variant === 't3' && ['font-medium text-[14px] text-black'],
            variant === 't4' && ['font-medium text-[12px] text-black'],
            variant === 't5' && ['font-medium text-[12px] text-black'],
            variant === 'st1' && ['font-normal text-[13px]  text-grey-300'],
            variant === 'st2' && ['font-normal text-[12px]  text-grey-300'],
            variant === 'st3' && ['font-normal text-[10px]  text-grey-300'],
          ],
          //#endregion  //*======== Variants ===========
          className
        )}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

export default Typography;