import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import Link from 'next/link';

import { HeaderContainer } from './styles';

export function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', { locale: ptBR });
  return (
    <HeaderContainer>
      <Link href="/">
        <a>
          <img src="logo.svg" alt="Podcastr" />
        </a>
      </Link>
      <p>O melhor para você ouvir, sempre</p>
      <span>Qui, 8 de Abril</span>
    </HeaderContainer>
  );
}
