export const colorRestBox = (rest, presupuesto) => {
    let classCss = '';
    let porcentaje = (rest/presupuesto)*100;
    if(porcentaje >= 50) classCss = 'bueno';
    else if(porcentaje < 50 && porcentaje >= 20) classCss = 'regular';
    else classCss = 'malo';
    return classCss;
}