'use client';

import { useState, useEffect } from 'react';

const DataDisplayPage = () => {
  const [savedData, setSavedData] = useState([]);

  // Ambil data dari localStorage saat komponen dimuat
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('formData') || '[]');
    setSavedData(data);
  }, []);

  return (
    <div className="data-display-container">
      <h1>Data yang Dimasukkan</h1>
      {savedData.length === 0 ? (
        <p>Tidak ada data yang tersedia.</p>
      ) : (
        <table className="data-table">
          <thead>
            <tr>
              <th>Nama Lengkap</th>
              <th>NIK</th>
              <th>Nomor HP</th>
              <th>Jadwal Konsultasi</th>
              <th>Nomor Antrean</th>
              <th>Waktu Daftar</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {savedData.map((data, index) => (
              <tr key={index}>
                <td>{data.namaLengkap}</td>
                <td>{data.nik}</td>
                <td>{data.nomorHP}</td>
                <td>{data.jadwalKonsultasi}</td>
                <td>{data.nomorAntrean}</td>
                <td>{data.waktuDaftar}</td>
                <td>{data.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DataDisplayPage;