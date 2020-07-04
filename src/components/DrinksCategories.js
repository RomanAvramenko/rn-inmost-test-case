import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DrinkItem} from './DrinkItem';
import {useSelector} from 'react-redux';
import {DrinksListSelector} from '../store/selectors';
import {Paginator} from './Paginator';

export const DrinksCategories = ({data, id}) => {
  const dataArr = useSelector(DrinksListSelector);
  const {currentPage} = useSelector(state => state.pagination);

  console.log(id, currentPage);
  return (
    id === currentPage && (
      <View style={styles.container}>
        <Text>{data.filter}</Text>
        {data.arr.map(i => {
          return (
            <DrinkItem
              key={i.idDrink}
              itemName={i.strDrink}
              image={i.strDrinkThumb}
            />
          );
        })}
        <Paginator pagesCount={dataArr.length} />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
