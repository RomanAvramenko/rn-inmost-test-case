import React, {useEffect, useLayoutEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DrinksCategories} from '../components/DrinksCategories';
import {useDispatch, useSelector} from 'react-redux';
import {getDrinks, resetDrinks} from '../store/actions/drinks';
import {getFilters} from '../store/actions/filters';
import {DrinksListSelector, ActiveFiltersSelector} from '../store/selectors';

export const MainScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const dataArr = useSelector(DrinksListSelector);
  const activeFilters = useSelector(ActiveFiltersSelector);
  const {currentPage} = useSelector(state => state.pagination);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View>
          <Icon
            style={styles.icon}
            name="filter"
            size={30}
            onPress={() => navigation.navigate('Filters')}
          />
        </View>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    dispatch(getFilters());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(resetDrinks());
    if (dataArr.length <= activeFilters.length) {
      activeFilters.map(i => dispatch(getDrinks(i)));
    } else if (dataArr.length > activeFilters.length) {
      dispatch(resetDrinks());
      activeFilters.map(i => dispatch(getDrinks(i)));
    }
    // eslint-disable-next-line
  }, [activeFilters]);

  const renderDrinks = () => {
    return dataArr.map((i, idx) => (
      <DrinksCategories data={i} id={idx} key={idx} />
    ));
  };

  return <ScrollView>{dataArr && renderDrinks()}</ScrollView>;
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 20,
  },
});
