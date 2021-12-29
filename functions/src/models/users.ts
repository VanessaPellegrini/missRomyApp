export interface Users {
    rol: string,
    nombre: string,
    apellido: string,
    correo: string,
    rut: string,
    direccion?: {
        calle: string,
        numero: number,
        departamento: string,
        comuna: string,
        ciudad: string,
        torre: string
    },
    nivel?: {
        numero: number,
        grupo: string
    },
}