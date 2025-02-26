import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      spottedItem: false	      
    };
  }	  

   spottedItem = () => {
    this.setState({
      spottedItem: !this.state.spottedItem
    });

    this.props.itemClick(this.props.type);

     console.log('You have spotted an item!')
   }	  

  render() {
    let spottedItemStyle = undefined;
     if (this.state.spottedItem) { 
      this.props.type === "litter" ? spottedItemStyle = "spotted-litter" : spottedItemStyle = " spotted-nature";
    }

    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];

    return (
      <div className={`game-item ${spottedItemStyle}`} style={itemStyle} onClick={this.spottedItem}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;
