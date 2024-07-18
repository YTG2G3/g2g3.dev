import localFont from 'next/font/local';

export const wantedSans = localFont({
  src: [
    {
      path: '../fonts/WantedSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/WantedSans-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-wanted-sans',
});

export const suit = localFont({
  src: [
    {
      path: '../fonts/SUIT-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/SUIT-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-suit',
});
