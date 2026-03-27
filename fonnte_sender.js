const _SECURE_T = "FyMZUQ5eNwBLCCUeNwwqCyE2WCk"; 

// 2. Masukkan Key unik Anda (bebas, asal sama dengan saat enkripsi)
const _SECURE_K = "PondokPesantrenHidayatullah2024";

// 3. Masukkan domain GitHub Pages Anda (misal: user.github.io)
const _ALLOWED_DOMAIN = "github.io"; 

/**
 * Fungsi Dekripsi (Internal)
 */
function _decodeToken(input, key) {
    try {
        const raw = atob(input);
        let output = '';
        for (let i = 0; i < raw.length; i++) {
            output += String.fromCharCode(raw.charCodeAt(i) ^ key.charCodeAt(i % key.charCodeAt(0)));
        }
        return output;
    } catch (e) {
        console.error("Gagal melakukan dekripsi token. Periksa format enkripsi Anda.");
        return "";
    }
}

/**
 * Validasi Domain (Security Layer 2)
 */
function isAuthorized() {
    return window.location.hostname.includes(_ALLOWED_DOMAIN);
}

/**
 * Fungsi Utama Kirim Notifikasi
 */
async function sendFonnteNotification(data) {
    // Cek Otoritas Domain
    if (!isAuthorized()) {
        console.error("Akses Ditolak: Domain tidak diizinkan mengirim notifikasi.");
        return;
    }

    // Ambil Token (Layer 1 Decryption)
    const activeToken = _decodeToken(_SECURE_T, _SECURE_K);
    if (!activeToken) return;

    const pesanWA = `*NOTIFIKASI KONFIRMASI PEMBAYARAN*
Pondok Pesantren

Assalamu'alaikum Warahmatullahi Wabarakatuh,
Terima kasih, data konfirmasi pembayaran Anda telah kami terima:

👤 *Data Santri*
Nama: ${data.namaLengkap}
Kelas: ${data.kelas}

💳 *Rincian Pembayaran*
Jenis: ${data.jenisPembayaran}
${data.jenisPembayaran === 'SPP' ? `Bulan: ${data.bulan}\nTahun: ${data.tahun}` : `Tahun: ${data.tahun}`}
Nominal: Rp ${parseInt(data.nominal).toLocaleString('id-ID')}
Penerima: ${data.namaUstadz}

Mohon menunggu proses verifikasi oleh tim administrasi. Jazakumullah Khairan.

_Pesan otomatis via Website Konfirmasi_`;

    if (!data.nomorWa) return;

    try {
        const formData = new FormData();
        formData.append('target', data.nomorWa);
        formData.append('message', pesanWA);
        
        const response = await fetch("https://api.fonnte.com/send", {
            method: 'POST',
            headers: {
                'Authorization': activeToken
            },
            body: formData
        });

        const result = await response.json();
        if (result.status) {
            console.log("Notifikasi WhatsApp aman terkirim.");
        } else {
            console.error("Gagal mengirim:", result.reason);
        }
    } catch (error) {
        console.error("API Error:", error);
    }
}
