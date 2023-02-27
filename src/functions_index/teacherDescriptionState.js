import React from 'react';
import {render} from 'react-dom';
import { Component } from 'react';

class TeacherDescriptionState extends Component {
  constructor(props) {
    super(props);
      this.state = {
        name : 'Учитесь у лучших',
        message_one: 'Наши преподаватели – профессионалы, которые добились успеха в своей области. Лид-дизайнеры известных студий, маркетологи крупнейших компаний, редакторы популярных медиа: получайте опыт из первых рук, в любое время.',
        message_two: 'Кураторы курсов – наши лучшие выпускники, будут помогать и поддерживать вас на протяжении всего обучения.{" "}',
      };
    }
  render() {
    const {name, message_one, message_two} = this.state;
    return(
      <div>
        <h1>{name}</h1>
        <p>{message_one}</p>
        <p>{message_two}</p>
      </div>
    )
  }
};

export default TeacherDescriptionState;