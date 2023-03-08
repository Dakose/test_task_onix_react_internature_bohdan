import React from 'react';
import {render} from 'react-dom';
import { Component } from 'react';
//components
import addClick from '../buttons/addClick.js';
import removeClick from '../buttons/removeClick.js';
import fatesTable from '../components/fatesTable';
import handleEdit from '../components/handleEdit';

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

function BioYears () {
    return (
        <>
        <bio/>;
        <allbio/>;
        <addClick />;
        <removeClick />;
        </>
    );
}

export default BioYears;
