import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components'
import './App.css';

const theme = {
  background: '#f5f8fb',
  
  headerBgColor: '#25d366',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#28a745',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',

  
};
const steps = [
  {
    id: '0',
    message: 'Olá caminhoneiro!',
    trigger: '2',
  },
  {
    id: '2',
    message: 'Como posso ajudar você? ',
    trigger: 3,
  },
  {
    id: '3',
    options: [
      { value: 1, label: '1 - Auxilio no Trajeto', trigger: 'destino' },
      { value: 2, label: '2 - Botão do Pânico', trigger: 'perigo' },
      { value: 3, label: '3 - Locais parceiros', trigger: 'parceiros' },
      { value: 4, label: '4 - Situação do Trajeto', trigger: 'situacao' },
    ],
  },
  {
    id: 'destino',
    message: 'Para qual destino você irá?',
    trigger: 'endereco'
  },
  {
    id: 'endereco',
    user: true,

    trigger: 'resposta-endereco'
  },
  {
    id: 'resposta-endereco',
    message: 'Siga pela BR 343',
    end: true
    
    
  },
  
  
  {
    id: 'perigo',
    message:'Encontramos sua localização',
   
    trigger: 'resposta-perigo'
  },
  {
    id: 'resposta-perigo',
    message:'Aguarde sua ajuda chegar!',
    end: true
  },
  {
    id: 'parceiros',
    message:'Local Parceiro mais próximo: Posto Titara',
    end: true
  },
  {
    id: 'situacao',
    message:'Informe o trecho de destino',
    trigger: 'endereco-destino'
  },
   {
     id: 'endereco-destino',
     user: true,

      trigger: 'resposta-situacao'
   },
   {
    id: 'resposta-situacao',
    message:'Acidente no KM 320',
    trigger: 'resposta-situacao2',
    
   },
   {
     id: 'resposta-situacao2',
     message: 'Diminua a velocidade...',
     end: true
   }

  
];
function Chatbot() {
  return (
    <div className="App">
       <ThemeProvider theme={theme}>
          <ChatBot steps={steps} />
       </ThemeProvider>
      
    </div>
   
  );
}

export default Chatbot;
