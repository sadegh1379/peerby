// React Types shorthand
type React = import('react');

type ReactNode = React.ReactNode;

type FC<T = unknown> = React.FC<T>;

type PropsWithChildren<T = unknown> = React.PropsWithChildren<T>;

type Ref<T> = React.Ref<T>;

type ForwardedRef<T> = React.ForwardedRef<T>;

type MutableRefObject<T> = React.MutableRefObject<T>;

type LegacyRef<T> = React.LegacyRef<T>;

type Dispatch<T> = React.Dispatch<T>;

type Setter<T = unknown> = Dispatch<SetStateAction<T>>;

type RefObject<T> = import('react').RefObject<T>;

// HTML types shorthand
type HTMLAttributes<T = unknown> = React.HTMLAttributes<T>;

type HTMLAnchorElement = JSX.IntrinsicElements['a'];

type HTMLDivProps = JSX.IntrinsicElements['div'];

type HTMLHeadingProps = JSX.IntrinsicElements['header'];

type HTMLHeaderProps = JSX.IntrinsicElements['header'];

type HTMLSectionProps = JSX.IntrinsicElements['section'];

type HTMLButtonProps = JSX.IntrinsicElements['button'];

type HTMLInputProps = JSX.IntrinsicElements['input'];

type HTMLTextareaProps = JSX.IntrinsicElements['textarea'];

// Next JS Types shorthand
type Next = import('next');

type NextPage<P = unknown, I = unknown> = Next.NextPage<P, I>;

type Metadata = Next.Metadata;

// global types
type DynamicComponent<T = unknown> = T extends undefined
  ? () => ReactNode | React.ComponentType
  : (props: T) => ReactNode | React.ComponentType;

// redux store
type RootState = import('../store/store').RootState;
