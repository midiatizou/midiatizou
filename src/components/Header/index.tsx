import { Logo } from '../Logo';

import { styles } from './style';

import { HeaderProps } from './type';

export const Header = ({ logoHeader }: HeaderProps) => {
  return (
    <header style={styles.container}>
      <Logo {...logoHeader} />
    </header>
  )
}
