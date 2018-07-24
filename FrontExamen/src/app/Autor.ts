import {Libro} from "./Libro";

export class Autor {
  id: number;
  nombre: string;
  apellido: string;
  numeroLibros: string;
  fechaNacimiento: string;
  url: string;
  libros: Libro[];
}
