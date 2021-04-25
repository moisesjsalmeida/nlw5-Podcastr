import GlobalStyle from '../theme/global';
import { Header } from '../components/Header';
import { Player } from '../components/Player';
import { Wrapper } from '../theme/wrapper';
import { PlayerContextProvider } from '../contexts/PlayerContext';

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <Wrapper>
        <GlobalStyle />
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </Wrapper>
    </PlayerContextProvider>
  );
}

export default MyApp;
