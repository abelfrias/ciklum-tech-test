import { h } from 'preact';

import GamePod from '../../components/Molecules/GamePod'
import style from './style.scss';

const Home = () => (
    <div class={style.home}>
        <GamePod
            name='OZWINS JACKPOTS'
            supplier='Netent'
            stake='0.20'
            thumbnailUrl='https://s3-alpha-sig.figma.com/img/f56c/457d/8891e6b67065f41f3364bc58a4820f65?Expires=1636329600&Signature=gg1sR2sOhXfS~s~AUUUw1CFAzSTgmhuX0lR63nIgoK1O5jV9jTn~-t7uHASoTkMFlxBsrop~RZ95p-ls-v9FpkduywVBNqm1wqdNtQqtupmJMeogd53Ex5p6Ov5eIZdWH3~hF1gihBcpxi~nXEyED-Jh5YO91ufHR32tpfHPfpaJbdJufxkvZ~TRF7q5Q2b55ATAqayFsrJTPBnP4QpaiZMcUNGVrQuE77wwdhi0ClHBUF~6iuwIEW89LQuwq7sDIfDBVJMAHu4A2o96fxKbtXzJ~oi8ffLgSrKTw1-w~rLelUoWBEMbUl4YpLafR446EvJTv~iYQB2BXeKQ85edHw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'/>
    </div>
);

export default Home;
