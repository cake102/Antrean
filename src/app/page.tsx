'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [formData, setFormData] = useState({
    namaLengkap: '',
    nik: '',
    nomorHP: '',
    jadwalKonsultasi: '',
    nomorAntrean: '',
    waktuDaftar: '',
    status: '',
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ambil data yang sudah ada dan tambahkan data baru
    const existingData = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('formData') || '[]') : [];
    localStorage.setItem('formData', JSON.stringify([...existingData, formData]));
    // Reset form
    setFormData({
      namaLengkap: '',
      nik: '',
      nomorHP: '',
      jadwalKonsultasi: '',
      nomorAntrean: '',
      waktuDaftar: '',
      status: '',
    });
    // Redirect ke halaman data
    router.push('/data-display');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h1>Antrean Kontrol Dokter</h1>

        <label>
          Nama Lengkap
          <input
            type="text"
            name="namaLengkap"
            value={formData.namaLengkap}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          NIK
          <input
            type="text"
            name="nik"
            value={formData.nik}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Nomor HP
          <input
            type="tel"
            name="nomorHP"
            value={formData.nomorHP}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Jadwal Konsultasi
          <input
            type="datetime-local"
            name="jadwalKonsultasi"
            value={formData.jadwalKonsultasi}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Nomor Antrean
          <input
            type="text"
            name="nomorAntrean"
            value={formData.nomorAntrean}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Waktu Daftar
          <input
            type="datetime-local"
            name="waktuDaftar"
            value={formData.waktuDaftar}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Status
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="">Pilih Status</option>
            <option value="Menunggu">Menunggu</option>
            <option value="Diproses">Diproses</option>
            <option value="Selesai">Selesai</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}