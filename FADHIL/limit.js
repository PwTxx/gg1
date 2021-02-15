const limitend = (pushname2) => {
        return`*maaf ${pushname2} limit hari ini habis*\n*limit di reset setiap jam 12:00 WIB TENGAH MALAM*`
}

const limitcount = (limitCounts) => {
        return`
*「 LIMIT COUNT 」*
o resto do seu limite : ${limitCounts}

NOTE : Se terminar, você pode usá-lo novamente amanhã`
}
exports.limitend = limitend
exports.limitcount = limitcount