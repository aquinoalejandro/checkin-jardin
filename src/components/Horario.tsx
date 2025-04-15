"use client";
import React, { useState, useEffect } from "react";

const HoraDeEntrada = () => {
  const [estado, setEstado] = useState("");

  useEffect(() => {
    const verificarHora = () => {
      const ahora = new Date();
      const horaEntrada = new Date();
      horaEntrada.setHours(7); 

      if (ahora < horaEntrada) {
        setEstado("Estás temprano");
      } else {
        setEstado("Llegas tarde");
      }
    };

    verificarHora();
  }, []);

  return (
    <div>
      <h1 className={`text-2xl font-bold ${estado == 'Estás temprano' ? 'text-green-500' : 'text-red-500'}`}>{estado}</h1>
    </div>
  );
};

export default HoraDeEntrada;
