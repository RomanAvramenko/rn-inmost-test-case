import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {paginationCurrentPage} from '../store/actions/pagination';

export const Paginator = ({pagesCount}) => {
  const dispatch = useDispatch();
  const {currentPage} = useSelector(state => state.pagination);

  const prevPageHandler = () => {
    if (currentPage > 0) {
      dispatch(paginationCurrentPage(currentPage - 1));
    }
  };

  const nextPageHandler = () => {
    if (currentPage < pagesCount - 1) {
      dispatch(paginationCurrentPage(currentPage + 1));
    }
  };

  return (
    <View style={styles.pagContainer}>
      <TouchableOpacity
        style={styles.pagBtn}
        disabled={currentPage === 0 || pagesCount === 0}
        onPress={() => prevPageHandler()}>
        <Text style={styles.pagBtnText}>Prev</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.pagBtn}
        disabled={currentPage === pagesCount - 1 || pagesCount === 0}
        onPress={() => nextPageHandler()}>
        <Text style={styles.pagBtnText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  pagContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pagBtn: {
    height: 53,
    width: 180,
    backgroundColor: '#272727',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagBtnText: {
    color: '#ffffff',
    textTransform: 'uppercase',
  },
});
