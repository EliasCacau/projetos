import React, { Component, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackActions } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Principal" component={Principal} options= {{ headerShown: false, }}/>
        <Stack.Screen name="login" component={TelaLogin} options= {{ headerShown: false, }}/>
        <Stack.Screen name ="usuario" component={Usuario} options= {{headerShown: false}}/>
        <Stack.Screen name ="cadastro" component={TelaCadastro} options= {{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function Principal() {
  const navigation = useNavigation();
  const func_button = () => navigation.navigate('login');
  const func_button02 = () => navigation.navigate('usuario');
  const func_button03 = () => navigation.navigate('Principal');
  return (
    <View style={styles.viewFundo}>
      <View style={styles.viewCabecalho}>
        <View style={styles.viewBola}>
          <Image style={styles.logo} source={require('./src/img/logo.png')}/>
        </View>
      </View>
      <ScrollView style={styles.viewScroll}>
        <TextInput
            placeholder="Procurar receitas"
            style={{
              backgroundColor: '#F2F2F2',
              borderRadius: 10,
              padding: 10,
              margin: 10,
            }}
            placeholderTextColor="#666"
        />
        <Text style={styles.textoReceita}>Receitas mais procuradas</Text>
        <TouchableOpacity>
          <Image style={styles.comida01} source={require('./src/img/comida01.png')} />
        </TouchableOpacity>
        <Text style={styles.textoReceita}>Receitas em destaque</Text>
        <TouchableOpacity>
          <Image style={styles.comida01} source={require('./src/img/comida02.jpg')} />
        </TouchableOpacity>
          <Text style={styles.textoReceita}>Sugestões</Text>
        <TouchableOpacity>
          <Image style={styles.comida01} source={require('./src/img/receita1.jpg')} />
        </TouchableOpacity>
        <Text style={styles.textoReceita}>@receitasNow</Text>
      </ScrollView>
      <View style={styles.viewRodape}>
        <View style={styles.viewBola}>
          <TouchableOpacity>
            <Image style={styles.menu} source={require('./src/img/home.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.menu} source={require('./src/img/pizza.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={func_button02}>
            <Image style={styles.menu} source={require('./src/img/user.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress = {func_button}>
            <Image style={styles.menu} source={require('./src/img/login.png')} />
          </TouchableOpacity>
        </View>
        {/* <View style={styles.viewBola2}>
          <TouchableOpacity>
            <Image style={styles.add} source={require('./src/img/add.png')} />
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
}


function Usuario() {
  const navigation = useNavigation();
  const func_button = () => navigation.navigate('login');
  const func_button02 = () => navigation.navigate('usuario');
  const func_button03 = () => navigation.navigate('Principal');
  return (
    <View style={styles.viewFundo}>
      <View style={styles.viewCabecalho}>
        <View style={styles.viewBola}>
          <TouchableOpacity onPress = {func_button03}>
            <Image style={styles.logo} source={require('./src/img/logo.png')}/>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.viewScroll}>
        <Text style={styles.textoTitulo}>Usuário</Text>
        <TouchableOpacity>
          <Image style={styles.perfil} source={require('./src/img/icon.jpg')} />
        </TouchableOpacity>
        <Text style={styles.textoNick}>@usuario01</Text>
        <Text style={styles.textoDescriao}>
          Usuário 01 que gosta de comidas doces
        </Text>
        <Text style={styles.textoDados}>NOME: TESTE01</Text>
        <Text style={styles.textoDados}>EMAIL: TESTE02</Text>
        <Text style={styles.textoDados}>NÚMERO DE RECEITAS: 20</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textoDados}>Adicionar User</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.viewRodape}>
        <View style={styles.viewBola}>
          <TouchableOpacity onPress={func_button03}>
            <Image style={styles.menu} source={require('./src/img/home.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.menu} source={require('./src/img/pizza.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={func_button02}>
            <Image style={styles.menu} source={require('./src/img/user.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress = {func_button}>
            <Image style={styles.menu} source={require('./src/img/login.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function TelaLogin() {
  const navigation = useNavigation();
  const func_button = () => navigation.navigate('login');
  const func_button02 = () => navigation.navigate('usuario');
  const func_button03 = () => navigation.navigate('Principal');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  //const func_button = () => navigation.navigate('Tela2', {usuario: login});
  const func_button04 = () => navigation.navigate('cadastro');
  //const route = useRoute();
  return (
    <View style={styles.viewPrincipal}>
      <View style={styles.viewCabecalho}>
        <View style={styles.viewBola}>
            <TouchableOpacity onPress = {func_button03}>
              <Image style={styles.logo} source={require('./src/img/logo.png')}/>
            </TouchableOpacity>
          {/* <Text style={styles.textUser}>{route.params?.usuario}</Text> */}
        </View>
        {/* <View style={styles.viewBola2}></View> */}
      </View>
      <View style={styles.viewCorpo}>
        <View style={styles.viewLogin}>
          <View style={styles.viewTextLogin}>
            <Text style={styles.textLogin}>Login</Text>
          </View>
          <View style={styles.viewInputsLogin}>
            <TextInput 
              style={styles.inputsLogin}
              onChangeText={setLogin}
              value={login}
              placeholder='Usuário'
              autoCorrect={false}
            />
            <TextInput
              style={styles.inputsLogin}
              onChangeText={setSenha}
              value={senha}
              secureTextEntry={true}
              placeholder='Senha'
              autoCorrect={false}
            />
          </View>
          
          <View style={styles.viewButtonLogin}>
            <TouchableOpacity style={styles.buttonLogin} onPress={func_button02}>
              <Text style={styles.textButtonLogin}>Entrar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.viewTextOu}>
            <Text style={styles.textOu}>ou</Text>
          </View>

          <View style={styles.viewIconsLogin}>
            <TouchableOpacity>
              <Image style={styles.iconLogin} source={require('./src/img/google.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.iconLogin} source={require('./src/img/facebook.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.iconLoginTwitter} source={require('./src/img/twitter.png')} />
            </TouchableOpacity>
          </View>

          <View style={styles.viewTextAinda}>
            <Text style={styles.textAinda}>Ainda não tem conta?</Text>
          </View>

          <View style={styles.viewButtonCriar}>
            <TouchableOpacity style={styles.buttonCriar} onPress={func_button04}>
              <Text style={styles.textButtonLogin}>Criar Conta</Text>
            </TouchableOpacity>
          </View>
        </View>  
      </View>
      <View style={styles.viewRodape}>
      <View style={styles.viewBola}>
          <TouchableOpacity onPress={func_button03}>
            <Image style={styles.menu} source={require('./src/img/home.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.menu} source={require('./src/img/pizza.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={func_button02}>
            <Image style={styles.menu} source={require('./src/img/user.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress = {func_button}>
            <Image style={styles.menu} source={require('./src/img/login.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function TelaCadastro() {
  const navigation = useNavigation();
  const func_button = () => navigation.navigate('login');
  const func_button02 = () => navigation.navigate('usuario');
  const func_button03 = () => navigation.navigate('Principal');
  return (
     <View style={styles.viewFundo}>
      <View style={styles.viewCabecalho}>
        <Image style={styles.logo} source={require('./src/img/logo.png')}/>
      </View>
      <View style={styles.viewCorpo}>
        <View style={styles.viewCadastro}>

        </View>
      </View>
      <View style={styles.viewRodape}>
        <View style={styles.viewBola}>
          <TouchableOpacity>
            <Image style={styles.menu} source={require('./src/img/home.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.menu} source={require('./src/img/pizza.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={func_button02}>
            <Image style={styles.menu} source={require('./src/img/user.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress = {func_button}>
            <Image style={styles.menu} source={require('./src/img/login.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  viewCorpo: {
    flex: 1,
    backgroundColor: '#F6E3E3',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  // viewRodape: {
  //   backgroundColor: '#FFA500',
  //   height: 50
  // },
  viewPrincipal: {
    flex: 1,
    justifyContent: 'center'
  },
  viewMaisInterna: {
    backgroundColor: 'black',
    margin: 10,
    flex: 1,
    borderRadius: 100,
  },

  viewInterna: {
    justifyContent: 'center',
    backgroundColor: 'blue',
    margin: 10,
    flex: 1,
    //flexDirection: 'row'
  },

  viewExterna: {
    //width: '100%',
    //height: '100%',
    flex: 1,
    backgroundColor: 'yellow'
  },
  
  viewScroll: {
    //width: '50%',
    //height: 50,
    backgroundColor: '#EEAD0E',
    //margin: 10,
    flex: 1,
  },
  textButton: {
    //alignItems: 'center',
    color: '#fff',
  },
  inputs: {
    //flex: 1,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 10,
    padding: 15,
    fontSize: 18
    //color: 'grey'
  },
  textUser: {
    fontSize: 20,
  },
  viewCabecalho: {
    width: '100%',
    height: '10%',
    backgroundColor: '#FFB90F',
    //textAlign: 'center',
    //flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    width: 355,
    height: 1000,
    marginBottom: 15,
    //marginLeft: 7,
    //borderRadius: 25,
    //alignItems: 'center'
    //marginRight: 15,
    //alignSelf: 'center',
  },
  viewFundo: {
    flex: 1,
    backgroundColor: '#FFFFE0',
  },
  textoTitulo: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
  },
  textoNick: {
    fontWeight: 'bold',
    fontSize: 27,
    margin: 10,
    alignSelf: 'center',
  },
  textoDescriao: {
    fontWeight: 'bold',
    fontSize: 30,
    margin: 40,
    alignSelf: 'center',
    textAlign: 'center',
  },
  perfil: {
    width: 200,
    height: 200,
    borderRadius: 25,
    marginRight: 15,
    alignSelf: 'center',
  },
  textoDados: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'left',
    margin: 20,
  },
  menu: {
    width: 31,
    height: 31,
    padding: 'auto',
  },
  add: {
    alignContent: 'center',
    width: 40,
    height: 40,
    padding: 'auto',
  },
  button: {
    flex: 2,
    backgroundColor: 'gold',
    borderRadius: 20,
    alignSelf: 'center',
    margin: 20,
  },
  textoReceita: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    margin: 20,
  },
  comida01: {
    width: 300,
    height: 250,
    borderRadius: 25,
    marginRight: 20,
    alignSelf: 'center',
  },
  comida02: {
    width: 250,
    height: 250,
    borderRadius: 25,
    marginRight: 15,
    alignSelf: 'center',
  },
   viewTextLogin: {
    width: '100%',
    height: 60,
    backgroundColor: "#A2A1A0",
    alignItems: "center",
    borderRadius: 20,
  },
  textLogin: {
    fontFamily: "Nunito",
    fontSize: 35,
    fontWeight: 'bold',
    color: "#fff",
    marginTop: 10,
  },
  viewInputsLogin: {
    alignItems: "center",
    width: '100%',
    height: 150,
    backgroundColor: "#A2A1A0",
  },
  inputsLogin: {
    width: 300,
    height: 60,
    backgroundColor: 'white',
    //borderColor: 'black',
    //borderWidth: 5,
    borderRadius: 10,
    padding: 15,
    fontSize: 22,
    fontFamily: 'Nunito',
    marginTop: 10,
  },
  viewButtonLogin: {
    width: '100%',
    height: 70,
    backgroundColor: "#A2A1A0",
    alignItems: 'center'
  },
  buttonLogin:{
    alignItems: 'center',
    backgroundColor: 'orange',
    width: 300,
    height: 60,
    borderRadius: 14,
    padding: 15
  },
  textButtonLogin:{
    fontSize: 22,
    fontFamily: 'Nunito',
    color: "#fff",
    fontWeight: 'bold',
  },
  viewTextOu:{
    alignItems: 'center',
    width: '100%',
    height: 30,
    backgroundColor: "#A2A1A0"
  },
  textOu:{
    fontSize: 21,
    fontFamily: 'Nunito',
    color: "#fff",
    fontWeight: 'bold',
  },
  viewIconsLogin:{
    justifyContent: 'center',
    flexDirection: "row",
    width: '100%',
    height: 60,
    backgroundColor: "#A2A1A0",
  },
  iconLogin: {
    width: 50,
    height: 50,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 8,
  },
  iconLoginTwitter:{
    width: 53,
    height: 50,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 8,
  },
  viewTextAinda:{
    alignItems: 'center',
    width: '100%',
    height: 35,
    backgroundColor: "#A2A1A0"
  },
  textAinda:{
    marginTop: 10,
    fontSize: 21,
    fontFamily: 'Nunito',
    color: "#fff",
    fontWeight: 'bold',
  },
  viewButtonCriar:{
    alignItems: 'center',
    width: '100%',
    height: 90,
    backgroundColor: "#A2A1A0",
    borderRadius: 20,
  },
  buttonCriar:{
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: '#0066ff',
    width: 300,
    height: 60,
    borderRadius: 14,
    padding: 15
  },
  viewLogin: {
    justifyContent: 'center',
    backgroundColor: '#A2A1A0',
    width: '90%',
    height: '90%',
    marginTop: 25,
    borderRadius: 20,
  },

  viewCadastro: {
    justifyContent: 'center',
    backgroundColor: '#A2A1A0',
    width: '90%',
    height: '92%',
    marginTop: 30,
    borderRadius: 20,
  },
  viewRodape: {
    width: '100%',
    height: '10%',
    backgroundColor: '#FFB90F',
    textAlign: 'center',
    flexDirection: 'row',
  },
  viewBola: {
    flex: 5,
    //backgroundColor: 'gold',
    textAlign: 'center',
    margin: 20,
    borderRadius: 70,
    alignItems: 'center',
    height: 30,
    justifyContent: "space-between",
    flexDirection: 'row'
  },
})