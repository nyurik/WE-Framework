export default function stableSort( arr, cmp ) {
  cmp = cmp ? cmp : ( a, b ) => {
    if ( a < b ) return -1;
    if ( a > b ) return 1;
    return 0;
  };
  const stabilizedThis = arr.map( ( el, index ) => [ el, index ] );
  const stableCmp = ( a, b ) => {
    const order = cmp( a[ 0 ], b[ 0 ] );
    if ( order != 0 ) return order;
    return a[ 1 ] - b[ 1 ];
  };
  stabilizedThis.sort( stableCmp );
  for ( let i = 0; i < arr.length; i++ ) {
    [ arr[ i ] ] = stabilizedThis[ i ];
  }
  return arr;
}
