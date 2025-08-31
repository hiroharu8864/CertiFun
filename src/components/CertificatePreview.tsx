import React, { useRef } from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import './CertificatePreview.css'

interface CertificateData {
  recipientName: string
  certificationName: string
  templateId: string
  date: string
}

interface CertificatePreviewProps {
  data: CertificateData
}

const CertificatePreview: React.FC<CertificatePreviewProps> = ({ data }) => {
  const certificateRef = useRef<HTMLDivElement>(null)

  const downloadPDF = async () => {
    if (!certificateRef.current || !data.recipientName.trim()) {
      alert('認定者名を入力してください')
      return
    }

    try {
      const element = certificateRef.current
      
      // 高解像度でキャプチャ（300 DPI相当）
      const scale = 3
      
      const canvas = await html2canvas(element, {
        scale: scale,
        useCORS: true,
        backgroundColor: null,
        logging: false,
        allowTaint: true,
        x: 0,
        y: 0,
        scrollX: 0,
        scrollY: 0
      })

      const imgData = canvas.toDataURL('image/png')
      
      // A4サイズのPDFを作成（余白なし）
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true
      })

      const pdfWidth = pdf.internal.pageSize.getWidth()   // 210mm
      const pdfHeight = pdf.internal.pageSize.getHeight() // 297mm
      
      // 画像をPDF全体に完全にフィット（アスペクト比無視で強制フィット）
      pdf.addImage(
        imgData, 
        'PNG', 
        0,          // x: 0 (左端)
        0,          // y: 0 (上端) 
        pdfWidth,   // width: 210mm (PDF全幅)
        pdfHeight,  // height: 297mm (PDF全高)
        undefined,  // alias
        'FAST'      // compression
      )
      
      pdf.save(`認定証_${data.recipientName}_${new Date().toISOString().split('T')[0]}.pdf`)
    } catch (error) {
      console.error('PDF生成エラー:', error)
      alert('PDF生成中にエラーが発生しました')
    }
  }

  const renderTemplate = () => {
    const templateClass = `certificate-${data.templateId}`
    
    switch (data.templateId) {
      case 'template1':
        return (
          <div className={`${templateClass} certificate-template-1`}>
            <div className="title">CERTIFICATE</div>
            <div className="subtitle">of Achievement</div>
            <div className="certification-name">{data.certificationName || 'サンプル資格認定'}</div>
            <div className="recipient-name">{data.recipientName || 'サンプル太郎'}</div>
            <div className="achievement">
              この度、優秀な成績により<br />
              上記認定試験に合格されたことを証します
            </div>
            <div className="date">{data.date}</div>
            <div className="signature-section">
              <div className="signature">
                <div className="signature-line"></div>
                <div className="signature-label">認定機関</div>
              </div>
            </div>
          </div>
        )
      
      case 'template2':
        return (
          <div className={`${templateClass} certificate-template-2`}>
            <div className="ornament"></div>
            <div className="title">認定証</div>
            <div className="subtitle">Certificate of Completion</div>
            <div className="certification-name">{data.certificationName || 'サンプル資格認定'}</div>
            <div className="recipient-name">{data.recipientName || 'サンプル太郎'}</div>
            <div className="achievement">
              上記の方は、所定の課程を修了し、<br />
              優秀な成績を収められたことを認定いたします。
            </div>
            <div className="date">{data.date}</div>
            <div className="seal">公式</div>
            <div className="signature-section">
              <div className="signature">
                <div className="signature-line"></div>
                <div className="signature-label">認定責任者</div>
              </div>
            </div>
          </div>
        )
      
      case 'template3':
        return (
          <div className={`${templateClass} certificate-template-3`}>
            <div className="corner-ornament top-left"></div>
            <div className="corner-ornament top-right"></div>
            <div className="corner-ornament bottom-left"></div>
            <div className="corner-ornament bottom-right"></div>
            <div className="header-decoration"></div>
            <div className="title">CERTIFICATE</div>
            <div className="subtitle">of Excellence</div>
            <div className="certification-name">{data.certificationName || 'サンプル資格認定'}</div>
            <div className="presented-to">Presented to</div>
            <div className="recipient-name">{data.recipientName || 'サンプル太郎'}</div>
            <div className="achievement">
              卓越した能力と継続的な努力により<br />
              上記認定基準を満たしたことを証明します
            </div>
            <div className="date">{data.date}</div>
            <div className="footer-decoration"></div>
            <div className="signature-section">
              <div className="signature">
                <div className="signature-line"></div>
                <div className="signature-label">DIRECTOR</div>
              </div>
            </div>
          </div>
        )
      
      case 'template4':
        return (
          <div className={`${templateClass} certificate-template-4`}>
            <div className="title">CERTIFICATE</div>
            <div className="subtitle">of Professional Achievement</div>
            <div className="certification-name">{data.certificationName || 'サンプル資格認定'}</div>
            <div className="recipient-name">{data.recipientName || 'サンプル太郎'}</div>
            <div className="achievement">
              専門知識と技能の優秀な習得により<br />
              上記認定を授与いたします
            </div>
            <div className="date">{data.date}</div>
            <div className="signature-section">
              <div className="signature">
                <div className="signature-line"></div>
                <div className="signature-label">認定機関</div>
              </div>
            </div>
          </div>
        )

      case 'template5':
        return (
          <div className={`${templateClass} certificate-template-5`}>
            <div className="ornamental-border"></div>
            <div className="title">CERTIFICATE</div>
            <div className="subtitle">of Excellence</div>
            <div className="certification-name">{data.certificationName || 'サンプル資格認定'}</div>
            <div className="recipient-name">{data.recipientName || 'サンプル太郎'}</div>
            <div className="achievement">
              継続的な学習と優れた成果により<br />
              この栄誉ある認定を授与します
            </div>
            <div className="date">{data.date}</div>
            <div className="signature-section">
              <div className="signature">
                <div className="signature-line"></div>
                <div className="signature-label">認定責任者</div>
              </div>
            </div>
          </div>
        )

      case 'template6':
        return (
          <div className={`${templateClass} certificate-template-6`}>
            <div className="decorative-element"></div>
            <div className="title">認定証</div>
            <div className="subtitle">Certificate of Achievement</div>
            <div className="certification-name">{data.certificationName || 'サンプル資格認定'}</div>
            <div className="recipient-name">{data.recipientName || 'サンプル太郎'}</div>
            <div className="achievement">
              卓越した能力と献身的な努力により<br />
              この認定を取得されました
            </div>
            <div className="date">{data.date}</div>
            <div className="signature-section">
              <div className="signature">
                <div className="signature-line"></div>
                <div className="signature-label">認定機関</div>
              </div>
            </div>
          </div>
        )

      case 'template7':
        return (
          <div className={`${templateClass} certificate-template-7`}>
            <div className="header-ribbon">PROFESSIONAL</div>
            <div className="title">CERTIFICATE</div>
            <div className="subtitle">of Completion</div>
            <div className="certification-name">{data.certificationName || 'サンプル資格認定'}</div>
            <div className="recipient-name">{data.recipientName || 'サンプル太郎'}</div>
            <div className="achievement">
              規定の要件を満たし、所定の水準に達したことを<br />
              ここに認定いたします
            </div>
            <div className="date">{data.date}</div>
            <div className="footer-decoration"></div>
            <div className="signature-section">
              <div className="signature">
                <div className="signature-line"></div>
                <div className="signature-label">Manager</div>
              </div>
              <div className="signature">
                <div className="signature-line"></div>
                <div className="signature-label">Director</div>
              </div>
            </div>
          </div>
        )

      case 'template8':
        return (
          <div className={`${templateClass} certificate-template-8`}>
            <div className="constellation"></div>
            <div className="title">CERTIFICATE</div>
            <div className="subtitle">of Outstanding Achievement</div>
            <div className="certification-name">{data.certificationName || 'サンプル資格認定'}</div>
            <div className="recipient-name">{data.recipientName || 'サンプル太郎'}</div>
            <div className="achievement">
              傑出した成果と専門性の証として<br />
              この特別な認定を授与します
            </div>
            <div className="date">{data.date}</div>
            <div className="signature-section">
              <div className="signature">
                <div className="signature-line"></div>
                <div className="signature-label">認定機関</div>
              </div>
            </div>
          </div>
        )

      case 'template9':
        return (
          <div className={`${templateClass} certificate-template-9`}>
            <div className="medallion"></div>
            <div className="title">CERTIFICATE</div>
            <div className="subtitle">of Professional Excellence</div>
            <div className="certification-name">{data.certificationName || 'サンプル資格認定'}</div>
            <div className="recipient-name">{data.recipientName || 'サンプル太郎'}</div>
            <div className="achievement">
              専門分野における優秀な成績と<br />
              高度な技能習得を認定いたします
            </div>
            <div className="date">{data.date}</div>
            <div className="signature-section">
              <div className="signature">
                <div className="signature-line"></div>
                <div className="signature-label">認定責任者</div>
              </div>
            </div>
          </div>
        )

      case 'template10':
        return (
          <div className={`${templateClass} certificate-template-10`}>
            <div className="geometric-border"></div>
            <div className="title">CERTIFICATE</div>
            <div className="subtitle">of Recognition</div>
            <div className="certification-name">{data.certificationName || 'サンプル資格認定'}</div>
            <div className="recipient-name">{data.recipientName || 'サンプル太郎'}</div>
            <div className="achievement">
              学習への取り組みと達成された成果を讃え<br />
              この認定証を贈呈いたします
            </div>
            <div className="date">{data.date}</div>
            <div className="badge"></div>
            <div className="signature-section">
              <div className="signature">
                <div className="signature-line"></div>
                <div className="signature-label">認定者</div>
              </div>
              <div className="signature">
                <div className="signature-line"></div>
                <div className="signature-label">機関長</div>
              </div>
            </div>
          </div>
        )

      case 'template11':
        return (
          <div className={`${templateClass} certificate-template-11`}>
            <div className="sakura-decoration">🌸</div>
            <div className="title">認定証</div>
            <div className="subtitle">Certificate of Honor</div>
            <div className="certification-name">{data.certificationName || 'サンプル資格認定'}</div>
            <div className="recipient-name">{data.recipientName || 'サンプル太郎'}</div>
            <div className="achievement">
              伝統的な技能と心得を身につけ<br />
              優れた成果を収められたことを証明します
            </div>
            <div className="date">{data.date}</div>
            <div className="traditional-seal">公印</div>
            <div className="signature-section">
              <div className="signature">
                <div className="signature-line"></div>
                <div className="signature-label">認定機関</div>
              </div>
            </div>
          </div>
        )

      case 'template12':
        return (
          <div className={`${templateClass} certificate-template-12`}>
            <div className="bamboo-left"></div>
            <div className="bamboo-right"></div>
            <div className="moon-decoration"></div>
            <div className="title">認定証</div>
            <div className="subtitle">Certificate of Mastery</div>
            <div className="certification-name">{data.certificationName || 'サンプル資格認定'}</div>
            <div className="recipient-name">{data.recipientName || 'サンプル太郎'}</div>
            <div className="achievement">
              月明かりの下、竹林の静寂の中で<br />
              深い学びと修練を積まれたことを認定いたします
            </div>
            <div className="date">{data.date}</div>
            <div className="hanko-seal">印</div>
            <div className="signature-section">
              <div className="signature">
                <div className="signature-line"></div>
                <div className="signature-label">師範</div>
              </div>
            </div>
          </div>
        )

      case 'template13':
        return (
          <div className={`${templateClass} certificate-template-13`}>
            <div className="wave-top"></div>
            <div className="wave-bottom"></div>
            <div className="cherry-blossom">🌸</div>
            <div className="maple-leaf">🍁</div>
            <div className="origami-crane"></div>
            <div className="title">認定証</div>
            <div className="subtitle">Certificate of Four Seasons</div>
            <div className="certification-name">{data.certificationName || 'サンプル資格認定'}</div>
            <div className="recipient-name">{data.recipientName || 'サンプル太郎'}</div>
            <div className="achievement">
              四季の移ろいとともに歩み<br />
              折り紙のような美しい技能を習得されました
            </div>
            <div className="date">{data.date}</div>
            <div className="signature-section">
              <div className="signature">
                <div className="signature-line"></div>
                <div className="signature-label">認定者</div>
              </div>
            </div>
          </div>
        )

      default:
        return <div>テンプレートが見つかりません</div>
    }
  }

  return (
    <div className="certificate-preview">
      <div className="preview-header">
        <h2>プレビュー</h2>
        <button 
          onClick={downloadPDF}
          className="download-btn"
          disabled={!data.recipientName.trim()}
        >
          📄 PDFダウンロード
        </button>
      </div>
      
      <div className="preview-container">
        <div 
          ref={certificateRef} 
          className="certificate-wrapper"
        >
          {renderTemplate()}
        </div>
      </div>
      
      <div className="preview-info">
        💡 認定者名を入力して、お好みのテンプレートを選択してください
      </div>
    </div>
  )
}

export default CertificatePreview