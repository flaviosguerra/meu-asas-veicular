import { useState } from 'react'

const API_URL = 'http://localhost:3001'

function App() {
  const [placa, setPlaca] = useState('')
  const [resultado, setResultado] = useState(null)
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState(null)

  const handleConsultar = async (e) => {
    e.preventDefault()
    setResultado(null)
    setErro(null)
    setCarregando(true)

    try {
      const response = await fetch(`${API_URL}/consultar-placa/${placa.trim().toUpperCase()}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      const data = await response.json()

      if (data.sucesso) {
        setResultado(data.dados)
      } else {
        setErro(data.erro || 'Erro na consulta')
      }
    } catch (err) {
      setErro('Não foi possível conectar ao servidor. Verifique se o backend está rodando.')
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.titulo}>Meu Asas Veicular</h1>
        <p style={styles.subtitulo}>Consulta de Placas</p>

        <form onSubmit={handleConsultar} style={styles.form}>
          <label style={styles.label}>Placa</label>
          <input
            type="text"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
            placeholder="Ex: ABC1234"
            maxLength={7}
            style={styles.input}
            disabled={carregando}
          />
          <button type="submit" style={styles.botao} disabled={carregando}>
            {carregando ? 'Consultando...' : 'Consultar'}
          </button>
        </form>

        {erro && (
          <div style={styles.erro}>{erro}</div>
        )}

        {resultado && (
          <div style={styles.resultado}>
            <h3 style={styles.resultadoTitulo}>Resultado</h3>
            <p><strong>Marca:</strong> {resultado.Marca}</p>
            <p><strong>Modelo:</strong> {resultado.Modelo}</p>
          </div>
        )}
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    padding: '40px',
    width: '100%',
    maxWidth: '420px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  titulo: {
    fontSize: '1.75rem',
    marginBottom: '4px',
    fontWeight: 600,
  },
  subtitulo: {
    color: 'rgba(255, 255, 255, 0.6)',
    marginBottom: '32px',
    fontSize: '0.95rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  label: {
    fontSize: '0.9rem',
    fontWeight: 500,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  input: {
    padding: '14px 16px',
    fontSize: '1rem',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    background: 'rgba(0, 0, 0, 0.2)',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  botao: {
    padding: '14px 24px',
    fontSize: '1rem',
    fontWeight: 600,
    borderRadius: '10px',
    border: 'none',
    background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
    color: '#fff',
    cursor: 'pointer',
    transition: 'opacity 0.2s',
  },
  erro: {
    marginTop: '24px',
    padding: '14px',
    background: 'rgba(239, 68, 68, 0.2)',
    border: '1px solid rgba(239, 68, 68, 0.5)',
    borderRadius: '10px',
    color: '#fca5a5',
    fontSize: '0.9rem',
  },
  resultado: {
    marginTop: '24px',
    padding: '20px',
    background: 'rgba(34, 197, 94, 0.15)',
    border: '1px solid rgba(34, 197, 94, 0.4)',
    borderRadius: '10px',
    color: '#86efac',
  },
  resultadoTitulo: {
    marginBottom: '12px',
    fontSize: '1rem',
  },
}

export default App
