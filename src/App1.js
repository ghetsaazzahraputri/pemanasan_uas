import React from 'react';
import './App1.css';

function App1 (){
    return(
        <div className="wrapper gambar">
            <div className="flex-wrapper">
                <div className="flex-judul">
                    <div className="judul">
                        <h1 className="Save">Save</h1>
                        <h1 className="Your">Your</h1>
                        <h1 className="Earth">Earth</h1>
                    </div>
                </div>
                <div className="flex-konten">
                <div className="konten">
                  <p><b>Menanam satu pohon,menghasilkan sejuta manfaat</b></p>
                 </div> 
                </div>
                <div className="flex-button">
                   <div className="button">
                   <p className="text">Hubungi Kami</p>
                   </div>
              </div>
              <div className="flex-button1">
                  <div className="button1">
                      <p className="text1">Donasi pohon</p>
                  </div>
              </div>
            </div>
            <div className="opacity">

            </div>
            
        </div>
    );
}

export default App1;
