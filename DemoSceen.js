import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text as Txt,
  StatusBar,
  Dimensions,
  FlatList,
  Image,
  Scollview
} from 'react-native';
import {Avatar, Title} from 'react-native-paper';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Button,
} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import Svg, {
  Circle,
  Defs,
  Stop,
  LinearGradient,
  Text
} from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';



const {width, height} = Dimensions.get('window');

export default class Demo extends Component {
  constructor() {
    super();
    this.state = {
      Team: [                           // Array for team name
        {
          id: 1,
          title: 'Team Name',
        },
        {
          id: 2,
          title: 'Team Name',
        },
        {
          id: 3,
          title: 'Team Name',
        },
        {
          id: 4,
          title: 'Team Name',
        },
        {
          id: 5,
          title: 'Team Name',
        },
        {
          id: 6,
          title: 'Team Name',
        },
      ],
      Players: [                           // array for players name
        {
          id: 1,
          title: 'Player Name',
        },
        {
          id: 2,
          title: 'Player Name',
        },
        {
          id: 3,
          title: 'Player Name',
        },
        {
          id: 4,
          title: 'Player Name',
        },
        {
          id: 5,
          title: 'Player Name',
        },
        {
          id: 6,
          title: 'Team Name',
        },
      ],
      Features: [                           // Array for features name
        {
          id: 1,
          title: 'Player Name',
        },
        {
          id: 2,
          title: 'Player Name',
        },
        {
          id: 3,
          title: 'Player Name',
        },
      ],
    };
  }
  render() {
    return (
      <View>
        <View style={{justifyContent: 'flex-start'}}>
   
          
          {/* Icons Card wrapper view */}
      

            <View
              style={{flexDirection: 'row', justifyContent: 'space-around',marginTop:'20%'}}>
              <View style={{marginTop: -15}}>
                <Card style={styles.IconCard}>
                  <View style={{padding: 10}}>
                    <Icon style={styles.Icons} name="people" size={30} />
                    <Txt style={styles.IconText}>Team</Txt>
                  </View>
                </Card>
              </View>

              <Card style={styles.IconCard}>
                <View style={{padding: 10}}>
                  <Icon style={styles.Icons} name="people" size={30} />
                  <Txt style={styles.IconText}>Match</Txt>
                </View>
              </Card>

              <Card style={styles.IconCard}>
                <View style={{padding: 10}}>
                  <Icon style={styles.Icons} name="people" size={30} />
                  <Txt style={styles.IconText}>Player</Txt>
                </View>
              </Card>

              <View style={{marginTop: -15}}>
                <Card style={styles.IconCard}>
                  <View style={{padding: 10}}>
                    <Icon style={styles.Icons} name="stats-chart" size={30} />
                    <Txt style={styles.IconText}>Stat</Txt>
                  </View>
                </Card>
              </View>
            </View>

          {/* flatlist for featured matches */}
      
      <View>
        <Scollview>
          <View style={{marginTop: '1%'}}>
            <Txt style={{marginLeft: '2%'}}> Featured Matches</Txt>

            <FlatList
              style={{padding: '2%'}}
              data={this.state.Features}
              horizontal={true}
              renderItem={({item, index}) => (
                <View>
                  <Card style={styles.FeaturedCard}>
                    <View style={{flex: 1}}>
                      <Txt
                        style={{
                          color: 'white',
                          textAlign: 'center',
                          marginTop: '3%',
                        }}>
                        Ground Name - Games Types
                      </Txt>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          padding: 15,
                          justifyContent: 'space-between',
                        }}>
                        <View
                          style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                          }}>
                          <Txt style={styles.TeamName}> Rayapuram </Txt>
                          <Txt style={styles.TeamName}> Royal </Txt>
                          <Txt style={styles.Score}> 130-5(20) </Txt>
                        </View>
                        <View
                          style={{
                            borderWidth: 1,
                            borderColor: 'white',
                          }}
                        />
                        <View style={styles.Circle}>
                          <Txt
                            style={{
                              color: '#00a5cd',
                              fontSize: 12,
                              fontWeight: 'bold',
                            }}>
                            {' '}
                            VS{' '}
                          </Txt>
                        </View>

