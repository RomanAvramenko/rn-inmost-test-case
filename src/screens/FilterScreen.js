import React from 'react';
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import {useDispatch, useSelector} from 'react-redux';
import {setChecked, setApplyFilters} from '../store/actions/filters';
import {paginationCurrentPage} from '../store/actions/pagination';

export const FilterScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {filters} = useSelector(state => state.filters);

  const handleFilters = () => {
    dispatch(paginationCurrentPage(0));
    dispatch(setApplyFilters());
    navigation.navigate('Drinks');
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView style={{marginBottom: 80}}>
        {filters &&
          filters.map((i, idx) => (
            <View key={idx} style={styles.filterItem}>
              <CheckBox
                leftText={i.strCategory}
                onClick={() => dispatch(setChecked(i.id))}
                isChecked={i.checked}
                checkedImage={
                  <Image
                    source={require('../../assets/images/Vector.png')}
                    style={styles.iconChecked}
                  />
                }
                unCheckedImage={
                  <Image
                    source={require('../../assets/images/VectorBlank.png')}
                    style={styles.iconChecked}
                  />
                }
              />
            </View>
          ))}
      </ScrollView>
      <TouchableOpacity style={styles.applyBtn} onPress={() => handleFilters()}>
        <Text style={styles.applyBtnText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconChecked: {
    width: 25,
    height: 18,
  },
  filterItem: {
    marginHorizontal: 35,
    marginVertical: 30,
  },
  applyBtn: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 360,
    height: 53,
    marginHorizontal: 27,
    marginBottom: 27,
    backgroundColor: '#272727',
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyBtnText: {
    color: '#ffffff',
    textTransform: 'uppercase',
  },
});
