import React from 'react';
const myContex=React.createContext();
const DadaProvidar=myContex.Provider;
const PutiConsumer=myContex.Consumer;

export {DadaProvidar,PutiConsumer}