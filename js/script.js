// Tunggu hingga DOM sepenuhnya dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen form dan hasil
    const form = document.getElementById('bmi-form'); // Form untuk input BMI
    const result = document.getElementById('result'); // Container untuk menampilkan hasil
    const bmiValue = document.getElementById('bmi-value'); // Elemen untuk menampilkan nilai BMI
    const bmiCategory = document.getElementById('bmi-category'); // Elemen untuk menampilkan kategori BMI

    // Tambahkan event listener pada form saat di-submit
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah form melakukan submit ke server

        // Ambil nilai input dari form
        const gender = document.getElementById('gender').value; // Gender dari pengguna
        const weight = parseFloat(document.getElementById('weight').value); // Berat badan pengguna dalam kilogram
        const height = parseFloat(document.getElementById('height').value); // Tinggi badan pengguna dalam cm

        // Validasi input: pastikan berat dan tinggi adalah angka positif
        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            alert('Mohon masukkan berat dan tinggi yang valid.'); // Tampilkan pesan kesalahan jika input tidak valid
            return; // Hentikan eksekusi jika ada input yang tidak valid
        }

        // Hitung BMI menggunakan fungsi calculateBMI
        const bmi = calculateBMI(weight, height);

        // Tampilkan hasil perhitungan BMI dan kategori BMI
        bmiValue.textContent = `BMI Anda: ${bmi.toFixed(1)}`; // Tampilkan nilai BMI dengan satu angka desimal
        bmiCategory.textContent = `Kategori: ${getBMICategory(bmi, gender)}`; // Tampilkan kategori berdasarkan gender dan nilai BMI
        result.classList.remove('hidden'); // Tampilkan hasil dengan menghapus kelas 'hidden'
    });

    // Fungsi untuk menghitung BMI
    function calculateBMI(weight, height) {
        // Rumus BMI: berat (kg) / (tinggi (m))^2
        return weight / Math.pow(height / 100, 2);
    }

    // Fungsi untuk mendapatkan kategori BMI berdasarkan gender
    function getBMICategory(bmi, gender) {
        // Kategori untuk gender laki-laki
        if (gender === 'male') {
            if (bmi < 18.5) return 'Kurus';
            if (bmi < 25) return 'Normal';
            if (bmi < 30) return 'Gemuk';
            return 'Obesitas';
        } else { // Kategori untuk gender perempuan
            if (bmi < 17) return 'Kurus';
            if (bmi < 23) return 'Normal';
            if (bmi < 27) return 'Gemuk';
            return 'Obesitas';
        }
    }
});
