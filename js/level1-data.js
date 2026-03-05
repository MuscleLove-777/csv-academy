const LEVEL1_DATA = {
    id: 1,
    title: "CSV入門",
    icon: "📚",
    description: "CSVの基本概念、品質システム、GxP環境、規制の背景を理解する",
    modules: [
        {
            id: 101,
            title: "CSVとは何か",
            duration: "15分",
            content: `
<h2>コンピュータシステムバリデーション（CSV）とは</h2>
<p><strong>CSV（Computer System Validation）</strong>とは、コンピュータ化システムが意図した用途に適合し、一貫して正確な結果を生み出すことを<strong>文書化された証拠</strong>によって保証するプロセスです。</p>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
バリデーションとは「検証」ではありません。システムが要件を満たしていることを、科学的根拠と文書をもって<strong>立証</strong>することです。
</div>

<h3>なぜCSVが必要なのか</h3>
<p>医薬品・医療機器の製造や品質管理において、コンピュータシステムは不可欠な存在です。これらのシステムに不具合があれば、<strong>患者の安全</strong>に直結するリスクが生じます。</p>
<ul>
<li><strong>製造記録の正確性</strong> - ロットの追跡や品質データの信頼性を確保</li>
<li><strong>規制遵守</strong> - FDA、EMA等の規制当局による要求事項への適合</li>
<li><strong>データインテグリティ</strong> - 電子記録の完全性と信頼性の保証</li>
<li><strong>患者安全</strong> - 最終的に患者に安全な製品を届けるための基盤</li>
</ul>

<h3>CSVの適用範囲</h3>
<table>
<thead><tr><th>システム種別</th><th>例</th><th>CSV必要性</th></tr></thead>
<tbody>
<tr><td>製造管理システム</td><td>MES、SCADA、PLC</td><td>必須</td></tr>
<tr><td>品質管理システム</td><td>LIMS、QMS</td><td>必須</td></tr>
<tr><td>文書管理システム</td><td>DMS、eDMS</td><td>必須</td></tr>
<tr><td>ERPシステム</td><td>SAP（GxP関連モジュール）</td><td>GxP機能に対して必須</td></tr>
<tr><td>一般業務システム</td><td>メール、社内ポータル</td><td>通常不要</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
ExcelスプレッドシートやAccessデータベースも、GxP業務で使用する場合はCSVの対象となります。「小規模だから不要」という考えは危険です。
</div>
`,
            quiz: [
                {
                    id: "q101_1",
                    type: "choice",
                    question: "CSVの主な目的として最も適切なものはどれですか？",
                    options: ["システムの開発コストを削減する", "コンピュータシステムが意図した用途に適合することを文書化された証拠で保証する", "ITインフラのセキュリティを強化する", "ソフトウェアのバグを全て排除する"],
                    answer: 1,
                    explanation: "CSVは、コンピュータ化システムが意図した用途に適合し、一貫して正確な結果を生み出すことを文書化された証拠によって保証するプロセスです。"
                },
                {
                    id: "q101_2",
                    type: "choice",
                    question: "以下のうち、通常CSVの対象とならないシステムはどれですか？",
                    options: ["LIMS（Laboratory Information Management System）", "社内メールシステム", "MES（Manufacturing Execution System）", "品質管理用のExcelスプレッドシート"],
                    answer: 1,
                    explanation: "一般業務システム（メール、社内ポータル等）は通常CSVの対象となりません。GxP業務に直接使用されないためです。"
                },
                {
                    id: "q101_3",
                    type: "choice",
                    question: "CSVが必要な最も根本的な理由はどれですか？",
                    options: ["規制当局の査察に備えるため", "システム開発の品質を向上させるため", "患者の安全を確保するため", "IT部門の業務を標準化するため"],
                    answer: 2,
                    explanation: "CSVの最終的な目的は患者安全の確保です。規制遵守やシステム品質の向上はその手段であり、根本的な理由は患者に安全な製品を届けることにあります。"
                }
            ]
        },
        {
            id: 102,
            title: "品質システムとCSV",
            duration: "15分",
            content: `
<h2>品質マネジメントシステム（QMS）におけるCSVの位置づけ</h2>
<p><strong>品質マネジメントシステム（QMS）</strong>は、製品の品質を体系的に管理するための仕組みです。CSVはQMSの重要な構成要素として、コンピュータ化システムの信頼性を支えています。</p>

<h3>QMSの基本要素とCSVの関係</h3>
<table>
<thead><tr><th>QMS要素</th><th>CSVとの関連</th></tr></thead>
<tbody>
<tr><td>文書管理</td><td>バリデーション文書の作成・承認・管理</td></tr>
<tr><td>変更管理</td><td>システム変更時の再バリデーション判断</td></tr>
<tr><td>逸脱管理</td><td>システム障害・不具合の記録と対応</td></tr>
<tr><td>教育訓練</td><td>システム利用者への適切なトレーニング</td></tr>
<tr><td>内部監査</td><td>CSV実施状況の定期的な確認</td></tr>
</tbody>
</table>

<h3>CSVライフサイクルアプローチ</h3>
<p>CSVは一度実施して終わりではなく、システムの<strong>ライフサイクル全体</strong>を通じて管理する必要があります。</p>
<ul>
<li><strong>企画段階</strong> - 要件定義、リスクアセスメント</li>
<li><strong>開発・構築段階</strong> - 設計、プログラミング、構成</li>
<li><strong>テスト段階</strong> - IQ、OQ、PQ</li>
<li><strong>運用段階</strong> - 変更管理、定期レビュー</li>
<li><strong>廃棄段階</strong> - データ移行、システム廃棄</li>
</ul>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
CSVはプロジェクトではなくプロセスです。システムが稼働している限り、継続的な管理が求められます。
</div>

<h3>PDCA サイクルとCSV</h3>
<p>CSVの活動はPDCAサイクルに沿って継続的に改善されるべきです。</p>
<ul>
<li><strong>Plan</strong> - バリデーション計画の策定</li>
<li><strong>Do</strong> - バリデーションの実施</li>
<li><strong>Check</strong> - 定期レビュー、監査</li>
<li><strong>Act</strong> - 改善措置の実施</li>
</ul>
`,
            quiz: [
                {
                    id: "q102_1",
                    type: "choice",
                    question: "CSVライフサイクルにおいて、システム運用段階で最も重要な活動はどれですか？",
                    options: ["要件定義の作成", "IQ/OQ/PQの実施", "変更管理と定期レビュー", "システムの初期設計"],
                    answer: 2,
                    explanation: "運用段階では、変更管理と定期レビューが最も重要です。システムの変更が適切に管理され、継続的にバリデートされた状態が維持されることが求められます。"
                },
                {
                    id: "q102_2",
                    type: "choice",
                    question: "QMSの要素のうち、システム変更時の再バリデーション判断に直接関連するものはどれですか？",
                    options: ["教育訓練", "変更管理", "内部監査", "文書管理"],
                    answer: 1,
                    explanation: "変更管理は、システムに変更が加えられた際にその影響を評価し、再バリデーションの要否を判断するプロセスです。"
                },
                {
                    id: "q102_3",
                    type: "choice",
                    question: "CSVについて正しい記述はどれですか？",
                    options: ["CSVはシステム導入時に一度だけ実施すればよい", "CSVはIT部門だけの責任で実施される", "CSVはシステムのライフサイクル全体を通じて管理される", "CSVはソフトウェアの開発工程のみを対象とする"],
                    answer: 2,
                    explanation: "CSVはプロジェクトではなくプロセスであり、企画から廃棄までのシステムライフサイクル全体を通じて継続的に管理される必要があります。"
                }
            ]
        },
        {
            id: 103,
            title: "GxP環境の理解",
            duration: "15分",
            content: `
<h2>GxPとは</h2>
<p><strong>GxP</strong>は、医薬品・医療機器・食品等の安全性と品質を確保するための規制要件の総称です。「x」には様々な分野を示す文字が入ります。</p>

<h3>主要なGxP規制</h3>
<table>
<thead><tr><th>略称</th><th>正式名称</th><th>対象分野</th></tr></thead>
<tbody>
<tr><td><strong>GMP</strong></td><td>Good Manufacturing Practice</td><td>製造管理・品質管理</td></tr>
<tr><td><strong>GLP</strong></td><td>Good Laboratory Practice</td><td>非臨床試験（安全性試験）</td></tr>
<tr><td><strong>GCP</strong></td><td>Good Clinical Practice</td><td>臨床試験</td></tr>
<tr><td><strong>GDP</strong></td><td>Good Distribution Practice</td><td>流通・物流管理</td></tr>
<tr><td><strong>GVP</strong></td><td>Good Vigilance Practice</td><td>安全性監視（ファーマコビジランス）</td></tr>
<tr><td><strong>GQP</strong></td><td>Good Quality Practice</td><td>品質管理（日本固有）</td></tr>
</tbody>
</table>

<h3>GxP環境におけるコンピュータシステムの役割</h3>
<p>現代のGxP環境では、ほぼ全ての業務プロセスにコンピュータシステムが関与しています。</p>
<ul>
<li><strong>GMP</strong> - 製造実行システム（MES）、バッチ記録システム、環境モニタリング</li>
<li><strong>GLP</strong> - LIMS、クロマトグラフィーデータシステム（CDS）</li>
<li><strong>GCP</strong> - EDC（電子データキャプチャ）、CTMS（臨床試験管理システム）</li>
<li><strong>GDP</strong> - 倉庫管理システム（WMS）、温度管理システム</li>
</ul>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
CSVの対象となるのは「GxP業務に使用されるシステム」です。同じシステムでも、GxP業務に使用される機能のみがバリデーション対象となる場合があります。
</div>

<h3>GxP対象システムの判断基準</h3>
<p>システムがCSVの対象となるかどうかは、以下の観点で判断します。</p>
<ul>
<li>そのシステムは<strong>GxP規制の対象となる業務</strong>に使用されるか？</li>
<li>そのシステムのデータは<strong>品質判定や出荷判定</strong>に使用されるか？</li>
<li>そのシステムの不具合は<strong>製品品質や患者安全</strong>に影響するか？</li>
<li>そのシステムは<strong>規制上の記録</strong>の作成・保管に使用されるか？</li>
</ul>
`,
            quiz: [
                {
                    id: "q103_1",
                    type: "choice",
                    question: "GLP（Good Laboratory Practice）が対象とする分野はどれですか？",
                    options: ["製造管理・品質管理", "臨床試験", "非臨床試験（安全性試験）", "流通・物流管理"],
                    answer: 2,
                    explanation: "GLPはGood Laboratory Practiceの略で、非臨床試験（安全性試験）を対象とする規制です。"
                },
                {
                    id: "q103_2",
                    type: "choice",
                    question: "GxP環境におけるCSVの対象システムの判断基準として、最も重要な観点はどれですか？",
                    options: ["システムの導入コスト", "システムの技術的な複雑さ", "GxP規制の対象となる業務に使用されるかどうか", "システムの利用者数"],
                    answer: 2,
                    explanation: "CSVの対象となるかどうかは、そのシステムがGxP規制の対象となる業務に使用されるかどうかが最も重要な判断基準です。"
                },
                {
                    id: "q103_3",
                    type: "choice",
                    question: "GMP環境で使用される代表的なシステムとして適切でないものはどれですか？",
                    options: ["MES（製造実行システム）", "EDC（電子データキャプチャ）", "環境モニタリングシステム", "バッチ記録システム"],
                    answer: 1,
                    explanation: "EDC（電子データキャプチャ）は臨床試験（GCP）で使用されるシステムです。GMP環境ではMES、バッチ記録システム、環境モニタリングシステムなどが代表的です。"
                }
            ]
        },
        {
            id: 104,
            title: "規制の背景と歴史",
            duration: "15分",
            content: `
<h2>CSV規制の歴史的背景</h2>
<p>CSVに関する規制は、コンピュータ技術の発展と、それに伴う品質問題やデータインテグリティ問題を契機に段階的に整備されてきました。</p>

<h3>CSV規制の変遷</h3>
<table>
<thead><tr><th>年代</th><th>出来事</th><th>影響</th></tr></thead>
<tbody>
<tr><td>1970年代</td><td>製薬業界でコンピュータ導入開始</td><td>バリデーションの概念が芽生え始める</td></tr>
<tr><td>1983年</td><td>FDAがGMPにコンピュータ関連要件を追加</td><td>コンピュータシステムのバリデーションが明文化</td></tr>
<tr><td>1997年</td><td>FDA 21 CFR Part 11発行</td><td>電子記録・電子署名の法的要件が確立</td></tr>
<tr><td>2001年</td><td>GAMP 4発行</td><td>業界標準のバリデーションフレームワーク</td></tr>
<tr><td>2003年</td><td>FDA Part 11 Scope and Application（ガイダンス）</td><td>リスクベースアプローチへの転換</td></tr>
<tr><td>2008年</td><td>GAMP 5発行</td><td>リスクベースアプローチの本格導入</td></tr>
<tr><td>2011年</td><td>EU Annex 11改訂</td><td>欧州でのコンピュータ化システム要件の強化</td></tr>
<tr><td>2018年</td><td>データインテグリティガイダンス各国で発行</td><td>ALCOA+原則の普及</td></tr>
<tr><td>2022年</td><td>GAMP 5 第2版発行</td><td>CSA（Computer Software Assurance）概念の取り込み</td></tr>
</tbody>
</table>

<h3>規制の転換点：リスクベースアプローチ</h3>
<p>初期のCSVは「全てのシステムに同じレベルのバリデーション」を求める傾向がありましたが、2003年のFDAガイダンス以降、<strong>リスクベースアプローチ</strong>が主流となりました。</p>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
リスクベースアプローチとは、システムのリスク（患者安全、製品品質、データインテグリティへの影響度）に応じてバリデーションの範囲と深さを決定する方法論です。高リスクのシステムには詳細なバリデーションを、低リスクのシステムには簡素化されたバリデーションを適用します。
</div>

<h3>最新のトレンド：CSAアプローチ</h3>
<p>近年、FDAは<strong>CSA（Computer Software Assurance）</strong>という新しいアプローチを提唱しています。</p>
<ul>
<li><strong>従来のCSV</strong> - 文書化重視、スクリプト化されたテスト中心</li>
<li><strong>CSA</strong> - 批判的思考（Critical Thinking）重視、非スクリプトテストの活用</li>
<li>CSAは「テストの質」を重視し、形式的な文書作成よりも<strong>実質的な品質保証</strong>を目指す</li>
</ul>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
CSAは従来のCSVを完全に置き換えるものではなく、既存の規制要件を満たしつつ、より効率的なアプローチを取ることを目的としています。移行には段階的な導入が推奨されます。
</div>
`,
            quiz: [
                {
                    id: "q104_1",
                    type: "choice",
                    question: "FDA 21 CFR Part 11が発行された年はいつですか？",
                    options: ["1983年", "1997年", "2003年", "2008年"],
                    answer: 1,
                    explanation: "FDA 21 CFR Part 11は1997年に発行されました。電子記録・電子署名の法的要件を確立した重要な規制です。"
                },
                {
                    id: "q104_2",
                    type: "choice",
                    question: "リスクベースアプローチの考え方として正しいものはどれですか？",
                    options: ["全てのシステムに同じレベルのバリデーションを実施する", "リスクが高いシステムのみバリデーションを実施する", "リスクに応じてバリデーションの範囲と深さを決定する", "規制当局が指定したシステムのみバリデーションを実施する"],
                    answer: 2,
                    explanation: "リスクベースアプローチでは、システムのリスク（患者安全、製品品質、データインテグリティへの影響度）に応じてバリデーションの範囲と深さを決定します。"
                },
                {
                    id: "q104_3",
                    type: "choice",
                    question: "CSA（Computer Software Assurance）の特徴として正しいものはどれですか？",
                    options: ["文書化を完全に不要とするアプローチ", "批判的思考を重視し、非スクリプトテストを活用する", "GxPシステム以外のシステムを対象とする", "テストを省略して効率化を図るアプローチ"],
                    answer: 1,
                    explanation: "CSAは批判的思考（Critical Thinking）を重視し、形式的な文書作成よりも実質的な品質保証を目指すアプローチです。非スクリプトテストの活用も特徴の一つです。"
                }
            ]
        }
    ]
};