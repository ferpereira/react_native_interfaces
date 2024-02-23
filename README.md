# react_native_interfaces
Projeto para fins de estudo.
Criando interfaces modernas com React Native
 Ferramenta para estilizar sua aplicação é de grande valia e com elas você consegue:


Deixa separado o visual da lógica do componente.
Facilita a manutenção das suas interfaces a você e a equipe;
E com essa boas prática temos uma flexibilidade maior com o código e a aplicação
Dicas: 
	Bibliotecas populares usadas em React Native para estilização de telas:
Styled Components: Permite escrever estilos em JavaScript diretamente dentro dos componentes React Native. Ele oferece uma maneira simples e elegante de criar estilos reutilizáveis e dinâmicos.
			
React Native Paper: Uma biblioteca de componentes de IU que segue as diretrizes do Material Design. Ele fornece uma variedade de componentes predefinidos e estilizados que podem ser facilmente personalizados.
Instalação: https://callstack.github.io/react-native-paper/docs/guides/getting-started#installation


React Native Elements: Outra biblioteca de componentes de IU comuns, que oferece uma variedade de componentes personalizáveis, como botões, ícones, cartões e muito mais.
Instalação: 
https://reactnativeelements.com/docs/installation#using-expo

 Centralize os Tokens de Design da sua aplicação.


 Como extrair a paleta de cores de uma imagem.

 https://color.adobe.com/pt/create/color-wheel


 Dica: estude o círculo de cores e as combinações


 Não conte com a fonte padrão do dispositivo. Utilize uma fonte personalizada.


 Aprender o básico de tipografia: entender que as fontes transmitem sentimento.


 Pergunte pra si mesmo ao utilizar fontes personalizada:


É legível?
Sobrecarrega o layout?
Leve consideração o propósito da fonte
Utilização de fonts;
fonts: https://www.npmjs.com/package/@expo-google-fonts/inter    install: npx expo install @expo-google-fonts/inter      mas iremos utilizar a fonte ROBOTO npx expo install @expo-google-fonts/roboto
(deprecated) Garantir o carregamento das fonts antes do carregamento do app vamos instalar o npx expo install expo-app-loading 
Pra que iremos usar o Theme Provider?
O Theme Provider ele funciona para o seguinte, a gente criou um arquivo com os tokens na nossa aplicação né os bloquinhos de cores os tokens de fonte agora o que a gente precisa fazer precisamos disponibilizar essas informações para a gente usar em qualquer lugar da nossa aplicação para poder usar as cores usar as fontes centralizadas então esse Theme Provider ele vai por volta das nossas telas por quê todas as nossas telas terão acesso a esse nosso tema bom então basicamente é para isso que funciona.
	Atenção: Fiz alguns ajustes no código;
Instalei a biblioteca npx expo install expo-splash-screen   para substituir a app expo-app-loading deprecated.
O código da App.tsx sofreu algumas alterações. 

Usei apenas @expo-google-fonts/roboto para carregar as fontes, continuei usando o useFonts que é usada para carregar as fontes e SplashScreen.hideAsync() é chamada dentro de useEffect para ocultar a tela de splash quando as fontes estiverem carregadas.

 Responsividade no mobile:


Para tamanhos relativos: https://www.npmjs.com/package/react-native-responsive-fontsize
No mobile a atenção é muito mais na largura do que na altura.

 Não adianta ser bonito se não é funcional. Cuide da usabilidade!
 Bibliotecas de animações:


React Native Reanimated v2: https://docs.swmansion.com/react-native-reanimated/
Moti: https://moti.fyi/
Animatable: https://github.com/oblador/react-native-animatable
React-native-shared-element: https://github.com/IjzerenHein/react-native-shared-element





