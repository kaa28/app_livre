import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Foto from './assets/ne.jpg';
import Foto1 from './assets/download.jpg';

export default function App() {

  const image = { uri: 'https://http2.mlstatic.com/D_NQ_NP_889434-MLB71733264105_092023-O.webp' };

  return (
    <View style={estilo.container}>
      <View style={estilo.batePapodiv}>
        <View style={estilo.flexRowContainer}>
          <Image
            source={Foto1}
            style={estilo.img3}
          />
          <Text style={estilo.batePapo}>
            Husk
          </Text>
        </View>
      </View>
      <ImageBackground source={image} resizeMode="cover" style={estilo.image}>
        <View style={estilo.seg}>
          As mensagens e as ligações são protegidas com a criptografia de ponta a ponta e ficam somente entre você e os participantes desta conversa
        </View>
        <View style={estilo.flexRowContainer}>
          <Image
            source={Foto1}
            style={estilo.img}
          />
          <Text style={estilo.pessoa1}>
            eae Angel, Bão?
          </Text>
        </View>
        <View style={{ flexDirection: "row-reverse" }}>
          <Image
            source={Foto}
            style={estilo.img1}
          />
          <Text style={estilo.pessoa2}>
            tenho dinheiro não viu
          </Text>
        </View>
        <View style={estilo.flexRowContainer}>
          <Image
            source={Foto1}
            style={estilo.img}
          />
          <Text style={estilo.pessoa1}>
            não é isso n
          </Text>
        </View>
        <View style={estilo.flexRowContainer}>
          <Text style={estilo.pessoa12}>
            queria pergunta se vai sair com o pessoal?
          </Text>
        </View>
        <View style={estilo.caixatexto}>
          ainda não s...
        </View>
      </ImageBackground>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,255)',
    flex: 1,
    backgroundColor: ""
  },
  batePapo: {
    alignItems: 'center',
    margin: 10,
    alignItems: 'center',
    justifyContent: "center",
    textAlign: "center",
    color: "white"
  },
  batePapodiv: {
    backgroundColor: "#212d39",
    padding: 5,
    marginBottom: 20
  },
  pessoa1: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    padding: 20,
    backgroundColor: "#202d36",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    borderTopEndRadius: 20,
    color: "white"
  },
  pessoa12: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    padding: 20,
    backgroundColor: "#202d36",
    borderRadius: 20,
    marginLeft: 70,
    color: "white"
  },
  pessoa2: {
    marginLeft: 50,
    marginRight: 20,
    backgroundColor: "#24988d",
    padding: 20,
    marginTop: 30,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    borderTopStartRadius: 20,
    color: "white"
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 50
  },
  img3: {
    width: 40,
    height: 40,
    borderRadius: 50
  },
  img1: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  flexRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  seg: {
    backgroundColor: "#202d36",
    color: "#d1bf6a",
    marginBottom: 30,
    padding: 20,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20
  },
  caixatexto: {
    backgroundColor: "#202d36",
    color: "white",
    padding: 16,
    borderRadius: 30,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 210
  },
  image: {
    flex: 1
  }
});
