import React from 'react';
import {render} from 'react-dom';
import { Component } from 'react';

// names
let name1 = ["Катя"];
let name2 = ["Марина"];
let name3 = ["Сава"];
let name4 = ["Паша"];
let name5 = ["Саша"];
let name6 = ["Лёня"];
// bio
let bio1 = ["ведущий дизайнер TailGroup"];
let bio2 = ["маркетолог Headers Market"];
let bio3 = ["PR-менеджер Central Media"];
let bio4 = ["основатель LeadCompany"];
let bio5 = ["главный редактор Just Journal"];
let bio6 = ["ведущий разработчик Ymail"];
// name and bio information
const nameBio1 = {[name1]: bio1};
const nameBio2 = {[name2]: bio2};
const nameBio3 = {[name3]: bio3};
const nameBio4 = {[name4]: bio4};
const nameBio5 = {[name5]: bio5};
const nameBio6 = {[name6]: bio6};


const allbio = Object.assign(nameBio1, nameBio2, nameBio3, nameBio4, nameBio5, nameBio6);
console.log(allbio);

const sortFun = function (a,b) {
    return a < b ? -1 : 1;
}
console.log(allbio.sort(sortFun));
