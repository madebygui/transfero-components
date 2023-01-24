import IcoMoon, { IconProps } from 'react-icomoon';
import { IconTypes } from '../../config/types/iconTypes';
import iconSet from './selection.json';

interface OverrideIconProps extends IconProps {
  icon: IconTypes;
}

const Icon = (props: OverrideIconProps) => <IcoMoon iconSet={iconSet} {...props} />;

export { Icon };
