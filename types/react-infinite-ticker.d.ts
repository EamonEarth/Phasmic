declare module 'react-infinite-ticker' {
  import { FC, ReactNode } from 'react';

  interface TickerProps {
    duration?: number;
    children?: ReactNode;
  }

  export const HorizontalTicker: FC<TickerProps>;
  export const VerticalTicker: FC<TickerProps>;
}
