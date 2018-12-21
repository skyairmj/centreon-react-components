import React, {Component} from 'react';

class CardItem extends Component {
  render() {
    const {children, itemBorderColor, itemFooterColor, itemFooterLabel, customClass} = this.props;
    return (
      <div
        className={`card-item card-item-bordered-${itemBorderColor} ${customClass}`}
      >
        {children}
        <span
          className={`card-item-footer card-item-footer-${itemFooterColor}`}
        >
          {itemFooterLabel}
        </span>
      </div>
    );
  }
}

export default CardItem;