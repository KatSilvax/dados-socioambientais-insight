from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import os
import sys
sys.path.append('../scripts')
from analisar_dados import analisar_csv

app = Flask(__name__)
CORS(app)

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'Nenhum arquivo enviado'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'Nenhum arquivo selecionado'}), 400
    
    if file and file.filename.endswith('.csv'):
        try:
            # Ler arquivo diretamente da memória
            file_content = file.read().decode('utf-8')
            
            # Criar DataFrame diretamente do conteúdo
            from io import StringIO
            df = pd.read_csv(StringIO(file_content))
            
            # Analisar dados
            graficos = []
            for coluna in df.columns:
                if coluna != 'Carimbo de data/hora':
                    # Padronizar respostas
                    df_col = df[coluna].fillna('Não informado')
                    df_col = df_col.astype(str).str.strip()
                    
                    contagem = df_col.value_counts()
                    if len(contagem) > 0:
                        graficos.append({
                            'titulo': coluna,
                            'dados': contagem.to_dict()
                        })
            
            return jsonify({
                'success': True,
                'total_graficos': len(graficos),
                'graficos': graficos
            })
            
        except Exception as e:
            return jsonify({'error': f'Erro ao processar arquivo: {str(e)}'}), 500
    
    return jsonify({'error': 'Formato de arquivo inválido. Use apenas CSV.'}), 400

if __name__ == '__main__':
    app.run(debug=True)