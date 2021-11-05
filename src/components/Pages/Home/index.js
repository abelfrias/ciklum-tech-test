import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import Dropdown from '../../Atoms/Dropdown';
import GamesGroup from '../../Organisms/GamesGroup';
import style from '../../Templates/default.scss';
import gamesData from '../../../assets/js/data';

const Home = () => {
    const sortOptions = [
        { label: 'Name (A-Z)', value: 'name' },
        { label: 'Stake (min to max)', value: 'stakeAsc' },
        { label: 'Stake (max to min)', value: 'stakeDesc' }
    ];

    const gamesToList = (gamesData) => {
        const list = [];

        for (let key in gamesData) {
            list.push(gamesData[key]);
        }

        return list
    };

    const [games, setGames] = useState(gamesToList(gamesData));
    const [sortType, setSortType] = useState(null);
    const [sortCount, setSortCount] = useState(0);

    useEffect(() => {
        if (sortType) {
            const sortedGames = [...games];

            sortedGames.sort((x, y) => {
                switch(sortType) {
                    case 'name':
                        // If the name is equal, we fallback to 'stakeAsc'
                        if (x.displayName < y.displayName) {
                            return -1;
                        } else if (x.displayName > y.displayName) {
                            return 1;
                        }
                    case 'stakeAsc':
                        if (!x.currencyData?.EUR?.minimumStake ||
                            (x.currencyData?.EUR?.minimumStake <= y.currencyData?.EUR?.minimumStake)) {
                            return -1;
                        }
                        return 1;
                    case 'stakeDesc':
                        if (!x.currencyData?.EUR?.minimumStake ||
                            (x.currencyData?.EUR?.minimumStake <= y.currencyData?.EUR?.minimumStake)) {
                            return 1;
                        }
                        return -1;
                }
            });

            setGames(sortedGames);
        }
    }, [sortType]);

    return (
        <div class={style.content}>
            <header class={style.header}>
                <h1 class={style.pageTitle}>
                    LOTTOLAND GAMES
                </h1>
                <Dropdown
                    title='SORT GAMES'
                    name='sortType'
                    options={sortOptions}
                    onSelect={(sortType) => setSortType(sortType)}/>
            </header>
            {
                games &&
                <GamesGroup
                    class={style.gamesGroup}
                    games={games}/>
            }
        </div>
    );
};

export default Home;




