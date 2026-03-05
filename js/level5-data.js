const LEVEL5_DATA = {
    id: 5,
    title: "データインテグリティ",
    icon: "🔒",
    description: "データインテグリティの原則と実務を理解する",
    modules: [
        {
            id: 501,
            title: "ALCOA+原則の理解",
            duration: "20分",
            content: `
                <h2>データインテグリティとは</h2>
                <p>データインテグリティ（Data Integrity）とは、データのライフサイクル全体を通じて、データが完全で、一貫性があり、正確であることを保証する概念です。製薬業界では、データインテグリティは品質の基盤であり、患者安全に直接関わる最重要課題の一つです。</p>
                <p>近年、FDAやMHRA、WHOなどの規制当局はデータインテグリティ違反に対する取り締まりを強化しており、Warning LetterやImport Alertの主要な要因となっています。</p>
                <p>データインテグリティを確保するための基本原則として、ALCOA+（アルコアプラス）が広く知られています。</p>

                <h2>ALCOA原則</h2>
                <table>
                    <thead>
                        <tr><th>頭文字</th><th>原則</th><th>英語</th><th>意味</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>A</td><td>帰属性</td><td>Attributable</td><td>誰が、いつ、そのデータを記録/変更したかが特定できること</td></tr>
                        <tr><td>L</td><td>判読性</td><td>Legible</td><td>データが読みやすく、永続的に記録されていること</td></tr>
                        <tr><td>C</td><td>同時性</td><td>Contemporaneous</td><td>データが活動実施時にリアルタイムで記録されていること</td></tr>
                        <tr><td>O</td><td>原本性</td><td>Original</td><td>オリジナルの記録（またはTrue Copy）であること</td></tr>
                        <tr><td>A</td><td>正確性</td><td>Accurate</td><td>データが正確で、エラー、編集なしであること（修正は追跡可能）</td></tr>
                    </tbody>
                </table>

                <h2>「+」の追加原則</h2>
                <table>
                    <thead>
                        <tr><th>原則</th><th>英語</th><th>意味</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>完全性</td><td>Complete</td><td>全てのデータが欠落なく記録されていること（都合の悪いデータの削除がないこと）</td></tr>
                        <tr><td>一貫性</td><td>Consistent</td><td>データの記録と報告に一貫性があること（日付順、論理的整合性）</td></tr>
                        <tr><td>永続性</td><td>Enduring</td><td>保存期間全体を通じてデータが維持されること</td></tr>
                        <tr><td>可用性</td><td>Available</td><td>必要な時にデータにアクセスできること</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 ポイント</div>
                    <p>ALCOA+はデータインテグリティの「チェックリスト」として活用できます。システム設計時、運用時、監査時にALCOA+の各項目を確認することで、データインテグリティの状態を評価できます。</p>
                </div>

                <h2>コンピューターシステムにおけるALCOA+の適用</h2>
                <table>
                    <thead>
                        <tr><th>ALCOA+原則</th><th>システムでの対応</th><th>技術的手段</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Attributable</td><td>操作者の特定</td><td>個人IDによるログイン、監査証跡</td></tr>
                        <tr><td>Legible</td><td>データの可読性確保</td><td>適切な表示/印刷機能、フォーマット管理</td></tr>
                        <tr><td>Contemporaneous</td><td>リアルタイム記録</td><td>自動タイムスタンプ、NTPサーバー同期</td></tr>
                        <tr><td>Original</td><td>原本の保持</td><td>電子記録の保護、True Copyの定義</td></tr>
                        <tr><td>Accurate</td><td>データの正確性</td><td>入力検証、計算ロジックのバリデーション</td></tr>
                        <tr><td>Complete</td><td>データの完全性</td><td>必須項目チェック、削除防止</td></tr>
                        <tr><td>Consistent</td><td>データの一貫性</td><td>バージョン管理、論理チェック</td></tr>
                        <tr><td>Enduring</td><td>長期保存</td><td>アーカイブ、媒体管理、移行計画</td></tr>
                        <tr><td>Available</td><td>データの可用性</td><td>バックアップ、冗長化、DR計画</td></tr>
                    </tbody>
                </table>

                <div class="info-box danger">
                    <div class="info-box-title">🚨 データインテグリティ違反の典型例</div>
                    <p>共有アカウントの使用（Attributable違反）、試験結果の事後修正（Contemporaneous違反）、不合格データの削除（Complete違反）、監査証跡の無効化（Attributable/Accurate違反）は、規制当局が最も厳しく取り締まるデータインテグリティ違反です。</p>
                </div>
            `,
            quiz: [
                {
                    id: "q501_1",
                    type: "choice",
                    question: "ALCOAの「C」が表す原則はどれですか？",
                    options: [
                        "Complete（完全性）",
                        "Consistent（一貫性）",
                        "Contemporaneous（同時性）",
                        "Correct（正当性）"
                    ],
                    answer: 2,
                    explanation: "ALCOAの「C」はContemporaneous（同時性）を表します。データが活動実施時にリアルタイムで記録されていることを意味します。CompleteとConsistentは「+」の追加原則です。"
                },
                {
                    id: "q501_2",
                    type: "choice",
                    question: "ALCOA+の「+」に含まれる原則の正しい組み合わせはどれですか？",
                    options: [
                        "Complete, Correct, Enduring, Available",
                        "Complete, Consistent, Enduring, Available",
                        "Correct, Consistent, Efficient, Available",
                        "Complete, Consistent, Efficient, Accessible"
                    ],
                    answer: 1,
                    explanation: "ALCOA+の「+」はComplete（完全性）、Consistent（一貫性）、Enduring（永続性）、Available（可用性）の4つです。"
                },
                {
                    id: "q501_3",
                    type: "choice",
                    question: "共有アカウントの使用はALCOA+のどの原則に違反しますか？",
                    options: [
                        "Legible（判読性）",
                        "Attributable（帰属性）",
                        "Accurate（正確性）",
                        "Enduring（永続性）"
                    ],
                    answer: 1,
                    explanation: "共有アカウントの使用はAttributable（帰属性）原則に違反します。誰がデータを記録/変更したかを特定できなくなるためです。"
                },
                {
                    id: "q501_4",
                    type: "choice",
                    question: "Contemporaneous（同時性）をシステムで確保するための技術的手段はどれですか？",
                    options: [
                        "データの暗号化",
                        "自動タイムスタンプとNTPサーバー同期",
                        "バックアップの自動実行",
                        "アクセス権限の管理"
                    ],
                    answer: 1,
                    explanation: "Contemporaneous（同時性）を確保するには、自動タイムスタンプとNTPサーバーによる時刻同期が重要です。データがリアルタイムで記録されることを保証します。"
                },
                {
                    id: "q501_5",
                    type: "fill",
                    question: "ALCOAの「A（最初のA）」の英語を入力してください。",
                    answer: "Attributable",
                    explanation: "ALCOAの最初の「A」はAttributable（帰属性）です。誰が、いつ、データを記録/変更したかが特定できることを意味します。"
                }
            ]
        },
        {
            id: 502,
            title: "データインテグリティリスクアセスメント",
            duration: "15分",
            content: `
                <h2>データインテグリティリスクアセスメントの概要</h2>
                <p>データインテグリティリスクアセスメント（DIRA）は、データライフサイクルの各段階におけるデータインテグリティリスクを特定・評価し、適切な対策を講じるための体系的なプロセスです。</p>
                <p>DIRAはシステムバリデーションの一部として、またはデータインテグリティプログラムの一環として実施されます。FDAやMHRAのガイダンスでも、データインテグリティのリスクベースアプローチが推奨されています。</p>

                <h2>リスク特定</h2>
                <p>データインテグリティリスクは、以下の観点から特定します。</p>
                <table>
                    <thead>
                        <tr><th>リスク観点</th><th>具体的なリスク例</th><th>影響</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>データの生成</td><td>手入力ミス、不正なデータ生成</td><td>正確性の損失</td></tr>
                        <tr><td>データの処理</td><td>計算ロジックの誤り、不正なデータ変換</td><td>データの改変</td></tr>
                        <tr><td>データの保存</td><td>データの損失、不正な削除</td><td>完全性の損失</td></tr>
                        <tr><td>データのレビュー</td><td>監査証跡の未レビュー、異常の見逃し</td><td>検出の遅れ</td></tr>
                        <tr><td>データの報告</td><td>選択的な報告、不完全な報告</td><td>意思決定の誤り</td></tr>
                        <tr><td>人的要因</td><td>教育不足、動機・プレッシャー</td><td>意図的/非意図的な違反</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 ポイント</div>
                    <p>データインテグリティリスクは「技術的リスク」と「人的リスク」の両面から評価する必要があります。システムの技術的対策だけでなく、組織文化や教育訓練も重要な要素です。</p>
                </div>

                <h2>評価方法</h2>
                <h3>データフローマッピング</h3>
                <p>データの生成から最終報告までのフロー（データライフサイクル）を可視化し、各ステップでのリスクを特定します。</p>
                <ul>
                    <li>データの生成ポイント（手入力、自動取得、外部連携）</li>
                    <li>データの処理ステップ（計算、変換、集約）</li>
                    <li>データの保存場所（DB、ファイルサーバー、紙）</li>
                    <li>データのレビューポイント（承認、ダブルチェック）</li>
                    <li>データの最終利用（報告書、申請資料）</li>
                </ul>

                <h3>リスク評価マトリクス</h3>
                <table>
                    <thead>
                        <tr><th>評価項目</th><th>低（1）</th><th>中（2）</th><th>高（3）</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>GxPへの影響</td><td>間接的な影響のみ</td><td>データ品質に影響</td><td>患者安全に直接影響</td></tr>
                        <tr><td>発生可能性</td><td>技術的に困難</td><td>可能だが手間がかかる</td><td>容易に発生しうる</td></tr>
                        <tr><td>検出可能性</td><td>自動検出可能</td><td>レビューで検出可能</td><td>検出が困難</td></tr>
                    </tbody>
                </table>

                <h2>対策立案</h2>
                <p>リスク評価の結果に基づき、以下の対策を組み合わせてリスクを低減します。</p>
                <table>
                    <thead>
                        <tr><th>対策カテゴリ</th><th>具体例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>技術的対策</td><td>アクセス制御、監査証跡、入力検証、暗号化</td></tr>
                        <tr><td>手続的対策</td><td>SOP整備、ダブルチェック、定期レビュー</td></tr>
                        <tr><td>組織的対策</td><td>教育訓練、データインテグリティ文化の醸成、内部通報制度</td></tr>
                    </tbody>
                </table>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ 注意</div>
                    <p>データインテグリティリスクアセスメントは「一度やって終わり」ではありません。新システム導入時、システム変更時、規制環境の変化時、インシデント発生時に見直しが必要です。</p>
                </div>
            `,
            quiz: [
                {
                    id: "q502_1",
                    type: "choice",
                    question: "データインテグリティリスクアセスメントで考慮すべき観点として正しくないものはどれですか？",
                    options: [
                        "データの生成と処理のリスク",
                        "人的要因（教育不足、プレッシャー）",
                        "システムの外観デザイン",
                        "データの保存と報告のリスク"
                    ],
                    answer: 2,
                    explanation: "データインテグリティリスクアセスメントではデータの生成、処理、保存、レビュー、報告、人的要因を考慮します。システムの外観デザインはデータインテグリティリスクとは関係ありません。"
                },
                {
                    id: "q502_2",
                    type: "choice",
                    question: "データフローマッピングの目的はどれですか？",
                    options: [
                        "ネットワーク構成図を作成する",
                        "データの生成から最終報告までのフローを可視化してリスクを特定する",
                        "データベースの物理設計を行う",
                        "システムの応答速度を測定する"
                    ],
                    answer: 1,
                    explanation: "データフローマッピングはデータの生成から最終報告までのフロー（データライフサイクル）を可視化し、各ステップでのリスクを特定するための手法です。"
                },
                {
                    id: "q502_3",
                    type: "choice",
                    question: "データインテグリティ対策のカテゴリとして正しい組み合わせはどれですか？",
                    options: [
                        "技術的対策・手続的対策・組織的対策",
                        "ハードウェア対策・ソフトウェア対策・ネットワーク対策",
                        "予防対策・検出対策・修正対策",
                        "物理的対策・論理的対策・管理的対策"
                    ],
                    answer: 0,
                    explanation: "データインテグリティ対策は技術的対策（アクセス制御等）、手続的対策（SOP整備等）、組織的対策（教育訓練等）の3カテゴリに分類されます。"
                },
                {
                    id: "q502_4",
                    type: "choice",
                    question: "データインテグリティリスクアセスメントの見直しが必要な場面として正しくないものはどれですか？",
                    options: [
                        "新システム導入時",
                        "データインテグリティインシデント発生時",
                        "社員旅行の計画時",
                        "規制環境の変化時"
                    ],
                    answer: 2,
                    explanation: "データインテグリティリスクアセスメントは新システム導入、システム変更、規制変化、インシデント発生時に見直しが必要です。社員旅行の計画は関係ありません。"
                },
                {
                    id: "q502_5",
                    type: "fill",
                    question: "データインテグリティリスクアセスメントの英語略称を入力してください。（英大文字4文字）",
                    answer: "DIRA",
                    explanation: "DIRAはData Integrity Risk Assessment（データインテグリティリスクアセスメント）の略です。"
                }
            ]
        },
        {
            id: 503,
            title: "監査証跡とアクセス管理",
            duration: "20分",
            content: `
                <h2>監査証跡（Audit Trail）の概要</h2>
                <p>監査証跡（Audit Trail）は、データの作成・変更・削除に関する全ての操作を時系列で自動的に記録する仕組みです。データインテグリティの中核をなす技術的管理策であり、21 CFR Part 11、EU GMP Annex 11のいずれにおいても必須の要件です。</p>
                <p>監査証跡の目的は、データのライフサイクルを通じて「誰が」「いつ」「何を」「なぜ」変更したかを追跡可能にすることです。</p>

                <h2>監査証跡の要件</h2>
                <table>
                    <thead>
                        <tr><th>要件</th><th>説明</th><th>規制根拠</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>自動記録</td><td>手動入力ではなくシステムが自動的に記録する</td><td>Part 11 §11.10(e)</td></tr>
                        <tr><td>変更前後の値</td><td>変更前の値と変更後の値の両方を記録</td><td>Annex 11 Clause 9</td></tr>
                        <tr><td>タイムスタンプ</td><td>操作の日時を正確に記録する</td><td>Part 11, Annex 11</td></tr>
                        <tr><td>操作者の特定</td><td>操作を実行したユーザーを特定する</td><td>Part 11, Annex 11</td></tr>
                        <tr><td>変更理由</td><td>データ変更の理由を記録する</td><td>Annex 11 Clause 9</td></tr>
                        <tr><td>改ざん防止</td><td>監査証跡自体の変更・削除ができないこと</td><td>Part 11 §11.10(e)</td></tr>
                        <tr><td>独立した保存</td><td>データとは独立に監査証跡を保存する</td><td>ベストプラクティス</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 ポイント</div>
                    <p>監査証跡は「記録するだけ」では不十分です。定期的なレビューが必要です。記録された監査証跡を確認し、異常なパターン（深夜の大量変更、同一データの繰り返し修正等）を検出する運用プロセスを確立しましょう。</p>
                </div>

                <h2>アクセス管理</h2>
                <h3>ロールベースアクセス制御（RBAC）</h3>
                <p>RBAC（Role-Based Access Control）は、ユーザーの役割に基づいてシステムへのアクセス権限を管理する手法です。CSVにおける標準的なアクセス管理方式です。</p>
                <table>
                    <thead>
                        <tr><th>ロール例</th><th>権限例</th><th>対象者</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>System Administrator</td><td>ユーザー管理、システム設定、監査証跡閲覧</td><td>IT管理者</td></tr>
                        <tr><td>Data Entry</td><td>データ入力、参照</td><td>一般ユーザー</td></tr>
                        <tr><td>Reviewer</td><td>データ参照、レビュー承認</td><td>上長/品質担当</td></tr>
                        <tr><td>Report Viewer</td><td>レポート参照のみ</td><td>管理職、監査人</td></tr>
                    </tbody>
                </table>

                <h3>アクセス管理の原則</h3>
                <ul>
                    <li><strong>最小権限の原則</strong>：業務に必要な最小限の権限のみを付与する</li>
                    <li><strong>職務分掌</strong>：データ入力者と承認者を分離する（自己承認の防止）</li>
                    <li><strong>個人IDの使用</strong>：共有アカウントは禁止し、個人IDを使用する</li>
                    <li><strong>定期的な権限レビュー</strong>：異動・退職者のアカウント管理</li>
                </ul>

                <h2>監査証跡のレビュー方法</h2>
                <table>
                    <thead>
                        <tr><th>レビュー種別</th><th>頻度</th><th>確認内容</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>ルーチンレビュー</td><td>日常/週次</td><td>通常業務の監査証跡の確認、異常パターンの検出</td></tr>
                        <tr><td>定期レビュー</td><td>月次/四半期</td><td>アクセス権限の妥当性、監査証跡の傾向分析</td></tr>
                        <tr><td>For Causeレビュー</td><td>イベント発生時</td><td>インシデント発生時の詳細調査</td></tr>
                    </tbody>
                </table>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ 注意</div>
                    <p>監査証跡のレビューはしばしば形骸化します。「全件レビュー」が現実的でない場合は、リスクベースのアプローチ（高リスクデータの重点レビュー、異常パターン検出の自動化等）を採用し、効率的かつ効果的なレビューを実現してください。</p>
                </div>
            `,
            quiz: [
                {
                    id: "q503_1",
                    type: "choice",
                    question: "監査証跡に記録されるべき情報として必須でないものはどれですか？",
                    options: [
                        "変更前後の値",
                        "操作者のユーザーID",
                        "操作者の個人的メモ",
                        "操作の日時（タイムスタンプ）"
                    ],
                    answer: 2,
                    explanation: "監査証跡には変更前後の値、操作者ID、タイムスタンプ、変更理由が記録されるべきです。操作者の個人的メモは監査証跡の必須要素ではありません。"
                },
                {
                    id: "q503_2",
                    type: "choice",
                    question: "RBACの正式名称として正しいものはどれですか？",
                    options: [
                        "Risk-Based Access Control",
                        "Role-Based Access Control",
                        "Record-Based Access Control",
                        "Remote-Based Access Control"
                    ],
                    answer: 1,
                    explanation: "RBACはRole-Based Access Control（ロールベースアクセス制御）の略です。ユーザーの役割に基づいてアクセス権限を管理する手法です。"
                },
                {
                    id: "q503_3",
                    type: "choice",
                    question: "アクセス管理の原則として正しくないものはどれですか？",
                    options: [
                        "最小権限の原則",
                        "職務分掌（入力者と承認者の分離）",
                        "全員に管理者権限を付与する",
                        "個人IDの使用（共有アカウント禁止）"
                    ],
                    answer: 2,
                    explanation: "全員に管理者権限を付与することは最小権限の原則に反し、データインテグリティリスクを大幅に増大させます。適切なアクセス管理の原則ではありません。"
                },
                {
                    id: "q503_4",
                    type: "choice",
                    question: "監査証跡のFor Causeレビューはどのような場面で実施しますか？",
                    options: [
                        "毎月の定例会議で",
                        "インシデント発生時の詳細調査として",
                        "新入社員が入社した時に",
                        "年に1回の内部監査時のみ"
                    ],
                    answer: 1,
                    explanation: "For Causeレビューは、インシデント発生時やデータインテグリティに関する疑義が生じた際に、特定の事象の詳細調査として実施します。"
                },
                {
                    id: "q503_5",
                    type: "fill",
                    question: "監査証跡の英語を入力してください。（2語）",
                    answer: "Audit Trail",
                    explanation: "Audit Trail（監査証跡）は、データの作成・変更・削除に関する全ての操作を時系列で自動的に記録する仕組みです。"
                }
            ]
        },
        {
            id: 504,
            title: "データインテグリティの実務対応",
            duration: "15分",
            content: `
                <h2>データインテグリティ文化の醸成</h2>
                <p>データインテグリティの確保は技術的対策だけでは不十分です。組織全体で「データの信頼性を最優先する」という文化を醸成することが不可欠です。規制当局の査察においても、組織文化や経営層のコミットメントが重要な評価ポイントとなっています。</p>
                <p>データインテグリティ文化を構成する要素は以下のとおりです。</p>
                <ul>
                    <li><strong>経営層のコミットメント</strong>：トップダウンでのデータインテグリティ方針の明示</li>
                    <li><strong>オープンな報告文化</strong>：問題を隠さず報告できる環境</li>
                    <li><strong>適切なリソース配分</strong>：データインテグリティ確保のための十分な人員・予算</li>
                    <li><strong>KPIとモニタリング</strong>：データインテグリティ指標の継続的監視</li>
                </ul>

                <div class="info-box tip">
                    <div class="info-box-title">💡 ポイント</div>
                    <p>MHRA（英国医薬品・医療製品規制庁）は「データインテグリティの問題の根本原因は、多くの場合、技術ではなく文化にある」と指摘しています。システム対策と並行して組織文化の改善に取り組むことが重要です。</p>
                </div>

                <h2>SOP（標準作業手順書）の整備</h2>
                <p>データインテグリティに関連するSOPの整備は、実務対応の基盤です。</p>
                <table>
                    <thead>
                        <tr><th>SOP種別</th><th>記載内容</th><th>対象者</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>データインテグリティ方針</td><td>組織のDI方針、ALCOA+原則、責任体制</td><td>全社員</td></tr>
                        <tr><td>電子記録管理</td><td>電子記録の作成・保存・アーカイブ手順</td><td>システムユーザー</td></tr>
                        <tr><td>監査証跡レビュー</td><td>レビューの頻度・方法・記録方法</td><td>品質部門・管理者</td></tr>
                        <tr><td>アクセス管理</td><td>アカウント管理、権限付与/変更手順</td><td>IT部門・管理者</td></tr>
                        <tr><td>データ修正・変更</td><td>データ修正時の承認プロセス・記録方法</td><td>システムユーザー</td></tr>
                        <tr><td>バックアップ・復元</td><td>バックアップ頻度・復元テスト手順</td><td>IT部門</td></tr>
                    </tbody>
                </table>

                <h2>規制当局による指摘事例と対応</h2>
                <table>
                    <thead>
                        <tr><th>指摘事例</th><th>問題点</th><th>是正対応</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>共有アカウントの使用</td><td>操作者の特定不能（Attributable違反）</td><td>個人ID付与、共有アカウント廃止</td></tr>
                        <tr><td>監査証跡の無効化</td><td>データ変更の追跡不能</td><td>監査証跡の常時有効化、管理者権限の制限</td></tr>
                        <tr><td>不合格データの削除</td><td>完全性の損失（Complete違反）</td><td>データ削除権限の制限、削除時の承認プロセス</td></tr>
                        <tr><td>試験の再実施・選択報告</td><td>OOS結果の隠蔽</td><td>全試験結果の記録義務化、OOS調査手順の整備</td></tr>
                        <tr><td>システム時刻の操作</td><td>タイムスタンプの信頼性喪失</td><td>NTPサーバー同期、時刻変更権限の制限</td></tr>
                    </tbody>
                </table>

                <div class="info-box danger">
                    <div class="info-box-title">🚨 重大な指摘につながるパターン</div>
                    <p>以下のパターンは規制当局が特に厳しく指摘する事項です：(1) 経営層がデータインテグリティ問題を認識しながら放置、(2) 組織的なデータ改ざん、(3) 査察時の情報隠蔽。これらは単なる手続き不備ではなく、コンプライアンスの根本的な欠陥として扱われ、Warning LetterやConsent Decreeにつながります。</p>
                </div>

                <h2>継続的改善</h2>
                <p>データインテグリティは「完了」のない継続的な取り組みです。</p>
                <ul>
                    <li><strong>定期的な自己査察</strong>：DIプログラムの有効性を定期的に評価</li>
                    <li><strong>メトリクスの活用</strong>：DI関連の逸脱件数、監査証跡の異常検出件数等</li>
                    <li><strong>教育訓練の更新</strong>：規制動向や社内事例を踏まえた教育内容の見直し</li>
                    <li><strong>テクノロジーの活用</strong>：AI/ML活用による異常検出の自動化</li>
                </ul>
            `,
            quiz: [
                {
                    id: "q504_1",
                    type: "choice",
                    question: "MHRAが指摘するデータインテグリティ問題の根本原因として最も多いものはどれですか？",
                    options: [
                        "最新のシステムを使用していないこと",
                        "データインテグリティに関する技術ではなく組織文化の問題",
                        "ITインフラの老朽化",
                        "規制要件の多さ"
                    ],
                    answer: 1,
                    explanation: "MHRAは「データインテグリティの問題の根本原因は、多くの場合、技術ではなく文化にある」と指摘しています。組織文化の改善が最も重要です。"
                },
                {
                    id: "q504_2",
                    type: "choice",
                    question: "データインテグリティ文化の醸成に必要な要素として正しくないものはどれですか？",
                    options: [
                        "経営層のコミットメント",
                        "問題を報告しにくいプレッシャーのある環境",
                        "適切なリソース配分",
                        "KPIとモニタリング"
                    ],
                    answer: 1,
                    explanation: "問題を報告しにくい環境はデータインテグリティ文化を損ないます。オープンな報告文化（問題を隠さず報告できる環境）を醸成することが重要です。"
                },
                {
                    id: "q504_3",
                    type: "choice",
                    question: "共有アカウント使用が指摘された場合の是正対応として正しいものはどれですか？",
                    options: [
                        "共有アカウントのパスワードを頻繁に変更する",
                        "共有アカウントを廃止し個人IDを付与する",
                        "共有アカウントの使用ログを手書きで記録する",
                        "共有アカウントの使用時間を制限する"
                    ],
                    answer: 1,
                    explanation: "共有アカウント使用の是正対応は、共有アカウントを廃止し個人IDを付与することです。パスワード変更や使用制限では根本的な解決になりません。"
                },
                {
                    id: "q504_4",
                    type: "choice",
                    question: "データインテグリティに関するSOPとして必要でないものはどれですか？",
                    options: [
                        "電子記録管理SOP",
                        "監査証跡レビューSOP",
                        "社員旅行計画SOP",
                        "データ修正・変更SOP"
                    ],
                    answer: 2,
                    explanation: "社員旅行計画はデータインテグリティと関係ありません。電子記録管理、監査証跡レビュー、データ修正・変更等のSOPが必要です。"
                },
                {
                    id: "q504_5",
                    type: "fill",
                    question: "OOS（規格外結果）の英語フルスペルを入力してください。（3語、ハイフンなし）",
                    answer: "Out of Specification",
                    explanation: "OOSはOut of Specification（規格外結果）の略です。試験結果が規格に適合しない場合の調査手順の整備が重要です。"
                }
            ]
        }
    ]
};
