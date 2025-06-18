import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';
import NavBar from '../../../components/navBar/navBar_index';
import LoadingScreen from '../../../components/Loading';
import AppStyles from '../../../components/Style/AppStyle';
import {Screen_Name} from '../../../navigation/ScreenName';
import {navigate} from '../../../navigation/RootNavigator';
import images from '../../../constants/Images/images';

interface Props {
  navigation: any;
}
const BuyScreen = (props: Props) => {
  const userData = useSelector((state: any) => state.user);
  const {navigation} = props;
  const [isLoading, setIsLoading] = useState(false);
  const [dataRender, setDataRender] = useState();
  useEffect(() => {
    setIsLoading(true);

    const fetchItems = async () => {
      try {
        const url = `http://posapi.foxai.com.vn:8386/api/Item/getAll`;
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userData?.accessToken}`,
          },
        });
        const data = await response.json();
        setDataRender(data.items);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchItems();
  }, []);
  console.log('a', dataRender);

  const renderItem = ({item}: any) => (
    <View style={styles.productCard}>
      <TouchableOpacity onPress={() => navigate(Screen_Name.DetailScreen)}>
        <Image
          source={images.logo}
          style={[
            AppStyles.icon,
            {width: 150, height: 150, marginTop: '5%'},
          ]}></Image>
        <Text style={styles.productName}>{item.itemName}</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <NavBar title="Mua vàng" onPress={() => navigation.goBack()} />
      {isLoading ? (
        <LoadingScreen></LoadingScreen>
      ) : (
        <FlatList
          data={dataRender}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.productList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignContent: 'center',
  },
  productList: {
    justifyContent: 'space-between',
    padding: 10,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 15,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '45%', // Chiều rộng mỗi sản phẩm (45% để có khoảng cách giữa các cột)
    marginHorizontal: '2.5%', // Để chia đều khoảng cách giữa các sản phẩm
  },
  productName: {
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center', // Căn giữa tên sản phẩm
    justifyContent: 'flex-end',
    marginTop: '5%',
  },
});

export default BuyScreen;
