import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import GamePod from '../../Molecules/GamePod';
import style from './style.scss';

const GamesGroup = (props) => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        setGames([...props.games]);
    }, [JSON.stringify(props.games)]);

    return (
        <section class={`${props.class ? `${props.class} ` : ''}${style.gamesGroup}`}>
            {games.map((game) => (
                <GamePod
                    name={game.name}
                    supplier={game.supplier}
                    stake={game.stake}
                    thumbnailUrl={game.thumbnailUrl}/>
            ))}
        </section>
    );
};

export default GamesGroup;
