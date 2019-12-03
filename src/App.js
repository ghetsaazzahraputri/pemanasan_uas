import React from 'react';
import './App.css';

function App() {
  return (
   <div className="wrapper gambar">
     <div className="flex-wrapper">
        <div className="flex-judul">
            <div className="judul">
              <h1 className="sekolah">Sekolah</h1>
              <h1 className="unggul">Unggul</h1>
            </div>  
        </div>
      <div className="flex-konten">
        <div className="konten">
     <p><b>Lorem Ipsum</b> is simply dummy text of the printing and.
     <br></br>
     typesetting industry. Lorem Ipsum has been the industr
     <br></br>
     dummy text ever since the 1500s, when an unknown pri
     <br></br>
     of type and scrambled it to make a type specimen book.
     <br></br>
     </p>
     </div>
     </div>
     <div className="flex-button">
       <div className="button">
         <p className="text">Baca Selanjutnya</p>
       </div>
     </div>
    </div>
    <div className="opacity">

    </div>
    <div className="right">
    <i class="fa fa-chevron-right"></i>
        </div>
        <div className="left">
        <i class="fa fa-chevron-left"></i>
        </div>
    </div>
  );
}

export default App;
