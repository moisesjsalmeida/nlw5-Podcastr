import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { usePlayer } from '../../contexts/PlayerContext';
import {
  PlayerContainer,
  EmptyPlayer,
  Progress,
  PlayerSlider,
  PlayerButtons,
  CurrentEpisode,
} from './styles';
import { convertDurationToTimeString } from '../utils/convertDurationToTimeString';

export function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [progress, setProgress] = useState(0);

  const {
    episodeList,
    currentEpisodeIndex,
    isPlaying,
    isLooping,
    isShuffling,
    hasNext,
    hasPrevious,
    togglePlay,
    toggleLoop,
    toggleShuffle,
    setPlayingState,
    clearPlayerState,
    playNext,
    playPrevious,
  } = usePlayer();

  const episode = episodeList[currentEpisodeIndex];

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  function setupProgressListener() {
    audioRef.current.currentTime = 0;
    audioRef.current.addEventListener('timeupdate', () =>
      setProgress(Math.floor(audioRef.current.currentTime))
    );
  }

  function handleSeek(amount: number) {
    audioRef.current.currentTime = amount;
    setProgress(amount)
  }

  function handleEpisodeEnded() {
    if (hasNext) {
      playNext()
    } else {
      clearPlayerState()
    }
  }

  return (
    <PlayerContainer>
      <header>
        <img src="/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      {episode ? (
        <CurrentEpisode>
          <Image
            width={592}
            height={592}
            src={episode.thumbnail}
            objectFit="cover"
          />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </CurrentEpisode>
      ) : (
        <EmptyPlayer>
          <strong>Selecione um podcast para ouvir</strong>
        </EmptyPlayer>
      )}

      <footer className={!episode ? 'empty' : ''}>
        <Progress>
          <span>{convertDurationToTimeString(progress)}</span>
          <PlayerSlider>
            {episode ? (
              <Slider
                max={episode.duration}
                value={progress}
                onChange={handleSeek}
                trackStyle={{ backgroundColor: '#04d361' }}
                railStyle={{ backgroundColor: '#9f75ff' }}
                handleStyle={{ borderColor: '#04d361', borderWidth: 4 }}
              />
            ) : (
              <Slider className="emptySlider"></Slider>
            )}
          </PlayerSlider>
          <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
        </Progress>

        {episode && (
          <audio
            src={episode.url}
            ref={audioRef}
            loop={isLooping}
            autoPlay
            onLoadedMetadata={setupProgressListener}
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
            onEnded={handleEpisodeEnded}
          />
        )}

        <PlayerButtons>
          <button
            type="button"
            className={isShuffling ? 'isActive' : ''}
            onClick={toggleShuffle}
            disabled={!episode || episodeList.length === 1}
          >
            <img src="/shuffle.svg" alt="Embaralhar" />
          </button>
          <button
            type="button"
            onClick={playPrevious}
            disabled={!episode || !hasPrevious}
          >
            <img src="/play-previous.svg" alt="Tocar anterior" />
          </button>
          <button
            type="button"
            className="playButton"
            disabled={!episode}
            onClick={togglePlay}
          >
            {isPlaying ? (
              <img src="/pause.svg" alt="Parar" />
            ) : (
              <img src="/play.svg" alt="Tocar" />
            )}
          </button>
          <button
            type="button"
            onClick={playNext}
            disabled={!episode || !hasNext}
          >
            <img src="/play-next.svg" alt="Tocar próximo" />
          </button>
          <button
            type="button"
            className={isLooping ? 'isActive' : ''}
            onClick={toggleLoop}
            disabled={!episode}
          >
            <img src="/repeat.svg" alt="Repetir" />
          </button>
        </PlayerButtons>
      </footer>
    </PlayerContainer>
  );
}
