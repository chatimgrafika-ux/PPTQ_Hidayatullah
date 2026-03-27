const _SECURE_T = "FyMZUQ5eNwBLCCUeNwwqCyE2WCk"; 
const _SECURE_K = "PondokPesantrenHidayatullah2024";
const _ALLOWED_DOMAIN = "chatimgrafika-ux.github.io"; 
const _BENDAHARA_WA = '081247992545';

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
 * Helper: Kirim Request ke Fonnte
 */
async function postToFonnte(target, message, token) {
    try {
        const formData = new FormData();
        formData.append('target', target);
        formData.append('message', message);
        
        const response = await fetch("https://api.fonnte.com/send", {
            method: 'POST',
            headers: {
                'Authorization': token
            },
            body: formData
        });

        const result = await response.json();
        return { success: result.status, target: target, reason: result.reason };
    } catch (error) {
        return { success: false, target: target, error: error.message };
    }
}

/**
 * Fungsi Utama Kirim Notifikasi (Wali Santri & Bendahara)
 */
async function sendFonnteNotification(data) {
    if (!isAuthorized()) {
        console.error("Akses Ditolak: Domain tidak diizinkan.");
        return;
    }

    const activeToken = _decodeToken(_SECURE_T, _SECURE_K);
    if (!activeToken) return;

    const formattedNominal = `Rp ${parseInt(data.nominal).toLocaleString('id-ID')}`;
    
    // PERBAIKAN DI SINI:
    // Menerima data.bukti (dari server balasan GAS) atau data.urlBukti. 
    // Fallback terakhir menunjukkan proses base64.
    const linkBukti = data.bukti || data.urlBukti || (data.fileBase64 ? "[File sedang diproses]" : "-");

    const pesanWali = `*NOTIFIKASI KONFIRMASI PEMBAYARAN*
Pondok Pesantren

Assalamu'alaikum Warahmatullahi Wabarakatuh,
Terima kasih, data konfirmasi pembayaran abi/ummi telah kami terima:

👤 *Data Santri*
Nama: Ananda ${data.namaLengkap}
Kelas: ${data.kelas}

💳 *Rincian Pembayaran*
Jenis: ${data.jenisPembayaran}
${data.jenisPembayaran === 'SPP' ? `Bulan: ${data.bulan}\nTahun: ${data.tahun}` : `Tahun: ${data.tahun}`}
Nominal: ${formattedNominal}
Penerima: ${data.namaUstadz}

🖼️ *Bukti Pembayaran:*
${linkBukti}

Mohon menunggu proses verifikasi oleh tim administrasi. Jazakumullah Khairan.

_Pesan otomatis via Website Konfirmasi_`;

    const pesanBendahara = `*LAPORAN KONFIRMASI PEMBAYARAN (ADMIN)*

Yth. Bendahara Pondok Pesantren,
Informasi terbaru mengenai konfirmasi pembayaran:

*DETAIL PEMBAYARAN:*
--------------------------------------------------
Nama Santri     : ${data.namaLengkap}
Kelas           : ${data.kelas}
Jenis           : ${data.jenisPembayaran}
Periode         : ${data.jenisPembayaran === 'SPP' ? data.bulan + ' ' + data.tahun : data.tahun}
Nominal         : ${formattedNominal}
Diterima Oleh   : ${data.namaUstadz}
Link Bukti      : ${linkBukti}
--------------------------------------------------

_Sistem Notifikasi Otomatis_`;

    const targets = [
        { phone: data.nomorWa, msg: pesanWali, label: 'Wali Santri' },
        { phone: _BENDAHARA_WA, msg: pesanBendahara, label: 'Bendahara' }
    ];

    for (const item of targets) {
        if (!item.phone) continue;
        const result = await postToFonnte(item.phone, item.msg, activeToken);
        if (result.success) {
            console.log(`Notifikasi untuk ${item.label} berhasil terkirim.`);
        } else {
            console.error(`Gagal mengirim ke ${item.label}:`, result.reason);
        }
    }
}
