/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
    * Colocar Nombre a mostrar en la etiqueta
    */
    label: string;
    /**
    * Colocar el tamaño de la etiqueta
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4';
    /**
    * Colocar el color de la etiqueta
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * Colocar la etiqueta en mayúsculas
    */
    allCaps?: boolean;
    /**
    * Colocar el color de la fuente
    */
    fontColor?: string;
    /**
    * Colocar el color de fondo
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
