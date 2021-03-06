export default class AlphabeticalComparator {

  constructor() {
    this.code = 'alphabetical';
  }

  compare( dataValue1, dataValue2, sortEmptyCompareConstant, sortOrderCompareConstant ) {
    const v1 = ( dataValue1 || {} ).value || '';
    const v2 = ( dataValue2 || {} ).value || '';

    if ( v1 === '' && v2 === '' ) return 0;
    if ( v1 === '' && v2 !== '' ) return sortEmptyCompareConstant;
    if ( v1 !== '' && v2 === '' ) return -sortEmptyCompareConstant;

    return v1 === v2
      ? 0
      : v1.localeCompare( v2 ) * sortOrderCompareConstant;
  }

  supports( propertyId, exampleQualifier ) {
    const datatype = exampleQualifier.datatype || null;
    if ( datatype === 'string' ) return true;
    if ( datatype !== 'string' ) return false;
    return null;
  }

}
