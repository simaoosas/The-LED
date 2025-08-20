// Aguarda o carregamento completo do conteúdo da página antes de executar o script.
document.addEventListener('DOMContentLoaded', () => {

    // --- PALETA DE CORES PADRONIZADA ---
    const paletaCores = {
        principal: 'rgba(139, 92, 246, 0.85)',
        secundaria: 'rgba(20, 184, 166, 0.85)',
        terciaria: 'rgba(245, 158, 11, 0.85)',
        quaternaria: 'rgba(239, 68, 68, 0.85)'
    };
    const paletaBordas = {
        principal: 'rgba(139, 92, 246, 1)',
        secundaria: 'rgba(20, 184, 166, 1)',
        terciaria: 'rgba(245, 158, 11, 1)',
        quaternaria: 'rgba(239, 68, 68, 1)'
    };


    // --- DADOS PARA OS GRÁFICOS ---
    const dadosNucs = {
        labels: ['Reparados', 'Sem reparo'],
        datasets: [{
            label: 'Status dos NUCs', data: [168, 29],
            backgroundColor: [paletaCores.secundaria, paletaCores.quaternaria],
            borderColor: [paletaBordas.secundaria, paletaBordas.quaternaria],
            borderWidth: 1, hoverOffset: 4
        }]
    };

    const dadosTotems = {
        labels: ['Reparados', 'Sem reparo'],
        datasets: [{
            label: 'Status dos Totens', data: [11, 2],
            backgroundColor: [paletaCores.secundaria, paletaCores.quaternaria],
            borderColor: [paletaBordas.secundaria, paletaBordas.quaternaria],
            borderWidth: 1, hoverOffset: 4
        }]
    };

    const dadosTBs = {
        labels: ['Reparadas', 'Sem reparo'],
        datasets: [{
            label: 'Status das TBs', data: [51, 21],
            backgroundColor: [paletaCores.secundaria, paletaCores.quaternaria],
            borderColor: [paletaBordas.secundaria, paletaBordas.quaternaria],
            borderWidth: 1, hoverOffset: 4
        }]
    };
    
    const dadosTBsConfiguradas = {
        labels: ['Jul', 'Ago', 'Set', 'Out', 'Nov'],
        datasets: [{
            label: 'TBs Config. por Mês',
            data: [15, 7, 0, 0, 0],
            backgroundColor: paletaCores.secundaria,
            borderColor: paletaBordas.secundaria,
            borderWidth: 1
        }]
    };


    // --- DADOS DOS CONTADORES ---
    const dadosContadores = {
        nucs: { semana: 40, mes: 100 },
        totems: { semana: 3, mes: 3 },
        suporte: { semana: 8, mes: 12 }
    };

    // --- CONFIGURAÇÕES DOS GRÁFICOS ---
    const configGraficoRosca = (dados) => ({
        type: 'doughnut', data: dados,
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: {
                datalabels: {
                    color: '#FFFFFF', textAlign: 'center',
                    font: { weight: 'bold', size: 16, family: 'Inter, sans-serif' },
                    formatter: (value) => value
                },
                legend: {
                    position: 'bottom',
                    labels: { color: '#E5E7EB', font: { size: 12, family: 'Inter, sans-serif' }, padding: 15 }
                },
                title: {
                    display: true, text: dados.datasets[0].label, color: '#FFFFFF',
                    font: { size: 16, weight: 'bold', family: 'Inter, sans-serif' },
                    padding: { bottom: 15 }
                }
            }
        }
    });

    const configGraficoBarras = (dados) => ({
        type: 'bar', data: dados,
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                title: {
                    display: true, text: dados.datasets[0].label, color: '#FFFFFF',
                    font: { size: 14, weight: 'bold', family: 'Inter, sans-serif' },
                    padding: { bottom: 10 }
                }
            },
            scales: {
                y: { beginAtZero: true, ticks: { color: '#E5E7EB' }, grid: { color: 'rgba(255, 255, 255, 0.1)' } },
                x: { ticks: { color: '#E5E7EB' }, grid: { color: 'rgba(255, 255, 255, 0.1)' } }
            }
        }
    });

    // --- ATUALIZAÇÃO DOS CONTADORES ---
    function atualizarContadores() {
        document.getElementById('nuc-reparos-semana').textContent = dadosContadores.nucs.semana;
        document.getElementById('nuc-reparos-mes').textContent = dadosContadores.nucs.mes;
        document.getElementById('totem-reparos-semana').textContent = dadosContadores.totems.semana;
        document.getElementById('totem-reparos-mes').textContent = dadosContadores.totems.mes;
        document.getElementById('suporte-semana').textContent = dadosContadores.suporte.semana;
        document.getElementById('suporte-mes').textContent = dadosContadores.suporte.mes;
    }

    // --- RENDERIZAÇÃO ---
    new Chart(document.getElementById('graficoNucs'), configGraficoRosca(dadosNucs));
    new Chart(document.getElementById('graficoTotems'), configGraficoRosca(dadosTotems));
    new Chart(document.getElementById('graficoTBs'), configGraficoRosca(dadosTBs));
    new Chart(document.getElementById('graficoTBsConfiguradas'), configGraficoBarras(dadosTBsConfiguradas));
    
    atualizarContadores();

    // --- LÓGICA DOS OBJETIVOS CONCLUÍDOS ---
    const listaObjetivos = document.getElementById('lista-objetivos');
    const addObjetivoBtn = document.getElementById('add-objetivo-btn');

    function saveObjectives() {
        const objectivesText = Array.from(listaObjetivos.querySelectorAll('li .objective-text')).map(span => span.textContent);
        localStorage.setItem('dashboardObjectives', JSON.stringify(objectivesText));
    }

    function createObjectiveLI(text) {
        const li = document.createElement('li');
        li.className = 'flex items-center group p-2 rounded-md transition-colors duration-200';
        li.innerHTML = `
            <span class="flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-teal-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg></span>
            <span class="objective-text flex-grow cursor-pointer" contenteditable="true">${text}</span>
            <button class="delete-objetivo-btn ml-4 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity font-bold" title="Remover objetivo">×</button>
        `;

        li.querySelector('.objective-text').addEventListener('blur', saveObjectives);
        li.querySelector('.objective-text').addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                e.target.blur();
            }
        });
        li.querySelector('.delete-objetivo-btn').addEventListener('click', () => {
            li.remove();
            saveObjectives();
        });
        return li;
    }

    function loadObjectives() {
        const savedObjectives = JSON.parse(localStorage.getItem('dashboardObjectives')) || [];
        if (savedObjectives.length > 0) {
            savedObjectives.forEach(text => listaObjetivos.appendChild(createObjectiveLI(text)));
        } else {
            listaObjetivos.appendChild(createObjectiveLI("Levantamento dos principais defeitos das TBs"));
            saveObjectives();
        }
    }

    addObjetivoBtn.addEventListener('click', () => {
        const newObjective = createObjectiveLI('Novo objetivo...');
        listaObjetivos.appendChild(newObjective);
        const textSpan = newObjective.querySelector('.objective-text');
        textSpan.focus();
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(textSpan);
        selection.removeAllRanges();
        selection.addRange(range);
        saveObjectives();
    });

    loadObjectives();
});
