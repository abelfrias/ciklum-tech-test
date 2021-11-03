import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import Dropdown from '../../Atoms/Dropdown';
import GamesGroup from '../../Organisms/GamesGroup';
import style from '../../Templates/default.scss';

const Home = () => {
    const sortOptions = [
        { label: 'Name (A-Z)', value: 'name' },
        { label: 'Stake (min to max)', value: 'stakeAsc' },
        { label: 'Stake (max to min)', value: 'stakeDesc' }
    ];

    const gamesList = [
        {
            name: 'OZWINS JACKPOTS',
            supplier: 'Netent',
            stake: 0.20,
            thumbnailUrl: 'https://s3-alpha-sig.figma.com/img/f56c/457d/8891e6b67065f41f3364bc58a4820f65?Expires=1636329600&Signature=gg1sR2sOhXfS~s~AUUUw1CFAzSTgmhuX0lR63nIgoK1O5jV9jTn~-t7uHASoTkMFlxBsrop~RZ95p-ls-v9FpkduywVBNqm1wqdNtQqtupmJMeogd53Ex5p6Ov5eIZdWH3~hF1gihBcpxi~nXEyED-Jh5YO91ufHR32tpfHPfpaJbdJufxkvZ~TRF7q5Q2b55ATAqayFsrJTPBnP4QpaiZMcUNGVrQuE77wwdhi0ClHBUF~6iuwIEW89LQuwq7sDIfDBVJMAHu4A2o96fxKbtXzJ~oi8ffLgSrKTw1-w~rLelUoWBEMbUl4YpLafR446EvJTv~iYQB2BXeKQ85edHw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        },
        {
            name: 'AZWINS JACKPOTS',
            supplier: 'Netent',
            stake: 0.21,
            thumbnailUrl: 'https://s3-alpha-sig.figma.com/img/f56c/457d/8891e6b67065f41f3364bc58a4820f65?Expires=1636329600&Signature=gg1sR2sOhXfS~s~AUUUw1CFAzSTgmhuX0lR63nIgoK1O5jV9jTn~-t7uHASoTkMFlxBsrop~RZ95p-ls-v9FpkduywVBNqm1wqdNtQqtupmJMeogd53Ex5p6Ov5eIZdWH3~hF1gihBcpxi~nXEyED-Jh5YO91ufHR32tpfHPfpaJbdJufxkvZ~TRF7q5Q2b55ATAqayFsrJTPBnP4QpaiZMcUNGVrQuE77wwdhi0ClHBUF~6iuwIEW89LQuwq7sDIfDBVJMAHu4A2o96fxKbtXzJ~oi8ffLgSrKTw1-w~rLelUoWBEMbUl4YpLafR446EvJTv~iYQB2BXeKQ85edHw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        },
        {
            name: 'OZWINA JACKPOTS',
            supplier: 'Netent',
            stake: 0.22,
            thumbnailUrl: 'https://s3-alpha-sig.figma.com/img/f56c/457d/8891e6b67065f41f3364bc58a4820f65?Expires=1636329600&Signature=gg1sR2sOhXfS~s~AUUUw1CFAzSTgmhuX0lR63nIgoK1O5jV9jTn~-t7uHASoTkMFlxBsrop~RZ95p-ls-v9FpkduywVBNqm1wqdNtQqtupmJMeogd53Ex5p6Ov5eIZdWH3~hF1gihBcpxi~nXEyED-Jh5YO91ufHR32tpfHPfpaJbdJufxkvZ~TRF7q5Q2b55ATAqayFsrJTPBnP4QpaiZMcUNGVrQuE77wwdhi0ClHBUF~6iuwIEW89LQuwq7sDIfDBVJMAHu4A2o96fxKbtXzJ~oi8ffLgSrKTw1-w~rLelUoWBEMbUl4YpLafR446EvJTv~iYQB2BXeKQ85edHw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        },
        {
            name: 'OZWILS JACKPOTS',
            supplier: 'Netent',
            stake: 0.23,
            thumbnailUrl: 'https://s3-alpha-sig.figma.com/img/f56c/457d/8891e6b67065f41f3364bc58a4820f65?Expires=1636329600&Signature=gg1sR2sOhXfS~s~AUUUw1CFAzSTgmhuX0lR63nIgoK1O5jV9jTn~-t7uHASoTkMFlxBsrop~RZ95p-ls-v9FpkduywVBNqm1wqdNtQqtupmJMeogd53Ex5p6Ov5eIZdWH3~hF1gihBcpxi~nXEyED-Jh5YO91ufHR32tpfHPfpaJbdJufxkvZ~TRF7q5Q2b55ATAqayFsrJTPBnP4QpaiZMcUNGVrQuE77wwdhi0ClHBUF~6iuwIEW89LQuwq7sDIfDBVJMAHu4A2o96fxKbtXzJ~oi8ffLgSrKTw1-w~rLelUoWBEMbUl4YpLafR446EvJTv~iYQB2BXeKQ85edHw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        },
        {
            name: 'OZSINS JACKPOTS',
            supplier: 'Netent',
            stake: 0.24,
            thumbnailUrl: 'https://s3-alpha-sig.figma.com/img/f56c/457d/8891e6b67065f41f3364bc58a4820f65?Expires=1636329600&Signature=gg1sR2sOhXfS~s~AUUUw1CFAzSTgmhuX0lR63nIgoK1O5jV9jTn~-t7uHASoTkMFlxBsrop~RZ95p-ls-v9FpkduywVBNqm1wqdNtQqtupmJMeogd53Ex5p6Ov5eIZdWH3~hF1gihBcpxi~nXEyED-Jh5YO91ufHR32tpfHPfpaJbdJufxkvZ~TRF7q5Q2b55ATAqayFsrJTPBnP4QpaiZMcUNGVrQuE77wwdhi0ClHBUF~6iuwIEW89LQuwq7sDIfDBVJMAHu4A2o96fxKbtXzJ~oi8ffLgSrKTw1-w~rLelUoWBEMbUl4YpLafR446EvJTv~iYQB2BXeKQ85edHw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        },
        {
            name: 'IZWINS JACKPOTS',
            supplier: 'Netent',
            stake: 0.25,
            thumbnailUrl: 'https://s3-alpha-sig.figma.com/img/f56c/457d/8891e6b67065f41f3364bc58a4820f65?Expires=1636329600&Signature=gg1sR2sOhXfS~s~AUUUw1CFAzSTgmhuX0lR63nIgoK1O5jV9jTn~-t7uHASoTkMFlxBsrop~RZ95p-ls-v9FpkduywVBNqm1wqdNtQqtupmJMeogd53Ex5p6Ov5eIZdWH3~hF1gihBcpxi~nXEyED-Jh5YO91ufHR32tpfHPfpaJbdJufxkvZ~TRF7q5Q2b55ATAqayFsrJTPBnP4QpaiZMcUNGVrQuE77wwdhi0ClHBUF~6iuwIEW89LQuwq7sDIfDBVJMAHu4A2o96fxKbtXzJ~oi8ffLgSrKTw1-w~rLelUoWBEMbUl4YpLafR446EvJTv~iYQB2BXeKQ85edHw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        },
        {
            name: 'ZZWINS JACKPOTS',
            supplier: 'Netent',
            stake: 0.26,
            thumbnailUrl: 'https://s3-alpha-sig.figma.com/img/f56c/457d/8891e6b67065f41f3364bc58a4820f65?Expires=1636329600&Signature=gg1sR2sOhXfS~s~AUUUw1CFAzSTgmhuX0lR63nIgoK1O5jV9jTn~-t7uHASoTkMFlxBsrop~RZ95p-ls-v9FpkduywVBNqm1wqdNtQqtupmJMeogd53Ex5p6Ov5eIZdWH3~hF1gihBcpxi~nXEyED-Jh5YO91ufHR32tpfHPfpaJbdJufxkvZ~TRF7q5Q2b55ATAqayFsrJTPBnP4QpaiZMcUNGVrQuE77wwdhi0ClHBUF~6iuwIEW89LQuwq7sDIfDBVJMAHu4A2o96fxKbtXzJ~oi8ffLgSrKTw1-w~rLelUoWBEMbUl4YpLafR446EvJTv~iYQB2BXeKQ85edHw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        },
        {
            name: 'RZWINS JACKPOTS',
            supplier: 'Netent',
            stake: 0.27,
            thumbnailUrl: 'https://s3-alpha-sig.figma.com/img/f56c/457d/8891e6b67065f41f3364bc58a4820f65?Expires=1636329600&Signature=gg1sR2sOhXfS~s~AUUUw1CFAzSTgmhuX0lR63nIgoK1O5jV9jTn~-t7uHASoTkMFlxBsrop~RZ95p-ls-v9FpkduywVBNqm1wqdNtQqtupmJMeogd53Ex5p6Ov5eIZdWH3~hF1gihBcpxi~nXEyED-Jh5YO91ufHR32tpfHPfpaJbdJufxkvZ~TRF7q5Q2b55ATAqayFsrJTPBnP4QpaiZMcUNGVrQuE77wwdhi0ClHBUF~6iuwIEW89LQuwq7sDIfDBVJMAHu4A2o96fxKbtXzJ~oi8ffLgSrKTw1-w~rLelUoWBEMbUl4YpLafR446EvJTv~iYQB2BXeKQ85edHw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        },
        {
            name: 'EZWINS JACKPOTS',
            supplier: 'Netent',
            stake: 0.28,
            thumbnailUrl: 'https://s3-alpha-sig.figma.com/img/f56c/457d/8891e6b67065f41f3364bc58a4820f65?Expires=1636329600&Signature=gg1sR2sOhXfS~s~AUUUw1CFAzSTgmhuX0lR63nIgoK1O5jV9jTn~-t7uHASoTkMFlxBsrop~RZ95p-ls-v9FpkduywVBNqm1wqdNtQqtupmJMeogd53Ex5p6Ov5eIZdWH3~hF1gihBcpxi~nXEyED-Jh5YO91ufHR32tpfHPfpaJbdJufxkvZ~TRF7q5Q2b55ATAqayFsrJTPBnP4QpaiZMcUNGVrQuE77wwdhi0ClHBUF~6iuwIEW89LQuwq7sDIfDBVJMAHu4A2o96fxKbtXzJ~oi8ffLgSrKTw1-w~rLelUoWBEMbUl4YpLafR446EvJTv~iYQB2BXeKQ85edHw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        },
    ];

    const [games, setGames] = useState(gamesList);
    const [sortType, setSortType] = useState(null);
    const [sortCount, setSortCount] = useState(0);

    useEffect(() => {
        if (sortType) {
            const sortedGames = [...games];

            sortedGames.sort((x, y) => {
                switch(sortType) {
                    case 'name':
                        // If the name is equal, we fallback to 'stakeAsc'
                        if (x.name < y.name) {
                            return -1;
                        } else if (x.name > y.name) {
                            return 1;
                        }
                    case 'stakeAsc':
                        if (x.stake <= y.stake) {
                            return -1;
                        }
                        return 1;
                    case 'stakeDesc':
                        if (x.stake <= y.stake) {
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




