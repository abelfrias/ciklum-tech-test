import { h } from 'preact';

import GamePod from '../../Molecules/GamePod';
import style from './style.scss';

const GamesGroup = (props) => (
    <section class={style.gamesGroup}>
        {props.games.map((game, index) => (
            <GamePod
                name={game.name}
                supplier={game.supplier}
                stake={game.stake}
                thumbnailUrl={game.thumbnailUrl}/>
        ))}
    </section>
);

export default GamesGroup;
