"use client";
import QRCodeCanvas from '@/components/QRCodeCanvas';
import Horario from '@/components/Horario';
import { useState } from 'react';

function QRPage() {
    const [ahora, setAhora] = useState(new Date());

    setInterval(() => {
        setAhora(new Date());
    }, 1000);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-950">

            <h1 className="text-2xl font-bold mb-4">Escanea el QR para marcar asistencia</h1>
            <QRCodeCanvas text="https://www.youtube.com/watch?v=eTplxWaAD8o" />

            <div className="mt-4 flex flex-col text-2xl " >
                <h1>El horario de entrada es 7 am</h1>
                <div className=" flex flex-row items-center justify-center space-x-1.5">
                    <Horario /> 
                    <p>
                         - {ahora.toLocaleTimeString()}
                    </p>
                    
                </div>
                
            </div>
            
        </div>
    );}

export default QRPage;