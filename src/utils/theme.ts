import { Basics } from 'styles';
import Loader from 'images/wrloader.gif';
import { ITheme } from 'types';

export const lightTheme: ITheme['theme'] = {
  body: Basics.colors.creamWhite,
  logo: Basics.colors.black,
  subtitle: Basics.colors.chocolate,
  color: Basics.colors.black,
  link: Basics.colors.chocolate,
  text: '#363537',
  button: Basics.colors.citrus,
  loader: Loader,
};

export const darkTheme: ITheme['theme'] = {
  body: Basics.colors.black,
  logo: Basics.colors.citrus,
  subtitle: Basics.colors.citrus,
  color: Basics.colors.nightShift,
  link: Basics.colors.citrus,
  text: '#FAFAFA',
  button: Basics.colors.citrus,
  loader: Loader,
};
