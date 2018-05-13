import React, { Component, Fragment } from 'react';
import { Header, Footer } from './layouts'
import Excereise from './excereises'
import { muscles, exercieses } from '../store'
export default class extends Component {

  state = {
    exercieses
  }

  getExerciesesByMuscles() {
    return Object.entries(
      this.state.exercieses.reduce((exercieses, exerciese) => {
        const { muscles } = exerciese;

        exercieses[muscles] = exercieses[muscles] 
          ? [...exercieses[muscles], exerciese] 
          : [exerciese]

        return exercieses;
      }, {})
    );
  }
  render() {
    const exercieses = this.getExerciesesByMuscles();
    console.log(exercieses);
    return <Fragment> 
    <Header/> 
    <Excereise exercieses={exercieses} />
    <Footer muscles={muscles} /> 
    </Fragment>
  }
}