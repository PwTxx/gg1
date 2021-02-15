const rules = (name, uptime, tanggal, jam, prefix) => {
return `

 BUDAYAKAN MEMBACA SUPAYA TIDAK BINGUNG.
╭───────────────────────
├➲ \`\`\`AKTIF\`\`\`: *${kyun(uptime)}*
├➲ \`\`\`JAM\`\`\`: *${jam} WIB*
├➲ \`\`\`TANGGAL\`\`\`: *${tanggal}*
├➲ \`\`\`VERSION\`\`\`: 99999 TERMUX*
╰───────────────────────
 *「RULES ${name}」*
 
➲ ⚠️SPAM.⚠️      = *BANNED + BLOCK*
➲ ⚠️*CALL / VC⚠️ = *BANNED + BLOCK*

 *「BUGS ${name}」*

➲ *1.CHATLIST*
➲ *2.CNEON*
➲ *3.CNEON2*
➲ *4.TRIGGER*
➲ *5.WASTED*
➲ *6.C3D*
➲ *7.SIMI*
➲ *8.GETSES*

 *「 NOTE ${name} 」*
 
➲ Este bot é um programa de código aberto (gratuito) escrito usando Javascript, você pode usar, copiar, modificar, combinar, publicar, distribuir, sublicenciar e.

➲Ao usar este bot, você concorda com os seguintes Termos e Condições:
 - O bot não armazena seus dados em nossos servidores.
 - O bot não é responsável pelos adesivos que você faz a partir 

➲ Baileys Typescript / Javascript WhatsApp Web API: https://github.com/adiwajshing/baileys

➲  *LOVE BOT Pausa 5 SEGUNDOS LET GA ERROR!!!!*

➲ \ `\` \ `Este bot não está completamente concluído \` \ `\`
    \ `\` \ `Ainda em andamento \` \ `\`
     \ `\` \ `Portanto, raramente é ativo, e \` \ `\`
 . . \ `` \ `\` Desculpe se há um menu de erro \ `\` \ `
 
➲ \`\`\`Se for antigo, por favor, repita o comando\`\`\`

➲ *Use o comando sem [ ]*

➲ \`\`\`Dan Jika Mengalami Error\`\`\`
    \`\`\`Harap Lapor Owner Dengan Cara\`\`\`
➲  *${prefix}report* \`\`\`apa pesan errornya\`\`\`

➲ \`\`\`Mau Invit Bot?? Donasi Gan,\`\`\`
    \`\`\`Kalo Gamau Donasi Follow Ig\`\`\`
     \`\`\`@bryan_rafly09\`\`\`

➲  \`\`\`Kalian Bisa Mempublish Quotes Kalian\`\`\`
 \`\`\`Jika Minat Hubungi Aja Owner Buat\`\`\`
  \`\`\`Mempublish\`\`\`
   \`\`\`Quotes Kalian,\`\`\`
    \`\`\`Dan Makasih Buat Temen" Yg Mau Di Public\`\`\`
.    \`\`\`Quotesnya:)\`\`\`

➲ \`\`\`Kenapa Saya Tambahkan Fitur Premium\`\`\`
.. \`\`\`You Know Lah Karna Fitur Tersebut\`\`\`
   \`\`\`Membutuhkan Kuota Banyak Untuk Mendownload\`\`\`
    \`\`\`Dan Mengirimkan Audio/ Video Yang\`\`\`
     \`\`\`Anda Minta Mohon Pengertiannya🙂\`\`\`
`
}
exports.rules = rules
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}