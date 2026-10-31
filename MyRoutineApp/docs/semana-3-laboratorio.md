P1. Copie el type de props de su BotonAccion y justifique cada prop opcional: por qué es opcional y por qué eligió ese valor por defecto. Explique, citando la línea, cómo garantiza que el botón inhabilitado o en proceso no ejecute nada. ¿Bastaría con bajar la opacidad? ¿Por qué?

type BotonAccionProps = {
    texto: string,
    onPress: ()=> void;
    Apariencia?: "principal" | "alternativa" | "destructiva" | "enlace",
    Tamano?: "pequeno" | "mediano" | "grande",
    AnchoCompleto?: boolean,
    Inhabilitado?: boolean,
    Proceso?: boolean
}

Las props Apariencia, Tamano, AnchoCompleto, Inhabilitado y Proceso son opcionales porque no todos los botones necesitan cambiar esas características. Para evitar acciones cuando está inhabilitado o cargando, se utiliza la propiedad disabled. Bajar la opacidad no sería suficiente porque solo cambia la apariencia, pero no impide que se presione.
components/BotonAccion.tsx, líneas 3 a 11

P2. Describa, citando archivo y línea en cada punto, el recorrido completo desde que el usuario toca el botón de una tarjeta en la sección "Sus favoritos" hasta que aparece el mensaje en pantalla: dónde se define lo que ocurre, por qué componentes pasa y dónde se ejecuta.

Cuando se presiona Pedir otra vez la pantalla App.tsx define la acción mediante la función pedirOtraVez, esa función recibe el nombre del producto y muestra una alerta con Alert.alert, la acción se pasa a TarjetaProducto mediante la prop onAgregar y después llega al botón BotonAccion mediante onPress. Así, la tarjeta puede utilizarse en diferentes secciones sin tener que cambiar su código

Referencias: App.tsx, líneas 16 a 18, 60 
components/TarjetaProducto.tsx, línea 8 
components/BotonAccion.tsx, línea 5 

P3. ¿Dónde calculó el precio final con descuento y dónde se decide cómo se escribe un precio? Cite las líneas. Explique qué archivos tendría que cambiar si mañana la sede de otro país usa otra moneda, y qué tendría que cambiar si ese cálculo o ese formato estuvieran escritos dentro de la tarjeta.

El precio final con descuento se calcula en App.tsx, usando el precio original y el porcentaje de descuento. La forma de mostrar el precio también se define en App.tsx, mediante la función formatearPrecio, que agrega el símbolo de la moneda y dos decimales. Si otra sede utiliza una moneda diferente, solamente tendría que cambiar esa función y no los componentes

Referencias: App.tsx, líneas 8 a 10, 41 a 43 (cálculo de precioFinal y función formatearPrecio); components/TarjetaProducto.tsx, línea 32 a 38 (uso de formatearPrecio).
 
P4. Explique, citando la línea, cómo decide su EncabezadoSeccion si muestra "Ver todo". ¿Qué tipo tiene la prop que lo controla y por qué es opcional? 

El componente muestra Ver todo solamente cuando recibe la prop onVerTodo. Esta prop es opcional y tiene el tipo () => void, porque algunas secciones necesitan realizar una acción y otras no. En Menú del día se envía una función para mostrar la alerta, mientras que en Sus favoritos y Su pedido no se envía, por eso el enlace no aparece en esas secciones.

Referencias: components/EncabezadoSeccion.tsx, línea 6, línea 17 a 19 

P5. Liste las funciones que definió en App.tsx (cite la línea de cada una) y escriba su tipo, por ejemplo qué recibe y qué devuelve. Para cada una, explique por qué está en la pantalla y no dentro de un componente.

- formatearPrecio(precio: number): string: recibe un precio y devuelve el precio con la moneda y dos decimales
- agregarProducto(nombre: string): void: recibe el nombre y muestra una alerta indicando que se agregó al pedido
- pedirOtraVez(nombre: string): void: recibe el nombre y muestra el mensaje de pedido rápido
- confirmarPedido(): void: muestra la alerta de confirmación
- vaciarPedido(): void: muestra la alerta de que se vació el pedido

Estas funciones están en App.tsx porque las acciones dependen de la pantalla donde se utilizan, los componentes solo reciben las funciones y se encargan de mostrar la interfaz.
Referencias: App.tsx, líneas 8 a 26 

P6. Si mañana se agrega una sección "Promociones" donde el botón diga "Aprovechar" y muestre otro mensaje, ¿qué archivos modificaría? Justifique.

Modificaría únicamente App.tsx, porque ahí se define qué sucede cuando se presiona el botón en cada sección, agregaría la nueva sección Promociones, utilizaría TarjetaProducto cambiando el texto del botón a Aprovechar y le pasaría una nueva función con el mensaje correspondiente. No tendría que modificar BotonAccion ni TarjetaProducto, porque ya están preparados para recibir diferentes textos y acciones mediante sus props

Referencias: App.tsx, líneas 46 y 59
components/TarjetaProducto.tsx, línea 8 y 9 

Experimentos

E1. En sus datos, cambie temporalmente la categoría de un producto a 'bebidas' (en plural). ¿Qué error aparece, en qué línea y por qué?

El tipo esperado procede de la propiedad "categoria", que se declara aquí en el tipo "Producto"
Los errores aparecen porque la categoria se nombró “Bebidas”, pero todo el proyecto usa el nombre en singular, se debe usar el mismo nombre en ambos lugares para que coincidan.

E2. Elimine temporalmente de un producto un campo que su type declara como obligatorio. ¿Qué error aparece y por qué no ocurre lo mismo al eliminar un campo opcional?

La propiedad "nombre" falta en el tipo "{ id: string; categoria: "Bebida"; precio: number; disponibilidad: "disponible"; }", pero es obligatoria en el tipo "Producto".

Aparece un error indicando que falta una propiedad obligatoria, porque el producto debe cumplir con todos los campos definidos en Producto. En cambio, un campo opcional puede omitirse porque está marcado con ? en el tipo.

E3. En App.tsx, quite temporalmente de una TarjetaProducto una prop obligatoria de su elección. Copie el error e indique por qué decidió que esa prop fuera obligatoria.

La propiedad "onAgregar" falta en el tipo "{ key: string; producto: Producto; precioFinal: number; formatearPrecio: (precio: number) => string; textoBoton: string; }", pero es obligatoria en el tipo "TarjetaProductoProps".

La prop es obligatoria porque permite ejecutar la acción cuando el usuario presiona el botón de la tarjeta. Sin ella, el componente no puede realizar esa acción.
