import React from "react";

import chainBridgeImg from '../../assets/chainBridgeDetail.jpg';

const ChainBridge = () => {
    return (
        <section id="chainBridge-details" className="py-5">
            <div className="container">
                <h2>Lánchíd</h2>
                <div className='row'>

                    <div className='col-md-4'>
                        <img src={chainBridgeImg} alt="Országház" className="img-fluid" />
                    </div>

                    <div className='col-md-8'>
                        <p className="text-end">
                            Az Országház, Budapest egyik legismertebb épülete, a Duna partján áll és a magyar parlamenti demokrácia szimbólumává vált. Az épület a neogótikus stílusban készült, és a 19. század végén, 1885 és 1904 között épült. A Parlament Magyarország legnagyobb épülete, és Európa egyik legnagyobb parlamenti épülete, impozáns méretével és díszes kialakításával az egyik leglátogatottabb turisztikai látványosság Budapesten.
                            <br />
                            <br />
                            Az Országház tervezését Imre Steindl vezetésével végezték, és az épületben a neogótikus, reneszánsz és barokk elemek keverednek, ami a monarchikus korszak pompáját tükrözi. A homlokzatot díszítő szobrok, tornyok és ablakok mind a gazdag történelmi és kulturális örökség részét képezik. Az Országház belső terét is érdemes felfedezni, hiszen a hatalmas, aranyozott lépcsők, a gyönyörű üvegablakok és a díszes kupola mind lenyűgözőek.
                            <br />
                            <br />
                            A Parlament a magyar törvényhozás székhelye, és itt találhatóak az ország legfontosabb állami szimbólumai is, például Szent István király koronája. Az Országház látogatása lehetőséget ad arra, hogy a látogatók megismerkedjenek Magyarország történelmével, politikai intézményeivel és monarchikus hagyományaival.
                        </p>

                    </div>

                </div>
            </div>
      </section>
    );
  };
  

export default ChainBridge;