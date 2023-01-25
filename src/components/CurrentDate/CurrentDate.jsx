import React from 'react';
import './CurrentDate.css';

function CurrentDate() {
    const date = new Date()
    const currentDay = String(date.getDate()).padStart(2, 0) //tem que ter 2 dígitos, senão add o 0 no início
    const month = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    ];

    var currentMonth = month[String(date.getMonth())];

    const currentYear = String(date.getFullYear())

  return (
    <h2 className='current-date'>
        {`Dia ${currentDay} de ${currentMonth} de ${currentYear}`}
    </h2>
  )
}

export default CurrentDate;