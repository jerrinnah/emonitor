import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import logo from '../../assets/monitorAppLogosmaller.png';
import { Entypo } from '@expo/vector-icons';
import City from '../components/City';
import PostFeed from '../components/PostFeed';
import Trends from '../components/Trends';
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase.config'


const FeedScreen = () => {
  const [post, setPosts] = React.useState([]);
  const postCollection = collection(db, 'posts');

  React.useEffect(() => {
    (async function() {
      const data = await getDocs(postCollection);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(post);
    })()

    const obs = onSnapshot(postCollection, {
      next: (data) => {
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
    })

    return () => {
      obs();
    }
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.activityRow}>
        <View style={styles.activity}>
          <Text style={styles.title}>Activity</Text>
          <Text style={styles.subtitle}>updates from polling units</Text>
        </View>

        <View style={styles.icons}>
          <View style={styles.searchBar}>
            <Text>Search</Text>
            <View style={styles.iconHolder}>
              <Entypo name="magnifying-glass" color="grey" />
            </View>
          </View>
          <View style={styles.bellHolder}>
            <Entypo name="bell" color="white" />
          </View>
        </View>
      </View>
      <View style={styles.cityContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.cities}>
            <City />
            <View style={styles.cityRow}>
              <Text style={styles.cityText}>Kaudna</Text>
              <Text style={styles.cityText}>Enugu</Text>
              <Text style={styles.cityText}>Calabar</Text>
              <Text style={styles.cityText}>Port Harcourt</Text>
              <Text style={styles.cityText}>Bauchi</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      <ScrollView style={styles.scroll}>
        <View style={styles.boxList}>
          {post.map((item, index) => (
            <PostFeed key={index} post={item.post} username={item.username} />
          ))}
        </View>
      </ScrollView>

      <View style={styles.trends}>
        <Text>Trends Slide</Text>
        <ScrollView
          directionalLockEnabled={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.trendsRow}>
            <Trends />
            <Trends />
            <Trends />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    //   backgroundColor:'green'
  },
  header: {
    height: 80,
    width: '100%',
     padding: 20,
    bottom:10,
  },
  logo: {
    top: 30,
  },
  activityRow: {
    top: 10,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 8,
    color: 'grey',
  },
  icons: {
    height: 35,
    width: 130,
    justifyContent: 'flex-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchBar: {
    left: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconHolder: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'lightgrey',
    left: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bellHolder: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#1713BA',
    left: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cities: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cityText: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    color: 'lightgrey',
  },
  cityRow: {
    flexDirection: 'row',
  },

  scroll: {
    width: '100%',
    height: '50%',
  },
    trends: {
      top:30,
    height: '20%',
    width: '100%',
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  trendsRow: {
    flexDirection: 'row',
  },
});
