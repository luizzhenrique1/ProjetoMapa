# React Native App

Este é um projeto React Native configurado para ser executado nativamente em seu ambiente de desenvolvimento.

## Requisitos

Antes de iniciar, certifique-se de ter os seguintes requisitos instalados:

- [Node.js](https://nodejs.org/) (versão recomendada: LTS)
- [Expo CLI](https://docs.expo.dev/get-started/installation/#expo-cli) (se estiver usando Expo)
- [React Native CLI](https://reactnative.dev/docs/environment-setup) (se estiver rodando sem Expo)
- [Android Studio](https://developer.android.com/studio) (para emular dispositivos Android)
- [Xcode](https://developer.apple.com/xcode/) (para desenvolvimento iOS, apenas macOS)

## Instalação

Clone este repositório e instale as dependências:

```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
npm install
# ou
yarn install
```

## Executando o projeto

### Com Expo
Se o projeto utiliza o Expo, execute:
```sh
npx expo start
```

Isso abrirá o Metro Bundler no navegador. Você pode escanear o QR Code com o aplicativo Expo Go ou rodar em um emulador.

### Com React Native CLI
Se estiver rodando um projeto sem Expo, execute:

Para Android:
```sh
npx react-native run-android
```

Para iOS (apenas macOS):
```sh
npx react-native run-ios
```

## Build para Produção

Para criar um build de produção, siga as instruções para o ambiente desejado:

### Expo (EAS Build)
```sh
npx expo prebuild  # Se precisar converter o projeto para bare workflow
npx eas build --platform android  # Para Android
npx eas build --platform ios      # Para iOS
```

### React Native CLI (Sem Expo)
#### Android
```sh
cd android
./gradlew assembleRelease
```

#### iOS (macOS e conta Apple Developer necessários)
```sh
cd ios
pod install
xcodebuild -workspace SeuProjeto.xcworkspace -scheme SeuProjeto -sdk iphoneos -configuration Release
```

## Contribuição

Sinta-se à vontade para contribuir com este projeto! Basta abrir um Pull Request.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

