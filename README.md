# 🌱 Análise Socioambiental do Planalto da Bodoquena e da Região Sul de Mato Grosso do Sul

<div align="center">

<img src="assets/if.png" alt="Logo IFMS" width="150" style="margin: 10px;">
<img src="assets/itaipu-parquetec.png" alt="Logo Itaipu Parque Tecnológico" width="150" style="margin: 10px;">

**Projeto de Extensão IFMS em parceria com Itaipu Parque Tecnológico**

*Sistema de análise de dados socioambientais para municípios de Mato Grosso do Sul*

![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)
![Flask](https://img.shields.io/badge/Flask-2.0+-green.svg)
![Pandas](https://img.shields.io/badge/Pandas-1.3+-orange.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)
![Status](https://img.shields.io/badge/Status-Complete-brightgreen.svg)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação](#-instalação)
- [Como Usar](#-como-usar)
- [Funcionalidades](#-funcionalidades)
- [Dados Analisados](#-dados-analisados)
- [Resultados](#-resultados)
- [Contribuição](#-contribuição)
- [Licença](#-licença)
- [Contato](#-contato)

---

## 🎯 Sobre o Projeto

O **Sistema de Análise Socioambiental** é um projeto de extensão desenvolvido pelo **Instituto Federal de Mato Grosso do Sul (IFMS)** em parceria com o **Itaipu Parque Tecnológico**. O objetivo é analisar dados socioambientais coletados em municípios do Planalto da Bodoquena e região sul de Mato Grosso do Sul.

### 🌍 Contexto

O projeto foca na análise de indicadores de **saneamento básico** e **qualidade de vida** em três municípios estratégicos:
- **Jardim/MS** - 294 registros analisados
- **Naviraí/MS** - 304 registros analisados  
- **Ponta Porã/MS** - 187 registros analisados

### 🎯 Objetivos

- ✅ Padronizar e limpar dados socioambientais coletados
- ✅ Gerar visualizações automáticas de dados CSV
- ✅ Identificar padrões em indicadores socioambientais
- ✅ Fornecer insights para políticas públicas
- ✅ Criar ferramenta web para análise de dados

---

## 🚀 Tecnologias

### Backend
- **Python 3.8+** - Linguagem principal
- **Flask 2.0+** - Framework web para API
- **Pandas 1.3+** - Manipulação e análise de dados
- **Flask-CORS** - Habilitação de CORS

### Frontend
- **HTML5** - Estrutura da interface
- **CSS3** - Estilização responsiva
- **JavaScript ES6+** - Interatividade
- **Chart.js** - Gráficos interativos
- **Font Awesome** - Ícones

---

## 📁 Estrutura do Projeto

```
Projeto Itaipu/
├── 📂 backend/                 # API Flask
│   ├── backend.py             # Servidor principal
│   └── requirements.txt       # Dependências Python
├── 📂 dados/                  # Dados originais
│   ├── jardim.csv            # Dados Jardim/MS
│   ├── navirai.csv           # Dados Naviraí/MS
│   └── pontapora.csv         # Dados Ponta Porã/MS
├── 📂 scripts/                # Scripts e dados processados
│   ├── analisar_dados.py     # Script principal de análise
│   ├── jardim_limpo.csv      # Dados limpos Jardim/MS
│   ├── navirai_limpo.csv     # Dados limpos Naviraí/MS
│   ├── pontapora_limpo.csv   # Dados limpos Ponta Porã/MS
│   └── frontend/             # Interface Web
│       ├── index.html        # Página principal
│       ├── index.css         # Estilos CSS
│       ├── app.js            # JavaScript
│       └── exemplo-dados.csv # Dados de exemplo
├── 📂 documentacao/           # Documentação
│   └── img/                  # Imagens do projeto
├── INICIAR.md                # Guia de inicialização
└── README.md                 # Este arquivo
```

---

## ⚙️ Instalação

### Pré-requisitos
- Python 3.8 ou superior
- pip (gerenciador de pacotes Python)
- Navegador web moderno

### 1. Clone o repositório
```bash
git clone https://github.com/KatSilvax/projeto-itaipu.git
cd projeto-itaipu
```

### 2. Instale as dependências
```bash
cd backend
pip install flask flask-cors pandas
```

---

## 🔧 Como Usar

### 1. Iniciar Backend
```bash
cd backend
python backend.py
```
**Resultado**: API rodando em `http://localhost:5000`

### 2. Acessar Frontend
- Abra `scripts/frontend/index.html` no navegador
- Interface para upload e análise de CSV

### 3. Analisar Dados
1. Selecione um arquivo CSV
2. Clique em "Analisar Dados"
3. Visualize os gráficos gerados automaticamente

---

## ✨ Funcionalidades

### 🧹 Processamento Automático
- **Padronização** de respostas categóricas
- **Limpeza** de dados em tempo real
- **Análise** automática de todas as colunas

### 📊 Visualização Dinâmica
- **Gráficos automáticos** para cada coluna do CSV
- **Interface responsiva** e moderna
- **Cores dinâmicas** para melhor visualização

### 🌐 Interface Web
- **Upload** de arquivos CSV via drag-and-drop
- **Processamento** em tempo real
- **Visualização** interativa com Chart.js
- **Design** profissional e responsivo

---

## 📋 Dados Analisados

### Municípios Analisados

| Município | Registros | Colunas | Status |
|-----------|-----------|---------|---------|
| **Jardim/MS** | 294 | 93 | ✅ Completo |
| **Naviraí/MS** | 304 | 30 | ✅ Completo |
| **Ponta Porã/MS** | 187 | 29 | ✅ Completo |

> 🔒 **Privacidade**: Os dados originais são protegidos e não estão disponíveis publicamente.

### Indicadores Analisados
- **Dados familiares** (renda, escolaridade, ocupação)
- **Características dos moradores** (idade, profissão, religião)
- **Informações do domicílio** (tipo, material, infraestrutura)
- **Saneamento básico** (água, esgoto, instalações)
- **Condições ambientais** (problemas, fauna, flora)
- **Sensibilização ambiental** (importância da preservação)

---

## 📊 Resultados

### Impacto do Projeto
- 🎯 **785 registros** analisados no total
- 📊 **Sistema web** funcional e responsivo
- 🔧 **Análise automática** de qualquer CSV
- 📈 **Visualizações dinâmicas** em tempo real

### Tecnologia Desenvolvida
- **API REST** para processamento de dados
- **Interface web moderna** com design profissional
- **Sistema de análise automática** de dados CSV
- **Gráficos interativos** com Chart.js

---

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. **Commit** suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. **Push** para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um **Pull Request**

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📞 Contato

### Instituições Parceiras

**Instituto Federal de Mato Grosso do Sul (IFMS)**
- 🌐 Website: [ifms.edu.br](https://www.ifms.edu.br)

**Itaipu Parque Tecnológico**
- 🌐 Website: [pti.org.br](https://www.pti.org.br)

### Equipe de Desenvolvimento

<div align="center">

<img src="assets/kat.jpg" alt="Katcilane Silva de Souza" width="150" style="border-radius: 50%; margin-bottom: 20px;">

**Katcilane Silva de Souza**

*Desenvolvedora Principal do Projeto*

📧 **Email**: [katysilva_99@hotmail.com](mailto:katysilva_99@hotmail.com)

💼 **LinkedIn**: [Katcilane Silva de Souza](https://www.linkedin.com/in/katcilane-silva-de-souza-2018a2127/)

🐙 **GitHub**: [KatSilvax](https://github.com/KatSilvax)




<img src="assets/tha.jpg" alt="Katcilane Silva de Souza" width="150" style="border-radius: 50%; margin-bottom: 20px;">

**Thalita Ávalo**

*Desenvolvedora parcial frontend*

📧 **Email**: [thalita.pereira2@estudante.ifms.edu.br](mailto:thalita.pereira2@estudante.ifms.edu.br)

💼 **LinkedIn**: [Thalita Ávalo](https://www.linkedin.com/in/thalita-%C3%A1valo270700000000000002741272/)

🐙 **GitHub**: [Thalita Ávalo]()
</div>

---

<div align="center">

### 🌱 Desenvolvido com 💚 para a sustentabilidade socioambiental

**Projeto de Extensão IFMS & Itaipu Parque Tecnológico**

*Análise Socioambiental do Planalto da Bodoquena e da Região Sul de Mato Grosso do Sul*

⭐ **Se este projeto foi útil, deixe uma estrela!** ⭐

</div>