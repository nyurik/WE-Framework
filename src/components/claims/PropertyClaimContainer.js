import React, { PureComponent } from 'react';
import { Claim } from 'model/Shapes';
import { claimColumnsF } from './selectors';
import ClaimsTableBody from './ClaimsTableBody';
import ClaimsWithQualifiersTable from './ClaimsWithQualifiersTable';
import { connect } from 'react-redux';
import PropertyDescription from 'core/PropertyDescription';
import PropTypes from 'prop-types';

class PropertyClaimContainer extends PureComponent {

  static propTypes = {
    claims: PropTypes.arrayOf( PropTypes.shape( Claim ) ),
    displayEmpty: PropTypes.bool,
    displayLabel: PropTypes.bool,
    onClaimAdd: PropTypes.func.isRequired,
    onClaimAddTwice: PropTypes.func.isRequired,
    onClaimDelete: PropTypes.func.isRequired,
    onClaimUpdate: PropTypes.func.isRequired,
    propertyDescription: PropTypes.instanceOf( PropertyDescription ),
  };

  static defaultProps = {
    displayEmpty: true,
    displayLabel: true,
  }

  columnsMemoization = claimColumnsF();

  render() {
    const { claims } = this.props;
    const columns = this.columnsMemoization( claims );

    if ( columns.length !== 0 ) {
      return <tbody>
        <tr>
          <td colSpan={ClaimsTableBody.TABLE_COLUMNS}>
            <ClaimsWithQualifiersTable {...this.props} />
          </td>
        </tr>
      </tbody>;
    }

    return <ClaimsTableBody {...this.props} />;
  }
}

const EMPTY_ARRAY = [];

const mapStateToProps = ( state, ownProps ) => ( {
  claims: state.entity.claims[ ownProps.propertyDescription.id ] || EMPTY_ARRAY,
} );

const mapDispatchToProps = ( dispatch, ownProps ) => ( {
  onClaimAdd: () => dispatch( { type: 'CLAIM_ADD', propertyDescription: ownProps.propertyDescription } ),
  onClaimAddTwice: () => {
    dispatch( { type: 'CLAIM_ADD', propertyDescription: ownProps.propertyDescription } );
    dispatch( { type: 'CLAIM_ADD', propertyDescription: ownProps.propertyDescription } );
  },
  onClaimUpdate: claim => dispatch( { type: 'CLAIM_UPDATE', claim } ),
  onClaimDelete: claim => dispatch( { type: 'CLAIM_DELETE', claim } ),
} );

const PropertyClaimContainerConnected = connect( mapStateToProps, mapDispatchToProps )( PropertyClaimContainer );
export default PropertyClaimContainerConnected;
