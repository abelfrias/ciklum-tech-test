import { h } from 'preact';

import Button from '../../Atoms/Button'
import infoIcon from '../../../assets/icons/info.png'
import style from './style.scss';

const GamePod = (props) => (
    <article class={style.gamepod}>
        <div>
            <div class={style.thumbnailWrapper}>
                <img
                    class={style.gameImage}
                    src={props.thumbnailUrl}
                    alt={props.name}/>
                <img
                    class={style.infoIcon}
                    src={infoIcon}
                    alt="Info Icon"/>
            </div>
            <div class={style.infoWrapper}>
                <p class={style.supplier}>
                    {props.supplier}
                </p>
                <h2 class={style.name}>
                    {props.name}
                </h2>
                <p class={style.stake}>
                    €{props.stake} min. Stake
                </p>
            </div>
            <Button class={style.playButton} text='PLAY'/>
        </div>
    </article>
);

export default GamePod;
