import React, { Component } from 'react';
import ButtonCell from './ButtonCell';
import i18n from './core.i18n';
import JQueryButton from '../wrappers/JQueryButton';
import PropTypes from 'prop-types';

export default class SelectSnakTypeButtonCell extends Component {

  render() {
    const { disabled, onClick } = this.props;

    return <ButtonCell>
      <JQueryButton
        className="wef_select_snak_type_button"
        disabled={disabled}
        icon="ui-icon-triangle-1-e"
        label={i18n.buttonSelectSnakType}
        onClick={onClick}
        text={false}
      />
    </ButtonCell>;
  }

}

SelectSnakTypeButtonCell.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

SelectSnakTypeButtonCell.defaultProps = {
  disabled: false
};
