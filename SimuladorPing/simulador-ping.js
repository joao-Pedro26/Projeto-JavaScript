const delay = ms => new Promise(res => setTimeout(res, ms));

    
    async function pingHost() {
      const host = document.getElementById('host').value.trim();
      const terminal = document.getElementById('terminal');
      terminal.textContent = '';

      if (!host) {
        terminal.textContent = "Informe um host válido!";
        return;
      }

      terminal.textContent += `Disparando ${host} com 32 bytes de dados:\n\n`;

      const tempos = [];
      for (let i = 1; i <= 4; i++) {
        const tempo = Math.floor(Math.random() * 90) + 10; // 10–100 ms
        tempos.push(tempo);
        terminal.textContent += `Resposta de ${host}: bytes=32 tempo=${tempo}ms TTL=114\n`;
        await delay(1000); // 1 segundo entre pings
      }

      const min = Math.min(...tempos);
      const max = Math.max(...tempos);
      const media = Math.round(tempos.reduce((a,b) => a+b, 0) / tempos.length);

      terminal.textContent += `\nEstatísticas do Ping para ${host}:\n`;
      terminal.textContent += `  Pacotes: Enviados = 4, Recebidos = 4, Perdidos = 0 (0% de perda)\n`;
      terminal.textContent += `Aproximar um número redondo de vezes em milissegundos:\n`;
      terminal.textContent += `  Mínimo = ${min}ms, Máximo = ${max}ms, Média = ${media}ms\n`;
    }