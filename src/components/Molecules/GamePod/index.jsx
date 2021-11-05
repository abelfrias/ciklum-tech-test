import { h } from 'preact';

import Button from '../../Atoms/Button';
import style from './style.scss';

const GamePod = (props) => (
    <article class={style.gamepod}>
        <div>
            <i class={`${style.infoIcon}`}>X</i>
            <div class={style.gameData}>
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
                        {
                            props.stake
                            ? `€${props.stake?.toFixed(2)} min. Stake`
                            : 'No stake'
                        }
                    </p>
                </div>
            </div>
            <Button class={style.playButton}>
                PLAY
            </Button>
        </div>
    </article>
);

export default GamePod;
