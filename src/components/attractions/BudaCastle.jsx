import React from "react";
import budaCastleImg from '../../assets/budaCastleDetail.jpg';

const BudaCastle = () => {
    return (
        <section id="budaCastle-details" className="py-5">
            <div className="container">
                <h2>Budai Vár</h2>

                <div className='row'>

                    <div className='col-md-8'>
                        <p className="text-start">
                            A Budai Vár, más néven a Királyi Palota, Budapest történelmi központjában található, a Várhegy tetején. A várkastély építése a középkor óta zajlik, és számos építkezés és átépítés során nyerte el jelenlegi formáját. A vár komplexuma nemcsak a magyar királyok otthona volt, hanem számos fontos történelmi esemény színhelye is. Ma a Budai Vár és környéke Budapest egyik legfontosabb kulturális és turisztikai központja.
                            <br />
                            <br />
                            A Budai Vár a középkori magyar királyság egyik legfontosabb erődítménye volt, és az évszázadok során különböző stílusú épületek adták hozzá varázsát. A reneszánsz és barokk stílusú paloták, valamint az erődítmények egyedülálló látképet biztosítanak, amely a Duna mindkét partjáról jól látható. A vár területén található a Magyar Nemzeti Galéria, a Budapesti Történeti Múzeum és a Halászbástya, amelyek mindegyike értékes művészeti és történelmi kincseket rejtenek.
                            <br />
                            <br />
                            A Budai Vár területe minden évben rengeteg látogatót vonz, különösen a vár látványos panorámája miatt, amely Budapest belvárosára és a Parlament épületére is rálátást biztosít. Az itt sétálva élvezhető táj és az épületek történelmi atmoszférája Budapest egyik legismertebb turisztikai célpontjává teszi.
                        </p>
                    </div>

                    <div className='col-md-4'>
                        <img src={budaCastleImg} alt="Országház" className="img-fluid" />
                    </div>

                </div>
            </div>
        </section>
    );
  };

export default BudaCastle;
