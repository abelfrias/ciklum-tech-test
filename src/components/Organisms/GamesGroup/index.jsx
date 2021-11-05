import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import GamePod from '../../Molecules/GamePod';
import style from './style.scss';

const GamesGroup = (props) => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        if (props.games) {
            setGames([...props.games]);
        }
    }, [JSON.stringify(props.games)]);

    return (
        <section class={`${props.class ? `${props.class} ` : ''}${style.gamesGroup}`}>
            {games.map((game) => (
                <GamePod
                    name={game.displayName}
                    supplier={game.provider?.[0]}
                    stake={game.currencyData?.EUR?.minimumStake}
                    thumbnailUrl={`https://lottoland.asia${game.image}`}/>
            ))}
        </section>
    );
};

export default GamesGroup;
