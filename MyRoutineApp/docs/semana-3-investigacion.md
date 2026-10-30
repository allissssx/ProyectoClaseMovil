A1. Flexbox
1. ¿Cuál es el valor por defecto de flexDirection en React Native? ¿En qué se diferencia del valor por defecto en CSS para la web?
= El valor por defecto de flexDirection es columna, es decir, los elementos se apilan verticalmente de arriba abajo. A diferencia del valor por defecto de css que es row, es decir, que los elementos se disponen horizontalmente de izquierda a derecha

2. Explica la diferencia entre justifyContent y alignItems. ¿Sobre qué eje actúa cada uno cuando flexDirection es 'column'? ¿Y cuando es 'row'?
= justifyContent alinea los elementos a lo largo del eje principal, mientras que alignItems los alinea a lo largo del eje transversal
Cuando flexDirection es column, justifyContent actúa sobre el eje vertical, el principal. Y alignItems actúa sobre el eje horizontal, el transversal
Cuando flexDirection es row justifyContent actúa sobre el eje horizontal, el principal. Y alignItems actúa sobre el eje vertical, el transversal

3. Menciona al menos cuatro valores posibles de justifyContent y describe en una línea qué hace cada uno.
flex-start: Alinea los elementos al inicio del eje principal
flex-end: Alinea los elementos al final del eje principal 
center: Centra los elementos a lo largo del eje principal
space-between: Distribuye los elementos uniformemente, colocando el primer elemento al inicio y el último al final, con espacios iguales entre ellos
4. ¿Qué significa flex: 1 en un componente? Si dos View hermanos tienen flex: 1 y flex: 2, ¿cómo se reparten el espacio disponible?
= Un número positivo en la propiedad flex equivale a establecer flexGrow: <número>, flexShrink: 1 y flexBasis: 0. Esto hace que el componente sea flexible y crezca para ocupar espacio de manera proporcional.
En el caso que dos View hermanos tengan flex: 1 y flex: 2, el espacio disponible se divide en 3 partes totales (1 + 2 = 3). El primer View tomará 1/3 del espacio disponible y el segundo View tomará 2/3 

A2. Estilos de View
5. Explica la diferencia entre padding y margin. ¿Qué hacen paddingHorizontal y marginVertical?
= Padding define el espacio de relleno interno entre el contenido de un componente y sus bordes, mientras que margin define el espacio de separación externo alrededor del componente
paddingHorizontal: Aplica el mismo espacio de relleno interno de manera simultánea en el lado izquierdo (paddingLeft) y en el derecho (paddingRight)
marginVertical: Aplica el mismo espacio de separación externo de manera simultánea en la parte superior (marginTop) y en la inferior (marginBottom)

6. ¿Qué propiedades se usan para dibujar un borde y redondear las esquinas de un View? Indica el nombre de al menos tres.
= borderWidth: Establece el ancho del borde para los cuatro lados del componente
borderColor: Define el color del borde del componente
borderRadius: Se utiliza para redondear las esquinas del componente

A3. Estilos de Text
7. Describe para qué sirven fontSize, fontWeight, color, textAlign, lineHeight y letterSpacing. ¿Qué tipo de valor recibe fontWeight (número o texto)?
= fontSize: Controla el tamaño de la fuente del texto
fontWeight: Especifica el grosor de la fuente
color: Define el color del texto
textAlign: Especifica la alineación horizontal del texto
lineHeight: Controla el espaciado vertical entre líneas de texto, indicando la distancia exacta entre las líneas base de líneas consecutivas
letterSpacing: Aumenta o disminuye el espacio horizontal entre los caracteres individuales del texto
fontWeight recibe tanto texto (cadenas como 'normal', 'bold') como un número o cadenas numéricas ('100', '200', '300', '400', '500', '600', '700', '800', '900')

8. ¿Qué hacen textTransform y textDecorationLine? Da un ejemplo de valor para cada una.
= textTransform: Permite modificar la capitalización o transformar las letras del texto, por ejemplo, pasarlo todo a mayúsculas o minúsculas. Ejemplo de valor: 'uppercase' textDecorationLine: Permite agregar decoraciones lineales al texto, como subrayado o tachado. Ejemplo de valor: 'underline'

9. Un Text dentro de otro Text hereda estilos, pero un Text dentro de un View no hereda el color ni el fontSize del View. Explica por qué según la documentación.
= En React Native, el componente Text admite la herencia de estilos exclusivamente cuando se encuentra anidado dentro de otro componente Text, permitiendo que los elementos hijos hereden las propiedades tipográficas del padre. Por el contrario, un componente View es un contenedor de diseño genérico y no un nodo de texto nativo, debido a esto, los estilos orientados al texto no se propagan automáticamente ni se heredan a través de los límites de un View hacia un componente Text interno

A4. StyleSheet
10. ¿Qué ventajas tiene usar StyleSheet.create en lugar de escribir objetos de estilo directamente dentro del JSX?
= Primero es por la claridad y legibilidad, al mover los estilos fuera de la función de renderizado, el código se vuelve más fácil de entender. Nombrar los estilos es una excelente manera de aportar significado a los componentes de bajo nivel dentro del renderizado y fomenta su reutilización. Ademas, en la mayoría de los entornos de desarrollo, utilizar StyleSheet.create() ofrece comprobación de tipos estática (static type checking) y sugerencias (autocompletado) para ayudar a escribir estilos válidos
11. Observa este fragmento: style={[estilos.tarjeta, estilos.tarjetaDestacada]}. ¿Qué ocurre si ambos estilos definen backgroundColor? ¿Cuál gana y por qué?
= Si ambos estilos definen la propiedad backgroundColor, gana estilos.tarjetaDestacada. Esto ocurre porque en React Native, cuando se pasa un array de estilos, los estilos se aplican en orden de izquierda a derecha, los estilos que aparecen más a la derecha tienen mayor precedencia y sobrescriben a las propiedades duplicadas declaradas en los objetos anteriores del array