                        <View
                          style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                          }}>
                          <Txt style={styles.TeamName}> South </Txt>
                          <Txt style={styles.TeamName}> Rockers </Txt>
                          <Txt style={styles.Score}> 130-5(20) </Txt>
                        </View>
                      </View>
                      <Txt
                        style={{
                          color: 'white',
                          textAlign: 'center',
                          // marginTop: '3%',
                        }}>
                        South Rockers won by 12 runs
                      </Txt>
                    </View>
                  </Card>
                </View>
              )}
            />

          </View>


          {/* flatlist for Teams */}
          <View>
            <Txt style={{marginLeft: '2%'}}> Teams Near You</Txt>
            <FlatList
              style={{padding: '2%'}}
              data={this.state.Team}
              horizontal={true}
              renderItem={({item, index}) => (
                <View>
                  <Card style={styles.AvtarCard}>
                    <View style={styles.AvtarView}>
                      <Avatar.Image
                        style={styles.avtar}
                        source={require('./Images/BatBAll.jpeg')}
                        size={50}
                      />
                      <Title style={styles.AvtarText}>{item.title}</Title>
                    </View>

                    <Button full style={styles.AvtarButton}>
                      <Txt style={{color: 'white'}}>connect</Txt>
                    </Button>
                  </Card>
                </View>
              )}
            />
          </View>

          {/*  FlatList for players*/}
          <View>
            <Txt style={{marginLeft: '2%'}}> Players Near You</Txt>
            <FlatList
              style={{padding: '2%', marginBottom: 10}}
              data={this.state.Players}
              horizontal={true}
              renderItem={({item, index}) => (
                <View>
                  <Card style={styles.PlayersCard}>
                    <Image
                      source={require('./Images/player.jpg')}
                      style={styles.PlayerImage}
                    />
                    <Title style={styles.PlayerText}>{item.title}</Title>
                  </Card>
                </View>
              )}
            />
          </View>
          </Scollview>
          </View>
        </View>


        <View style={styles.Viewstyle5}>
          <Svg
            style={styles.SvgStyle}
            height="75%"
            width="100%"
            viewBox="0 20 36 32">
              <View style={{flexDirection:'row',marginTop:'2%'}}>
              <Icon style={{marginLeft:'3%',color:'white'}} name="menu" size={30} />
              
              <Icon style={{color:'white',marginLeft:'65%' }} name="search-sharp" size={25} />
               <Icon style={{color:'white',marginLeft:'5%' }} name="notifications" size={25} />

              </View>
               

            <Defs>
              <LinearGradient
                id="grad"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="0%"
                gradientUnits="userSpaceOnUse">
                <Stop offset="0%" stopColor="#00a5cd" stopOpacity="3" />
                <Stop offset="100%" stopColor="#000051" stopOpacity="4" />
              </LinearGradient>
            </Defs>
            <Circle cx="50%" cy="-20%" r="100%" fill="url(#grad)" />
            <Text
              x="18"
              y="29"
              textAnchor="middle"
              fontWeight="bold"
              fontSize="2"
              fill="white">
               C R I C P O C K E T
            </Text>
          </Svg>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  AvtarButton: {
    borderRadius: 20,
    height: '25%',
    backgroundColor: '#00a5cd',
    // marginTop:'2%'
  },
  AvtarCard: {
    alignSelf: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    height: height / 6,
    width: width / 4,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    marginBottom:10
  },
  avtar: {
    alignSelf: 'center',
  },
  AvtarText: {
    fontSize: 12,
    color: 'grey',
    textAlign: 'center',
  },
  AvtarView: {
    padding: '3%',
    paddingBottom: '0%',
    marginTop: '10%',
  },
  BottomView: {
    backgroundColor: '#00a5cd',
    height: '10%',
    alignSelf: 'center',
  },
  PlayersCard:{
    backgroundColor:'#00a5cd',
    alignSelf: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    height: height / 5.7,
    width: width / 4,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    marginBottom:10,
    padding:2
  },
  PlayerText:{
    fontSize: 12,
    color: 'white',
    textAlign: 'center',

  },
  PlayerImage:{
    height: 200,
     width: null, 
     flex: 1,
    //  marginTop:5,
     borderTopLeftRadius:20,
     borderTopRightRadius:20
    },
    FeaturedCard:{
      backgroundColor:'#00a5cd',
      alignSelf: 'center',
      borderRadius: 20,
      shadowColor: '#000',
      height: height / 4,
      width: width / 1.5,
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,
      marginBottom:10,
      padding:10,
    },
    Circle:
    {
      height:30,
      width:30,
      borderRadius:15,
      backgroundColor:'white',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: -25,
      marginTop:'10%'

    },
    TeamName:{
      fontWeight:'bold',
      fontSize:16,
      color:'white'
    },
    Score:{
      marginTop:'10%',
      color:'white'
    },
    Viewstyle5: {
      zIndex: 0,
      position: 'absolute',
      height:hp('100%'),
      width:wp('100%'),
  
    },
    SvgStyle: {
      alignItems: 'stretch',
      justifyContent: 'center'
    },
    Header:{
      fontSize: 18,
      fontWeight:'bold',
      color:'red',
      textAlign:'center',
      zIndex:1,
      // marginTop:-20
    },
    HeaderView:{
    //  marginTop:'30%',
      borderBottomLeftRadius:40,
      borderBottomRightRadius:40,
      zIndex:1,
      // marginTop: hp('5%'),
      // height: hp('100%'),
      // width: wp('100%'),
    },
    Icons:{
      alignSelf:'center',
      color:'#00a5cd'
    },
    IconText:{
      color:'#00a5cd',
      alignSelf:'center',
      // marginTop:'20%'
    },
    IconCard:{
      height:height/9.5,
      width:width/5.5,
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,
      shadowColor: '#000',
      borderRadius:15,
    }
});
