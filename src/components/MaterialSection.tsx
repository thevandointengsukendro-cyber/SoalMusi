import React, { useState } from 'react';
import { BookOpen, Compass, Waves, ArrowUpRight, ArrowDownRight, GitCompare, Info, Layers, CheckCircle2, ChevronRight } from 'lucide-react';
import { PeilSchaalGauge } from './PeilSchaalGauge';

export const MaterialSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'konsep' | 'operasi' | 'perbandingan' | 'rangkuman'>('konsep');

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-red-950/60 border border-red-500/30 text-rose-300 text-xs font-semibold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Modul Materi Pembelajaran Matematika</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-100 tracking-tight">
              Konsep Bilangan Bulat Melalui Pasang Surut Sungai Musi
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              Pelajari konsep bilangan bulat positif, nol sebagai titik acuan, bilangan bulat negatif, 
              operasi hitung penjumlahan & pengurangan, serta cara membandingkan bilangan berdasarkan pengamatan tiang skala ukur (<em>peil schaal</em>) di Jembatan Ampera Palembang.
            </p>
          </div>
        </div>

        {/* Tab Navigation for Material Chapters */}
        <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-slate-800">
          <button
            onClick={() => setActiveTab('konsep')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
              activeTab === 'konsep'
                ? 'bg-red-600 text-white shadow-md shadow-red-950/40'
                : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>1. Konteks & Titik Acuan Nol</span>
          </button>

          <button
            onClick={() => setActiveTab('operasi')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
              activeTab === 'operasi'
                ? 'bg-red-600 text-white shadow-md shadow-red-950/40'
                : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Waves className="w-3.5 h-3.5" />
            <span>2. Operasi Hitung (+ dan -)</span>
          </button>

          <button
            onClick={() => setActiveTab('perbandingan')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
              activeTab === 'perbandingan'
                ? 'bg-red-600 text-white shadow-md shadow-red-950/40'
                : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <GitCompare className="w-3.5 h-3.5" />
            <span>3. Membandingkan Bilangan</span>
          </button>

          <button
            onClick={() => setActiveTab('rangkuman')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
              activeTab === 'rangkuman'
                ? 'bg-red-600 text-white shadow-md shadow-red-950/40'
                : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>4. Rangkuman & Intisari</span>
          </button>
        </div>
      </div>

      {/* Chapter 1: Konteks & Titik Acuan Nol */}
      {activeTab === 'konsep' && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
            <div className="border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block">Bagian 1</span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-100">
                Konteks Sungai Musi, Peil Schaal, dan Titik Acuan Nol (0)
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-8 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>Sungai Musi</strong> di Kota Palembang merupakan sungai terpanjang di Sumatera Selatan. 
                  Sungai ini dipengaruhi oleh gravitasi air laut <strong>Selat Bangka</strong> yang merambat ke pedalaman, 
                  serta curah hujan di hulu <strong>Pegunungan Bukit Barisan</strong>. Akibatnya, permukaan air Sungai Musi mengalami kenaikan (pasang) dan penurunan (surut) setiap harinya.
                </p>

                <p>
                  Untuk memantau ketinggian air, di dekat tiang pilar <strong>Jembatan Ampera</strong> dan dermaga dipasang sebuah tiang skala yang disebut <strong>Peil Schaal</strong> (tiang duga air). 
                  Tiang ukur ini berfungsi persis seperti <strong>garis bilangan vertikal</strong> dalam matematika.
                </p>

                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
                  <h4 className="font-bold text-slate-100 text-xs sm:text-sm flex items-center gap-2 text-amber-400">
                    <Info className="w-4 h-4" />
                    <span>Kesepakatan Lambang Bilangan dalam Konteks Sungai Musi:</span>
                  </h4>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-3 p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                      <span className="px-2 py-0.5 rounded font-mono font-bold bg-amber-950 text-amber-300 border border-amber-500/40 text-sm">
                        0
                      </span>
                      <div>
                        <strong className="text-slate-100 block">Titik Acuan / Permukaan Normal (Nol)</strong>
                        Kondisi air sungai berada tepat pada batas standar rata-rata. Tidak pasang dan tidak surut.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                      <span className="px-2 py-0.5 rounded font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/40 text-sm">
                        +
                      </span>
                      <div>
                        <strong className="text-slate-100 block">Air Pasang = Bilangan Bulat Positif (+1, +2, +3, ...)</strong>
                        Ketinggian air naik di atas permukaan normal. Semakin besar angkanya, air semakin pasang dan kolong jembatan semakin menyempit.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                      <span className="px-2 py-0.5 rounded font-mono font-bold bg-rose-950 text-rose-300 border border-rose-500/40 text-sm">
                        -
                      </span>
                      <div>
                        <strong className="text-slate-100 block">Air Surut = Bilangan Bulat Negatif (-1, -2, -3, ...)</strong>
                        Ketinggian air turun di bawah permukaan normal. Semakin kecil nilainya (misal -4 m), air semakin surut dan dasar sungai semakin tampak.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Demonstration: Peil Schaal Gauge */}
              <div className="md:col-span-4 flex flex-col items-center p-4 bg-slate-950 border border-slate-800 rounded-xl shadow-inner">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Model Garis Bilangan Vertikal
                </span>
                <PeilSchaalGauge
                  currentLevel={2}
                  height={260}
                  showLabels={true}
                  title="Peil Schaal Jembatan Ampera"
                />
                <span className="text-[11px] text-slate-400 text-center mt-2">
                  Garis kuning putus-putus di angka 0 merupakan <strong>titik acuan normal</strong>.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chapter 2: Operasi Hitung Penjumlahan & Pengurangan */}
      {activeTab === 'operasi' && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
            <div className="border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">Bagian 2</span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-100">
                Operasi Penjumlahan dan Pengurangan Bilangan Bulat
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Perubahan ketinggian air Sungai Musi dapat dimodelkan secara matematis dengan operasi hitung:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-950 border border-cyan-800/40 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
                  <ArrowUpRight className="w-5 h-5 text-cyan-400" />
                  <span>Operasi Penjumlahan (+) = Kenaikan Air</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Terjadi saat datang <strong>hujan di hulu Bukit Barisan</strong> atau dorongan <strong>air pasang laut</strong>. 
                  Arah gerakan pada tiang peil schaal adalah <strong>bergerak ke atas (naik)</strong>.
                </p>
              </div>

              <div className="p-4 bg-slate-950 border border-amber-800/40 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                  <ArrowDownRight className="w-5 h-5 text-amber-400" />
                  <span>Operasi Pengurangan (-) = Penurunan Air</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Terjadi saat kondisi <strong>terik kemarau</strong> atau <strong>air surut menuju muara</strong>. 
                  Arah gerakan pada tiang peil schaal adalah <strong>bergerak ke bawah (turun)</strong>.
                </p>
              </div>
            </div>

            {/* Crucial Cases of Crossing Zero */}
            <div className="space-y-4 pt-2">
              <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wider flex items-center gap-2 text-amber-400">
                <Info className="w-4 h-4" />
                <span>Kasus Khusus: Fenomena Melintasi Titik Nol (0)</span>
              </h4>

              {/* Case 1: Invers Penjumlahan (-a + a = 0) */}
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-bold text-slate-100 text-xs sm:text-sm">
                    Kasus 1: Sifat Invers Penjumlahan (Kembali ke Garis Normal)
                  </span>
                  <span className="font-mono font-extrabold text-xs px-2.5 py-1 rounded bg-amber-950 text-amber-300 border border-amber-700">
                    -2 + 2 = 0
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Jika air surut di posisi <strong>-2 meter</strong>, kemudian turun hujan yang menaikkan air sebesar <strong>2 meter (+2)</strong>, 
                  maka posisi air naik 2 langkah ke atas tepat mencapai <strong>0 meter (titik acuan normal)</strong>. 
                  Dua bilangan yang saling berlawanan jika dijumlahkan selalu bernilai nol.
                </p>
              </div>

              {/* Case 2: Crossing Zero to Positive (-2 + 5 = 3) */}
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-bold text-slate-100 text-xs sm:text-sm">
                    Kasus 2: Surut Mengalami Kenaikan Besar Melintasi Nol ke Pasang
                  </span>
                  <span className="font-mono font-extrabold text-xs px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-700">
                    -2 + 5 = 3
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Air mula-mula surut di <strong>-2 meter</strong>. Terjadi badai muson lebat menaikkan air sebesar <strong>5 meter</strong>.
                  Kenaikan 2 meter pertama dipakai untuk menutup defisit surut hingga mencapai 0, lalu bersisa 3 meter kenaikan di atas normal, 
                  sehingga posisi akhir berada di <strong>+3 meter (air pasang)</strong>.
                </p>
              </div>

              {/* Case 3: Pasang Mengalami Surut Melintasi Nol ke Negatif (1 - 3 = -2) */}
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-bold text-slate-100 text-xs sm:text-sm">
                    Kasus 3: Pasang Mengalami Penurunan Besar Melintasi Nol ke Surut
                  </span>
                  <span className="font-mono font-extrabold text-xs px-2.5 py-1 rounded bg-rose-950 text-rose-300 border border-rose-700">
                    1 - 3 = -2
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Pagi hari air pasang di <strong>+1 meter</strong>. Sore hari air laut surut drastis sebesar <strong>3 meter</strong>.
                  Penurunan 1 meter menghabiskan kelebihan pasang hingga ke titik normal 0, lalu air terus turun 2 meter lagi ke bawah normal, 
                  sehingga posisi akhir adalah <strong>-2 meter (air surut)</strong>.
                </p>
              </div>

              {/* Case 4: Sudah Surut, Surut Lagi (-1 - 3 = -4) */}
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-bold text-slate-100 text-xs sm:text-sm">
                    Kasus 4: Sudah Surut lalu Semakin Menyusut
                  </span>
                  <span className="font-mono font-extrabold text-xs px-2.5 py-1 rounded bg-rose-950 text-rose-300 border border-rose-700">
                    -1 - 3 = -4
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Air sudah berada di posisi <strong>-1 meter</strong>. Terjadi kemarau panjang sehingga air menyusut lagi sebesar <strong>3 meter</strong>.
                  Dari -1 bergerak turun 3 langkah lagi ke bawah, menghasilkan posisi <strong>-4 meter</strong> (semakin dalam di bawah normal).
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chapter 3: Membandingkan & Mengurutkan Bilangan Bulat */}
      {activeTab === 'perbandingan' && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
            <div className="border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">Bagian 3</span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-100">
                Membandingkan Dua Ketinggian Air (Urutan Bilangan Bulat)
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Misalkan dilakukan pengamatan ketinggian air di dua dermaga di sepanjang aliran Sungai Musi, 
              seperti <strong>Dermaga Benteng Kuto Besak (BKB)</strong> dan <strong>Dermaga Seberang Ulu</strong>.
            </p>

            {/* Geometric Principle */}
            <div className="p-4 bg-slate-950 border border-emerald-500/40 rounded-xl space-y-2">
              <strong className="text-emerald-300 text-xs sm:text-sm block">
                Prinsip Utama Garis Bilangan Vertikal (Peil Schaal):
              </strong>
              <p className="text-xs sm:text-sm text-slate-200 font-medium">
                "Semakin <strong>KE ATAS</strong> posisi suatu bilangan pada tiang ukur, nilainya <strong>SEMAKIN BESAR</strong>. 
                Sebaliknya, semakin <strong>KE BAWAH</strong> posisinya, nilainya <strong>SEMAKIN KECIL</strong>."
              </p>
            </div>

            {/* Comparison Examples */}
            <div className="space-y-3 pt-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Contoh Perbandingan Nyata:
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* Example 1 */}
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-200">Dua Bilangan Negatif:</span>
                    <span className="font-mono font-extrabold text-sm text-cyan-300">-3 &lt; -1</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Air di BKB berada di <strong>-3 meter</strong>, sedangkan di Seberang Ulu berada di <strong>-1 meter</strong>. 
                    Meskipun angka 3 tampak lebih besar dari 1, posisi -1 meter berada <em>lebih tinggi</em> dan lebih dekat ke permukaan normal daripada -3 meter. 
                    Oleh karena itu, <strong>-3 &lt; -1</strong> (atau <strong>-1 &gt; -3</strong>).
                  </p>
                </div>

                {/* Example 2 */}
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-200">Positif vs Negatif:</span>
                    <span className="font-mono font-extrabold text-sm text-emerald-300">2 &gt; -2</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Air di BKB berada di <strong>+2 meter (pasang)</strong>, sedangkan di Seberang Ulu berada di <strong>-2 meter (surut)</strong>. 
                    Semua bilangan bulat positif posisinya berada di atas titik nol, sehingga <strong>selalu lebih besar</strong> daripada bilangan negatif. 
                    Oleh karena itu, <strong>2 &gt; -2</strong>.
                  </p>
                </div>

                {/* Example 3 */}
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-200">Nol vs Bilangan Negatif:</span>
                    <span className="font-mono font-extrabold text-sm text-amber-300">0 &gt; -3</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Permukaan normal (0 m) posisinya selalu berada di atas semua kondisi air surut (bilangan negatif). 
                    Dengan demikian, <strong>0 selalu lebih besar daripada bilangan bulat negatif</strong> manapun.
                  </p>
                </div>

                {/* Example 4 */}
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-200">Nol vs Bilangan Positif:</span>
                    <span className="font-mono font-extrabold text-sm text-amber-300">0 &lt; +3</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Sebaliknya, permukaan normal (0 m) selalu berada di bawah kondisi air pasang (+1, +2, +3 m). 
                    Sehingga, <strong>0 selalu lebih kecil daripada bilangan bulat positif</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chapter 4: Rangkuman & Intisari */}
      {activeTab === 'rangkuman' && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
            <div className="border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">Bagian 4</span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-100">
                Rangkuman & Intisari Materi Pembelajaran
              </h3>
            </div>

            {/* Table of Summary */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400">
                    <th className="py-2.5 px-3">Konsep Matematika</th>
                    <th className="py-2.5 px-3">Representasi Fisik di Sungai Musi</th>
                    <th className="py-2.5 px-3">Arah Gerak pada Peil Schaal</th>
                    <th className="py-2.5 px-3">Contoh Persamaan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-amber-400">Titik Acuan (0)</td>
                    <td className="py-2.5 px-3">Permukaan air standar rata-rata Sungai Musi</td>
                    <td className="py-2.5 px-3">Tepat di garis batas tengah (0 m)</td>
                    <td className="py-2.5 px-3 font-mono">-2 + 2 = 0</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-cyan-400">Bilangan Positif (+)</td>
                    <td className="py-2.5 px-3">Kondisi air pasang (naik di atas normal)</td>
                    <td className="py-2.5 px-3">Di atas garis nol (ke arah atas)</td>
                    <td className="py-2.5 px-3 font-mono">+1, +2, +3, +5 m</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-rose-400">Bilangan Negatif (-)</td>
                    <td className="py-2.5 px-3">Kondisi air surut (turun di bawah normal)</td>
                    <td className="py-2.5 px-3">Di bawah garis nol (ke arah bawah)</td>
                    <td className="py-2.5 px-3 font-mono">-1, -2, -3, -5 m</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-emerald-400">Penjumlahan (+)</td>
                    <td className="py-2.5 px-3">Hujan di hulu / pasang air laut</td>
                    <td className="py-2.5 px-3">Melangkah ke atas sejauh nilai penambah</td>
                    <td className="py-2.5 px-3 font-mono">-2 + 5 = 3</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-amber-400">Pengurangan (-)</td>
                    <td className="py-2.5 px-3">Terik kemarau / surut menuju muara</td>
                    <td className="py-2.5 px-3">Melangkah ke bawah sejauh pengurang</td>
                    <td className="py-2.5 px-3 font-mono">1 - 3 = -2</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-purple-400">Perbandingan (&lt;, &gt;, =)</td>
                    <td className="py-2.5 px-3">Membandingkan ketinggian dermaga BKB & Ulu</td>
                    <td className="py-2.5 px-3">Posisi yang lebih atas selalu lebih besar</td>
                    <td className="py-2.5 px-3 font-mono">-3 &lt; -1, 2 &gt; -2</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Closing Note */}
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl flex items-start gap-3 text-xs text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-100 block mb-0.5">Pemahaman Kontekstual yang Bermakna:</strong>
                Dengan menggunakan fenomena nyata pasang surut Sungai Musi dan Jembatan Ampera, 
                siswa tidak lagi menghafalkan rumus secara mekanis, melainkan memahami arti fisis dari bilangan bulat negatif, 
                titik acuan nol, dan perpindahan nilai pada garis bilangan tegak.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
