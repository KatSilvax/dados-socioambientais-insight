document.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('uploadForm');
    const fileInput = document.getElementById('csvFile');
    const dropZone = document.getElementById('dropZone');
    const fileInfo = document.getElementById('fileInfo');
    const analyzeBtn = document.getElementById('analyzeBtn');
    const loadingSection = document.getElementById('loadingSection');
    const errorMessage = document.getElementById('errorMessage');
    const resultsSection = document.getElementById('resultsSection');
    const resultsHeader = document.getElementById('resultsHeader');
    const chartsContainer = document.getElementById('chartsContainer');

    // Drag and Drop functionality
    dropZone.addEventListener('click', () => fileInput.click());
    
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    });
    
    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('dragover');
    });
    
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            fileInput.files = files;
            handleFileSelect();
        }
    });

    fileInput.addEventListener('change', handleFileSelect);

    function handleFileSelect() {
        const file = fileInput.files[0];
        if (file) {
            fileInfo.textContent = `📄 ${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
            analyzeBtn.disabled = false;
            errorMessage.style.display = 'none';
        }
    }

    uploadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const file = fileInput.files[0];
        if (!file) {
            showError('Por favor, selecione um arquivo CSV');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        // Show loading
        loadingSection.style.display = 'flex';
        analyzeBtn.style.display = 'none';
        errorMessage.style.display = 'none';

        // Send file for analysis
        fetch('http://localhost:5000/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            loadingSection.style.display = 'none';
            analyzeBtn.style.display = 'flex';
            
            if (data.success) {
                displayResults(data);
                generateCharts(data.graficos);
                scrollToResults();
            } else {
                showError(data.error);
            }
        })
        .catch(error => {
            loadingSection.style.display = 'none';
            analyzeBtn.style.display = 'flex';
            console.error('Erro:', error);
            showError(`Erro de conexão: ${error.message}`);
        });
    });

    function showError(message) {
        errorMessage.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${message}`;
        errorMessage.style.display = 'block';
    }

    function displayResults(data) {
        resultsHeader.innerHTML = `
            <div class="success-card">
                <h3><i class="fas fa-check-circle"></i> Análise Concluída com Sucesso!</h3>
                <p><strong>${data.total_graficos} gráficos</strong> foram gerados automaticamente</p>
                <p>Seus dados foram processados e estão prontos para visualização</p>
            </div>
        `;
        resultsSection.style.display = 'block';
    }

    function generateCharts(graficos) {
        chartsContainer.innerHTML = '';
        
        graficos.forEach((grafico, index) => {
            const chartCard = document.createElement('div');
            chartCard.className = 'chart-card';
            chartCard.innerHTML = `
                <h3>${grafico.titulo}</h3>
                <div class="chart-wrapper">
                    <canvas id="chart-${index}"></canvas>
                </div>
            `;
            chartsContainer.appendChild(chartCard);

            // Prepare data for Chart.js
            const labels = Object.keys(grafico.dados);
            const values = Object.values(grafico.dados);
            
            // Modern color palette
            const colors = [
                '#667eea', '#764ba2', '#f093fb', '#4ecdc4',
                '#ffe066', '#ff6b6b', '#a8e6cf', '#ffd93d',
                '#6c5ce7', '#fd79a8', '#00b894', '#e17055'
            ];
            
            // Create chart
            const ctx = document.getElementById(`chart-${index}`).getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Quantidade',
                        data: values,
                        backgroundColor: colors.slice(0, labels.length),
                        borderColor: colors.slice(0, labels.length),
                        borderWidth: 2,
                        borderRadius: 8
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: 'rgba(0,0,0,0.8)',
                            titleColor: '#fff',
                            bodyColor: '#fff',
                            cornerRadius: 8
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                stepSize: 1
                            }
                        },
                        x: {
                            ticks: {
                                maxRotation: 45,
                                minRotation: 0
                            }
                        }
                    }
                }
            });
        });
    }

    function scrollToResults() {
        setTimeout(() => {
            resultsSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }, 500);
    }

    // Smooth scrolling for better UX
    document.documentElement.style.scrollBehavior = 'smooth';
});