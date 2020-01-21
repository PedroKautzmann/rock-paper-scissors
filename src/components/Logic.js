import React, {Component} from 'react';

import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import Icon from './Icon';

export default class Logic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userChoice: '',
      computerChoice: '',
      winStreak: 0,
      highscore: 0,
    };
  }

  jokenpo(userChoice) {
    let number = Math.floor(Math.random() * 3);

    let computerChoice = '';

    let winStreak = this.state.winStreak;

    switch (number) {
      case 0:
        computerChoice = 'rock';
        break;
      case 1:
        computerChoice = 'paper';
        break;
      case 2:
        computerChoice = 'scissors';
        break;
    }

    let result = '';

    if (computerChoice === 'rock') {
      if (userChoice === 'rock') {
        result = 'Draw';
      } else if (userChoice === 'paper') {
        result = 'You won';
      } else {
        result = 'Computer won';
      }
    }

    if (computerChoice === 'paper') {
      if (userChoice === 'rock') {
        result = 'Computer won';
      } else if (userChoice === 'paper') {
        result = 'Draw';
      } else {
        result = 'You won';
      }
    }

    if (computerChoice === 'scissors') {
      if (userChoice === 'rock') {
        result = 'You won';
      } else if (userChoice === 'paper') {
        result = 'Computer won';
      } else {
        result = 'Draw';
      }
    }

    if (result === 'You won') {
      winStreak += 1;
    } else {
      winStreak = 0;
    }

    let highscore = this.state.highscore;

    if (winStreak > highscore) {
      highscore = winStreak;
    } else {
      highscore = this.state.highscore;
    }

    this.setState({
      userChoice: userChoice,
      computerChoice: computerChoice,
      result: result,
      winStreak: winStreak,
      highscore: highscore,
    });
  }

  render() {
    return (
      <View>
        <View style={styles.main}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.jokenpo('scissors');
            }}>
            <Text style={styles.textButton}>scissors</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.jokenpo('rock');
            }}>
            <Text style={styles.textButton}>Rock</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.jokenpo('paper');
            }}>
            <Text style={styles.textButton}>Paper</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.results}>
          <Text style={styles.textResults}>{this.state.result}</Text>

          <Icon choice={this.state.userChoice} player="You" />
          <Icon choice={this.state.computerChoice} player="Computer" />
        </View>

        <View style={styles.highscore}>
          <View style={styles.extra}>
            <Text style={styles.winStreak}>Win Streak</Text>
            <Text style={styles.streak}>{this.state.winStreak}</Text>
          </View>
          <View style={styles.extra}>
            <Text style={styles.winStreak}>Highscore</Text>
            <Text style={styles.streak}>{this.state.highscore}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: '#3fc5f0',
    alignItems: 'center',
    marginVertical: 10,
    width: 90,
  },
  textButton: {
    color: 'white',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  results: {
    alignItems: 'center',
    marginTop: 10,
  },
  textResults: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 20,
  },
  winStreak: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
  },
  streak: {
    fontSize: 20,
  },
  highscore: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  extra: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});
