import pandas as pd
import json

def analisar_csv(arquivo_csv):
    """Analisa arquivo CSV e retorna dados para graficos"""
    df = pd.read_csv(arquivo_csv)
    
    # Padronizar respostas
    def padronizar_resposta(valor):
        if pd.isna(valor):
            return "Não informado"
        valor_str = str(valor).strip().lower()
        if valor_str in ['sim', 'yes', 's']:
            return "Sim"
        elif valor_str in ['não', 'nao', 'no', 'n']:
            return "Não"
        return str(valor).strip()
    
    # Aplicar padronização em todas as colunas
    for col in df.columns:
        df[col] = df[col].apply(padronizar_resposta)
    
    # Gerar dados para graficos
    graficos = []
    for coluna in df.columns:
        if coluna != 'Carimbo de data/hora':
            contagem = df[coluna].value_counts()
            if len(contagem) > 0:
                graficos.append({
                    'titulo': coluna,
                    'dados': contagem.to_dict()
                })
    
    return graficos

if __name__ == "__main__":
    # Testar com jardim
    resultado = analisar_csv('jardim_limpo.csv')
    print(f"Gerados {len(resultado)} graficos para jardim_limpo.csv")