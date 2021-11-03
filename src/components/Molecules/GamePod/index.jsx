import { h } from 'preact';

import Button from '../../Atoms/Button';
import infoIcon from '../../../assets/icons/info.svg';
import style from './style.scss';

const GamePod = (props) => (
    <article class={style.gamepod}>
        <div>
            <img src={infoIcon} alt="Info Icon" class={style.infoIcon}/>
            <div class={style.thumbnailWrapper}>
                <img src={props.thumbnailUrl} alt={props.name} class={style.gameImage}/>
            </div>
            <div class={style.infoWrapper}>
                <p class={style.supplier}>
                    {props.supplier}
                </p>
                <h2 class={style.name}>
                    {props.name}
                </h2>
                <p class={style.stake}>
                    €{props.stake?.toFixed(2)} min. Stake
                </p>
            </div>
            <Button class={style.playButton}>
                PLAY
            </Button>
        </div>
    </article>
);

export default GamePod;
