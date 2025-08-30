import React from 'react'
import './CertificateForm.css'

interface CertificateData {
  recipientName: string
  certificationName: string
  templateId: string
  date: string
}

interface CertificateFormProps {
  data: CertificateData
  onChange: (data: CertificateData) => void
}

const CertificateForm: React.FC<CertificateFormProps> = ({ data, onChange }) => {
  const handleInputChange = (field: keyof CertificateData, value: string) => {
    onChange({ ...data, [field]: value })
  }

  const templates = [
    { id: 'template1', name: 'エレガント（グラデーション）' },
    { id: 'template2', name: 'クラシック（ホワイト）' },
    { id: 'template3', name: 'モダン（ブルー）' },
    { id: 'template4', name: 'アクア（グリーン・ブルー）' },
    { id: 'template5', name: 'ロイヤル（パープル・ブルー）' },
    { id: 'template6', name: 'ウォーム（オレンジ）' },
    { id: 'template7', name: 'ビジネス（ホワイト・ブルー）' },
    { id: 'template8', name: 'スター（パープル・金）' },
    { id: 'template9', name: 'プレミアム（ダーク）' },
    { id: 'template10', name: 'フレッシュ（グリーン・イエロー）' },
    { id: 'template11', name: '和風（桜・伝統）' },
    { id: 'template12', name: '和風（夜空・竹）' },
    { id: 'template13', name: '和風（四季・折り紙）' }
  ]

  return (
    <div className="certificate-form">
      <h2>認定証作成フォーム</h2>
      
      <div className="form-group">
        <label htmlFor="recipientName">認定者名</label>
        <input
          type="text"
          id="recipientName"
          value={data.recipientName}
          onChange={(e) => handleInputChange('recipientName', e.target.value)}
          placeholder="認定を受ける方の名前を入力してください"
        />
      </div>

      <div className="form-group">
        <label htmlFor="certificationName">資格名</label>
        <input
          type="text"
          id="certificationName"
          value={data.certificationName}
          onChange={(e) => handleInputChange('certificationName', e.target.value)}
          placeholder="資格・認定の名称を入力してください"
        />
      </div>

      <div className="form-group">
        <label htmlFor="templateSelect">テンプレート選択</label>
        <select
          id="templateSelect"
          value={data.templateId}
          onChange={(e) => handleInputChange('templateId', e.target.value)}
        >
          {templates.map(template => (
            <option key={template.id} value={template.id}>
              {template.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="date">日付</label>
        <input
          type="date"
          id="date"
          value={new Date().toISOString().split('T')[0]}
          onChange={(e) => {
            const selectedDate = new Date(e.target.value)
            handleInputChange('date', selectedDate.toLocaleDateString('ja-JP'))
          }}
        />
        <small>現在の日付: {data.date}</small>
      </div>

      <div className="form-info">
        <h3>📋 作成手順</h3>
        <ol>
          <li>認定者名を入力してください</li>
          <li>お好みのテンプレートを選択してください</li>
          <li>必要に応じて日付を変更してください</li>
          <li>プレビューを確認してPDFをダウンロードしてください</li>
        </ol>
      </div>
    </div>
  )
}

export default CertificateForm