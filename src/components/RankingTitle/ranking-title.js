import React from 'react';
import './ranking-title.css';

const RankingTitle = ({ userName, userRanking }) => {
    return (
        <div className='rank-title text-center'>
            <h3>Hi {userName}, you've detected...</h3>
            {userRanking > 1 ?
            <h1>{userRanking} faces so far...</h1> :
            <h1>{userRanking} face so far...</h1>}
        </div>
    );
};

export default RankingTitle;