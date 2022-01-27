import React, { useState } from 'react';
import Header from '../components/Header';
import HeaderBlock from '../components/HeaderBlock';
import Menu from '../components/Menu';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const products = [{model:"model name",img:'some',id:1},{model:"model name",img:'some',id:2},{model:"model name",img:'some',id:3},{model:"model name",img:'some',id:4},];
    return (
        <div>
             <Header isOpen={isOpen} setIsOpen={setIsOpen} />
                  {isOpen && <Menu  />}

                  {/* Header Block */}
                {
                  products.map(item => <HeaderBlock key={item.id} model={item.model} img={item.img} />)
                }
        </div>
    );
};

export default Home;