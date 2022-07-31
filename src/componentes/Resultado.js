import React from 'react';

const Resultado = ({total,plazo,cantidad}) => ( 
        <div className="u-full-widht resultado">
            <h2>Resumen</h2>
            <p>La cantidad es: $ {cantidad}</p>
            <p>A pagar en: {plazo} meses</p>
            <p>Su pago mensual es de: $ { (total / plazo).toFixed(2) }</p>
            <p>Total a Pagar: $ { (total).toFixed(2) }</p>

        </div>
     );
 
export default Resultado;