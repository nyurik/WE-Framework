import expect from 'expect';
import { newStatementClaim } from '../model/Shapes';
import PropertyDescription from './PropertyDescription';

export default function buildReducers( originalEntity ) {
  expect( originalEntity ).toBeAn( 'object' );

  const initialState = {
    originalEntity: originalEntity,
    entity: originalEntity,
  };

  return ( state = initialState, action ) => {

    switch ( action.type ) {

    case 'CLAIM_ADD': {
      const { propertyDescription } = action;
      expect( propertyDescription ).toBeA( PropertyDescription );
      const propertyId = propertyDescription.id;

      const existingClaims = state.entity.claims[ propertyDescription.id ];
      const newClaim = newStatementClaim( propertyDescription );

      if ( existingClaims ) {
        return {
          ...state,
          entity: {
            ...state.entity,
            claims: {
              ...state.entity.claims,
              [ propertyId ]: [ ...existingClaims, newClaim ],
            }
          }
        };
      } else {
        return {
          ...state,
          entity: {
            ...state.entity,
            claims: {
              ...state.entity.claims,
              [ propertyId ]: [ newClaim ],
            }
          }
        };
      }
    }

    case 'CLAIM_UPDATE': {
      const { claim } = action;
      const propertyId = claim.mainsnak.property;

      let claimToSave = claim;
      if ( !claim.dirty )
        claimToSave = { ...claimToSave, dirty: true };

      const existingClaims = state.entity.claims[ propertyId ];
      const claimsToSave = existingClaims
        ? existingClaims.map( original => original.id === claim.id ? claimToSave : original )
        : [ claimToSave ];

      return {
        ...state,
        entity: {
          ...state.entity,
          claims: {
            ...state.entity.claims,
            [ propertyId ]: claimsToSave,
          }
        }
      };
    }

    }

    return state;
  };
}
