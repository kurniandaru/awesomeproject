
// BELAJAR 1
// class App extends Component {
//   render() {
//     return (
//       // Try setting `flexDirection` to `column`.
//       <View style={{ flex:1, margin:5}}>
//         <View style={{ flex:1 , backgroundColor: "blue", margin: 5}}></View>
//         <View style={{ flex:2,flexDirection: "row"}}>
//           <View style={{ flex:1 , backgroundColor: "red", margin: 5}}></View>
//           <View style={{ flex:4 , backgroundColor: "orange", margin: 5}}></View>
//         </View>
//         <View style={{ flex:2,flexDirection: "row"}}>
//           <View style={{ flex:2 , backgroundColor: "aqua", margin: 5}}></View>
//           <View style={{ flex:2 , backgroundColor: "magenta", margin: 5}}></View>
//           <View style={{ flex:2 , backgroundColor: "yellow", margin: 5}}></View>
//         </View>
//         <View style={{ flex:2 , backgroundColor: "purple", margin: 5}}></View>
//         <View style={{ flex:2 , backgroundColor: "grey", margin: 5}}></View>
//       </View>
//     );
//   }
// };

// BELAJAR 2
// class Person extends Component {
//   render() {
//     return (
//      <View style={{alignItems: "center"}}>
//         <Text>Halo {this.props.name} {this.props.lastname} !</Text>
//      </View>
//     );
//   }
// };

// class Human extends Component{
//   render(){
//     return (
//       <View style={{alignItems: "center", top: 50}}>
//         <Person name="Maman" lastname="Syalala" umur="23" domisili="ayam" />
//         <Person name="Momon" />
//         <Person name="Mimin" />
//       </View>
//     );
//   }
// }

// BELAJAR 3
// class PizzaTranslator extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       text: '',
//       jenis: '',
//     };
//   }

//   render(){
//     return (
//       <View style={{padding: 10}}>
//         <TextInput 
//         style={{height: 40}} 
//         placeholder="Type here to translate" 
//         onChangeText={(text)=> {this.setState({text})}} 
//         value={this.state.text}/>

// <TextInput 
//         style={{height: 40}} 
//         placeholder="Isi ayam" 
//         onChangeText={(jenis)=> {this.setState({jenis})}} 
//         value={this.state.jenis}/>
        
//       <Text style={{padding: 10, fontSize: 42}}>
//       {this.state.text}
//       </Text>  
//     </View>
//     );
//   }
// } 

// BELAJAR 4

// const styles = StyleSheet.create({
//   bigBlue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 130,
//   },
//   red: {
//     color: 'red',
//     fontSize: 30,
//   }
// });

// class Gaya extends Component {
//   render(){
//     return (
//         <ScrollView>
//         <Text style={styles.red}>Just Red</Text>
//         <Text style={styles.bigBlue}>Biru Besar</Text>
//         <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} /><Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//         <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//         <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//         <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//         <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//         <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//         <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//         <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//         <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//         <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//         <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//         <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//       </ScrollView>
//     );
//   }
// }

// BELAJAR 5

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    padding: 20
//   },
//   sectionHeader: {
//     paddingTop: 2,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingBottom: 2,
//     fontSize: 14,
//     fontWeight: 'bold',
//     backgroundColor: 'rgba(247,247,247,1.0)',
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })

// class Flatlista extends Component {
//   render(){
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data = {[
//             {key: 'devin'},
//             {key: 'devin'},
//             {key: 'devin'},
//             {key: 'devin'},
//             {key: 'devin'},
//             {key: 'devin'},
//             {key: 'devin'},
//             {key: 'devin'},
//             {key: 'devin'},
//             {key: 'devin'},
//             {key: 'devin'},
//             {key: 'devin'},
//           ]}
//           renderItem = {({item}) => <Text style={styles.item} > {item.key}</Text>}
//         />
//       </View>
//     );
//   }
// }

// class Kalkulator extends Component {
//     constructor(props){
//       super(props);
//       this.state = {
//         text: '',
//         jenis: '',
//         hasil: '',
//       };
//     }
//     tambah=()=>{
//       this.setState((hasil, props) => ({
//         hasil: parseInt(this.state.text) + parseInt(this.state.jenis)
//        }));
//      }
//      kurang=()=>{
//       this.setState((hasil, props) => ({
//         hasil: parseInt(this.state.text) - parseInt(this.state.jenis)
//        }));
//      }
//      kali=()=>{
//       this.setState((hasil, props) => ({
//         hasil: parseInt(this.state.text) * parseInt(this.state.jenis)
//        }));
//      }
//      bagi=()=>{
//       this.setState((hasil, props) => ({
//         hasil: parseInt(this.state.text) / parseInt(this.state.jenis)
//        }));
//      }
//     render(){
//       return (
//         <View style={{ flex:1, margin:5}}>
//          <View style={{ flex:1 , backgroundColor: "yellow", margin: 5}}>
//          <TextInput 
//           style={{height: 40}} 
//           placeholder="Type here to translate" 
//           onChangeText={(text)=> {this.setState({text})}} 
//           value={this.state.text}/>
//          </View>
//          <View style={{ flex:1 , backgroundColor: "yellow", margin: 5}}>
//          <TextInput 
//           style={{height: 40}} 
//           placeholder="Isi ayam" 
//           onChangeText={(jenis)=> {this.setState({jenis})}} 
//           value={this.state.jenis}/>
//          </View>
         
//          <View style={{ flex:1,flexDirection: "row"}}>
//            <View style={{ flex:1 , margin: 5}}>
//            <Button onPress={this.tambah} 
//             title="+"
//           />
//            </View>
//            <View style={{ flex:1 , margin: 5}}>
//            <Button
//             onPress={this.kurang}
//             title="-"
//           />
//            </View>
//            <View style={{ flex:1 , margin: 5}}>
//            <Button
//             onPress={this.kali}
//             title="x"
//           />
//            </View>
//            <View style={{ flex:1 , margin: 5}}>
//            <Button
//             onPress={this.bagi}
//             title=":"
//           />
//            </View>
//          </View>
//          <View style={{ flex:4 , backgroundColor: "aqua", margin: 5}}>
//          <Text style={{padding: 10, fontSize: 42}}>
//         {this.state.hasil}
//         </Text>  
//          </View>
//       </View>
//       );
//     }
//   } 

  // class Login extends Component {
  //   constructor(props){
  //     super(props);
  //     this.state = {
  //       user: '',
  //       password: '',
  //     };
  //   }
  //   render(){
  //     return (
  //       <View style={{flex: 1,justifyContent: "center", alignItems: "center"}}>
  //     <Text>Username</Text>
  //     <TextInput 
  //         style={{height: 40, borderColor: 'gray', borderWidth: 1}} 
  //         placeholder="Masukkan username" 
  //         onChangeText={(user)=> {this.setState({user})}} 
  //         value={this.state.user}/>
  //         <Text>Password</Text>
  //         <TextInput 
  //         style={{height: 40, borderColor: 'gray', borderWidth: 1}} 
  //         placeholder="Masukkan password" 
  //         onChangeText={(password)=> {this.setState({password})}} 
  //         value={this.state.password}/>
  //         <Button
  //           onPress={this.bagi}
  //           title="LOGIN"
  //         />
  //     </View>
  //     )
  //   }
  // }

  
// export default Login

