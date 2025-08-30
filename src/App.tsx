import { useState } from 'react'
import CertificateForm from './components/CertificateForm'
import CertificatePreview from './components/CertificatePreview'
import './App.css'

function App() {
  const [certificateData, setCertificateData] = useState({
    recipientName: '',
    certificationName: '',
    templateId: 'template1',
    date: new Date().toLocaleDateString('ja-JP')
  })

  const handleFormChange = (data: typeof certificateData) => {
    setCertificateData(data)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎮 Certifun - 認定証作成ツール</h1>
        <p>レトロからモダンまで、様々なデザインの認定証をオンラインで作成・PDFダウンロード</p>
      </header>
      
      <main className="app-main">
        <div className="app-container">
          <div className="form-section">
            <CertificateForm 
              data={certificateData}
              onChange={handleFormChange}
            />
          </div>
          
          <div className="preview-section">
            <CertificatePreview data={certificateData} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
