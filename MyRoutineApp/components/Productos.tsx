export type CategoriaProducto =
    | "Bebida"
    | "Comida"
    | "Postre";

export type DisponibilidadProducto =
    | "disponible"
    | "pocasUnidades"
    | "agotado";

export type Producto = {
    id: string;
    nombre: string;
    categoria: CategoriaProducto;
    precio: number;
    disponibilidad: DisponibilidadProducto;
    descuento?: number;
    nuevo?: boolean;
};

export const productos: Producto[] = [
    {
        id: "1",
        nombre: "Cafe americano",
        categoria: "Bebida",
        precio: 35,
        disponibilidad: "disponible"
    },

    {
        id: "2",
        nombre: "Licuado de fresa",
        categoria: "Bebida",
        precio: 55,
        disponibilidad: "pocasUnidades",
        nuevo: true
    },

    {
        id: "3",
        nombre: "Empanada de queso",
        categoria: "Comida",
        precio: 30,
        disponibilidad: "disponible",
        descuento: 10
    },

    {
        id: "4",
        nombre: "Sandwich de pollo",
        categoria: "Comida",
        precio: 75,
        disponibilidad: "agotado"
    },

    {
        id: "5",
        nombre: "Pastel de chocolate",
        categoria: "Postre",
        precio: 45,
        disponibilidad: "pocasUnidades",
        descuento: 20
    },

    {
        id: "6",
        nombre: "Galleta de avena",
        categoria: "Postre",
        precio: 20,
        disponibilidad: "disponible",
        nuevo: true
    }
    ];