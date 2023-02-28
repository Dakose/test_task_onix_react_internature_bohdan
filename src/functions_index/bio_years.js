import React from 'react';
import {render} from 'react-dom';
import { Component } from 'react';

// name and bio information
const bio = [{
    name: 'Катя',
    bio: 'ведущий дизайнер TailGroup'
}, {
    name: 'Марина',
    bio: 'маркетолог Headers Market'
}, {
    name: 'Сава',
    bio: 'PR-менеджер Central Media'
}, {
    name: 'Паша',
    bio: 'основатель LeadCompany'
}, {
    name: 'Саша',
    bio: 'главный редактор Just Journal'
}, {
    name: 'Лёня',
    bio: 'ведущий разработчик Ymail'
}];


const allbio = Object.assign({}, bio);


const sortFun = function (a,b) {
    return a < b ? -1 : 1;
};

function BioYears () {
    return (
        <>
        <bio/>;
        <allbio/>;
        <sortFun/>;
        </>
    );
}

export default BioYears;
