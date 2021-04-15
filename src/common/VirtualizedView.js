import React from 'react';
import {FlatList} from 'react-native';

export default function VirtualizedView(props) {
  return (
    <FlatList
      data={[]}
      ListEmptyComponent={null}
      {...props}
      listKey={(item, index) => 'D' + index.toString()}
      renderItem={null}
      ListHeaderComponent={() => (
        <React.Fragment>{props.children}</React.Fragment>
      )}
    />
  );
}
